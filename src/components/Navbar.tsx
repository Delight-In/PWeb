import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Zap, Cpu, ArrowRight 
} from 'lucide-react';

interface NavbarProps {
  onRequestDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/90 shadow-lg shadow-black/40 py-3'
          : 'bg-slate-950/60 backdrop-blur-sm border-b border-slate-900/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Consortium Tag */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/40 p-1.5 flex items-center justify-center shadow-glow-emerald transition-transform group-hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <path d="M 50 16 A 34 34 0 0 1 84 50" stroke="#10b981" strokeWidth="6" strokeLinecap="round" />
                <path d="M 84 50 A 34 34 0 0 1 50 84" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" strokeDasharray="6 6" />
                <path d="M 50 84 A 34 34 0 0 1 16 50" stroke="#10b981" strokeWidth="6" strokeLinecap="round" />
                <path d="M 16 50 A 34 34 0 0 1 50 16" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
                <path d="M 36 28 L 52 28 C 62 28 68 34 68 42 C 68 50 62 56 52 56 L 46 56 L 46 72" 
                      stroke="#34d399" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  Prishitech
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2 py-0.5 rounded-full hidden sm:inline-block">
                  TRIAXIS Partner
                </span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                Solutions · Resource Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'text-emerald-400 bg-emerald-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-emerald-400 bg-emerald-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              About Us
            </Link>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/solutions')
                    ? 'text-emerald-400 bg-emerald-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
                aria-expanded={solutionsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 animate-fade-in">
                  <div className="bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl p-2.5 space-y-1 backdrop-blur-xl">
                    <Link
                      to="/solutions/resource-intelligence"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-800/80 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mt-0.5 group-hover:scale-110 transition-transform">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                          Resource Intelligence Platform
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          Energy, Water, Gas, Chiller &amp; Energy Advisory
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/solutions/digital-transformation"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-800/80 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mt-0.5 group-hover:scale-110 transition-transform">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          IT &amp; Digital Transformation
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          IoT, Cloud, OT Cybersecurity, Data &amp; AI
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/triaxis"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/triaxis')
                  ? 'text-emerald-400 bg-emerald-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              TRIAXIS Consortium
            </Link>

            <Link
              to="/industries"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/industries')
                  ? 'text-emerald-400 bg-emerald-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              Industries
            </Link>

            <Link
              to="/insights"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/insights')
                  ? 'text-emerald-400 bg-emerald-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              Insights
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-emerald-400 bg-emerald-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onRequestDemo}
              className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold text-sm transition-all shadow-glow-emerald hover:shadow-lg flex items-center gap-2 group"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onRequestDemo}
              className="py-1.5 px-3 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs"
            >
              Demo
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 p-6 space-y-4 max-h-[85vh] overflow-y-auto animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className={`p-3 rounded-xl text-base font-medium ${
                location.pathname === '/' ? 'bg-emerald-500/15 text-emerald-400' : 'text-slate-200'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`p-3 rounded-xl text-base font-medium ${
                isActive('/about') ? 'bg-emerald-500/15 text-emerald-400' : 'text-slate-200'
              }`}
            >
              About Us
            </Link>

            <div className="border-t border-b border-slate-800/80 py-2 space-y-1">
              <span className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Solutions
              </span>
              <Link
                to="/solutions/resource-intelligence"
                className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium ${
                  isActive('/solutions/resource-intelligence') ? 'bg-emerald-500/15 text-emerald-400' : 'text-slate-300'
                }`}
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Resource Intelligence Platform</span>
              </Link>
              <Link
                to="/solutions/digital-transformation"
                className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium ${
                  isActive('/solutions/digital-transformation') ? 'bg-cyan-500/15 text-cyan-400' : 'text-slate-300'
                }`}
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>IT &amp; Digital Transformation</span>
              </Link>
            </div>

            <Link
              to="/triaxis"
              className={`p-3 rounded-xl text-base font-medium ${
                isActive('/triaxis') ? 'bg-emerald-500/15 text-emerald-400' : 'text-slate-200'
              }`}
            >
              TRIAXIS Consortium
            </Link>

            <Link
              to="/industries"
              className={`p-3 rounded-xl text-base font-medium ${
                isActive('/industries') ? 'bg-emerald-500/15 text-emerald-400' : 'text-slate-200'
              }`}
            >
              Industries Served
            </Link>

            <Link
              to="/insights"
              className={`p-3 rounded-xl text-base font-medium ${
                isActive('/insights') ? 'bg-emerald-500/15 text-emerald-400' : 'text-slate-200'
              }`}
            >
              Insights &amp; Articles
            </Link>

            <Link
              to="/contact"
              className={`p-3 rounded-xl text-base font-medium ${
                isActive('/contact') ? 'bg-emerald-500/15 text-emerald-400' : 'text-slate-200'
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onRequestDemo();
              }}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold rounded-xl text-center shadow-glow-emerald flex items-center justify-center gap-2"
            >
              <span>Schedule Platform Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
