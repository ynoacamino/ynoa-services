import Link from 'next/link';

import { Oswald } from 'next/font/google';
import { cn } from '@/lib/utils';
import Auth from './Auth';
import NavBarMobile from './NavBarMobile';

const oswald = Oswald({ subsets: ['latin'] });

export default function Header() {
  const PAGES = [
    { title: 'ynoaShorter', href: '/ynoaShorter' },
    { title: 'ynoaUoloader', href: '/ynoaUoloader' },
    { title: 'ynoaAlert', href: '/ynoaAlert' },
    { title: 'ynoaBot', href: '/ynoaBot' },
  ];

  return (
    <header className="sticky top-0 z-50 py-3 px-6 flex w-full items-center justify-center bg-background/80 backdrop-blur-lg">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <Link href="/" className={cn(oswald.className, 'text-2xl')}>
          ynoacamino
        </Link>
        <nav className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {
              PAGES.map((page) => (
                <Link
                  key={page.title}
                  href={page.href}
                  className="text-muted-foreground hover:text-primary"
                >
                  {page.title}
                </Link>
              ))
            }
          </div>
          <NavBarMobile />
          <Auth />
        </nav>
      </div>
    </header>
  );
}
