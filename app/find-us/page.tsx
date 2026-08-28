import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import NormalPageHero from '@app/_components/hero/NormalPageHero';
import { TheSpace } from '@app/_components/sections/TheSpace';
import { FindUs } from '@app/_components/sections/FindUs';
import { buildMetadata, routes } from '@app/_config';

export const metadata = buildMetadata({
  pageTitle: 'Find My Therapy Practice in Billinge',
  description: 'Directions to my comfortable therapy space in Billinge. Easily accessible location with private parking, serving clients from surrounding areas.',
  additionalKeywords: ["therapy location", "Billinge address", "therapy directions", "private parking", "therapy space", "comfortable therapy room", "accessibility"],
  path: routes.findUs,
  includeLocalBusinessSchema: true,
});

export default function FindUsPage() {
  return (
    <div>
      <NormalPageHero
        title='Find Me'
        subtitle='Where I am based and how to get here' />

      <StripedSection>
        <FindUs title='My Location' />
      </StripedSection>

      <StripedSection variant="secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>
          <div className="prose prose-lg">
            <h3 className="text-xl font-semibold mt-6 mb-3">Arriving</h3>
            <p className="mb-4">When you arrive for your in-person therapy session, you'll find a private driveway and the entrance to the left round the side of the house.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">During Your Session</h3>
            <p className="mb-4">Your therapy session will take place in my comfortable, dedicated therapy space. I strive to create a warm, welcoming environment where you can feel at ease discussing whatever brings you to therapy. Sessions typically last 1-2 hours depending on your needs.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Privacy</h3>
            <p>My therapy room has an exterior door so you can enter and exit without passing through the main house, ensuring your privacy and comfort.</p>
          </div>
        </div>
      </StripedSection>

      <StripedSection>
        <TheSpace
          subtitle="My therapy space is designed to be comfortable, private and welcoming. Located in my home in Billinge, it features comfortable seating, calming decor, and a peaceful ambiance to help you feel at ease during your therapy sessions."
        />
      </StripedSection>

      <StripedSection variant="primary">
        <CallToAction />
      </StripedSection>
    </div>
  );
}
