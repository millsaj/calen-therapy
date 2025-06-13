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
    <section className="relative h-[100vh] flex items-center">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="w-full md:w-1/2 h-full relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 h-full flex items-center bg-white/90 backdrop-blur-sm">
          <div className="w-full px-6 py-8">
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
      </div>

      <PageDownButton />
    </section>
  );
};

export default SplitPageHero;
