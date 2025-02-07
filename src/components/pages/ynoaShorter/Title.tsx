import { cn } from '@/lib/utils';
import { Oswald } from 'next/font/google';
import Link from 'next/link';

const oswald = Oswald({ subsets: ['latin'] });

export default function TitleShorter() {
  return (
    <div className="mt-10 pt-32 mb-80 flex flex-col items-center gap-2 w-full relative">
      <h1 className={cn(oswald.className, 'flex flex-col items-center gap-2 text-7xl md:text-8xl font-bold')}>
        <span className="uppercase">
          Shorter
        </span>
      </h1>
      <p className="text-muted-foreground text-xl md:text-2xl text-center w-full max-w-5xl">
        Shorten and customize your links effortlessly with our easy-to-use tool, no account needed.
      </p>
      <Link href="/ynoaShorter/short" className="w-full max-w-72 text-xl py-5 mt-10 border border-muted-foreground flex items-center justify-center bg-background rounded-md">
        Create Short Link
      </Link>
      <div
        style={{ backgroundImage: 'url(/bgHome.png)' }}
        className="blur-3xl absolute -z-50 m-auto -inset-1/2 w-full h-auto bg-center bg-cover md:top-8 top-4"
      />
    </div>
  );
}
