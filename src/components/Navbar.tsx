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
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Consortium Tag */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-subtle p-2 flex items-center justify-center transition-transform group-hover:border-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <path d="M 50 16 A 34 34 0 0 1 84 50" stroke="#059669" strokeWidth="6" strokeLinecap="round" />
                <path d="M 84 50 A 34 34 0 0 1 50 84" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" strokeDasharray="6 6" />
                <path d="M 50 84 A 34 34 0 0 1 16 50" stroke="#059669" strokeWidth="6" strokeLinecap="round" />
                <path d="M 16 50 A 34 34 0 0 1 50 16" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
                <path d="M 36 28 L 52 28 C 62 28 68 34 68 42 C 68 50 62 56 52 56 L 46 56 L 46 72" 
                      stroke="#059669" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Prishitech
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full hidden sm:inline-block">
                  TRIAXIS Partner
                </span>
              </div>
              <span className="text-[10px] text-slate-500 tracking-wider uppercase font-medium">
                Solutions · Resource Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'text-emerald-700 bg-emerald-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-emerald-700 bg-emerald-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
                    ? 'text-emerald-700 bg-emerald-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-expanded={solutionsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-emerald-700' : 'text-slate-400'}`} />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 animate-fade-in">
                  <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-2 space-y-1">
                    <Link
                      to="/solutions/resource-intelligence"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mt-0.5 group-hover:scale-105 transition-transform">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          Resource Intelligence Platform
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          Energy, Water, Gas, Chiller &amp; Advisory
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/solutions/digital-transformation"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 mt-0.5 group-hover:scale-105 transition-transform">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                          IT &amp; Digital Transformation
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
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
                  ? 'text-emerald-700 bg-emerald-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              TRIAXIS Consortium
            </Link>

            <Link
              to="/industries"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/industries')
                  ? 'text-emerald-700 bg-emerald-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Industries
            </Link>

            <Link
              to="/insights"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/insights')
                  ? 'text-emerald-700 bg-emerald-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Insights
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-emerald-700 bg-emerald-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onRequestDemo}
              className="py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-sm hover:shadow flex items-center gap-2 group"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-slate-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onRequestDemo}
              className="py-1.5 px-3 rounded-lg bg-slate-900 text-white font-medium text-xs shadow-sm"
            >
              Demo
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 p-6 space-y-4 max-h-[85vh] overflow-y-auto animate-fade-in shadow-xl">
          <div className="flex flex-col space-y-1.5">
            <Link
              to="/"
              className={`p-2.5 rounded-xl text-base font-medium ${
                location.pathname === '/' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`p-2.5 rounded-xl text-base font-medium ${
                isActive('/about') ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700'
              }`}
            >
              About Us
            </Link>

            <div className="border-t border-b border-slate-100 py-2 space-y-1">
              <span className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Solutions
              </span>
              <Link
                to="/solutions/resource-intelligence"
                className={`flex items-center gap-3 p-2.5 rounded-xl text-sm font-medium ${
                  isActive('/solutions/resource-intelligence') ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700'
                }`}
              >
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>Resource Intelligence Platform</span>
              </Link>
              <Link
                to="/solutions/digital-transformation"
                className={`flex items-center gap-3 p-2.5 rounded-xl text-sm font-medium ${
                  isActive('/solutions/digital-transformation') ? 'bg-sky-50 text-sky-800 font-semibold' : 'text-slate-700'
                }`}
              >
                <Cpu className="w-4 h-4 text-sky-600" />
                <span>IT &amp; Digital Transformation</span>
              </Link>
            </div>

            <Link
              to="/triaxis"
              className={`p-2.5 rounded-xl text-base font-medium ${
                isActive('/triaxis') ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700'
              }`}
            >
              TRIAXIS Consortium
            </Link>

            <Link
              to="/industries"
              className={`p-2.5 rounded-xl text-base font-medium ${
                isActive('/industries') ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700'
              }`}
            >
              Industries Served
            </Link>

            <Link
              to="/insights"
              className={`p-2.5 rounded-xl text-base font-medium ${
                isActive('/insights') ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700'
              }`}
            >
              Insights &amp; Articles
            </Link>

            <Link
              to="/contact"
              className={`p-2.5 rounded-xl text-base font-medium ${
                isActive('/contact') ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700'
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
              className="w-full py-3 bg-slate-900 text-white font-semibold rounded-xl text-center shadow-sm flex items-center justify-center gap-2"
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
