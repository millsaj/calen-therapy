import { routes } from '@app/_config/routes';
import { FocusPage } from '../FocusPage';
import Link from 'next/link';
import { buildMetadata } from '@app/_config/metadata';

export const metadata = buildMetadata({
  title: 'Phobias',
  url: routes.focuses.phobias(),
});

export default function PhobiasPage() {
  return (
    <FocusPage
      hero={{
        title: "Phobias",
        subtitle: "Finding freedom from fear and avoidance"
      }}
      intro={{
        title: "Understanding Phobias",
        body: (
          <>
            <p className="mb-4">
              Phobias are intense, persistent fears of specific objects, situations, or activities that are out of
              proportion to actual danger. These fears often lead to significant distress and avoidance behaviors
              that can restrict your life in meaningful ways. When confronted with the feared object or situation,
              you may experience immediate anxiety that can sometimes escalate to panic attacks.
            </p>
            <p>
              While avoidance might provide temporary relief, it ultimately reinforces and strengthens the fear.
              This cycle can lead to increasing limitations in your daily life. However, with appropriate therapeutic
              approaches, phobias can be effectively treated, allowing you to regain freedom and confidence.
            </p>
          </>
        )
      }}
      common={{
        title: "More Common Than Many Realize",
        body: (
          <>
            <p className="mb-4">
              Phobias are among the most common anxiety disorders, affecting approximately 10% of people at some point
              in their lives. They typically develop in childhood or early adulthood and can persist if left untreated.
            </p>
            <p className="mb-4">
              Phobias typically fall into three main categories:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Specific phobias</strong> - fears of particular objects or situations such as:
                <ul className="list-disc pl-6 mb-2">
                  <li>Animals (spiders, dogs, snakes)</li>
                  <li>Natural environment (heights, storms, water)</li>
                  <li>Blood-injection-injury (needles, blood, medical procedures)</li>
                  <li>Situational (flying, elevators, enclosed spaces)</li>
                </ul>
              </li>
              <li><strong>Social phobia/anxiety</strong> - fear of social situations where embarrassment or judgment might occur</li>
              <li><strong>Agoraphobia</strong> - fear of places or situations where escape might be difficult or help unavailable</li>
            </ul>
            <p className="mb-4">
              Various factors can contribute to the development of phobias:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Traumatic experiences directly related to the feared object/situation</li>
              <li>Observing others displaying fear (especially parents during childhood)</li>
              <li>Informational transmission - learning about dangers through others or media</li>
              <li>Genetic predisposition to anxiety sensitivity</li>
              <li>Neurobiological factors affecting fear processing</li>
            </ul>
            <p>
              Many people live with phobias for years, developing elaborate strategies to avoid triggers. However,
              these conditions respond exceptionally well to therapeutic intervention, often with significant improvement
              in a relatively short time.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Therapy for Phobias",
        subtitle: "Consider seeking professional support if you experience these patterns:",
        items: [
          {
            title: "Intense Fear Response",
            description: "Experiencing overwhelming anxiety, panic, or terror when confronted with the feared object or situation."
          },
          {
            title: "Persistent Avoidance",
            description: "Going out of your way to avoid specific objects, situations, or places due to fear."
          },
          {
            title: "Recognition of Excessiveness",
            description: "Understanding that your fear is excessive or unreasonable, yet feeling unable to control it."
          },
          {
            title: "Physical Symptoms",
            description: "Experiencing symptoms like rapid heartbeat, shortness of breath, sweating, or trembling when confronted with phobic triggers."
          },
          {
            title: "Life Limitations",
            description: "Finding that your fear significantly restricts your activities, travel, career opportunities, or social engagement."
          },
          {
            title: "Anticipatory Anxiety",
            description: "Spending excessive time worrying about encountering the feared object or situation."
          }
        ]
      }}
      reminder={{
        title: "Freedom from Fear Is Possible",
        subtitle: "Living with phobias can be exhausting and isolating, but these conditions respond exceptionally well to appropriate therapeutic approaches. With professional support, you can learn to manage anxiety and reclaim freedom in your life. Remember that seeking help is a sign of courage, not weakness."
      }}
      expectations={{
        title: "What to Expect from Therapy",
        body: (
          <>
            <p className="mb-4">
              Your therapy will be tailored to your specific needs and phobia type. Calen Therapy offers different
              therapeutic approaches for addressing phobias:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>With Helen:</strong> Helen's approach includes:
                <ul className="list-disc pl-6 ">
                  <li><strong><Link href={routes.approaches.cbt()} className="text-primary hover:underline hover:text-accent">Cognitive Behavioral Therapy (CBT)</Link></strong> - Evidence-based approach specifically developed for phobias</li>
                  <li><strong>Exposure Therapy</strong> - Gradual, controlled exposure to feared stimuli to reduce anxiety responses</li>
                  <li><strong><Link href={routes.approaches.psychodynamic()} className="text-primary hover:underline hover:text-accent">Psychodynamic elements</Link></strong> - Exploring underlying patterns that may contribute to phobic responses</li>
                </ul>
              </li>
              <li className="mb-2"><strong>With Carl:</strong> <Link href={routes.approaches.hypnotherapy()} className="text-primary hover:underline hover:text-accent">Solution Focused Hypnotherapy</Link> can be particularly effective for phobias by:
                <ul className="list-disc pl-6 ">
                  <li>Helping you access a relaxed state where the mind is more receptive to change</li>
                  <li>Creating new associations with feared stimuli through visualization and suggestion</li>
                  <li>Focusing on solutions and developing a positive vision for life beyond phobias</li>
                </ul>
              </li>
            </ul>
            <p className="mb-4">
              Your therapy experience for phobias may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Thorough assessment of your specific phobia and its impact on your life</li>
              <li>Education about how fear and anxiety work in the brain</li>
              <li>Development of relaxation and anxiety management techniques</li>
              <li>Gradual, controlled exposure to feared situations (always at your pace and with your consent)</li>
              <li>Challenging unhelpful thoughts and beliefs about the feared object or situation</li>
              <li>Building confidence through successful experiences</li>
            </ul>
            <p>
              The goal of therapy isn't just to reduce symptoms but to help you build confidence in your ability to
              face fears and live without unnecessary restrictions. Both therapists provide a supportive, understanding
              environment where you can work at your own pace toward greater freedom.
            </p>
          </>
        )
      }}
      results={{
        title: "Your Path to Freedom from Phobias",
        intro: "While everyone's journey is unique, therapy for phobias typically produces significant improvements:",
        shortTerm: [
          "Better understanding of your fear patterns and triggers",
          "Effective techniques to manage anxiety symptoms in the moment",
          "Initial successes with facing feared situations in controlled ways",
          "Reduction in anticipatory anxiety"
        ],
        longTerm: [
          "Significant decrease in fear intensity when confronting phobic triggers",
          "Freedom to engage in previously avoided activities and situations",
          "Elimination of avoidance behaviors that restrict your life",
          "Skills to manage any future fear responses independently"
        ],
        conclusion: "Recovery from phobias is not about eliminating anxiety entirely—it's about changing your relationship with fear so it no longer controls your choices. With professional guidance and your commitment to the process, you can develop the confidence to face fears and live a life based on your values rather than avoidance."
      }}
      cta={{
        title: "Ready to Overcome Your Phobias?",
        description: "Take the first step toward freedom from fear."
      }}
    />
  );
}
