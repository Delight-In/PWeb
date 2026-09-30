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
      setIsScrolled(window.scrollY > 10);
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
                <div className="absolute top-full left-0 w-72 pt-1.5 animate-fade-in">
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
              Industries
            </Link>

            <Link
              to="/triaxis"
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                isActive('/triaxis')
                  ? 'text-emerald-700 bg-emerald-50/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              TRIAXIS
            </Link>

            <Link
              to="/about"
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                isActive('/about')
                  ? 'text-emerald-700 bg-emerald-50/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            <Link
              to="/insights"
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                isActive('/insights')
                  ? 'text-emerald-700 bg-emerald-50/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Insights
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-emerald-700 bg-emerald-50/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Action Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={onRequestDemo}
              className="py-2 px-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors shadow-xs hidden sm:flex items-center gap-1.5"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
            </button>

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
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-1 animate-fade-in shadow-lg">
          <Link
            to="/solutions/resource-intelligence"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>Resource Intelligence Platform</span>
          </Link>

          <Link
            to="/solutions/digital-transformation"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <Cpu className="w-4 h-4 text-sky-600" />
            <span>IT &amp; Digital Transformation</span>
          </Link>

          <Link
            to="/industries"
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Industries
          </Link>

          <Link
            to="/triaxis"
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            TRIAXIS Consortium
          </Link>

          <Link
            to="/about"
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            About Us
          </Link>

          <Link
            to="/insights"
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Insights
          </Link>

          <Link
            to="/contact"
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Contact Us
          </Link>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onRequestDemo();
              }}
              className="w-full py-2.5 bg-slate-900 text-white font-medium rounded-lg text-xs text-center shadow-xs flex items-center justify-center gap-1.5"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
