import { Testimonials } from '@app/_components/sections/Testimonials';
import { testimonials } from '@app/_config/testimonials';
import { focuses } from '@app/_config/focuses';
import { images } from '@app/_config/images';
import { routes } from '@app/_config/routes';
import { Focuses } from '@app/_components/sections/Focuses';
import { SplitPageHero } from '@app/_components/hero/SplitPageHero';
import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import { TheSpace } from '@app/_components/sections/TheSpace';
import Link from 'next/link';
import Image from 'next/image';
import { buildMetadata } from '@app/_config/metadata';

export const metadata = buildMetadata({
  title: 'Helen',
  image: images.helen.main,
  url: routes.helen(),
  ogType: 'profile'
});

export default function HelenPage() {
  return (
    <div>
      {/* Hero Section */}
      <SplitPageHero
        imageSrc={images.helen.main.url}
        imageAlt={images.helen.main.alt}
        title='Helen Mills Porter'>

        <p>
          Hi, I'm Helen. I've spent the last 30 years working as a psychotherapist.
          
          I've worked with individuals, couples, and families across a wide range of concerns.
        </p>
        <p>
          I specialize in <Link href={routes.approaches.psychodynamic()} className='text-primary hover:underline hover:text-accent'>Psychodynamic Psychotherapy</Link>, <Link href={routes.approaches.systemic()} className='text-primary hover:underline hover:text-accent'>Systemic Therapy</Link>, and <Link href={routes.approaches.cbt()} className='text-primary hover:underline hover:text-accent'>Cognitive Behavioral Therapy (CBT)</Link>.
          
          I also have some specialist training in working with <Link href={routes.focuses.sexAddiction()} className='text-primary hover:underline hover:text-accent'>sex addiction</Link>, <Link href={routes.focuses.trauma()} className='text-primary hover:underline hover:text-accent'>trauma</Link>.
        </p>
        <p>
          As a <Link href={routes.external.helenBacp()} target="_blank" className='text-primary hover:underline hover:text-accent'>registered member</Link> of the British Association for Counselling & Psychotherapy (BACP), I adhere to their
          ethical framework, ensuring professional standards in all aspects of my practice.
        </p>
        <p>
          Whether you're facing an <Link href={routes.focuses.addictions()} className='text-primary hover:underline hover:text-accent'>addiction</Link>, <Link href={routes.focuses.anxietyStress()} className='text-primary hover:underline hover:text-accent'>anxiety, stress</Link>, <Link href={routes.focuses.illnessDisability()} className='text-primary hover:underline hover:text-accent'>a long term illness</Link> or <Link href={routes.focuses.relationships()} className='text-primary hover:underline hover:text-accent'>relationship problems</Link>; I provide a safe, confidential, and non-judgmental space where you can explore your thoughts and feelings at your own pace.
        </p>
        <p>
          Together, we'll work toward meaningful and lasting positive change in your life.
        </p>

        <Link href={routes.external.helenBacp()} target="_blank">
          <Image
            src={images.helen.bacp.url}
            alt={images.helen.bacp.alt}
            width={250}
            height={0}
            className="mt-10 h-auto"
          />
        </Link>
      </SplitPageHero>

      <StripedSection secondary={true} primary={false}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Qualifications & Experience</h2>

          <div className="prose prose-lg">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Systemic & Psychodynamic Therapy (Level 7 Postgraduate Diploma)</li>
              <li>Cognitive Behavioral Therapy (CBT) (Level 5 Diploma)</li>
              <li>Sex Addiction Therapy (Level 5 Diploma)</li>
              <li>Person-Centred Therapy (Level 5 Diploma)</li>
              <li>Working with Children & Young People (Diploma)</li>
              <li>Working with Trauma (Diploma)</li>
              <li>Working with Autism (Diploma)</li>
              <li>Psychology & Adult Careers Guidance (Level 5 - 1995)</li>
              <li>Additional training in Same Sex Relationships & Polyamory, Life Coaching, Hypnotherapy, and Online/Email Therapy</li>
            </ul>
          </div>

          <div className="prose prose-lg mt-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Memberships</h3>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <Link href={routes.external.helenBacp()} target="_blank" className="text-primary hover:underline hover:text-accent">
                  BACP (Registered Member)
                </Link>
              </li>
              <li>
                <Link href={routes.external.helenCounsellingDirectory()} target="_blank" className="text-primary hover:underline hover:text-accent">
                  Counselling Directory
                </Link>
              </li>
              <li>
                <Link href={routes.external.helenPsychologyToday()} target="_blank" className="text-primary hover:underline hover:text-accent">
                  Psychology Today
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </StripedSection>

      <StripedSection secondary={false} primary={false}>
        <Focuses
          subtitle="Everyone's concerns are unique, but we have some common areas of focus that I can help with."
          focuses={focuses.helen()}
          striped={false} />
      </StripedSection>

      <StripedSection secondary={true} primary={false}>
        <TheSpace
          title="Our Therapy Space"
          subtitle="Sessions take place in our comfortable, private therapy room with its own entrance, ensuring your privacy and comfort during our work together."
        />
      </StripedSection>

      <StripedSection secondary={false} primary={true}>
        <CallToAction />
      </StripedSection>
    </div>
  );
}
