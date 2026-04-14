'use client';

import PageDownButton from '../home/PageDownButton';
import Image from 'next/image';
import Link from 'next/link';
import { getImageUrl, images, routes } from '@app/_config';
import { useState, useEffect } from 'react';

interface IHeroVariant {
  title: string;
  subtitle: string;
}

/** Rotating hero copy — one is picked at random on each page load. */
const heroVariants: IHeroVariant[] = [
  {
    title: 'Begin Your Journey to Healing and Growth',
    subtitle: 'Professional, confidential, and affordable therapy services in a comfortable environment.',
  },
  {
    title: 'Find Clarity, Peace, and a Path Forward',
    subtitle: 'Experienced therapists ready to support you — in person in Billinge or online across the UK.',
  },
  {
    title: 'You Don\'t Have to Face This Alone',
    subtitle: 'Compassionate, confidential counselling for individuals, couples, and families.',
  },
  {
    title: 'Take the First Step Toward Feeling Better',
    subtitle: 'Personalised therapy tailored to you — because no two journeys are the same.',
  },
  {
    title: 'Talking Helps. We\'re Here to Listen.',
    subtitle: 'Warm, professional support for anxiety, relationships, grief, and much more.',
  },
  {
    title: 'Your Wellbeing Matters — Let\'s Work on It Together',
    subtitle: 'Over 30 years of combined experience helping people create lasting change.',
  },
  {
    title: 'Space to Be Heard, Understood, and Supported',
    subtitle: 'A safe, non-judgmental environment where real change begins.',
  },
  {
    title: 'Overcome What\'s Holding You Back',
    subtitle: 'Evidence-based therapy and hypnotherapy to help you move forward with confidence.',
  },
];

interface IFullPageHeroProps {
  title?: string;
  subtitle?: string;
}

export const FullPageHero = ({
  title: titleProp,
  subtitle: subtitleProp,
}: IFullPageHeroProps) => {
  const [variant, setVariant] = useState<IHeroVariant>(heroVariants[0]);

  useEffect(() => {
    setVariant(heroVariants[Math.floor(Math.random() * heroVariants.length)]);
  }, []);

  const title = titleProp ?? variant.title;
  const subtitle = subtitleProp ?? variant.subtitle;

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={getImageUrl(images.general.homeHero, 1366, 768)}
          alt={images.general.homeHero.alt}
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      <div className="container mx-auto">
        <div className="container mx-auto mx-0 sm:ml-0 sm:px-6 relative z-10 max-w-full sm:max-w-3xl my-20 pt-10 sm:pt-30 px-4 text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-white opacity-90 mb-6 sm:mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-6">
            <Link
              href={routes.contact}
              className="bg-white text-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-accent transition-colors text-center w-full sm:w-auto"
            >
              Contact Us
            </Link>
            <button
              onClick={handleScroll}
              className="invisible sm:visible border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-accent transition-colors text-center w-full sm:w-auto"
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
