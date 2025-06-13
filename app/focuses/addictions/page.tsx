import Link from 'next/link';
import { routes } from '@app/_config/routes';
import { FocusPage } from '../FocusPage';

export default function AddictionsPage() {
  return (
    <FocusPage
      hero={{
        title: "Addictions & Habits",
        subtitle: "Breaking free from unwanted patterns and reclaiming control"
      }}
      intro={{
        title: "Understanding Addictions & Habits",
        body: (
          <>
            <p className="mb-4">
              Addictions and problematic habits are patterns of behavior that can feel extremely difficult to control
              despite negative consequences. They can involve substances like alcohol or drugs, or behaviors such as
              gambling, gaming, or other compulsive activities. What often begins as a way to cope, feel pleasure,
              or escape discomfort can develop into a cycle that significantly impacts your wellbeing.
            </p>
            <p>
              These patterns aren't simply about willpower or moral failing. They involve complex changes in the brain's
              reward and motivation systems, alongside psychological, social, and sometimes genetic factors. Though
              challenging, recovery is absolutely possible with the right support and approaches that address not just
              the behaviors themselves but also the underlying issues and triggers.
            </p>
          </>
        )
      }}
      common={{
        title: "More Common Than You Might Think",
        body: (
          <>
            <p className="mb-4">
              Addiction and problematic habits affect millions of people worldwide, yet many suffer in silence due to
              shame, stigma, or fear of judgment. These patterns can develop for various reasons:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Attempts to manage stress, anxiety, or emotional pain</li>
              <li>Neurobiological vulnerabilities and genetic factors</li>
              <li>Environmental influences and early life experiences</li>
              <li>Social and peer pressures</li>
              <li>Gradual habituation to substances or behaviors</li>
              <li>Co-occurring mental health conditions like depression or anxiety</li>
              <li>Life transitions or challenges that overwhelm usual coping mechanisms</li>
            </ul>
            <p className="mb-4">
              Addictions and compulsive habits can include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Alcohol dependency</li>
              <li>Drug use (prescription or recreational)</li>
              <li>Gambling</li>
              <li>Internet or gaming addiction</li>
              <li>Compulsive shopping or spending</li>
              <li>Food-related issues</li>
              <li>Other behavioral patterns that feel out of control</li>
            </ul>
            <p>
              Whatever your specific experience, healing is possible. Many people have transformed their relationship
              with addictive substances or behaviors and built fulfilling lives in recovery.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Therapy",
        subtitle: "Consider seeking professional support if you experience these patterns:",
        items: [
          {
            title: "Loss of Control",
            description: "Using substances or engaging in behaviors more frequently or intensely than intended."
          },
          {
            title: "Continued Despite Consequences",
            description: "Maintaining the pattern despite negative effects on health, relationships, work, or other areas of life."
          },
          {
            title: "Preoccupation",
            description: "Spending significant time thinking about, engaging in, or recovering from the behavior or substance use."
          },
          {
            title: "Tolerance",
            description: "Needing more of the substance or behavior to achieve the same effect."
          },
          {
            title: "Withdrawal Symptoms",
            description: "Experiencing physical or psychological discomfort when unable to engage in the behavior or use the substance."
          },
          {
            title: "Failed Attempts to Stop",
            description: "Making repeated unsuccessful efforts to cut down or control the pattern."
          }
        ]
      }}
      reminder={{
        title: "Recovery Is Possible",
        subtitle: "Seeking help for addictions or problematic habits isn't a sign of weakness but a courageous step toward reclaiming your life and wellbeing. Many people successfully overcome these challenges with appropriate support."
      }}
      expectations={{
        title: "What to Expect from Therapy",
        body: (
          <>
            <p className="mb-4">
              Your therapy will be tailored to your specific needs and circumstances. Calen Therapy offers different
              therapeutic approaches for addictions and problematic habits:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>With Helen:</strong> Helen's approach includes:
                <ul className="list-disc pl-6 ">
                  <li><strong><Link href={routes.styles.psychodynamic()} className="text-primary hover:underline">Psychodynamic therapy</Link></strong> to explore underlying patterns and triggers for addictive behaviors</li>
                  <li><strong><Link href={routes.styles.cbt()} className="text-primary hover:underline">Cognitive Behavioral techniques</Link></strong> to address thought patterns and develop coping strategies</li>
                  <li>Specialized training in sex addiction (2017 diploma)</li>
                </ul>
              </li>
              <li className="mb-2"><strong>With Carl:</strong> <Link href={routes.styles.hypnotherapy()} className="text-primary hover:underline">Solution-Focused Hypnotherapy</Link>, which can be particularly effective for habits and patterns by:
                <ul className="list-disc pl-6 ">
                  <li>Identifying goals for change and building on your existing strengths and resources</li>
                  <li>Using relaxation and focused attention to access subconscious patterns</li>
                  <li>Creating new neural pathways for healthier responses</li>
                </ul>
              </li>
            </ul>
            <p className="mb-4">
              Your therapy experience will be personalized but may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Assessment of your specific patterns and their impact on your life</li>
              <li>Exploration of the functions these behaviors serve and healthier alternatives</li>
              <li>Development of personalized strategies to interrupt unwanted patterns</li>
              <li>Building motivation and confidence for change</li>
              <li>Learning relaxation and stress management techniques</li>
              <li>Addressing any underlying issues fueling the addictive pattern</li>
              <li>Creating a sustainable plan for maintaining positive changes</li>
            </ul>
            <p>
              The goal isn't just to stop problematic behaviors but to help you build a fulfilling life that supports
              your wellbeing. Therapy provides tools and insights to make lasting change possible.
            </p>
          </>
        )
      }}
      results={{
        title: "Your Path to Freedom",
        intro: "While everyone's recovery journey is unique, therapy can help you achieve meaningful improvements:",
        shortTerm: [
          "Better understanding of your addictive patterns and triggers",
          "Development of initial coping strategies and tools",
          "Reduced shame and increased hope for change",
          "Early successes in modifying behaviors"
        ],
        longTerm: [
          "Sustainable change in your relationship with addictive substances or behaviors",
          "Improved physical and mental wellbeing",
          "Healthier relationships and social connections",
          "Greater sense of control and freedom in your life"
        ],
        conclusion: "Recovery isn't just about stopping problematic behaviors—it's about creating a life that supports your wellbeing and fulfills your deeper needs. With professional guidance and your commitment to change, you can break free from unwanted patterns and build a more satisfying future."
      }}
      cta={{
        title: "Ready to Break Free?",
        description: "Take the first step toward freedom from unwanted habits and addictions. Carl provides supportive, solution-focused therapy to help you create positive, lasting change."
      }}
    />
  );
}
