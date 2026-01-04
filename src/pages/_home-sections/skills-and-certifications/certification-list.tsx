import { Maximize2 } from 'lucide-react';
import { useCallback, useState } from 'react';

import { type Certification, certifications } from '#/data/certifications';
import { CertificationDialog } from './certification-dialog';

export function CertificationList() {
  const [selectedUrl, setSelectedUrl] = useState<Certification['url'] | null>(
    null
  );

  const selectedCert = certifications.find((cert) => cert.url === selectedUrl);

  const handleSelect = useCallback((url: Certification['url']) => {
    setSelectedUrl(url);
  }, []);

  const handleClose = useCallback((open: boolean) => {
    if (!open) setSelectedUrl(null);
  }, []);

  return (
    <>
      <div className='flex flex-col'>
        {certifications.map((cert) => (
          <button
            type='button'
            key={cert.url}
            onClick={() => handleSelect(cert.url)}
            className='group py-5 first:pt-0 last:pb-0 flex items-start gap-3 text-left hover:bg-bg-alt/50 -mx-4 px-4 rounded-lg transition-colors cursor-pointer'
          >
            <div className='flex-1'>
              <span className='mono-label'>{cert.date}</span>
              <h3 className='font-mono text-base group-hover:text-primary transition-colors mt-1'>
                {cert.title}
              </h3>
              <span className='text-sm text-text-muted'>{cert.issuer}</span>
            </div>
            <Maximize2 className='w-4 h-4 text-text-muted group-hover:text-primary group-hover:scale-110 transition mt-1 shrink-0' />
          </button>
        ))}
      </div>

      <CertificationDialog
        open={!!selectedCert}
        onOpenChange={handleClose}
        title={selectedCert?.title}
        issuer={selectedCert?.issuer}
      >
        <iframe
          src={selectedCert?.url}
          title={selectedCert?.title}
          className='w-full h-[60vh] border border-border'
          allowFullScreen
        />
      </CertificationDialog>
    </>
  );
}
