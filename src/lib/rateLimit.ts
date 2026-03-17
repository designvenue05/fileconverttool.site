// src/lib/rateLimit.ts

const STORAGE_KEY = 'fct_daily_conversions';
const PLAN_KEY = 'fct_user_plan';

interface DailyUsage {
  date: string;
  count: number;
}

function getToday(): string {
  return new Date().toISOString().split('T')[0];
}

export function getDailyUsage(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return 0;
    const data: DailyUsage = JSON.parse(raw);
    if (data.date !== getToday()) return 0;
    return data.count;
  } catch {
    return 0;
  }
}

export function incrementUsage(): void {
  if (typeof window === 'undefined') return;
  const today = getToday();
  const current = getDailyUsage();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: today, count: current + 1 }));
}

export function getUserPlan(): 'free' | 'pro' | 'business' {
  if (typeof window === 'undefined') return 'free';
  return (localStorage.getItem(PLAN_KEY) as any) || 'free';
}

export function canConvert(): { allowed: boolean; remaining: number } {
  const plan = getUserPlan();
  if (plan !== 'free') return { allowed: true, remaining: Infinity };
  const used = getDailyUsage();
  const limit = 10;
  return { allowed: used < limit, remaining: Math.max(0, limit - used) };
}
