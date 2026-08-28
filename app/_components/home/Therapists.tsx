import Image from 'next/image';
import { images, routes, experience, ICalenImage, getImageUrl } from '@app/_config';
import { LearnMoreLink } from './LearnMoreLink';

interface ITherapist {
  name: string;
  credentials: string;
  descriptions: string[];
  specialties: string[];
  image: ICalenImage;
  learnMoreLink: string;
}

const therapists: ITherapist[] = [
  {
    name: 'Helen Mills Porter',
    credentials: 'B.A., PGDip., MBACP., GQHP',
    descriptions: [
      `For over ${experience.helen.total} years I have worked as a psychotherapist. I worked as a Relate practitioner for many years, supporting families, couples, individuals, and children of all ages through various concerns.`,
      `I have numerous qualifications including a post-graduate (level 7) diploma in Psychodynamic and Systemic Psychotherapy.`,
    ],
    specialties: [
      'Relationships',
      'Families & Children',
      'Online therapy',
      'Stress & Anxiety',
      'Long term illness',
      'Bereavement / loss',
      'Sex addiction',
      'Life coaching'
    ],
    image: images.helen.main,
    learnMoreLink: routes.helen,
  },
];

export const Therapists: React.FC = ({
}) => {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Who am I?</h2>
        <p className="text-gray-600">
          I'm Helen, a therapist based in Billinge with a long career in psychotherapy and counselling,
          offering sessions online across the UK and face to face in the Wigan and St Helens districts.
        </p>
      </div>

      <div className="grid max-w-4xl mx-auto">
        {therapists.map((therapist, index) => (
          <div key={index} className="md:flex md:items-start md:gap-12">
            <div className="mb-8 md:mb-0 relative shrink-0">
              <div className="w-[288px] h-[288px] sm:w-[384px] sm:h-[384px] md:w-[288px] md:h-[288px] lg:w-[320px] lg:h-[320px] mx-auto">
                <Image
                  src={getImageUrl(therapist.image, 384, 384)}
                  alt={therapist.name}
                  width={384}
                  height={384}
                  className="w-full h-full object-cover rounded-full shadow-lg ring-4 ring-white"
                />
              </div>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div>
                <h3 className="text-xl md:text-2xl font-bold">{therapist.name}</h3>
                <p className="text-sm text-gray-500">{therapist.credentials}</p>
              </div>

              {therapist.descriptions.map((desc, idx) => (
                <p key={idx} className="text-gray-600">
                  {desc}
                </p>
              ))}

              <div>
                <p className="text-gray-600 mb-1">Specialist in:</p>

                <ul className="text-sm text-gray-600 space-y-2 inline-block text-left">
                  {therapist.specialties.map((specialty, idx) => (
                    <li key={idx}>• {specialty}</li>
                  ))}
                </ul>
              </div>

              <LearnMoreLink href={therapist.learnMoreLink} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Therapists;
