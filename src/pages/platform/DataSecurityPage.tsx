import React from 'react';
import { PlatformPageTemplate } from '../../components/PlatformPageTemplate';
import { PLATFORM_PAGES_DATA } from '../../data/platformPagesData';

interface DataSecurityPageProps {
  onRequestDemo: () => void;
}

export const DataSecurityPage: React.FC<DataSecurityPageProps> = ({
  onRequestDemo,
}) => {
  const pageData = PLATFORM_PAGES_DATA['data-security'];

  return (
    <PlatformPageTemplate
      data={pageData}
      onRequestDemo={onRequestDemo}
    />
  );
};
