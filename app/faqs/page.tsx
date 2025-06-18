import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import NormalPageHero from '@app/_components/hero/NormalPageHero';
import { FAQSection } from './FAQSection';
import { routes } from '@app/_config/routes';
import { contactDetails, pricing } from '@app/_config/main';
import Link from 'next/link';
import { buildMetadata } from '@app/_config/metadata';
import { FindUs } from '@app/_components/sections/FindUs';

export const metadata = buildMetadata({
  title: 'FAQs & Pricing',
  url: routes.faqs(),
});

const pricingQs = [
  {
    q: "How much does a session cost?",
    a: [`Sessions are priced at ${pricing.rate}. Sessions are available in 1 or 2 hour durations.`]
  },
  {
    q: "How long does a session last?",
    a: ["Sessions typically last for 1 hour but 2 hour sessions are available as well."]
  },
  {
    q: "What form of payment do you accept?",
    a: ["Payment is arranged directly either by cash or bank transfer before or during the consultation."]
  },
  {
    q: "What is your cancellation policy?",
    a: ["Cancellations must be made at least 24 hours in advance to avoid being charged."]
  },
  {
    q: "Do I have to commit to a certain number of sessions?",
    a: ["No. You may choose counselling/hypnotherapy as a single session, as a short course over a few weeks or months, or as a longer course that lasts for several months or years - there is no minimum commitment."]
  },
];

const therapyQs = [
  {
    q: "What is therapy?",
    a: [
      "The therapy is a process where you work with a trained professional to address emotional, psychological, or behavioral challenges.",
      "We offer psychotherapy, counseling, and hypnotherapy to help you navigate life's challenges and improve your mental well-being."
    ]
  },
  {
    q: "How do I know what kind of therapy I want?",
    a: [
      "Our site has information on the different types of therapy we offer. However this can be confusing, and often people's needs only become clear once they start therapy.",
      "We recommend that you get in contact with Helen and she can work with you to see what the best fit is.",
      "Our pricing and location are the same for all types of therapy.",
    ]
  },
  {
    q: "Do I need therapy?",
    a: [
      "Therapy can be beneficial for anyone and is not limited to those with mental health issues.",
      "If you are experiencing emotional distress, relationship issues, or any other challenges that affect your well-being, therapy might help you make sense of things.",
      "It's a personal decision, and can be helpful for anyone. We encourage you to try it out and see if it resonates with you."
    ]
  },
  {
    q: "Is therapy confidential?",
    a: [
      "Yes, therapy is confidential. We will not share your information without your consent.",
      "However, there are exceptions, such as if there is a risk of harm to yourself or others.",
    ]
  },
  {
    q: "How long does therapy take?",
    a: [
      "The duration of therapy varies depending on individual needs and goals. Some people may benefit from just a few sessions, while others may engage in longer-term therapy.",
      "Start with one or two sessions and see how you feel. You can always adjust the frequency and duration of your sessions as needed."
    ]
  },
  {
    q: "Can you me help with ____?",
    a: [
      "Probably! We have a wide range of experience and training in various areas. You can explore the site to see more on what we commonly help with.",
      "We encourage you to ask about specific issues or concerns you may have. We are very likely to be able to help or to refer you to someone who can.",
    ]
  },
  {
    q: "Can you prescribe medication?",
    a: [
      "No, we do not prescribe medication.",
    ]
  },
];

const hypnotherapyQs = [
  {
    q: "Is it safe?",
    a: [
      "Yes, hypnotherapy is a safe and effective therapeutic technique when conducted by a trained professional.",
      "It is a natural state of focused attention and relaxation that can help you access your subconscious mind."
    ]
  },
  {
    q: "Will I be unconscious?",
    a: [
      "No, you will not be unconscious during hypnotherapy. You will be in a relaxed state but fully aware of your surroundings.",
      "You can choose to accept or reject any suggestions made during the session."
    ]
  },
  {
    q: "Can I get stuck in hypnosis?",
    a: [
      "No, you cannot get stuck in hypnosis. You can come out of it at any time, and Carl will guide you back to full awareness."
    ]
  },
];

const locationQs = [
  {
    q: "Where are you located?",
    a: [
      contactDetails.address.full,
      <>
        You can find more information about where we are and the therapy space <Link href={routes.findUs()} className='text-primary hover:underline hover:text-accent'>here</Link>.
      </>,
    ]
  },
  {
    q: "Do you offer online sessions?",
    a: [
      "Yes, we offer online therapy sessions (usually via Zoom).",
      <>Read more <Link href={routes.sessionTypes.online()} className='text-primary hover:underline hover:text-accent'>here</Link>.</>
    ]
  },
  {
    q: "Are there any accessibility options?",
    a: [
      <>Please see our <Link href={routes.findUs()} className='text-primary hover:underline hover:text-accent'>Find Us</Link> section for details on accessibility.</>,
    ]
  },
];

export default function FAQPage() {
  return (
    <>
      <NormalPageHero
        title='FAQs & Pricing'
        subtitle='This page contains answers to questions you may have if you are considering therapy.' />

      <StripedSection secondary={false} primary={false}>
        <FAQSection title="Pricing" faqs={pricingQs} />
        <FAQSection title="All Therapy" faqs={therapyQs} />
        <FAQSection title="Hypnotherapy" faqs={hypnotherapyQs} />
        <FAQSection title="Location" faqs={locationQs} />
      </StripedSection>

      <StripedSection secondary={true} primary={false}>
        <FindUs />
      </StripedSection>
      
      <StripedSection secondary={false} primary={true}>
        <CallToAction />
      </StripedSection>
    </>
  );
}
