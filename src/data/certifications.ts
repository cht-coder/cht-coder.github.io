type BaseCertifate = {
  title: string;
  issuer: string;
  date: string;
};

export type SingleCertificate = BaseCertifate & { url: string };

export type GroupedCertificateItem = {
  title: string;
  url: string;
  date: string;
};

export type GroupedCertificate = BaseCertifate & {
  type: 'group';
  items: GroupedCertificateItem[];
};

export type Certificate = SingleCertificate | GroupedCertificate;

export const isGroupedCertification = (cert: Certificate) => 'type' in cert;

export const certifications: ReadonlyArray<Certificate> = [
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2024',
    url: '/#aws',
  },
  {
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    date: 'Jul 2023',
    url: '/#google',
  },
  {
    title: 'Microsoft Certfications',
    issuer: 'Microsoft',
    date: 'Mar 2024',
    type: 'group',
    items: [
      { title: 'Azure Fundamentals', url: '/#az900', date: 'Jan 2024' },
      { title: 'Power Platform', url: '/#pl900', date: 'Mar 2024' },
    ],
  },
];
