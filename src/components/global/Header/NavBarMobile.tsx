import Link from 'next/link';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NavBarMobile() {
  const PAGES = [
    { title: 'ynoaShorter', href: '/ynoaShorter' },
    { title: 'ynoaUoloader', href: '/ynoaUoloader' },
    { title: 'ynoaAlert', href: '/ynoaAlert' },
    { title: 'ynoaBot', href: '/ynoaBot' },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="flex md:hidden">
          <Menu className="w-6 h-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Pages</SheetTitle>
        </SheetHeader>
        <div className="w-full flex flex-col gap-16 items-center justify-center my-16 text-xl">
          {
            PAGES.map(({ href, title }) => (
              <Link
                key={href}
                href={href}
                className="text-muted-foreground hover:text-primary"
              >
                {title}
              </Link>
            ))
          }
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <div className="w-full flex flex-col items-center justify-center">
              <button type="submit">
                <X className="w-10 h-10" />
                <span className="sr-only">Close</span>
              </button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
