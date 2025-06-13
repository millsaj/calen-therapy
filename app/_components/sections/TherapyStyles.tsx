'use client';

import { routes } from '@app/_config/routes'
import { ITherapyStyle } from '@app/_config/styles';
import { LearnMoreLink } from '@app/_components/home/LearnMoreLink';
import Link from 'next/link';

interface TherapyStylesProps {
  title?: string;
  subtitle?: string;
  styles: ITherapyStyle[];
  striped?: boolean;
}

export const TherapyStyles: React.FC<TherapyStylesProps> = ({
  title = 'Our Therapy Approaches',
  subtitle = 'We offer a variety of therapeutic approaches, each tailored to address specific needs and goals.',
  styles = [],
  striped,
}) => {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">{title}</h2>
        <p className="text-xl text-gray-600">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {styles.map((style) => (
          <div
            key={style.title}
            className={`${striped ? 'bg-white' : 'bg-secondary'} rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow flex flex-col h-full`}
          >
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 text-primary">{style.title}</h3>
              <p className="text-gray-600 mb-4">{style.content}</p>
              <div className="mt-auto pt-4">
                <LearnMoreLink href={routes.styles.show(style.slug)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
