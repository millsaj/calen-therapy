import { focuses } from '@app/_config/focuses';
import { images } from '@app/_config/images';
import { routes } from '@app/_config/routes';
import { Focuses } from '@app/_components/sections/Focuses';
import { SplitPageHero } from '@app/_components/hero/SplitPageHero';
import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import { TheSpace } from '@app/_components/sections/TheSpace';
import Link from 'next/link';
import { buildMetadata } from '@app/_config/metadata';

// Have you heard of NLP but not sure how it works?
// Neuro-Linguistic Programming is all about how you process information and experience the world.
// It can help amplify your ability to manage your own internal state and how you regulate.

export const metadata = buildMetadata({
  title: 'Carl',
  image: images.carl.hero,
  url: routes.carl(),
  ogType: 'profile'
});

export default function CarlPage() {

  return (
    <div>
      {/* Hero Section */}
      <SplitPageHero
        imageSrc={images.carl.hero.url}
        imageAlt={images.carl.hero.alt}
        title='Carl Porter' >

        <p>
          Hi, I'm Carl. I provide a confidential and professional hypnotherapy service alongside my wife <Link href={routes.helen()} className='text-primary hover:underline hover:text-accent'>Helen</Link>, who is a psychotherapist and relationship therapist.
        </p>
        <p>
          Qualified in hypnotherapy and as an NLP practitioner, I will enable you to make significant changes to your life and wellbeing. I completed my Solution Focused Hypnotherapy Diploma in 2020 and have since been helping clients overcome a wide range of issues, including <Link href={routes.focuses.anxietyStress()} className='text-primary hover:underline hover:text-accent'>anxiety</Link>, <Link href={routes.focuses.phobias()} className='text-primary hover:underline hover:text-accent'>phobias</Link>, <Link href={routes.focuses.weightLoss()} className='text-primary hover:underline hover:text-accent'>weight loss</Link>, <Link href={routes.focuses.smoking()} className='text-primary hover:underline hover:text-accent'>smoking</Link>, and more.
        </p>
        <p>
          I am a <Link href={routes.external.carlHypnotherapyDirectory()} className="text-primary hover:underline hover:text-accent">registered practitioner</Link> with the Hypnotherapy Directory and a member of AFSFH (Association for Solution Focused Hypnotherapy).
        </p>
      </SplitPageHero>

      <StripedSection secondary={true} primary={false}>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">Solution Focused Hypnotherapy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A modern approach to creating positive change</p>
          </div>


          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              In the first part of your session I will explain exactly how Hypnotherapy will benefit you from a perspective of how you feel, along with scientifically proven evidence. You'll find the sessions relaxing, enlightening and often life changing.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">How It Works</h3>
                <p className="text-gray-700">
                  Solution Focused Hypnotherapy accesses your subconscious mind while you're in a deeply relaxed state, allowing us to focus on your goals and desired outcomes rather than problems from your past.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">What to Expect</h3>
                <p className="text-gray-700">
                  Sessions include a discussion about your goals, guided relaxation, and positive suggestions tailored to your needs. You'll remain aware and in control throughout the process.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center my-8">
              <Link href="/styles/hypnotherapy" className="inline-flex items-center px-5 py-3 bg-primary text-white rounded-full font-medium hover:bg-accent transition-colors">
                Learn more about hypnotherapy
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </StripedSection>

      <StripedSection secondary={false} primary={false}>
        <Focuses
          subtitle="Everyone's concerns are unique, but we have some common areas of focus that I can help with."
          focuses={focuses.carl()}
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
