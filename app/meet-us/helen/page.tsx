import { focuses, images, routes, buildMetadata, experience, getImageUrl } from '@app/_config';
import { Focuses } from '@app/_components/sections/Focuses';
import { SplitPageHero } from '@app/_components/hero/SplitPageHero';
import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import { TheSpace } from '@app/_components/sections/TheSpace';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = buildMetadata({
  pageTitle: 'Helen Mills Porter - BACP Member',
  description: `Meet Helen Mills Porter, experienced BACP registered psychotherapist in Wigan / St Helens with over ${experience.helen.total()} years of experience. Specializing in psychodynamic therapy, CBT, trauma, and sex addiction treatment.`,
  additionalKeywords: ["BACP registered therapist", "psychotherapist", "experienced therapist", "Helen Porter", "female therapist", "qualified psychotherapist", "cbt", "sex addiction"],
  image: images.helen.hero,
  path: routes.helen(),
  ogType: 'profile',
  includeLocalBusinessSchema: true,
});

export default function HelenPage() {
  return (
    <div>
      {/* Hero Section */}
      <SplitPageHero
        image={images.helen.hero}
        title='Helen Mills Porter'>

        <p>
          Hi, I'm Helen. I've spent the last {experience.helen.total()} years working as a psychotherapist.

          I've worked with individuals, couples, and families across a wide range of concerns.
        </p>
        <p>
          I specialise in <Link href={routes.approaches.psychodynamic()} className='text-primary underline hover:text-accent hover:no-underline decoration-primary/60'>Psychodynamic Psychotherapy</Link>, <Link href={routes.approaches.systemic()} className='text-primary underline hover:text-accent hover:no-underline decoration-primary/60'>Systemic Therapy</Link>, and <Link href={routes.approaches.cbt()} className='text-primary underline hover:text-accent hover:no-underline decoration-primary/60'>Cognitive Behavioral Therapy (CBT)</Link>.

          I also have some specialist training in working with <Link href={routes.focuses.sexAddiction()} className='text-primary underline hover:text-accent hover:no-underline decoration-primary/60'>sex addiction</Link>, <Link href={routes.focuses.trauma()} className='text-primary underline hover:text-accent hover:no-underline decoration-primary/60'>trauma</Link>, and autism. See my full of qualifications and experience below.
        </p>
        <p>
          Whether you're facing an <Link href={routes.focuses.addictions()} className='text-primary underline hover:text-accent hover:no-underline decoration-primary/60'>addiction</Link>, <Link href={routes.focuses.anxietyStress()} className='text-primary underline hover:text-accent hover:no-underline decoration-primary/60'>anxiety, stress</Link>, <Link href={routes.focuses.illnessDisability()} className='text-primary underline hover:text-accent hover:no-underline decoration-primary/60'>a long term illness</Link> or <Link href={routes.focuses.relationships()} className='text-primary underline hover:text-accent hover:no-underline decoration-primary/60'>relationship problems</Link>; I provide a safe, confidential, and non-judgmental space where you can explore your thoughts and feelings at your own pace.
        </p>
        <p>
          Together, we'll work toward meaningful and lasting positive change in your life.
        </p>

        <Link href={routes.external.helenBacp()} target="_blank">
          <Image
            src={getImageUrl(images.helen.bacp, 250)}
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
            <p className="mb-4">
              I've been a psychotherapist for over {experience.helen.total()} years, working with individuals, couples, and families. I spent {experience.helen.relate(true)} years working with <Link href={routes.external.relate()} target="_blank" className="text-primary underline hover:text-accent hover:no-underline decoration-primary/60">Relate</Link> and have been working for myself for the past {experience.helen.calen(true)} years.
            </p>

            <ul className="list-disc pl-6 mb-4">
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

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Memberships</h3>

            <ul className="list-disc pl-6">
              <li>
                <Link href={routes.external.helenBacp()} target="_blank" className="text-primary underline hover:text-accent hover:no-underline decoration-primary/60">
                  BACP (Registered Member)
                </Link>
              </li>
              <li>
                <Link href={routes.external.helenCounsellingDirectory()} target="_blank" className="text-primary underline hover:text-accent hover:no-underline decoration-primary/60">
                  Counselling Directory
                </Link>
              </li>
              <li>
                <Link href={routes.external.helenPsychologyToday()} target="_blank" className="text-primary underline hover:text-accent hover:no-underline decoration-primary/60">
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
          title="My Therapy Space"
          subtitle="Sessions take place in my comfortable, private therapy room with its own entrance, ensuring your privacy and comfort during our work together."
        />
      </StripedSection>

      <StripedSection secondary={false} primary={true}>
        <CallToAction />
      </StripedSection>
    </div>
  );
}
