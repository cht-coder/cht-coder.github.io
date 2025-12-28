import { Dialog, type DialogRootProps } from '@base-ui/react/dialog';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Certification } from '#/data/certifications';

type CertificationDialogProps = Pick<DialogRootProps, 'open' | 'onOpenChange'> &
  Partial<Pick<Certification, 'title' | 'issuer'>> & { children: ReactNode };

export function CertificationDialog({
  open,
  onOpenChange,
  title,
  issuer,
  children,
}: CertificationDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className='fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-all duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0' />
        <Dialog.Popup
          className='fixed top-1/2 left-1/2 z-50 w-[95vw] max-w-4xl max-h-[85vh] -translate-x-1/2 -translate-y-1/2 
            bg-bg-alt border-2 border-border rounded-2xl overflow-hidden 
            shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)]
            transition-all duration-300 ease-out
            data-ending-style:scale-95 data-ending-style:opacity-0 
            data-starting-style:scale-95 data-starting-style:opacity-0'
        >
          {/* Header */}
          <div className='flex items-center justify-between p-5 border-b-2 border-border bg-bg/50'>
            <div>
              <Dialog.Title className='font-mono text-xl font-bold'>
                {title}
              </Dialog.Title>
              {issuer && (
                <Dialog.Description className='text-sm text-text-muted mt-1'>
                  {issuer}
                </Dialog.Description>
              )}
            </div>
            <Dialog.Close className='p-2.5 rounded-xl border-2 border-transparent hover:border-border hover:bg-bg transition-all'>
              <X className='w-5 h-5' />
              <span className='sr-only'>Close</span>
            </Dialog.Close>
          </div>

          {/* Content */}
          <div className='overflow-auto max-h-[calc(85vh-100px)] p-5'>
            {children}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
