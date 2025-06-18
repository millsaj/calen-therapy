import Image from 'next/image';
import { images } from '@app/_config/images';
import { routes } from '@app/_config/routes';
import { LearnMoreLink } from './LearnMoreLink';

interface ITherapist {
  name: string;
  credentials: string;
  descriptions: string[];
  specialties: string[];
  imagePath: string;
  learnMoreLink: string;
}

const therapists: ITherapist[] = [
  {
    name: 'Helen Mills Porter',
    credentials: 'B.A., PGDip., MBACP., GQHP',
    descriptions: [
      'For over 25 years I have worked as a psychotherapist. I worked as a Relate practitioner for many years, supporting families, couples, individuals, and children of all ages through various concerns.',
      'I have numerous qualifications including a post-graduate (level 7) diploma in Psychodynamic and Systemic Psychotherapy.',
    ],
    specialties: [
      'Stress & Anxiety',
      'Long term illness',
      'Bereavement / loss',
      'Relationships',
      'Families & Children',
      'Sex addiction',
      'Life coaching'
    ],
    imagePath: images.helen.main.url,
    learnMoreLink: routes.helen(),
  },
  {
    name: 'Carl Porter',
    credentials: 'Solution Focused Hypnotherapist & NLP Practitioner',
    descriptions: [
      'Along side my partner Helen, I provide confidential and professional hypnotherapy services. As a qualified hypnotherapist and NLP practitioner, I focus on enabling significant positive changes to your life and wellbeing.',
      'Solution Focused Hypnotherapy is a powerful approach that empowers you to move forward positively, helping your unconscious mind find alternatives to unwanted negative feelings, thinking, and behaviors. My sessions are designed to help you better manage daily stresses while developing new, healthier coping strategies.',
    ],
    specialties: [
      'Quiting smoking',
      'Quiting an unwanted addiction or habit',
      'Stress & Anxiety',
      'Losing weight',
      'Overcoming fears & phobias',
      'Encouraging new habits such as sport'
    ],
    imagePath: images.carl.main.url,
    learnMoreLink: routes.helen(),
  },
];

export const Therapists: React.FC = ({
}) => {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Who are we?</h2>
        <p className="text-gray-600">
          We are Helen and Carl: two therapists based in Billinge. The core of our practise is built
          around Helen's long career in psychotherapy and counselling. Hypnotherapy sessions are
          usually provided by Carl, who is a qualified Solution Focused Hypnotherapist and NLP Practitioner.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {therapists.map((therapist, index) => (
          <div key={index}>
            <div className="mb-8 relative">
              <div className="w-[288px] h-[288px] sm:w-[384px] sm:h-[384px] md:w-[288px] md:h-[288px] lg:w-[384px] lg:h-[384px] mx-auto"> 
                <Image
                  src={therapist.imagePath}
                  alt={therapist.name}
                  width={288}
                  height={288}
                  className="w-full h-full object-cover rounded-full shadow-lg ring-4 ring-white"
                />
              </div>
            </div>
            <div className="space-y-4">
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

                <ul className="text-sm text-gray-600 space-y-2">
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
