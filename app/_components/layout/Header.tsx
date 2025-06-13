'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { INavItem } from '@app/_config/navigation';
import { routes } from '@app/_config/routes';
import { usePathname, useRouter } from 'next/navigation';

interface IHeaderProps {
  items: INavItem[];
}

export default function Header({ items }: IHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [pinnedDropdown, setPinnedDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-item')) {
        setPinnedDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavLinkHover = (itemLabel: string, hover: boolean) => {
    if (hover) {        
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }

      setHoveredDropdown(itemLabel);
      return;
    }

    setCloseTimeout(setTimeout(() => {
      setHoveredDropdown(null);
    }, 200)); 
  };

  const handleNavLinkPin = (itemLabel: string) => {
    setPinnedDropdown(prev => (prev === itemLabel ? null : itemLabel));
  };

  const imageContrast = !isMobileMenuOpen && isHomePage && !isScrolled;

  return (
    <header
      id="mainHeader"
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 bg-secondary text-gray-700
        ${imageContrast && 'bg-transparent text-white'}
        ${isScrolled && 'shadow-lg'}`}
      role="banner"
    >
      <div className="container h-16 mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold truncate max-w-[70vw] ${imageContrast ? 'text-white' : ''}`}>
            <Link href={routes.home()}>Calen Therapy</Link>
          </div>

          <nav
            className={`hidden md:flex items-center space-x-3 sm:space-x-6 ${imageContrast ? 'text-white' : ''}`}
            aria-label="Main navigation"
          >
            {items.map(item => (
              <NavLink
                key={item.label}
                item={item}
                imageContrast={imageContrast}
                isActive={hoveredDropdown === item.label || pinnedDropdown === item.label}
                onHover={handleNavLinkHover}
                onPin={handleNavLinkPin}
              />
            ))}
            <Link 
              href={routes.contact()}
              className={`
                px-4 sm:px-5 py-1 sm:py-1.5 rounded-full
                bg-primary text-white
                font-semibold
                hover:bg-accent
                transition-colors
                text-sm sm:text-base`}
            >
              Contact Us
            </Link>
          </nav>

          <button
            className="md:hidden ml-2 flex-shrink-0 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-7 w-7 text-gray-700" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-7 w-7" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className={`
            md:hidden fixed mt-16 top-0 left-0 right-0 bottom-0
            bg-white z-50
            overflow-y-auto
            animate-slide-in
            w-full
            p-2 sm:p-4`}
          role="dialog"
          aria-modal="true"
        >
          <nav
            className="flex flex-col space-y-1 p-2 sm:space-y-1.5 sm:p-4"
            aria-label="Mobile navigation"
          >
            {items.map(item => (
              <div key={item.label} className="border-b border-gray-100 py-1 last:border-0">
                <NavLink
                  item={item}
                  imageContrast={false}
                  isActive={hoveredDropdown === item.label || pinnedDropdown === item.label}
                  onHover={handleNavLinkHover}
                  onPin={handleNavLinkPin}
                />
              </div>
            ))}
            <Link
              href={routes.contact()}
              className={`
                px-4 py-4 rounded-full
                bg-primary
                font-semibold
                text-white  
                hover:bg-accent
                transition-colors
                text-center mt-2`}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

// NavLink Component

interface NavLinkProps {
  item: INavItem;
  isActive: boolean;
  imageContrast: boolean;
  onHover: (itemLabel: string, hover: boolean) => void;
  onPin: (itemLabel: string) => void;
}

const NavLink = ({
  item,
  isActive,
  imageContrast,
  onHover,
  onPin,
}: NavLinkProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (item.children) {
      onPin(item.label);
    } else if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <div
      className="relative group nav-item"
      onMouseEnter={() => onHover(item.label, true)}
      onMouseLeave={() => onHover(item.label, false)}
    >
      <button
        onClick={handleClick}
        className={`
          flex items-center w-full md:w-auto justify-between md:justify-start
          px-3 py-2 rounded-md
          transition-all duration-200
          hover:cursor-pointer
          ${!isActive && !imageContrast ? 'text-gray-700' : ''}
          ${!isActive && imageContrast ? 'text-white' : ''}
          ${isActive ? 'text-accent bg-gray-50' : ''}`}
        aria-expanded={isActive}
        aria-controls={`dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {item.label}

        {item.children && (
          <ChevronDownIcon
            className={`
              ml-1 h-3.5 w-3.5
              transition-transform duration-200
              ${!isActive && !imageContrast ? 'text-gray-700' : ''}
              ${!isActive && imageContrast ? 'text-white' : ''}
              ${isActive ? 'text-accent rotate-180' : ''}`}
            aria-hidden="true"
          />
        )}
      </button>

      {item.children && isActive && (
        <div
          id={`dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
          className={`
            py-1.5 min-w-[200px] max-w-[800px] w-auto z-50
            md:absolute md:top-full left-0 mt-1 md:mt-0.5
            bg-white rounded-lg shadow-lg border border-gray-100
            transform transition-all duration-200 origin-top-left
            md:scale-100 md:group-hover:opacity-100 md:group-hover:scale-100`}
          role="menu"
        >
          {item.children.map((child, i) => (
            <Link
              key={i}
              href={child.href || '#'}
              className={`
                block px-4 py-1.5
                text-gray-700 whitespace-nowrap
                hover:bg-gray-50 hover:text-accent
                transition-all duration-200
                relative group/item`}
              role="menuitem"
            >
              <span className="relative z-10">{child.label}</span>
              <span
                className={`
                  absolute inset-0
                  bg-gradient-to-r from-gray-50 to-transparent
                  opacity-0 group-hover/item:opacity-100
                  transition-opacity duration-200`}
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
