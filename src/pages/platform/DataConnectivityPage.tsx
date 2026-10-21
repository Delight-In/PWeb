import React from 'react';
import { PlatformPageTemplate } from '../../components/PlatformPageTemplate';
import { PLATFORM_PAGES_DATA } from '../../data/platformPagesData';

interface DataConnectivityPageProps {
  onRequestDemo: () => void;
}

export const DataConnectivityPage: React.FC<DataConnectivityPageProps> = ({
  onRequestDemo,
}) => {
  const pageData = PLATFORM_PAGES_DATA['data-connectivity'];

  return (
    <PlatformPageTemplate
      data={pageData}
      onRequestDemo={onRequestDemo}
    />
  );
};
