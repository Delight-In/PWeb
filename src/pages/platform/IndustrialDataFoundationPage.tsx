import React from 'react';
import { PlatformPageTemplate } from '../../components/PlatformPageTemplate';
import { PLATFORM_PAGES_DATA } from '../../data/platformPagesData';

interface IndustrialDataFoundationPageProps {
  onRequestDemo: () => void;
}

export const IndustrialDataFoundationPage: React.FC<IndustrialDataFoundationPageProps> = ({
  onRequestDemo,
}) => {
  const pageData = PLATFORM_PAGES_DATA['industrial-data-foundation'];

  return (
    <PlatformPageTemplate
      data={pageData}
      onRequestDemo={onRequestDemo}
    />
  );
};
