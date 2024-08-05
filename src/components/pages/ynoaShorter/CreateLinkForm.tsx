import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { secureFetch } from '@/lib/secureConnection';

import { CreateLink } from '@/types/link';
import { revalidatePath } from 'next/cache';

const action = async (formData: FormData) => {
  'use server';

  const originalUrl = formData.get('newLink') as string;
  const shortUrl = formData.get('shortUrl') as string;

  if (!originalUrl) return;

  const link: CreateLink = {
    ShortUrl: shortUrl,
    OriginalUrl: originalUrl,
    Public: true,
  };

  secureFetch('http://localhost:8000/api/', {
    method: 'POST',
    body: JSON.stringify(link),
  })
    .finally(() => {
      revalidatePath('/ynoaShorter/short', 'page');
    });
};

export default function CreateLinkForm() {
  return (
    <form className="flex flex-col items-center w-full gap-8" action={action}>
      <Input type="text" className="w-full max-w-2xl text-center text-2xl py-6 border border-muted-foreground text-muted-foreground" name="originalUrl" />
      <Input type="text" className="w-full max-w-2xl text-center text-2xl py-6 border border-muted-foreground text-muted-foreground" name="shortUrl" />
      <Button type="submit" variant="outline" className="text-xl py-5 px-10">
        Create
      </Button>
    </form>
  );
}
