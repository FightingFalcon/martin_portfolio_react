import { useState } from 'react';
import { Dialog } from '@headlessui/react';

interface ExpandableImageProps {
  src: string;
  alt: string;
  thumbnailSize?: number;
  fullSizeWidth?: string;
  fullSizeHeight?: string;
}

export default function ExpandableImage({
  src,
  alt,
  thumbnailSize = 100,
  fullSizeWidth = '80vw',
  fullSizeHeight = '80vh',
}: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        width={thumbnailSize}
        height={thumbnailSize}
        className="object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => setIsOpen(true)}
      />
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto">
            <img
              src={src}
              alt={alt}
              className="object-contain rounded-md"
              style={{ width: fullSizeWidth, height: fullSizeHeight }}
              onClick={() => setIsOpen(false)}
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}