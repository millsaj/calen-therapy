import { ApproachPage } from '../ApproachPage';
import { routes } from '@app/_config/routes';
import { buildMetadata } from '@app/_config/metadata';

export const metadata = buildMetadata({
  title: 'Systemic',
  url: routes.approaches.systemic(),
});

export default function SystemicPage() {
  return (
    <ApproachPage
      hero={{
        title: "Systemic Therapy",
        subtitle: "Understanding relationships and patterns in your life systems"
      }}
            intro={{
              title: "What is Systemic Therapy?",
              body: (
                <>
                  <p className='mb-4'>
                    Systemic therapy is an approach that focuses on understanding people in relationships and dealing with the interactions of groups. It addresses problems in the context of the various systems and relationships in which people are embedded, including families, communities, and organisations.
                  </p>
                  <p>
                    Rather than focusing solely on the individual, systemic therapy explores the dynamics between people and how these interactions contribute to difficulties or provide resources for solutions. This therapy helps identify and modify unhelpful patterns of relating and communicating that might be maintaining problems.
                  </p>
                </>
        )
      }}
      why={{
        title: "Why Systemic Therapy is Used",
        body: (
          <>
            <p className='mb-4'>
              Systemic therapy is particularly valuable because it recognizes that we exist within interconnected networks of relationships that significantly influence our thoughts, feelings, and behaviors. By addressing these systems, this approach can create more sustainable and widespread positive change.
            </p>
            <p className='mb-4'>
              Helen holds a Post Graduate qualification in Systemic Therapy and has extensive experience as a Relate practitioner, working with families, couples, and individuals for over 30 years. This background provides her with deep insight into how relationship patterns influence wellbeing.
            </p>
            <p className='mb-4'>
              This approach is effective for a wide range of issues including family conflicts, couple difficulties, communication problems, life transitions, and situations where individual problems seem connected to broader relational patterns. Systemic therapy helps create shifts in these patterns, opening up new possibilities for all involved.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Helps identify how relationship patterns influence individual problems</li>
              <li>Explores different perspectives and experiences within a system</li>
              <li>Creates space for all voices to be heard and understood</li>
              <li>Focuses on strengths and resources within relationships</li>
              <li>Addresses both current interactions and historical patterns</li>
            </ul>
          </>
        )
      }}
      signs={{
        title: "Signs Systemic Therapy Might Help You",
        subtitle: "Consider this approach if you recognize these patterns in your life",
        items: [
          {
            title: "Recurring Relationship Conflicts",
            description: "You find yourself in repeated arguments or conflicts with family members, partners, or colleagues that follow predictable patterns."
          },
          {
            title: "Family Difficulties",
            description: "Your family is experiencing challenges related to communication, life transitions, parenting issues, or unresolved tensions."
          },
          {
            title: "Life Transition Struggles",
            description: "Major life changes like marriage, divorce, births, deaths, or career shifts are creating friction in your important relationships."
          },
          {
            title: "Communication Breakdowns",
            description: "You struggle to express yourself effectively or feel consistently misunderstood by others in your life."
          },
          {
            title: "Intergenerational Patterns",
            description: "You notice that certain behaviors, problems, or relationship dynamics seem to repeat across generations in your family."
          },
          {
            title: "Feeling Stuck in Roles",
            description: "You feel locked into particular roles or ways of behaving in your relationships that no longer serve you well."
          }
        ]
      }}
      reminder={{
        title: "Everyone Can Benefit from Understanding Their Systems",
        subtitle: "Seeking help to improve your relationships and understand the systems you're part of is a sign of strength and commitment to your wellbeing and the wellbeing of those around you."
      }}
      expectations={{
        title: "What to Expect from Systemic Therapy",
        body: (
          <>
            <p className='mb-4'>
              In systemic therapy sessions, the focus will be on exploring the relationships and contexts that are significant in your life. This might include examining family dynamics, workplace relationships, friendships, or your broader community connections.
            </p>
            <p className='mb-4'>
              During sessions, you can expect:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Questions that help uncover patterns and dynamics in your relationships</li>
              <li>Exploration of multiple perspectives on situations</li>
              <li>Attention to how problems developed and are maintained in your systems</li>
              <li>Focus on strengths and resources within your relationships</li>
              <li>Consideration of cultural, social, and historical contexts</li>
            </ul>
            <p>
              Sometimes sessions might involve multiple family members or significant others, though this isn't always necessary. Helen will work collaboratively with you to determine the most helpful approach. Throughout the process, you'll be supported to recognize patterns, experiment with new ways of relating, and develop more fulfilling relationships.
            </p>
          </>
        )
      }}
      results={{
        title: "Benefits of Systemic Therapy",
        intro: "Engaging in systemic therapy can lead to meaningful improvements in your relationships and personal wellbeing. While everyone's experience is unique, many people experience the following benefits:",
        shortTerm: [
          "Improved communication with family members, partners, or colleagues",
          "Greater understanding of relationship patterns and dynamics",
          "Ability to see situations from multiple perspectives",
          "Relief from immediate relationship tensions or conflicts",
          "New insights into how problems are maintained in your systems"
        ],
        longTerm: [
          "More satisfying and supportive relationships",
          "Increased flexibility in roles and interactions",
          "Breaking of unhelpful intergenerational patterns",
          "Greater resilience during life transitions and challenges",
          "Enhanced ability to navigate complex relationship dynamics",
          "Development of sustainable relationship skills that benefit all life areas"
        ],
        conclusion: "The benefits of systemic therapy often ripple outward, positively affecting not just the immediate issue but creating improvements across your relationships and systems. By changing patterns rather than just addressing symptoms, systemic therapy helps create lasting positive change."
      }}
      cta={{
        title: "Ready to Explore Your Relationship Patterns?",
        description: "Take the first step toward more fulfilling relationships and understanding the systems that shape your life. Contact us today to learn more about how systemic therapy with Helen can help you create positive change."
      }}
    />
  );
}

