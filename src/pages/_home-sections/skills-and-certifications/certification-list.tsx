import { Button } from '@base-ui/react';
import { Maximize2 } from 'lucide-react';
import { useState } from 'react';

import {
  certifications,
  type GroupedCertificate,
  type GroupedCertificateItem,
  isGroupedCertification,
  type SingleCertificate,
} from '#/data/certifications';
import { CertificationDialog } from './certification-dialog';

type SelectedState =
  | { type: 'single'; cert: SingleCertificate }
  | {
      type: 'group';
      group: GroupedCertificate;
      selectedInGroup: GroupedCertificateItem | null;
    }
  | null;

export function CertificationList() {
  const [selected, setSelected] = useState<SelectedState>(null);

  const selectSingleHandler = (cert: SingleCertificate) =>
    setSelected({ type: 'single', cert });

  const selectGroupHandler = (group: GroupedCertificate) =>
    setSelected({ type: 'group', group, selectedInGroup: null });

  const selectInGroupHandler = (groupItem: GroupedCertificateItem) => {
    setSelected((prev) => {
      if (prev?.type === 'group')
        return { ...prev, selectedInGroup: groupItem };
      return prev;
    });
  };

  const backToGridHandler = () => {
    setSelected((prev) => {
      if (prev?.type === 'group') return { ...prev, selectedInGroup: null };
      return prev;
    });
  };

  const handleClose = () => setSelected(null);

  const groupedProps = getGroupedDialogProps(selected);

  return (
    <>
      <div className='flex flex-col'>
        {certifications.map((cert) => {
          const isGroup = isGroupedCertification(cert);

          return (
            <Button
              key={isGroup ? cert.title : cert.url}
              onClick={() =>
                isGroup ? selectGroupHandler(cert) : selectSingleHandler(cert)
              }
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
            </Button>
          );
        })}
      </div>

      {selected?.type === 'single' && (
        <CertificationDialog
          open
          onOpenChange={(open) => !open && handleClose()}
          title={selected.cert.title}
          description={selected.cert.issuer}
        >
          <iframe
            src={selected.cert.url}
            title={selected.cert.title}
            className='w-full h-[60vh] border border-border'
            allowFullScreen
          />
        </CertificationDialog>
      )}

      {selected?.type === 'group' && (
        <CertificationDialog
          open
          onOpenChange={(open) => !open && handleClose()}
          onBack={backToGridHandler}
          {...groupedProps}
        >
          {selected.selectedInGroup ? (
            <iframe
              src={selected.selectedInGroup.url}
              title={selected.selectedInGroup.title}
              className='w-full h-[60vh] border-none rounded-lg'
              allowFullScreen
            />
          ) : (
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-5'>
              {selected.group.items.map((item) => (
                <Button
                  key={item.url}
                  type='button'
                  onClick={() => selectInGroupHandler(item)}
                  className='group p-4 border-2 border-border-light rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-left'
                >
                  <span className='mono-label'>{item.date}</span>
                  <h4 className='font-mono text-sm font-bold mt-1 group-hover:text-primary transition-colors'>
                    {item.title}
                  </h4>
                </Button>
              ))}
            </div>
          )}
        </CertificationDialog>
      )}
    </>
  );
}

const getGroupedDialogProps = (selected: SelectedState) => {
  if (selected?.type !== 'group') return null;

  const { group, selectedInGroup } = selected;
  return {
    title: selectedInGroup ? selectedInGroup.title : group.title,
    description: selectedInGroup
      ? `${group.issuer} • ${selectedInGroup.date}`
      : group.issuer,
    showBackButton: !!selectedInGroup,
  };
};
