import React from 'react';
import { PlatformPageTemplate } from '../../components/PlatformPageTemplate';
import { PLATFORM_PAGES_DATA } from '../../data/platformPagesData';

interface DataGovernancePageProps {
  onRequestDemo: () => void;
}

export const DataGovernancePage: React.FC<DataGovernancePageProps> = ({
  onRequestDemo,
}) => {
  const pageData = PLATFORM_PAGES_DATA['data-governance'];

  return (
    <PlatformPageTemplate
      data={pageData}
      onRequestDemo={onRequestDemo}
    />
  );
};
