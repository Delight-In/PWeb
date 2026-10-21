import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PLATFORM_ITEMS } from '../data/platformData';

interface PlatformHeaderNavProps {
  currentId?: string;
}

export const PlatformHeaderNav: React.FC<PlatformHeaderNavProps> = ({ currentId }) => {
  const location = useLocation();

  return (
    <div className="w-full bg-white border-b border-slate-200/80 sticky top-16 z-30 shadow-2xs backdrop-blur-md bg-white/95 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 overflow-x-auto scrollbar-none gap-2">
          {/* <div className="flex items-center gap-1.5 shrink-0 pr-2 border-r border-slate-200 hidden lg:flex">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
              Platform Pillars:
            </span>
          </div> */}

          <nav className="flex items-center gap-1.5 shrink-0 overflow-x-auto py-0.5">
            {PLATFORM_ITEMS.map((item) => {
              const isActive = currentId === item.id || location.pathname === item.path;

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                  title={`${item.name} - ${item.tagline}`}
                >
                  <img 
                    src={item.iconUrl || `/icons/platform/${item.id}.svg`} 
                    alt="" 
                    className={`w-3.5 h-3.5 object-contain shrink-0 ${isActive ? 'brightness-125' : 'opacity-80'}`} 
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="shrink-0 hidden xl:flex items-center pl-2 border-l border-slate-200 text-slate-400 text-xs gap-1">
            <span className="text-[11px] text-slate-500 font-medium">7 Layers</span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
