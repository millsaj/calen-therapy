'use client';

import { routes } from '@app/_config/routes'
import { ITherapyApproach } from '@app/_config/approaches';
import { LearnMoreLink } from '@app/_components/home/LearnMoreLink';

interface TherapyApproachProps {
  title?: string;
  subtitle?: string;
  approaches: ITherapyApproach[];
  striped?: boolean;
}

export const TherapyApproaches: React.FC<TherapyApproachProps> = ({
  title = 'Our Approach',
  subtitle = 'Want to learn more about some of the techniques and therapy styles that we use?',
  approaches = [],
  striped,
}) => {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">{title}</h2>
        <p className="text-lg md:text-xl text-gray-600">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {approaches.map((approach) => (
          <div
            key={approach.title}
            className={`${striped ? 'bg-white' : 'bg-secondary'} rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow flex flex-col h-full`}
          >
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 text-primary">{approach.title}</h3>
              <p className="text-gray-600 mb-4">{approach.content}</p>
              <div className="mt-auto pt-4">
                <LearnMoreLink href={routes.approaches.show(approach.slug)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
