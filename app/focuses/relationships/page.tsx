import Link from 'next/link';
import { routes, buildMetadata } from '@app/_config';
import { FocusPage } from '../FocusPage';

export const metadata = buildMetadata({
  pageTitle: 'Relationship & Family Therapy Services',
  description: 'Specialized relationship counselling for couples, families and individuals. Professional support for communication issues, trust rebuilding, and conflict resolution.',
  additionalKeywords: ["couples counselling", "marriage therapy", "conflict resolution", "communication skills", "infidelity counselling", "attachment patterns", "relationship dynamics"],
  path: routes.focuses.relationships(),
});

export default function RelationshipsPage() {
  return (
    <FocusPage
      hero={{
        title: "Relationships & Family",
        subtitle: "Building stronger connections and resolving conflicts"
      }}
      intro={{
        title: "Understanding Relationship Challenges",
        body: (
          <>
            <p className="mb-4">
              Relationships are fundamental to human experience, bringing us joy, support, and connection. Yet they can
              also be sources of significant stress, conflict, and pain. Whether it's tension with a partner, difficulties
              in family dynamics, or patterns that repeat across different relationships, these challenges can affect every
              aspect of our lives.
            </p>
            <p>
              Relationship issues can stem from communication breakdowns, life transitions, trust violations, differing
              expectations, or unresolved past experiences. When these problems persist, they can lead to emotional
              distress, isolation, and a diminished sense of wellbeing. However, with professional support, relationships
              can heal, grow, and transform.
            </p>
          </>
        )
      }}
      common={{
        title: "Common Relationship Challenges",
        body: (
          <>
            <p className="mb-4">
              Every relationship faces difficulties at times. These challenges are normal and can often lead to growth
              when addressed constructively. Some common issues that bring people to therapy include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Communication patterns that lead to misunderstanding or conflict</li>
              <li>Recurring arguments that never seem to reach resolution</li>
              <li>Trust issues following infidelity or betrayal</li>
              <li>Navigating major life transitions such as parenthood, retirement, or loss</li>
              <li>Coping with blended family dynamics</li>
              <li>Disagreements about parenting approaches</li>
              <li>Managing relationships with extended family</li>
              <li>Cultural or value differences that create tension</li>
              <li>Balancing individual needs with relationship commitments</li>
            </ul>
            <p>
              Many people struggle with these issues for years before seeking help, but relationship therapy can provide
              valuable insights and strategies for creating healthier, more fulfilling connections.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Therapy",
        subtitle: "Consider seeking professional support if you notice these patterns:",
        items: [
          {
            title: "Communication Breakdown",
            description: "Conversations regularly devolve into arguments, misunderstandings, or silence."
          },
          {
            title: "Recurring Conflicts",
            description: "The same issues arise repeatedly without resolution, creating a sense of being stuck."
          },
          {
            title: "Emotional Distance",
            description: "Feeling disconnected, lonely, or like you're living separate lives despite being together."
          },
          {
            title: "Trust Erosion",
            description: "Experiencing difficulty trusting your partner or family member due to past events or ongoing issues."
          },
          {
            title: "Life Transition Strain",
            description: "Struggling to adapt to changes such as a new baby, retirement, empty nest, or health challenges."
          },
          {
            title: "Parenting Disagreements",
            description: "Conflicting approaches to raising children that create tension and undermine parental unity."
          }
        ]
      }}
      reminder={{
        title: "Seeking Help Shows Commitment",
        subtitle: "Reaching out for professional support isn't a sign that your relationship has failed—it demonstrates your dedication to understanding each other better and creating a healthier connection. Everyone faces relationship challenges, and seeking help is a positive, proactive step toward growth."
      }}
      expectations={{
        title: "What to Expect from Therapy",
        body: (
          <>
            <p className="mb-4">
              Your therapy will be tailored to your specific needs and circumstances. For relationship and family concerns,
              Helen brings comprehensive training:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>With Helen:</strong> Helen's qualifications in relationship therapy include:
                <ul className="list-disc pl-6 ">
                  <li><strong><Link href={routes.approaches.systemic()} className="text-primary hover:underline hover:text-accent">Systemic Therapy</Link></strong> - Examining how family systems, social contexts, and relationship patterns influence current challenges</li>
                  <li><strong><Link href={routes.approaches.psychodynamic()} className="text-primary hover:underline hover:text-accent">Psychodynamic Approaches</Link></strong> - Understanding how past experiences shape current relationship patterns</li>
                  <li><strong><Link href={routes.approaches.personCentered()} className="text-primary hover:underline hover:text-accent">Person-Centered Techniques</Link></strong> - Creating a supportive environment for exploring feelings and needs</li>
                  <li><strong><Link href={routes.approaches.show('lifecoaching')} className="text-primary hover:underline hover:text-accent">Life Coaching</Link></strong> - Developing clear goals and practical strategies for relationship growth</li>
                </ul>
              </li>
            </ul>
            <p className="mb-4">
              Your therapy experience may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Initial assessment of relationship patterns, strengths, and areas for growth</li>
              <li>Creating a safe environment where all parties feel heard and respected</li>
              <li>Exploring underlying patterns and dynamics that contribute to difficulties</li>
              <li>Learning and practicing effective communication strategies</li>
              <li>Addressing specific issues such as conflict resolution or rebuilding trust</li>
              <li>Developing personalized strategies for maintaining relationship health</li>
            </ul>
            <p>
              Depending on your situation, therapy may involve sessions with couples, families, or individuals.
              The focus is on creating lasting positive change while honoring each person's needs and perspectives.
              Helen's extensive experience with Relate and specialized training in couples and family therapy make
              her particularly well-equipped to help navigate complex relationship dynamics.
            </p>
          </>
        )
      }}
      results={{
        title: "Building Stronger Connections",
        intro: "While each relationship is unique, therapy can help you achieve meaningful improvements:",
        shortTerm: [
          "Improved communication and reduced conflict",
          "Better understanding of relationship patterns",
          "Development of practical strategies for managing differences",
          "Creation of a safe space to address difficult issues"
        ],
        longTerm: [
          "Deeper emotional intimacy and connection",
          "More effective problem-solving as a couple or family",
          "Greater resilience during challenging times",
          "Healthier patterns that benefit all relationships in your life"
        ],
        conclusion: "With commitment to the process and willingness to explore new perspectives, you can transform relationship challenges into opportunities for growth. The skills and insights gained through therapy can support not only your current relationships but also provide a foundation for healthier connections throughout your life."
      }}
      cta={{
        title: "Ready to Transform Your Relationships?",
        description: "Take the first step toward creating healthier, more fulfilling connections. Helen provides a supportive environment to help you develop the understanding and skills needed for lasting positive change."
      }}
    />
  );
}
