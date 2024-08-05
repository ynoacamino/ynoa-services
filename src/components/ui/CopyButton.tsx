import { Check, Clipboard } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        navigator.clipboard.writeText(text)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          });
      }}
      className="w-6 h-6 flex items-center justify-center border-input"
    >
      {copied ? <Check className="w-4" /> : <Clipboard className="w-4" />}
      <span className="sr-only">
        copy
      </span>
    </Button>
  );
}
