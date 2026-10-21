import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Zap, Cpu, ArrowRight
} from 'lucide-react';
import { PLATFORM_ITEMS } from '../data/platformData';

interface NavbarProps {
  onRequestDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(true);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setPlatformDropdownOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-150 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Official PrishiTech Logo */}
          <Link to="/" className="flex items-center group focus:outline-none py-1">
            <img 
              src="/logo.png" 
              alt="PrishiTech - Complex Made Easy" 
              className="h-8 sm:h-9 w-auto object-contain transition-opacity group-hover:opacity-90" 
            />
          </Link>

          {/* Clean, Lightweight Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm">
            <Link
              to="/about"
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                isActive('/about')
                  ? 'text-emerald-700 bg-emerald-50/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>

            {/* Platform Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPlatformDropdownOpen(true)}
              onMouseLeave={() => setPlatformDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  isActive('/platform')
                    ? 'text-emerald-700 bg-emerald-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-expanded={platformDropdownOpen}
              >
                <span>Platform</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${platformDropdownOpen ? 'rotate-180 text-emerald-700' : 'text-slate-400'}`} />
              </button>

              {platformDropdownOpen && (
                <div className="absolute top-full left-0 sm:-left-12 lg:-left-20 w-[640px] sm:w-[720px] lg:w-[760px] pt-2 animate-fade-in z-50">
                  <div className="bg-white border border-slate-200/90 rounded-2xl shadow-2xl p-4 sm:p-5">
                    <div className="px-3 pb-3 mb-2.5 border-b border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img 
                          src="/icons/platform/industrial-data-foundation.svg" 
                          alt="Industrial Data Platform" 
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                          Industrial Data Platform
                        </span>
                      </div>
                      <Link 
                        to="/platform/industrial-data-foundation"
                        className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1 hover:underline"
                      >
                        <span>Overview &amp; Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {PLATFORM_ITEMS.map((item) => {
                        const isCurrentActive = location.pathname === item.path;

                        return (
                          <Link
                            key={item.id}
                            to={item.path}
                            className={`group relative flex items-center gap-x-3.5 rounded-xl p-2.5 transition-all ${
                              isCurrentActive 
                                ? 'bg-emerald-50/70 border border-emerald-200/80 shadow-2xs' 
                                : 'hover:bg-slate-50 border border-transparent hover:border-slate-200/60'
                            }`}
                          >
                            <div className="flex h-11 w-11 p-2 flex-none items-center justify-center rounded-lg border border-slate-200/80 bg-white group-hover:bg-slate-100/70 group-hover:border-slate-300 transition-colors shadow-2xs shrink-0">
                              <img 
                                src={item.iconUrl || `/icons/platform/${item.id}.svg`} 
                                alt={item.name} 
                                className="w-7 h-7 object-contain"
                              />
                            </div>
                            <div className="flex flex-col justify-center min-w-0 flex-1">
                              <div className="flex items-center justify-between">
                                <span className="block font-semibold text-[13.5px] text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                                  {item.name}
                                </span>
                                {isCurrentActive && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 ml-1" />
                                )}
                              </div>
                              <p className="text-xs font-normal text-slate-500 line-clamp-1 mt-0.5">
                                {item.tagline}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs px-2">
                      <span className="text-slate-500">
                        One coordinated platform for Industrial AI, DataOps, and Edge Intelligence
                      </span>
                      <Link
                        to="/platform/industrial-data-foundation"
                        className="font-semibold text-emerald-700 hover:underline flex items-center gap-1"
                      >
                        <span>Learn how it works</span>
                        <ArrowRight className="w-3 h-3 text-emerald-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  isActive('/solutions')
                    ? 'text-emerald-700 bg-emerald-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-expanded={solutionsDropdownOpen}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${solutionsDropdownOpen ? 'rotate-180 text-emerald-700' : 'text-slate-400'}`} />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-1.5 animate-fade-in z-50">
                  <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-1.5 space-y-0.5">
                    <Link
                      to="/solutions/resource-intelligence"
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                        <Zap className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          Resource Intelligence
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Energy, Water, Gas, Chiller &amp; Advisory
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/solutions/digital-transformation"
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-md bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                          IT &amp; Digital Transformation
                        </div>
                        <div className="text-[11px] text-slate-400">
                          IoT, Cloud, Cyber, Data &amp; AI
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/industries"
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                isActive('/industries')
                  ? 'text-emerald-700 bg-emerald-50/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Industries Served
            </Link>
          </nav>

          {/* Right Header Action Button: Unified Book Demo -> /contact */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-xs py-2 px-4 rounded-sm text-xs sm:text-sm gap-1.5 hidden sm:flex"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Slide-Down Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 animate-fade-in shadow-lg max-h-[calc(100vh-64px)] overflow-y-auto">
          <Link
            to="/about"
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            About Us
          </Link>

          {/* Mobile Platform Accordion */}
          <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-2 space-y-1">
            <button
              type="button"
              onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
              className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              <span className="flex items-center gap-2">
                <img src="/icons/platform/industrial-data-foundation.svg" alt="" className="w-4 h-4 object-contain" />
                <span>Platform</span>
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobilePlatformOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
            </button>

            {mobilePlatformOpen && (
              <div className="space-y-1 pt-1 border-t border-slate-200/60">
                {PLATFORM_ITEMS.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="flex h-9 w-9 p-1.5 flex-none items-center justify-center rounded-md border border-slate-200 bg-white shadow-2xs shrink-0 mt-0.5">
                        <img 
                          src={item.iconUrl || `/icons/platform/${item.id}.svg`} 
                          alt={item.name} 
                          className="w-5 h-5 object-contain" 
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold text-slate-900 truncate">{item.name}</div>
                        <div className="text-[10px] text-slate-500 truncate">{item.tagline}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Mobile Solutions Accordion */}
          <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-2 space-y-1">
            <button
              type="button"
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>Solutions</span>
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
            </button>

            {mobileSolutionsOpen && (
              <div className="space-y-1 pt-1 border-t border-slate-200/60">
                <Link
                  to="/solutions/resource-intelligence"
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-white"
                >
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Resource Intelligence Platform</span>
                </Link>

                <Link
                  to="/solutions/digital-transformation"
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-white"
                >
                  <Cpu className="w-3.5 h-3.5 text-sky-600" />
                  <span>IT &amp; Digital Transformation</span>
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/industries"
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Industries Served
          </Link>

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold rounded-sm text-xs text-center shadow-xs flex items-center justify-center gap-1.5"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
