'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';

export const PageDownButton = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="invisible sm:visible absolute bottom-8 left-1/2 transform -translate-x-1/2 z-100">
      <button
        onClick={handleScroll}
        className="animate-bounce bg-primary hover:bg-primary rounded-full p-4"
      >
        <ChevronDownIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default PageDownButton;
