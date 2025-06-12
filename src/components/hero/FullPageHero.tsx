'use client';

import PageDownButton from '../ui/PageDownButton';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/config/images';

interface IFullPageHeroProps {
  title: string;
  subtitle: string;
}

export const FullPageHero = ({
  title,
  subtitle,
}: IFullPageHeroProps) => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen flex items-center">
      <Image
        src={images.general.homeHero.src}
        alt={images.general.homeHero.alt}
        fill
        className="object-cover opacity-70"
        priority
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-full sm:max-w-3xl">
        <div className="max-w-full sm:max-w-3xl">
          <h1 className="text-xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            {title}
          </h1>
          <p className="text-base sm:text-xl text-white opacity-90 mb-6 sm:mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-6">
            <Link
              href="/contact"
              className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-accent transition-colors text-center w-full sm:w-auto"
            >
              Contact Us
            </Link>
            <button
              onClick={handleScroll}
              className="invisible sm:visible border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-primary transition-colors text-center w-full sm:w-auto"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <PageDownButton />
    </section>
  );
};

export default FullPageHero;
