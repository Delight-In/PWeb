import React from 'react';
import { PLATFORM_CLIENT_LOGOS } from '../data/platformPagesData';

interface PlatformLogoCloudProps {
  title?: string;
  className?: string;
}

export const PlatformLogoCloud: React.FC<PlatformLogoCloudProps> = ({
  title = 'Trusted by manufacturers scaling industrial data and AI',
  className = '',
}) => {
  const logosRow1 = PLATFORM_CLIENT_LOGOS.slice(0, 6);
  const logosRow2 = PLATFORM_CLIENT_LOGOS.slice(6, 12);

  return (
    <section className={`py-14 sm:py-20 border-b border-slate-100 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {title && (
          <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-10 tracking-tight">
            {title}
          </h4>
        )}

        {/* Row 1: Enterprise Manufacturers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center mb-8">
          {logosRow1.map((logo: { name: string; src: string }) => (
            <div key={logo.name} className="flex items-center justify-center h-12 w-full px-3">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-10 max-w-[130px] object-contain opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Cloud & Enterprise Data Ecosystem */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {logosRow2.map((logo: { name: string; src: string }) => (
            <div key={logo.name} className="flex items-center justify-center h-12 w-full px-3">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-10 max-w-[130px] object-contain opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
