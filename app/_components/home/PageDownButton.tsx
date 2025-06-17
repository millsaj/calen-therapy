'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export const PageDownButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`invisible sm:visible transition-opacity duration-300 absolute bottom-8 left-1/2 transform -translate-x-1/2 z-100 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
      <button
        onClick={handleScroll}
        className="animate-bounce bg-primary hover:bg-primary hover:cursor-pointer rounded-full p-4"
      >
        <ChevronDownIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default PageDownButton;
