import { Button } from '@base-ui/react';
import { Dialog, type DialogRootProps } from '@base-ui/react/dialog';
import { ArrowLeft, X } from 'lucide-react';
import type { PropsWithChildren } from 'react';

type CertificationDialogProps = Pick<DialogRootProps, 'open' | 'onOpenChange'> &
  PropsWithChildren<{
    title?: string;
    description?: string;
    showBackButton?: boolean;
    onBack?: () => void;
  }>;

export function CertificationDialog(props: CertificationDialogProps) {
  const {
    open,
    onOpenChange,
    title,
    description,
    showBackButton,
    onBack,
    children,
  } = props;

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
            <div className='flex items-center gap-3'>
              {showBackButton && onBack && (
                <Button
                  type='button'
                  onClick={onBack}
                  className='p-2 rounded-xl border-2 border-transparent hover:border-border hover:bg-bg transition-all'
                  aria-label='Back to grid'
                >
                  <ArrowLeft className='w-5 h-5' />
                </Button>
              )}
              <div>
                <Dialog.Title className='font-mono text-xl font-bold'>
                  {title}
                </Dialog.Title>
                {description && (
                  <Dialog.Description className='text-sm text-text-muted mt-1'>
                    {description}
                  </Dialog.Description>
                )}
              </div>
            </div>
            <Dialog.Close className='p-2.5 rounded-xl border-2 border-transparent hover:border-border hover:bg-bg transition-all'>
              <X className='w-5 h-5' />
              <span className='sr-only'>Close</span>
            </Dialog.Close>
          </div>

          {/* Content */}
          <div className='overflow-auto max-h-[calc(85vh-100px)]'>
            {children}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
