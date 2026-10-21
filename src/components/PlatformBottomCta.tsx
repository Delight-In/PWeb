import React from 'react';
import { Link } from 'react-router-dom';

interface PlatformBottomCtaProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  onSecondaryClick?: () => void;
  onExplorePlatform?: () => void;
  onRequestDemo: () => void;
  className?: string;
}

export const PlatformBottomCta: React.FC<PlatformBottomCtaProps> = ({
  title = 'One unified foundation for industrial operations, data, and AI',
  description = 'Talk to our engineering team to see how PrishiTech simplifies industrial data connectivity, edge intelligence, and digital transformation.',
  primaryCtaText = 'Book a demo ->',
  secondaryCtaText = 'Explore Edge Platform',
  secondaryCtaLink = '/platform',
  onSecondaryClick,
  onExplorePlatform,
  onRequestDemo,
  className = '',
}) => {
  const handleSecondary = onExplorePlatform || onSecondaryClick;

  return (
    <section className={`py-16 sm:py-24 bg-white border-t border-slate-100 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <button
            onClick={onRequestDemo}
            className="inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-sm h-11 sm:h-12 px-7 sm:px-9 rounded-sm text-sm sm:text-[15px]"
          >
            <span>{primaryCtaText}</span>
          </button>
          {handleSecondary ? (
            <button
              onClick={handleSecondary}
              className="inline-flex items-center justify-center whitespace-nowrap transition-colors border border-black bg-black hover:bg-slate-800 text-white font-medium h-11 sm:h-12 px-7 sm:px-9 rounded-sm text-sm sm:text-[15px]"
            >
              <span>{secondaryCtaText}</span>
            </button>
          ) : (
            <Link
              to={secondaryCtaLink}
              className="inline-flex items-center justify-center whitespace-nowrap transition-colors border border-black bg-black hover:bg-slate-800 text-white font-medium h-11 sm:h-12 px-7 sm:px-9 rounded-sm text-sm sm:text-[15px]"
            >
              <span>{secondaryCtaText}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
