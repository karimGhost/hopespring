import Link from 'next/link';
import { HandHeart } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg" aria-label="HopeSpring Home">
          <HandHeart className="h-6 w-6 text-primary" />
          <span className="font-headline">HopeSpring</span>
        </Link>
      </div>
    </header>
  );
}
