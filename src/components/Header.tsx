// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { LogoIcon, SunIcon, MoonIcon, MenuIcon, XIcon } from './Icons';

const navLinks = [
  { href: '/formats', label: 'Formats' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: theme === 'dark' ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderColor: 'var(--border-light)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <LogoIcon size={30} />
          <span className="text-[17px] font-bold" style={{ color: 'var(--text-primary)' }}>
            FileConvert<span className="gradient-text">Tool</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-[15px] font-medium transition-colors hover:text-[var(--brand-500)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-3 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }} aria-label="Toggle theme">
            {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }} aria-label="Toggle menu">
            {menuOpen ? <XIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t animate-fade-in" style={{ background: 'var(--card-bg)', borderColor: 'var(--border-light)', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-lg text-[15px] font-medium transition-colors hover:bg-[var(--bg-secondary)]" style={{ color: 'var(--text-secondary)' }}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
