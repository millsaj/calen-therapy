import Link from 'next/link';
import { routes } from '@app/_config/routes';
import { FocusPage } from '../FocusPage';

export default function SexAddictionPage() {
  return (
    <FocusPage
      hero={{
        title: "Sex Addiction",
        subtitle: "Understanding compulsive sexual behavior and finding a path to recovery"
      }}
      intro={{
        title: "Understanding Sex Addiction",
        body: (
          <>
            <p className="mb-4">
              Sex addiction, also known as compulsive sexual behavior disorder, is characterized by persistent,
              uncontrollable sexual urges and behaviors that negatively impact one's life. It can manifest in various
              forms, including excessive pornography use, masturbation, multiple affairs, paying for sexual services,
              or other sexual behaviors that feel out of control.
            </p>
            <p>
              While not officially recognized in all diagnostic manuals, many mental health professionals acknowledge
              that these patterns can significantly disrupt relationships, careers, and overall well-being—similar to
              other addiction patterns.
            </p>
          </>
        )
      }}
      common={{
        title: "It's More Common Than People Think",
        body: (
          <>
            <p className="mb-4">
              In our increasingly digital world, access to sexual content and connections has never been easier.
              This accessibility is one of the factors contributing to the rising prevalence of sex addiction:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Unprecedented access to pornography and online sexual content</li>
              <li>Dating apps and social media creating new pathways for sexual connections</li>
              <li>Childhood trauma or adverse experiences affecting healthy sexual development</li>
              <li>Co-occurring mental health issues like depression, anxiety, or ADHD</li>
              <li>Societal pressures and expectations around sexuality</li>
              <li>Biological factors and genetic predispositions to addictive behavior</li>
            </ul>
            <p>
              Many people struggling with sexual compulsions feel isolated, but these challenges are far more
              common than typically discussed in open conversation.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Therapy",
        subtitle: "Consider seeking professional support if you recognize these patterns in your life:",
        items: [
          {
            title: "Feeling Out of Control",
            description: "Sexual urges and behaviors feel overwhelming and impossible to manage despite your best efforts."
          },
          {
            title: "Secrecy and Shame",
            description: "You're hiding your sexual activities, lying to loved ones, and experiencing deep shame about your behaviors."
          },
          {
            title: "Escalating Patterns",
            description: "You need more intense or frequent sexual experiences to achieve the same level of satisfaction."
          },
          {
            title: "Relationship Damage",
            description: "Your sexual behaviors have harmed your relationships or led to relationship breakdown."
          },
          {
            title: "Work or Financial Impact",
            description: "Sexual activities are affecting your job performance or causing financial problems."
          },
          {
            title: "Failed Attempts to Stop",
            description: "You've tried to cut back or stop certain sexual behaviors but have been unable to sustain changes."
          }
        ]
      }}
      reminder={{
        title: "Seeking Help Is a Sign of Strength",
        subtitle: "Everyone needs support sometimes. Reaching out for help with sex or porn addiction isn't a sign of weakness—it's a courageous step toward reclaiming control of your life and building healthier relationships with yourself and others."
      }}
      expectations={{
        title: "What to Expect from Therapy",
        body: (
          <>
            <p className="mb-4">
              Your therapy will be tailored to your specific needs and circumstances. For sex addiction,
              Helen brings specialized training:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>With Helen:</strong> Helen holds a specialized diploma in sex addiction (2017)
              and draws from multiple therapeutic approaches:
                <ul className="list-disc pl-6 ">
                  <li><strong><Link href={routes.styles.psychodynamic()} className="text-primary hover:underline">Psychodynamic therapy</Link></strong> to uncover underlying patterns and past experiences that may contribute to compulsive sexual behaviors</li>
                  <li><strong><Link href={routes.styles.cbt()} className="text-primary hover:underline">Cognitive Behavioral Therapy (CBT)</Link></strong> to address unhelpful thought patterns and develop new coping skills</li>
                  <li><strong><Link href={routes.styles.systemic()} className="text-primary hover:underline">Systemic therapy</Link></strong> to examine how relationships and social contexts influence behaviors and recovery</li>
                  <li><strong><Link href={routes.styles.show('trauma-informed')} className="text-primary hover:underline">Trauma-informed approaches</Link></strong> to address any past experiences that may be connected to current patterns</li>
                </ul>
              </li>
            </ul>
            <p className="mb-4">
              Your treatment journey typically includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Thorough assessment and personalized treatment planning</li>
              <li>Education about addiction patterns and triggers</li>
              <li>Skills development for managing urges and developing healthier sexual expression</li>
              <li>Addressing shame and building self-compassion</li>
              <li>Strategies for rebuilding trust in relationships</li>
              <li>Creating a sustainable long-term recovery plan</li>
            </ul>
            <p>
              Recovery isn't about eliminating sexuality from your life but developing a healthier
              relationship with it—one that aligns with your values and enhances rather than
              diminishes your quality of life and relationships. Helen's extensive experience and specialized
              training make her particularly well-equipped to support your recovery journey.
            </p>
          </>
        )
      }}
      results={{
        title: "Your Path to Recovery",
        intro: "While recovery from sex addiction is a journey rather than a destination, therapy can help you achieve meaningful improvements in many areas of your life:",
        shortTerm: [
          "Better understanding of your triggers and patterns",
          "Developing initial coping strategies for urges",
          "Reduced shame and increased self-compassion",
          "Beginning to rebuild trust with loved ones"
        ],
        longTerm: [
          "Healthier relationship with sexuality",
          "Deeper, more authentic connections with others",
          "Improved overall mental health and well-being",
          "Greater life satisfaction and sense of purpose"
        ],
        conclusion: "Recovery is not about perfection but progress. With professional support and your commitment to change, you can develop a healthier relationship with sexuality and experience greater freedom in your life."
      }}
      cta={{
        title: "Ready to Take the First Step?",
        description: "Helen provides confidential, non-judgmental support for sexual addiction and compulsions. You don't have to face this alone."
      }}
    />
  );
}

