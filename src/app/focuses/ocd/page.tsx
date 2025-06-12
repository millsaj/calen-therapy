import { routes } from '@/config/routes';
import { FocusPage } from '../FocusPage';
import Link from 'next/link';

export default function OCDPage() {
  return (
    <FocusPage
      hero={{
        title: "Obsessive-Compulsive Disorder",
        subtitle: "Finding freedom from intrusive thoughts and compulsive behaviors"
      }}
      intro={{
        title: "Understanding OCD",
        body: (
          <>
            <p className="mb-4">
              Obsessive-Compulsive Disorder (OCD) is characterized by unwanted, intrusive thoughts, images, or urges
              (obsessions) that cause significant distress, paired with repetitive behaviors or mental acts
              (compulsions) performed to reduce anxiety or prevent something bad from happening. Despite recognizing
              that these thoughts and behaviors are excessive, breaking free from the cycle can feel impossible
              without support.
            </p>
            <p>
              OCD can be remarkably complex and often misunderstood. While many associate it only with cleanliness or
              organisation, OCD can manifest in countless ways, often around a person's core values and greatest fears.
              With appropriate therapeutic interventions, however, people with OCD can experience significant relief
              and develop effective strategies for managing symptoms.
            </p>
          </>
        )
      }}
      common={{
        title: "More Common Than Many Realize",
        body: (
          <>
            <p className="mb-4">
              OCD affects approximately 2-3% of the population, making it one of the more common mental health
              conditions. It typically begins in childhood, adolescence, or early adulthood and can significantly
              impact quality of life if left untreated.
            </p>
            <p className="mb-4">
              OCD manifests in various forms, with common themes including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Contamination and cleaning</strong> - Fears of germs, disease, or contamination leading to excessive washing or cleaning rituals</li>
              <li><strong>Checking behaviors</strong> - Repeated checking of locks, appliances, or other items due to fears of harm or disaster</li>
              <li><strong>Symmetry and ordering</strong> - Need for things to be arranged in perfect order or symmetry, often with magical thinking about consequences</li>
              <li><strong>Intrusive thoughts</strong> - Disturbing, unwanted thoughts about harm, violence, or taboo subjects (sometimes called "Pure O")</li>
              <li><strong>Scrupulosity</strong> - Obsessions related to religious or moral concerns</li>
              <li><strong>Relationship OCD</strong> - Persistent doubt and reassurance-seeking about relationships</li>
            </ul>
            <p className="mb-4">
              Various factors may contribute to the development of OCD:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Neurobiological factors affecting brain circuitry</li>
              <li>Genetic predisposition</li>
              <li>Personality traits like perfectionism or heightened responsibility</li>
              <li>Stressful life events or trauma</li>
              <li>Learning and behavioral reinforcement</li>
            </ul>
            <p>
              Many people with OCD struggle silently for years before seeking help, often developing elaborate systems
              to manage their symptoms. However, with specialized therapeutic approaches, significant improvement
              is possible.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Therapy for OCD",
        subtitle: "Consider seeking professional support if you experience these patterns:",
        items: [
          {
            title: "Intrusive Thoughts",
            description: "Experiencing unwanted, disturbing thoughts, images, or urges that cause significant anxiety or distress."
          },
          {
            title: "Compulsive Behaviors",
            description: "Feeling compelled to perform certain actions, rituals, or mental acts to reduce anxiety or prevent something bad from happening."
          },
          {
            title: "Time Consumption",
            description: "Spending an hour or more daily engaged in obsessive thoughts or compulsive behaviors."
          },
          {
            title: "Interference with Life",
            description: "Finding that obsessions or compulsions significantly interfere with daily routine, work, relationships, or quality of life."
          },
          {
            title: "Distress When Prevented",
            description: "Experiencing intense anxiety when unable to complete rituals or when resisting compulsions."
          },
          {
            title: "Recognition of Irrationality",
            description: "Acknowledging that your obsessions or compulsions are excessive or unreasonable, yet feeling unable to stop them."
          }
        ]
      }}
      reminder={{
        title: "Relief from OCD Is Possible",
        subtitle: "Living with OCD can be exhausting and isolating, but with evidence-based treatment, significant improvement is possible. Many people with OCD experience substantial reduction in symptoms and improved quality of life through therapy. Seeking help is a courageous step toward reclaiming your freedom."
      }}
      expectations={{
        title: "What to Expect from Therapy",
        body: (
          <>
            <p className="mb-4">
              Your therapy will be tailored to your specific OCD symptoms and circumstances. Calen Therapy offers
              specialized approaches for treating OCD:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>With Helen:</strong> Helen's approach includes:
                <ul className="list-disc pl-6 ">
                  <li><strong><Link href={routes.styles.cbt()} className="text-primary hover:underline">Cognitive Behavioral Therapy (CBT)</Link></strong> - The gold standard treatment for OCD</li>
                  <li><strong>Exposure and Response Prevention (ERP)</strong> - A specialized form of CBT that is particularly effective for OCD</li>
                  <li><strong>Acceptance and Commitment Therapy (ACT)</strong> - Helping you relate differently to intrusive thoughts</li>
                  <li><strong>Metacognitive approaches</strong> - Changing how you respond to obsessive thoughts</li>
                </ul>
              </li>
              <li className="mb-2"><strong>With Carl:</strong> <Link href={routes.styles.hypnotherapy()} className="text-primary hover:underline">Solution Focused Hypnotherapy</Link> can complement OCD treatment by:
                <ul className="list-disc pl-6 ">
                  <li>Reducing overall anxiety and stress that can exacerbate OCD symptoms</li>
                  <li>Enhancing relaxation skills and developing coping strategies</li>
                  <li>Building motivation and confidence for engaging with ERP exercises</li>
                </ul>
              </li>
            </ul>
            <p className="mb-4">
              Your therapy experience for OCD may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Thorough assessment of your specific obsessions, compulsions, and their impact</li>
              <li>Education about how OCD works in the brain and the maintenance cycle</li>
              <li>Development of a hierarchy of triggering situations for gradual exposure work</li>
              <li>Graduated exposure exercises with prevention of compulsive responses</li>
              <li>Cognitive work to challenge unhelpful beliefs about thoughts and responsibility</li>
              <li>Mindfulness techniques for relating differently to intrusive thoughts</li>
              <li>Relapse prevention strategies for long-term management</li>
            </ul>
            <p>
              The goal of therapy isn't just symptom reduction but helping you develop a new relationship with
              uncertainty and intrusive thoughts. Both therapists provide a supportive, understanding environment
              where you can work at your own pace toward greater freedom from OCD.
            </p>
          </>
        )
      }}
      results={{
        title: "Your Path to Freedom from OCD",
        intro: "While everyone's recovery journey is unique, therapy for OCD typically produces meaningful improvements:",
        shortTerm: [
          "Better understanding of your OCD patterns and maintenance cycles",
          "Development of specific techniques to resist compulsions",
          "Initial success with managing anxiety without performing rituals",
          "Improved ability to recognize and label OCD thoughts"
        ],
        longTerm: [
          "Significant reduction in time spent on obsessions and compulsions",
          "Decreased distress when experiencing intrusive thoughts",
          "Greater ability to tolerate uncertainty and discomfort",
          "Freedom to engage in activities previously limited by OCD"
        ],
        conclusion: "Recovery from OCD isn't about eliminating intrusive thoughts entirely—it's about changing your relationship with these thoughts so they no longer control your behavior. With professional guidance and your commitment to the therapy process, you can learn to respond differently to OCD and reclaim your life. Many people with OCD experience substantial improvement and go on to live fulfilling lives with much greater freedom."
      }}
      cta={{
        title: "Ready to Take Control Back from OCD?",
        description: "Take the first step toward freedom from obsessions and compulsions."
      }}
    />
  );
}
