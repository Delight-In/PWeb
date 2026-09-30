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
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-full inline-block">
          Error 404 · Navigation Route Not Found
        </span>
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white">
          404
        </h1>
        <p className="text-lg text-slate-300 max-w-md mx-auto">
          The requested resource URL could not be located in the Prishitech telemetry directory.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-glow-emerald flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/solutions/resource-intelligence"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm border border-slate-700 flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Explore Solutions</span>
          </Link>
        </div>
      </div>
    </>
  );
};
