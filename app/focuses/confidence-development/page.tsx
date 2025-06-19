import Link from 'next/link';
import { routes, buildMetadata } from '@app/_config';
import { FocusPage } from '../FocusPage';

export const metadata = buildMetadata({
  pageTitle: 'Confidence & Personal Development Therapy',
  description: 'Boost your confidence and self-esteem with specialized therapy. Professional support for overcoming self-doubt, building assertiveness, and achieving personal growth.',
  additionalKeywords: ["self-esteem therapy", "confidence building", "assertiveness training", "personal development coaching", "imposter syndrome", "self-belief", "self-acceptance"],
  path: routes.focuses.confidenceDevelopment(),
});

export default function ConfidenceDevelopmentPage() {
  return (
    <FocusPage
      hero={{
        title: "Confidence & Personal Development",
        subtitle: "Building self-belief and unlocking your potential"
      }}
      intro={{
        title: "Understanding Confidence & Personal Development",
        body: (
          <>
            <p className="mb-4">
              Confidence is that powerful inner sense of trust in your own abilities, qualities, and judgement.
              It influences how you approach challenges, pursue goals, and relate to others. When confidence is
              lacking, you might hold yourself back from opportunities, struggle with self-doubt, or find it
              difficult to express yourself authentically.
            </p>
            <p>
              Personal development encompasses the ongoing process of building self-awareness, knowledge, and skills
              to reach your potential and create a fulfilling life. This journey isn't about becoming perfect but
              about growing in ways that align with your values and aspirations. With the right support, you can
              overcome barriers to confidence and embark on a meaningful path of personal growth.
            </p>
          </>
        )
      }}
      common={{
        title: "Common Challenges in Building Confidence",
        body: (
          <>
            <p className="mb-4">
              Many people struggle with confidence and personal growth at various points in life. These challenges
              are normal and can arise from numerous factors:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Early life experiences that shaped negative self-beliefs</li>
              <li>Criticism or high expectations from caregivers, teachers, or significant others</li>
              <li>Comparison with others, especially in today's social media environment</li>
              <li>Past failures or rejections that continue to affect self-perception</li>
              <li>Life transitions that require new skills or identities</li>
              <li>Perfectionism and fear of making mistakes</li>
              <li>Imposter syndrome and feeling undeserving of success</li>
              <li>Unclear sense of personal values and direction</li>
            </ul>
            <p>
              Despite these challenges, confidence can be developed and strengthened at any stage of life. Personal
              growth isn't a linear process—it involves cycles of learning, experimenting, reflecting, and integrating
              new ways of being. With compassionate guidance, you can overcome internal obstacles and create meaningful
              change.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Therapy",
        subtitle: "Consider seeking professional support if you experience these patterns:",
        items: [
          {
            title: "Self-Doubt and Hesitation",
            description: "Regularly questioning your abilities or worth, even in areas where you have demonstrated competence."
          },
          {
            title: "Difficulty Asserting Yourself",
            description: "Struggling to express your needs, opinions, or boundaries in relationships or professional settings."
          },
          {
            title: "Fear of Judgement",
            description: "Holding yourself back due to concerns about what others might think of you."
          },
          {
            title: "Procrastination or Avoidance",
            description: "Putting off important tasks or opportunities due to fear of failure or inadequacy."
          },
          {
            title: "Inner Critic Dominance",
            description: "Experiencing persistent negative self-talk that undermines your confidence and well-being."
          },
          {
            title: "Feeling Stuck or Unfulfilled",
            description: "Sensing you're not living up to your potential or aligning with your deeper values and aspirations."
          }
        ]
      }}
      reminder={{
        title: "Growth Is a Lifelong Journey",
        subtitle: "Seeking support for personal development isn't about fixing something broken—it's about investing in yourself and your future. Everyone can benefit from guidance in building confidence and creating a more meaningful life."
      }}
      expectations={{
        title: "What to Expect from Therapy",
        body: (
          <>
            <p className="mb-4">
              Your therapy will be tailored to your specific needs and circumstances. Calen Therapy offers different
              therapeutic approaches for building confidence and supporting personal development:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>With Helen:</strong> Helen can draw from:
                <ul className="list-disc pl-6 ">
                  <li><strong><Link href={routes.approaches.personCentered()} className="text-primary hover:underline hover:text-accent">Person-Centered therapy</Link></strong>, which creates a supportive environment to explore your authentic self and values</li>
                  <li><strong><Link href={routes.approaches.psychodynamic()} className="text-primary hover:underline hover:text-accent">Psychodynamic approaches</Link></strong> to identify and work through patterns that may be holding you back</li>
                  <li><strong><Link href={routes.approaches.cbt()} className="text-primary hover:underline hover:text-accent">Cognitive Behavioral techniques</Link></strong> to address self-critical thoughts and build confidence</li>
                  <li><strong><Link href={routes.approaches.lifeCoaching()} className="text-primary hover:underline hover:text-accent">Life Coaching</Link></strong>, which focuses on setting and achieving personal development goals with accountability and practical action steps</li>
                </ul>
              </li>
              <li className="mb-2"><strong>With Carl:</strong> <Link href={routes.approaches.hypnotherapy()} className="text-primary hover:underline hover:text-accent">Solution Focused Hypnotherapy</Link>, which can be particularly effective for confidence building:
                <ul className="list-disc pl-6 ">
                  <li>Emphasizing your strengths and resources rather than problems</li>
                  <li>Helping you envision and move toward your preferred future</li>
                  <li>Using relaxation and focused attention to address limiting beliefs and establish supportive mental patterns</li>
                </ul>
              </li>
            </ul>
            <p className="mb-4">
              Your therapy experience will be personalized to your goals, but may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Exploring your vision for personal growth and the confidence you'd like to develop</li>
              <li>Identifying limiting beliefs and patterns that have held you back</li>
              <li>Learning practical strategies to manage your inner critic and self-doubt</li>
              <li>Developing skills for assertiveness, boundary-setting, and authentic self-expression</li>
              <li>Building resilience to handle setbacks and challenges</li>
              <li>Clarifying personal values and creating a meaningful direction for growth</li>
              <li>Practicing new behaviors and perspectives in a supportive environment</li>
            </ul>
            <p>
              The focus will be on practical, positive change rather than dwelling on past difficulties. We provide a safe,
              non-judgmental space where you can explore your potential and develop greater confidence and self-belief.
            </p>
          </>
        )
      }}
      results={{
        title: "Your Path to Greater Confidence",
        intro: "While each person's journey is unique, therapy can help you achieve meaningful developments in confidence and personal growth:",
        shortTerm: [
          "Reduced self-criticism and increased self-compassion",
          "Greater awareness of your strengths and resources",
          "Initial experiences of speaking up for yourself and taking positive risks",
          "Clearer vision of your goals and personal values"
        ],
        longTerm: [
          "Sustainable confidence that comes from within rather than external validation",
          "Improved ability to handle challenges and setbacks resilently",
          "More authentic and satisfying relationships",
          "Greater alignment between your daily choices and deeper values"
        ],
        conclusion: "Building confidence and furthering your personal development is a transformative journey that affects every aspect of your life. With professional guidance and your commitment to growth, you can overcome limiting patterns, step into your potential, and create a life that feels genuinely fulfilling and authentic to who you are."
      }}
      cta={{
        title: "Ready to Build Your Confidence?",
        description: "Take the first step toward greater self-belief and personal growth."
      }}
    />
  );
}
