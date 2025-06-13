'use client';

import Image from 'next/image';
import PageDownButton from '../home/PageDownButton';

export interface ISplitHeroArgs {
  imageSrc: string;
  imageAlt: string;
  title: string;
  children?: React.ReactNode;
}

export const SplitPageHero = ({
  imageSrc,
  imageAlt,
  title,
  children,
}: ISplitHeroArgs) => {
  return (
    <section className="mt-[48px]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-full">
        <div className='w-full min-h-96 relative'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="px-6 py-8">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light mb-12 text-gray-800 text-center md:text-left">
              {title}
            </h1>

            <div className="space-y-10 mb-12 text-gray-600 leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>

      <PageDownButton />
    </section>
  );
};

export default SplitPageHero;
