import { cn } from '@/lib/utils';
import { Oswald } from 'next/font/google';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import LinksTable from '@/components/pages/ynoaShorter/LinksTable';
import CreateLinkForm from '@/components/pages/ynoaShorter/CreateLinkForm';
import { Link } from '@/types/link';
import { secureFetch } from '@/lib/secureConnection';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/app/api/auth/[...nextauth]/authConfig';

const oswald = Oswald({ subsets: ['latin'] });

const getPublicLinks = async () => {
  try {
    const links: Link[] = await secureFetch('http://localhost:8000/api/public/').then((res) => res.json());

    return links;
  } catch (error) {
    return [];
  }
};

const getPprivateLinks = async ({ UserID }: { UserID: string }) => {
  try {
    const links: Link[] = await secureFetch('http://localhost:8000/api/', {
      method: 'POST',
      body: JSON.stringify({
        UserID,
      }),
    }).then((res) => res.json());

    return links;
  } catch (error) {
    return [];
  }
};

export default async function ShortPage() {
  const publicLinks = await getPublicLinks();
  const session = await getServerSession(authConfig);

  let privateLinks: Link[] = [];

  if (session) {
    privateLinks = await getPprivateLinks({ UserID: session.user.id });
  }

  return (
    <main className="px-6 w-full max-w-7xl relative">
      <div className="mt-10 pt-32 mb-72 flex flex-col items-center gap-20 w-full relative">
        <h1 className={cn(oswald.className, 'flex flex-col items-center gap-2 text-7xl md:text-8xl font-bold')}>
          <span className="uppercase">
            Shorter
          </span>
        </h1>
        <CreateLinkForm />
        <div
          style={{ backgroundImage: 'url(/bgHome.png)' }}
          className="blur-3xl absolute -z-50 m-auto -inset-1/2 w-full h-auto bg-center bg-cover md:top-8 top-4"
        />
      </div>
      <div className="w-full flex flex-col gap-10 border border-muted-foreground rounded-md px-4 mb-10">
        <Accordion type="multiple" className="w-full">
          {
            session && (
              <AccordionItem value="item-1" className="border-muted-foreground">
                <AccordionTrigger>Your Private Links</AccordionTrigger>
                <AccordionContent className="flex justify-center">
                  <LinksTable links={privateLinks} />
                </AccordionContent>
              </AccordionItem>
            )
          }
          <AccordionItem value="item-2">
            <AccordionTrigger>Public Links</AccordionTrigger>
            <AccordionContent className="flex justify-center">
              <LinksTable links={publicLinks} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
