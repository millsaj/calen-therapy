import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import NormalPageHero from '@app/_components/hero/NormalPageHero';
import { TheSpace } from '@app/_components/sections/TheSpace';
import { FindUs } from '@app/_components/sections/FindUs';
import { buildMetadata, routes } from '@app/_config';

export const metadata = buildMetadata({
  pageTitle: 'Find Our Therapy Practice in Billinge',
  description: 'Directions to our comfortable therapy space in Billinge. Easily accessible location with private parking, serving clients from surrounding areas.',
  additionalKeywords: ["therapy location", "Billinge address", "therapy directions", "private parking", "therapy space", "comfortable therapy room", "accessibility"],
  path: routes.findUs(),
  includeLocalBusinessSchema: true,
});

export default function FindUsPage() {
  return (
    <div>
      <NormalPageHero
        title='Find Us'
        subtitle='Where are we based and how to get here' />

      <StripedSection secondary={false} primary={false}>
        <FindUs title='Our Location' />
      </StripedSection>

      <StripedSection secondary={true} primary={false}>
        <TheSpace
          subtitle="Our therapy space is designed to be comfortable, private and welcoming. Located in our home in Billinge, it features comfortable seating, calming decor, and a peaceful ambiance to help you feel at ease during your therapy sessions."
        />
      </StripedSection>

      <StripedSection secondary={false} primary={true}>
        <CallToAction />
      </StripedSection>
    </div>
  );
}
