'use client';

import Image from 'next/image';
import { Carousel } from '@app/_components/ui/Carousel';

import { images } from '@app/_config/images';

interface ITheSpaceProps {
    title?: string;
    subtitle?: string;
}

export const TheSpace: React.FC<ITheSpaceProps> = ({
    title = 'The Space',
    subtitle = 'Our therapy space is located in our home in Billinge. There is an external door to the therapy room, so you can come and go without disturbing the rest of the family.'
}) => {
  return (
    <>
      <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Carousel
          items={images.space}
          renderItem={(img, i) => (
            <div key={i} className="relative w-full h-96">
              <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover"
              />
            </div>
          )}
        />
      </div>
    </>
  );
};
