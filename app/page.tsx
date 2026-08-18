import { TherapyApproaches } from '@app/_components/sections/Approaches';
import { Focuses } from '@app/_components/sections/Focuses';
import { Testimonials } from '@app/_components/sections/Testimonials';
import { CallToAction } from '@app/_components/sections/CallToAction';
import { StripedSection } from '@app/_components/sections/StripedSection';
import {
  approaches,
  focuses,
  showTestimonials,
  testimonials,
  pricing,
  buildMetadata,
  routes
} from '@app/_config';
import Therapists from '@app/_components/home/Therapists';
import FullPageHero from '@app/_components/hero/FullPageHero';

export const metadata = buildMetadata({
  pageTitle: "Counselling for Relationships, Anxiety, and Addictions",
  additionalKeywords: ["relationship counselling", "BACP therapist", "online therapy", "online counselling UK", "marriage counselling", "porn addiction", "CBT therapy", "family therapy", "counselling Wigan", "counselling St Helens"],
  path: routes.home,
  includeLocalBusinessSchema: true,
});

export default function Home() {
  return (
    <div>
      <FullPageHero />

      <StripedSection variant="secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Online counselling across the UK</h2>
          <p className="text-gray-600 mb-4">
            I offer secure online counselling to adults throughout the UK, making therapy accessible whether you are at home, working abroad, living overseas, or simply prefer the privacy and convenience of online sessions.
          </p>
          <p className="text-gray-600">
            You don&apos;t need to travel to an appointment. Sessions take place online in a private and confidential environment, at a time that works for you. Face to face sessions are also available in the Wigan and St Helens districts.
          </p>
        </div>
      </StripedSection>

      <StripedSection>
        <Therapists />
      </StripedSection>
      <StripedSection variant="secondary">
        <TherapyApproaches
          approaches={approaches}
          striped={true} />
      </StripedSection>
      <StripedSection>
        <Focuses
          focuses={focuses.filter(f => f.displayOn.includes('home'))}
          striped={false} />
      </StripedSection>

      {showTestimonials && (
        <StripedSection variant="secondary">
          <Testimonials testimonials={testimonials} striped={true} />
        </StripedSection>
      )}

      <StripedSection variant="primary">
        <CallToAction
          title="Ready to Begin Your Journey?"
          description={[
            "I am here to support you every step of the way.",
            `All sessions are just ${pricing.rate}.`
          ]}
        />
      </StripedSection>
    </div>
  );
}
