import { TherapyStyles } from '@/components/sections/TherapyStyles';
import { Focuses } from '@/components/sections/Focuses';
import { Testimonials } from '@/components/sections/Testimonials';
import { CallToAction } from '@/components/sections/CallToAction';
import { StripedSection } from '@/components/sections/StripedSection';
import { styles } from '@/config/styles';
import { focuses } from '@/config/focuses';
import { testimonials } from '@/config/testimonials';
import Therapists from '@/components/sections/Therapists';
import FullPageHero from '@/components/hero/FullPageHero';
import { pricing } from '@/config/main';

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
