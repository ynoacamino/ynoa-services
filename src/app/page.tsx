import ServiceInfo from '@/components/pages/ynoaShorter/ServiceInfo';
import TitleShorter from '@/components/pages/ynoaShorter/Title';

export default function Home() {
  return (
    <main className="px-6 w-full max-w-7xl relative">
      <TitleShorter />
      <div className="flex flex-col my-20 gap-32 w-full">
        {
          Array.from({ length: 4 }).map(() => (
            <ServiceInfo key={crypto.randomUUID()} />
          ))
        }
      </div>
    </main>
  );
}
