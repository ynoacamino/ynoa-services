'use client';

import CopyButton from '@/components/ui/CopyButton';
import { Link } from '@/types/link';

export default function LinksTable({ links }: {
  links: Link[];
}) {
  return (
    <div className="w-full">
      <div className="flex gap-8 justify-between py-4 text-muted-foreground pr-3">
        <span className="w-full max-w-64 pl-8">
          Shorted Link
        </span>
        <span className="w-full max-w-lg overflow-hidden text-nowrap hidden md:flex">
          Original Link
        </span>
        <span className="w-full max-w-32 md:text-start text-end">
          Creator
        </span>
        <span className="min-w-24 hidden md:block text-end">
          Date
        </span>
      </div>
      {
        links?.map((link) => (
          <div key={crypto.randomUUID()} className="flex gap-8 justify-between border-t border-border py-4 pr-3">
            <div className="w-full max-w-64 overflow-hidden text-nowrap flex gap-3">
              <CopyButton text={link.ShortUrl} />
              <span className="flex-1">
                {link.ShortUrl}
              </span>
            </div>
            <span className="w-full max-w-lg overflow-hidden text-nowrap hidden md:flex">
              {link.OriginalUrl}
            </span>
            <span className="w-full max-w-32 md:text-start text-end">
              {link.UserID}
            </span>
            <span className="min-w-24 hidden md:block text-end">
              {link.UpdatedAt}
            </span>
          </div>
        ))
      }
    </div>
  );
}
