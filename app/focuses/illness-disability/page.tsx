import Link from 'next/link';
import { routes } from '@app/_config/routes';
import { FocusPage } from '../FocusPage';
import { buildMetadata } from '@app/_config/metadata';

export const metadata = buildMetadata({
  title: 'Illness & Disability',
  url: routes.focuses.show('illness-disability'),
});

export default function IllnessDisabilityPage() {
  return (
    <FocusPage
      hero={{
        title: "Illness & Disability",
        subtitle: "Coping with the long-term impact of illness or disability and finding new ways to thrive"
      }}
      intro={{
        title: "Living with Illness or Disability",
        body: (
          <>
            <p className="mb-4">
              Living with a long-term illness or disability can affect every aspect of life—physically, emotionally, and socially. The journey often involves adapting to new limitations, managing ongoing symptoms, and coping with changes in identity, relationships, and daily routines.
            </p>
            <p>
              Therapy can provide a supportive space to process these changes, build resilience, and find meaning and hope, even in the face of ongoing challenges.
            </p>
          </>
        )
      }}
      common={{
        title: "Why This Experience Is So Challenging",
        body: (
          <>
            <p className="mb-4">
              The impact of illness or disability is often misunderstood or minimized by others. Common challenges include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Loss of independence or changes in daily functioning</li>
              <li>Chronic pain, fatigue, or unpredictable symptoms</li>
              <li>Changes in self-image and identity</li>
              <li>Social isolation or feeling misunderstood</li>
              <li>Impact on work, relationships, and future plans</li>
              <li>Managing medical appointments and treatments</li>
            </ul>
            <p>
              These challenges are real and valid. You are not alone in facing them, and support is available.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Therapy",
        subtitle: "Consider seeking support if you recognize these experiences:",
        items: [
          {
            title: "Feelings of Loss or Grief",
            description: "Struggling to come to terms with changes in your health, abilities, or future."
          },
          {
            title: "Low Mood or Anxiety",
            description: "Experiencing sadness, worry, or hopelessness related to your condition."
          },
          {
            title: "Social Withdrawal",
            description: "Avoiding social situations or feeling isolated due to illness or disability."
          },
          {
            title: "Relationship Strain",
            description: "Changes in your health are affecting your relationships with family, friends, or partners."
          },
          {
            title: "Difficulty Adjusting",
            description: "Finding it hard to adapt to new routines, limitations, or roles."
          },
          {
            title: "Loss of Purpose",
            description: "Struggling to find meaning or motivation in daily life."
          }
        ]
      }}
      reminder={{
        title: "You Deserve Support and Understanding",
        subtitle: "Seeking help is a sign of strength, not weakness. Therapy can help you process your experiences, build resilience, and find new ways to thrive."
      }}
      expectations={{
        title: "What to Expect from Therapy",
        body: (
          <>
            <p className="mb-4">
              Helen brings extensive experience in supporting people living with illness or disability. Therapy may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Processing feelings of loss, grief, or anger</li>
              <li>Building coping skills for managing symptoms and stress</li>
              <li>Exploring changes in identity and self-worth</li>
              <li>Improving communication and relationships</li>
              <li>Finding meaning and purpose beyond illness or disability</li>
              <li>Developing strategies for self-care and resilience</li>
            </ul>
            <p>
              Both Helen and Carl can support you, offering a compassionate, non-judgmental space to explore your experiences and strengths.
            </p>
          </>
        )
      }}
      results={{
        title: "Your Path to Resilience and Hope",
        intro: "Therapy can help you adapt to life with illness or disability and find new ways to thrive:",
        shortTerm: [
          "Reduced feelings of isolation and distress",
          "Improved coping skills and emotional resilience",
          "Better communication with loved ones",
          "Greater sense of hope and possibility"
        ],
        longTerm: [
          "Stronger sense of identity and self-worth",
          "More fulfilling relationships",
          "Greater acceptance and peace with your situation",
          "Renewed sense of purpose and meaning"
        ],
        conclusion: "Living with illness or disability is challenging, but you do not have to face it alone. With support, you can find new strengths and possibilities for your life."
      }}
      cta={{
        title: "Ready to Find Support?",
        description: "Helen and Carl offer compassionate, experienced support for living with illness or disability. Reach out today."
      }}
    />
  );
}
