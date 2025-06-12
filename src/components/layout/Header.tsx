'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { INavItem } from '@/config/navigation';
import { routes } from '@/config/routes';
import { usePathname } from 'next/navigation';

interface IHeaderProps {
  items: INavItem[];
}

export default function Header({ items }: IHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [pinnedDropdown, setPinnedDropdown] = useState<string | null>(null);

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

  const setNavItemHover = useCallback((itemLabel: string, hover: boolean) => {
    setHoveredDropdown(hover ? itemLabel : null);
  }, []);

  const toggleNavItemPinned = useCallback((itemLabel: string) => {
    setPinnedDropdown(prev => (prev === itemLabel ? null : itemLabel));
  }, []);

  return (
    <>
      <header
        id="mainHeader"
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled
            ? 'bg-secondary shadow-lg'
            : (isHomePage ? 'bg-transparent text-white' : 'bg-secondary')}`}
        role="banner"
      >
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
          <div className="flex items-center justify-between min-h-[48px]">
            <div className={`text-lg sm:text-2xl font-bold truncate max-w-[70vw] ${isHomePage && !isScrolled ? 'text-white' : ''}`}>
              <Link href={routes.home()}>Calen Therapy</Link>
            </div>

            <nav
              className={`hidden md:flex items-center space-x-3 sm:space-x-6 ${isHomePage && !isScrolled ? 'text-white' : ''}`}
              aria-label="Main navigation"
            >
              {items.map(item => (
                <NavLink
                  key={item.label}
                  item={item}
                  hoveredDropdown={hoveredDropdown}
                  pinnedDropdown={pinnedDropdown}
                  setNavItemHover={setNavItemHover}
                  toggleNavItemPinned={toggleNavItemPinned}
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
              className="md:hidden ml-2 flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div
              id="mobile-menu"
              className={`
                md:hidden fixed top-[48px] left-0 right-0 bottom-0
                bg-white z-50
                overflow-y-auto
                animate-slide-in
                w-full
                p-2
                sm:top-[64px] sm:p-4`}
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
                      hoveredDropdown={hoveredDropdown}
                      pinnedDropdown={pinnedDropdown}
                      setNavItemHover={setNavItemHover}
                      toggleNavItemPinned={toggleNavItemPinned}
                    />
                  </div>
                ))}
                <Link
                  href={routes.contact()}
                  className={`
                    px-4 py-2 rounded-full
                    bg-primary text-white
                    font-semibold
                    hover:bg-accent
                    transition-colors
                    text-center mt-2 text-sm`}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  );
}

// NavLink Component

interface NavLinkProps {
  item: INavItem;
  hoveredDropdown: string | null;
  pinnedDropdown: string | null;
  setNavItemHover: (itemLabel: string, hover: boolean) => void;
  toggleNavItemPinned: (itemLabel: string) => void;
}

const NavLink = ({
  item,
  hoveredDropdown,
  pinnedDropdown,
  setNavItemHover,
  toggleNavItemPinned,
}: NavLinkProps) => {
  const isActive = hoveredDropdown === item.label || pinnedDropdown === item.label;
  let closeTimeout: NodeJS.Timeout;

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setNavItemHover(item.label, false);
    }, 150);
  };

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
    setNavItemHover(item.label, true);
  };

  return (
    <div
      className="relative group nav-item"
      onMouseEnter={item.children ? handleMouseEnter : undefined}
      onMouseLeave={item.children ? handleMouseLeave : undefined}
    >
      {item.children ? (
        <button
          onClick={() => toggleNavItemPinned(item.label)}
          className={`
            flex items-center w-full md:w-auto justify-between md:justify-start
            px-3 py-2 rounded-md
            transition-all duration-200
            ${isActive ? 'text-accent bg-gray-50' : 'text-gray-700 hover:text-accent hover:bg-gray-50'}`}
          aria-expanded={isActive}
          aria-controls={`dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {item.label}
          <ChevronDownIcon
            className={`
              ml-1 h-3.5 w-3.5
              transition-transform duration-200
              ${isActive ? 'rotate-180 text-accent' : ''}`}
            aria-hidden="true"
          />
        </button>
      ) : (
        <Link
          href={item.href || '#'}
          className={`
            block w-full md:w-auto
            px-3 py-1.5 rounded-md
            hover:text-accent text-gray-700 hover:bg-gray-50
            transition-all duration-200`}
        >
          {item.label}
        </Link>
      )}

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
