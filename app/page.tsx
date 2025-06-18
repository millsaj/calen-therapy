import { TherapyStyles } from '@app/_components/sections/TherapyStyles';
import { Focuses } from '@app/_components/sections/Focuses';
import { Testimonials } from '@app/_components/sections/Testimonials';
import { CallToAction } from '@app/_components/sections/CallToAction';
import { StripedSection } from '@app/_components/sections/StripedSection';
import { styles } from '@app/_config/styles';
import { focuses } from '@app/_config/focuses';
import { testimonials } from '@app/_config/testimonials';
import Therapists from '@app/_components/home/Therapists';
import FullPageHero from '@app/_components/hero/FullPageHero';
import { pricing } from '@app/_config/main';
import { buildMetadata } from '@app/_config/metadata';
import { routes } from './_config/routes';

export const metadata = buildMetadata({
  url: routes.home(),
});

export default function Home() {
  return (
    <div>
      <FullPageHero
        title = 'Begin Your Journey to Healing and Growth'
        subtitle = 'Professional, confidential, and affordable therapy services in a comfortable environment.' />
      <StripedSection secondary={false} primary={false}>
        <Therapists />
      </StripedSection>
      <StripedSection secondary={true} primary={false}>
        <TherapyStyles
          styles={styles.home()}
          striped={true} />
      </StripedSection>
      <StripedSection secondary={false} primary={false}>
        <Focuses
          focuses={focuses.home()}
          striped={false} />
      </StripedSection>
      <StripedSection secondary={true} primary={false}>
        <Testimonials testimonials={testimonials} striped={true} />
      </StripedSection>
      <StripedSection secondary={false} primary={true}>
        <CallToAction
          title="Ready to Begin Your Journey?"
          description={[
            "We are here to support you every step of the way.",
            `All sessions are just ${pricing.rate}.`
          ]}
        />
      </StripedSection>
    </div>
  );
}
