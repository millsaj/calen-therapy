import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import NormalPageHero from '@app/_components/hero/NormalPageHero';
import { FAQSection } from './FAQSection';
import { routes, contactDetails, pricing, buildMetadata } from '@app/_config';
import Link from 'next/link';
import { FindUs } from '@app/_components/sections/FindUs';

export const metadata = buildMetadata({
  pageTitle: 'Therapy FAQs & Pricing Information',
  description: 'Find answers to frequently asked questions about my therapy services. Learn about session costs, appointment booking, what to expect in therapy, and more.',
  additionalKeywords: ["therapy pricing", "session costs", "appointment booking", "what to expect", "therapy process", "payment methods", "first session"],
  path: routes.faqs,
});

// Any react node can be used in the answers, so we can use links and other components.
// However we need to always use a key prop for any react node that is part of an array.

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
    a: ["Cancellations must be made at least 48 hours in advance to avoid being charged."]
  },
  {
    q: "Do I have to commit to a certain number of sessions?",
    a: ["No. You may choose counselling as a single session, as a short course over a few weeks or months, or as a longer course that lasts for several months or years - there is no minimum commitment."]
  },
];

const therapyQs = [
  {
    q: "What is therapy?",
    a: [
      "The therapy is a process where you work with a trained professional to address emotional, psychological, or behavioral challenges.",
      "I offer psychotherapy and counselling to help you navigate life's challenges and improve your mental well-being."
    ]
  },
  {
    q: "How do I know what kind of therapy I want?",
    a: [
      "My site has information on the different types of therapy I offer. However this can be confusing, and often people's needs only become clear once they start therapy.",
      "I recommend that you get in contact with me and I can work with you to see what the best fit is.",
      "My pricing and location are the same for all types of therapy.",
    ]
  },
  {
    q: "Do I need therapy?",
    a: [
      "Therapy can be beneficial for anyone and is not limited to those with mental health issues.",
      "If you are experiencing emotional distress, relationship issues, or any other challenges that affect your well-being, therapy might help you make sense of things.",
      "It's a personal decision, and can be helpful for anyone. I encourage you to try it out and see if it resonates with you."
    ]
  },
  {
    q: "Is therapy confidential?",
    a: [
      "Yes, therapy is confidential. I will not share your information without your consent.",
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
    q: "Can you help me with ____?",
    a: [
      "Probably! I have a wide range of experience and training in various areas. You can explore the site to see more on what I commonly help with.",
      "I encourage you to ask about specific issues or concerns you may have. I am very likely to be able to help or to refer you to someone who can.",
    ]
  },
  {
    q: "Can you prescribe medication?",
    a: [
      "No, I do not prescribe medication.",
    ]
  },
];

const locationQs = [
  {
    q: "Where are you located?",
    a: [
      contactDetails.address.full,
      <div key="map-link">
        You can find more information about where I am and the therapy space <Link href={routes.findUs} className='text-primary underline hover:text-accent hover:no-underline decoration-primary/60'>here</Link>.
      </div>,
    ]
  },
  {
    q: "Do you offer online sessions?",
    a: [
      "Yes, I offer online therapy sessions across the UK (usually via Zoom).",
      <div key="online-link">
        Read more <Link href={routes.focuses.onlineTherapy} className='text-primary underline hover:text-accent hover:no-underline decoration-primary/60'>here</Link>.
      </div>
    ]
  },
  {
    q: "Are there any accessibility options?",
    a: [
      <div key="accessibility-link">
        Please see the <Link href={routes.findUs} className='text-primary underline hover:text-accent hover:no-underline decoration-primary/60'>Find Me</Link> section for details on accessibility.
      </div>
    ]
  },
];

const otherOptionsQs = [
  {
    q: "Do you offer home visits?",
    a: [
      "Home visits are available for clients with mobility challenges or health conditions that make travel difficult, within a limited area. Additional travel fees may apply.",
      "This is arranged on a case-by-case basis - please contact me to discuss your specific needs.",
    ]
  },
  {
    q: "Do you offer written or email therapy?",
    a: [
      "Yes, for those who prefer expressing themselves in writing, I offer email or letter-based therapy, with a structured exchange schedule and time to reflect between responses.",
      "This is arranged on a case-by-case basis - please contact me to discuss your specific needs.",
    ]
  },
  {
    q: "Do you offer workplace sessions?",
    a: [
      "Yes, I offer on-site therapy at your business location for organisations supporting employee mental health, in individual or group formats. A private space is required.",
      "This is arranged on a case-by-case basis - please contact me to discuss your specific needs.",
    ]
  },
];

export default function FAQPage() {
  return (
    <>
      <NormalPageHero
        title='FAQs & Pricing'
        subtitle='This page contains answers to questions you may have if you are considering therapy.' />

      <StripedSection>
        <FAQSection title="Pricing" faqs={pricingQs} />
        <FAQSection title="All Therapy" faqs={therapyQs} />
        <FAQSection title="Location" faqs={locationQs} />
        <FAQSection title="Other Options" faqs={otherOptionsQs} />
      </StripedSection>

      <StripedSection variant="secondary">
        <FindUs />
      </StripedSection>

      <StripedSection variant="primary">
        <CallToAction />
      </StripedSection>
    </>
  );
}
