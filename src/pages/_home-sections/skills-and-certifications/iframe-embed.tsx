import { LoaderPinwheelIcon } from 'lucide-react';
import { type IframeHTMLAttributes, useState } from 'react';

type IframeEmbedProps = IframeHTMLAttributes<HTMLIFrameElement> & {
  loadingElement?: React.ReactNode;
  containerClassName?: string;
};

export const IframeEmbed = (props: IframeEmbedProps) => {
  const {
    loadingElement,
    containerClassName = '',
    className = '',
    onLoad,
    ...iframeProps
  } = props;

  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  return (
    <div className={`relative size-full min-h-50 ${containerClassName}`}>
      {/* Loading Skeleton */}
      {isLoading &&
        (loadingElement ?? (
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 from-bg-alt from-0% via-bg via-50% to-bg-alt to-100% bg-linear-135 bg-size-[200%_200%] animate-pulse ease-in-out [animation-duration:2s] rounded-lg'>
            {/* <div className='size-10 border-border border-3 border-t-accent rounded-[50%] animate-spin [animate_duration:0.8s]' /> */}
            <LoaderPinwheelIcon className='size-10 animate-spin [animate_duration:0.8s]' />
            <span className='text-sm text-text-muted font-mono'>
              Loading...
            </span>
          </div>
        ))}
      <iframe
        {...iframeProps}
        className={`size-full border-none rounded-lg transition-opacity duration-300 ease-in-out ${isLoading ? 'iframe-embed-hidden' : ''} ${className}`}
        onLoad={handleLoad}
      />
    </div>
  );
};
