import React from 'react';
import { PlatformPageTemplate } from '../../components/PlatformPageTemplate';
import { PLATFORM_PAGES_DATA } from '../../data/platformPagesData';

interface EdgeIntelligencePageProps {
  onRequestDemo: () => void;
}

export const EdgeIntelligencePage: React.FC<EdgeIntelligencePageProps> = ({
  onRequestDemo,
}) => {
  const pageData = PLATFORM_PAGES_DATA['edge-intelligence'];

  return (
    <PlatformPageTemplate
      data={pageData}
      onRequestDemo={onRequestDemo}
    />
  );
};
