'use client';

import { useState, useEffect, useRef, ReactNode, useCallback } from 'react';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

interface ICarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
}

/**
 * A responsive, accessible carousel component for displaying content in a rotating slider.
 *
 * @features
 * - SEO-friendly: All items are rendered in the DOM for search engines
 * - Responsive design with adaptive number of visible items
 * - Auto-rotation with 5-second interval (pauses on hover/interaction)
 * - Touch and mouse drag navigation
 * - Keyboard accessible navigation
 * - Visual indicators for current position
 * - Smooth transitions between slides
 *
 * @example
 * ```tsx
 * <Carousel
 *   items={testimonials}
 *   renderItem={(testimonial) => (
 *     <TestimonialCard 
 *       author={testimonial.author}
 *       content={testimonial.content}
 *     />
 *   )}
 * />
 * ```
 *
 * @template T - The type of items to display in the carousel
 */
export function Carousel<T>({
  items,
  renderItem,
  className = '',
}: ICarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Drag/swipe related state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragThreshold = 50; // Minimum drag distance to trigger a slide change

  // Fixed values that were previously configurable
  const autoPlayInterval = 5000;

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

  const itemsToShow = useCallback(() => {
    // Fixed breakpoints
    if (screenWidth >= 1280) return 3; // xl
    if (screenWidth >= 640) return 2; // sm
    return 1; // xs
  }, [screenWidth]);

  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + itemsToShow()) % items.length;
    handleTransition(newIndex);
  }, [currentIndex, items.length, itemsToShow]);

  const prevSlide = useCallback(() => {
    const newIndex = (currentIndex - itemsToShow() + items.length) % items.length;
    handleTransition(newIndex);
  }, [currentIndex, items.length, itemsToShow]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && !isDragging) nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, isDragging, nextSlide]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const getVisibleIndices = () => {
    return Array.from(
      { length: itemsToShow() },
      (_, i) => (currentIndex + i) % items.length
    );
  };

  // Drag/swipe handlers
  const handleDragStart = (clientX: number) => {
    setIsPaused(true);
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (isDragging) {
      setCurrentX(clientX);
    }
  };

  const handleDragEnd = () => {
    if (isDragging) {
      const diff = currentX - startX;
      
      // If the drag distance exceeds the threshold, change slide
      if (Math.abs(diff) > dragThreshold) {
        if (diff > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
      
      setIsDragging(false);
      // Reset pause state after a short delay to prevent immediate autoplay
      setTimeout(() => setIsPaused(false), 1000);
    }
  };

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    } else {
      setIsPaused(false);
    }
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Calculate swipe progress for indicator
  const dragDiff = currentX - startX;
  const swipeProgress = Math.min(Math.abs(dragDiff) / dragThreshold, 1);
  
  // Determine opacity based on swipe progress
  const indicatorOpacity = isDragging ? Math.min(0.8, swipeProgress * 0.8) : 0;

  // Calculate total number of possible positions - fixed calculation
  const totalPages = Math.max(1, Math.ceil(items.length / itemsToShow()));

  // Calculate current page for dots navigation
  const currentPage = Math.floor(currentIndex / itemsToShow());

  // Function to navigate to a specific page
  const goToPage = (page: number) => {
    const newIndex = page * itemsToShow();
    handleTransition(newIndex);
  };
  
  // Get the currently visible indices
  const visibleIndices = getVisibleIndices();

  return (
    <div 
      className={`relative ${className}`}
      role="region"
      aria-label="Content carousel"
      aria-roledescription="carousel"
    >
      {/* Unified swipe indicator overlay */}
      {isDragging && (
        <div 
          className="absolute -inset-4 md:-inset-6 lg:-inset-8 z-30 flex items-center justify-center pointer-events-none bg-black/10 rounded-xl"
          style={{ opacity: indicatorOpacity }}
          aria-hidden="true"
        >
          <div className="rounded-full p-4 bg-black/40 backdrop-blur-sm">
            <ArrowsRightLeftIcon className="h-10 w-10 text-white" />
          </div>
        </div>
      )}

      <div
        ref={carouselRef}
        className="relative"
        onMouseEnter={() => !isDragging && setIsPaused(true)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                visibleIndices.includes(index) 
                  ? isTransitioning ? 'opacity-0' : 'opacity-100 relative z-10'
                  : 'opacity-0 absolute -z-10 pointer-events-none'
              } select-none`}
              aria-hidden={!visibleIndices.includes(index)}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      {totalPages > 1 && (
        <div 
          className="flex justify-center items-center space-x-2 mt-4"
          role="tablist"
          aria-label="Carousel navigation"
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentPage === index 
                  ? 'bg-gray-800 w-4' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
              aria-selected={currentPage === index}
              role="tab"
            />
          ))}
        </div>
      )}
    </div>
  );
}
