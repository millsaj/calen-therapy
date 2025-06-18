import { ApproachPage } from '../ApproachPage';
import { routes } from '@app/_config/routes';
import { buildMetadata } from '@app/_config/metadata';

export const metadata = buildMetadata({
  pageTitle: 'Person-Centered Therapy',
  description: 'Supportive person-centered therapy with experienced BACP therapists. Non-judgmental counselling focused on your growth, self-discovery and personal development.',
  additionalKeywords: ["client-centered therapy", "humanistic approach", "Carl Rogers", "self-discovery", "non-judgmental therapy", "unconditional positive regard", "empathic understanding"],
  path: routes.approaches.personCentered(),
});

export default function PersonCenteredPage() {
  return (
    <ApproachPage
      hero={{
        title: "Person-Centered Therapy",
        subtitle: "Creating a supportive environment for authentic growth and self-discovery"
      }}
      intro={{
        title: "What is Person-Centered Therapy?",
        body: (
          <>
            <p className='mb-4'>
              Person-Centered Therapy (also known as Client-Centered Therapy) is an approach developed by psychologist Carl Rogers that places you, the client, at the center of the therapeutic process. This humanistic approach is based on the belief that every person has the capacity for growth and self-understanding when provided with the right supportive conditions.
            </p>
            <p>
              Unlike approaches that position the therapist as an expert who diagnoses and directs treatment, Person-Centered Therapy emphasises a non-directive, empathetic relationship where you lead the way in your healing journey. The therapist creates a safe, accepting environment where you can explore your experiences and feelings without judgement, allowing your natural tendency toward growth and self-actualization to emerge.
            </p>
          </>
        )
      }}
      why={{
        title: "Why Person-Centered Therapy is Used",
        body: (
          <>
            <p className='mb-4'>
              Person-Centered Therapy is particularly valuable because it honors your unique experience and inner wisdom. Rather than imposing external interpretations or solutions, this approach empowers you to find your own path forward while feeling genuinely seen, heard, and accepted.
            </p>
            <p className='mb-4'>
              Helen completed her Person-Centered Therapy diploma in 2000 and has incorporated this humanistic approach into her practise for over two decades. Her extensive experience allows her to create the core conditions that Rogers identified as essential for therapeutic growth:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Unconditional positive regard—accepting you exactly as you are</li>
              <li>Empathic understanding—deeply comprehending your perspective and feelings</li>
              <li>Congruence—genuine, authentic presence in the therapeutic relationship</li>
              <li>Creates a space where you feel safe to explore painful or difficult experiences</li>
              <li>Respects your autonomy and capacity to direct your own growth</li>
            </ul>
          </>
        )
      }}
      signs={{
        title: "Signs Person-Centered Therapy Might Help You",
        subtitle: "Consider this approach if you recognise these patterns in your life",
        items: [
          {
            title: "Seeking Self-Understanding",
            description: "You want to develop a deeper understanding of yourself, your values, and your authentic desires in life."
          },
          {
            title: "Feeling Judged or Misunderstood",
            description: "You've felt that others don't truly understand or accept you, making it difficult to express your true self."
          },
          {
            title: "Low Self-Worth",
            description: "You struggle with feelings of inadequacy or the sense that your worth depends on meeting others' expectations."
          },
          {
            title: "Difficulty Making Decisions",
            description: "You find it hard to trust your own judgement or identify what you truly want amidst external pressures and opinions."
          },
          {
            title: "Personal Growth Focus",
            description: "You're interested in personal development and becoming more fully yourself rather than just addressing specific symptoms."
          },
          {
            title: "Previous Negative Therapy Experience",
            description: "You've found directive or highly structured therapeutic approaches uncomfortable or unhelpful in the past."
          }
        ]
      }}
      reminder={{
        title: "You Have the Capacity for Growth and Self-Understanding",
        subtitle: "Seeking a therapeutic relationship that honors your wisdom and supports your authentic development is a powerful investment in your wellbeing and potential."
      }}
      expectations={{
        title: "What to Expect from Person-Centered Therapy",
        body: (
          <>
            <p className='mb-4'>
              In Person-Centered Therapy with Helen, you'll experience a warm, accepting relationship where you are welcomed exactly as you are. Unlike more directive approaches, you won't receive specific techniques, homework assignments, or expert interpretations of your experiences.
            </p>
            <p className='mb-4'>
              During your sessions, you can expect:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The freedom to discuss whatever feels most important to you</li>
              <li>An attentive, empathetic presence that seeks to understand your unique perspective</li>
              <li>Genuinely accepting responses without judgement or conditions</li>
              <li>Reflective listening that helps clarify your feelings and experiences</li>
              <li>Respect for your pace and process without pressure to focus on specific topics</li>
            </ul>
            <p className='mb-4'>
              The therapeutic relationship itself is considered the primary catalyst for change. As you experience being truly heard and unconditionally accepted, you may find yourself able to explore aspects of your experience that previously felt too painful or shameful to acknowledge.
            </p>
            <p>
              Helen's extensive experience with Person-Centered Therapy allows her to create a deeply supportive environment while respecting your autonomy. Throughout the process, you'll be empowered to connect with your authentic self and discover your own solutions and direction.
            </p>
          </>
        )
      }}
      results={{
        title: "Benefits of Person-Centered Therapy",
        intro: "Person-Centered Therapy can lead to profound personal growth and meaningful life changes. While everyone's journey is unique, many people experience these valuable outcomes:",
        shortTerm: [
          "Feeling genuinely heard and understood, perhaps for the first time",
          "Relief from the pressure to present a 'false self' to be accepted",
          "Increased clarity about your feelings and experiences",
          "Safe exploration of difficult emotions in a supportive environment",
          "Growing trust in the therapeutic relationship"
        ],
        longTerm: [
          "Greater self-acceptance and reduced self-criticism",
          "Increased congruence between your inner experience and outward expression",
          "Improved ability to trust your own perceptions and make authentic choices",
          "More satisfying relationships based on genuine connection",
          "Enhanced resilience and capacity to process difficult experiences",
          "Development of your unique potential in alignment with your true self"
        ],
        conclusion: "The benefits of Person-Centered Therapy often extend far beyond the resolution of specific problems. By experiencing a relationship based on genuine acceptance and empathy, you develop a stronger connection with your authentic self and greater trust in your inner resources. This creates a foundation for continued growth and more fulfilling relationships throughout your life."
      }}
      cta={{
        title: "Ready to Begin Your Journey of Authentic Self-Discovery?",
        description: "Take the first step toward greater self-understanding and personal growth in a supportive, accepting environment. Contact us today to learn how Person-Centered Therapy with Helen can support your unique journey."
      }}
    />
  );
}
