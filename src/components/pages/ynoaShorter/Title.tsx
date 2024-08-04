import { cn } from '@/lib/utils';
import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'] });

export default function TitleShorter() {
  return (
    <div className="mt-24 mb-80 flex flex-col items-center gap-2 w-full relative">
      <h1 className={cn(oswald.className, 'flex flex-col items-center gap-2 text-7xl md:text-8xl font-bold')}>
        <span>
          ynoa
        </span>
        <span className="uppercase">
          services
        </span>
      </h1>
      <p className="text-muted-foreground text-xl md:text-2xl text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div
        style={{ backgroundImage: 'url(/bgHome.png)' }}
        className="blur-3xl absolute -z-50 m-auto -inset-1/2 w-full h-auto bg-center bg-cover md:top-8 top-4"
      />
    </div>
  );
}
