// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-extrabold gradient-text mb-4">404</h1>
      <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Page Not Found</h2>
      <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-gradient inline-block !px-8">
        Back to Home
      </Link>
    </div>
  );
}
