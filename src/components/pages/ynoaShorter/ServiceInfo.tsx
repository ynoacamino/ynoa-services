import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'] });

export default function ServiceInfo() {
  return (
    <section className="w-full grid md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h1 className={cn(oswald.className, 'uppercase font-bold text-6xl')}>
          Shorter
        </h1>
        <main className="flex flex-col gap-4">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </main>
        <footer className="w-full flex items-center gap-6">
          <Button className="w-full" variant="outline">
            Information
          </Button>
          <Button className="w-full" variant="outline">
            StartUp
          </Button>
        </footer>
      </div>
    </section>
  );
}
