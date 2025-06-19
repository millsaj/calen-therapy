import { IFocus, routes } from '@app/_config';
import Link from 'next/link';

interface IFocusesProps {
  title?: string;
  subtitle?: string;
  focuses: IFocus[];
  striped?: boolean;
}

export const Focuses: React.FC<IFocusesProps> = ({
  title = 'Areas we could focus on',
  subtitle = "Everyone's concerns are unique, but we have some common areas of focus that we can help with.",
  focuses,
  striped,
}) => {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">{title}</h2>
        <p className="text-lg md:text-xl text-gray-600">{subtitle}</p>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          focuses.length % 3 === 0 ? 'lg:grid-cols-3' : ''
        } xl:grid-cols-4 gap-6`}
      >
        {focuses.map(focus => {
          return (
            <Link
              key={focus.title}
              className={`${striped ? 'bg-white border-white' : 'bg-secondary border-secondary'} p-4 md:p-8 rounded-xl shadow text-center hover:shadow-md text-primary hover:text-accent border-2 hover:border-accent transition-shadow flex flex-col justify-center`}
              href={routes.focuses.show(focus.slug)} >

              <h3 className="text-lg font-bold">{focus.title}</h3>
            </Link>
          );
        })}
      </div>

      <div className="text-center max-w-3xl mx-auto mt-12 text-gray-500 text-sm md:text-base">
        <p>
          Don't see your specific concern listed? Please <Link href={routes.contact()} className='text-primary hover:underline hover:text-accent'>reach out</Link> to us anyway.
        </p>
        <p>
          We may be able to help you or refer you to someone who can.
        </p>
      </div>
    </>
  );
};
