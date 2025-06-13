'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';

interface ICarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  itemsPerView?: number;
  autoPlayInterval?: number;
  className?: string;
}

/**
 * A generic, responsive carousel component that supports automatic rotation and manual navigation.
 *
 * Features:
 * - Generic typing allows for any content type
 * - Responsive design (3 items on desktop, 1 on mobile)
 * - Auto-rotation with configurable interval
 * - Pause on hover
 * - Manual navigation with prev/next buttons
 * - Smooth transition animations
 * - Custom item rendering via render props
 *
 * @example
 * ```tsx
 * <Carousel
 *   items={images}
 *   renderItem={(img, index) => <Image src={img.url} alt={img.alt} />}
 *   itemsPerView={3}
 *   autoPlayInterval={5000}
 * />
 * ```
 *
 * @template T - The type of items to be displayed in the carousel
 * @param props.items - Array of items to display in the carousel
 * @param props.renderItem - Function to render each item
 * @param props.itemsPerView - Number of items to show at once (default: 3)
 * @param props.autoPlayInterval - Milliseconds between auto-rotations (default: 5000)
 * @param props.className - Additional CSS classes to apply to the container
 */
export function Carousel<T>({
  items,
  renderItem,
  itemsPerView = 3,
  autoPlayInterval = 5000,
  className = '',
}: ICarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTransition = (newIndex: number) => {
    setIsTransitioning(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + itemsToShow()) % items.length;
    handleTransition(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - itemsToShow() + items.length) % items.length;
    handleTransition(newIndex);
  };

  const itemsToShow = () => (screenWidth < 768 ? 1 : itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex, autoPlayInterval]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const getVisibleItems = () => {
    const visibleIndexes = Array.from(
      { length: itemsToShow() },
      (_, i) => (currentIndex + i) % items.length
    );
    return visibleIndexes.map(index => items[index]);
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {getVisibleItems().map((item, index) => (
          <div
            key={`${currentIndex}-${index}`}
            className={`transition-opacity duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
      {items.length > itemsPerView && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
