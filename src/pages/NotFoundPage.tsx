import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="404 - Page Not Found | Prishitech Solutions"
        description="The page you are looking for does not exist on Prishitech Solutions."
      />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full inline-block">
          Error 404 · Navigation Route Not Found
        </span>
        <h1 className="text-6xl sm:text-8xl font-black text-slate-900 tracking-tight">
          404
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
          The requested resource URL could not be located in the Prishitech telemetry directory.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-all shadow-sm flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/solutions/resource-intelligence"
            className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl text-sm border border-slate-200 transition-all shadow-sm flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-emerald-700" />
            <span>Explore Solutions</span>
          </Link>
        </div>
      </div>
    </>
  );
};
