import { ApproachPage } from '../ApproachPage';
import { routes, buildMetadata } from '@app/_config';

export const metadata = buildMetadata({
  pageTitle: 'Psychodynamic Therapy',
  description: 'Professional psychodynamic therapy with 30+ years of experience. Explore past experiences to understand current behaviors and resolve deep-rooted emotional issues.',
  additionalKeywords: ["psychodynamic approach", "unconscious mind", "past experiences", "emotional insight", "deep-rooted issues", "long-term therapy", "Freudian therapy"],
  path: routes.approaches.psychodynamic(),
});

export default function PsychodynamicPage() {
  return (
    <ApproachPage
      hero={{
        title: "Psychodynamic Therapy",
        subtitle: "Exploring the unconscious mind to understand current behaviors and feelings"
      }}
      intro={{
        title: "What is Psychodynamic Therapy?",
        body: (
          <>
            <p className='mb-4'>
              Psychodynamic therapy is a therapeutic approach that focuses on understanding how your past experiences, particularly from childhood, influence your present thoughts, feelings, behaviors, and relationships. It operates on the principle that unconscious processes affect our current functioning and that insight into these processes can lead to growth and change.
            </p>
            <p>
              This approach helps you explore unresolved conflicts and patterns that may have roots in your past but continue to impact your present life. By bringing these unconscious factors into awareness, psychodynamic therapy offers you the opportunity to work through them and develop more effective ways of managing your emotions and relationships.
            </p>
          </>
        )
      }}
      why={{
        title: "Why Psychodynamic Therapy is Used",
        body: (
          <>
            <p className='mb-4'>
              Psychodynamic therapy is particularly valuable because it addresses the root causes of problems rather than just managing symptoms. By exploring the deeper meaning behind your thoughts, feelings, and behaviors, this approach helps create lasting change that extends beyond specific symptoms.
            </p>
            <p className='mb-4'>
              Helen brings over 30 years of experience to her psychodynamic practise, with post-graduate qualifications in Psychodynamic Psychotherapy, allowing her to help clients uncover the underlying causes of their challenges.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Helps reveal unconscious patterns that contribute to current difficulties</li>
              <li>Provides insight into how past experiences shape present reactions</li>
              <li>Addresses the root causes of problems rather than just symptoms</li>
              <li>Improves self-awareness and emotional regulation</li>
              <li>Fosters deeper and more satisfying relationships</li>
            </ul>
          </>
        )
      }}
      signs={{
        title: "Signs Psychodynamic Therapy Might Help You",
        subtitle: "Consider this approach if you recognise these patterns in your life",
        items: [
          {
            title: "Recurring Patterns",
            description: "You find yourself repeating the same problematic patterns in relationships or behaviors despite your best efforts to change."
          },
          {
            title: "Unexplained Emotional Reactions",
            description: "You experience emotional responses that seem disproportionate to situations or triggered without clear reasons."
          },
          {
            title: "Persistent Inner Conflicts",
            description: "You struggle with internal contradictions, such as wanting intimacy yet pushing people away."
          },
          {
            title: "Unresolved Grief or Loss",
            description: "You have difficulty moving forward after significant losses or traumatic experiences from your past."
          },
          {
            title: "Self-Sabotaging Behaviors",
            description: "You engage in behaviors that undermine your goals and happiness, often without understanding why."
          },
          {
            title: "Identity or Self-Worth Issues",
            description: "You struggle with questions about who you are or feelings of persistent emptiness or worthlessness."
          }
        ]
      }}
      reminder={{
        title: "Exploring Your Past Can Transform Your Future",
        subtitle: "Seeking to understand the deeper influences on your thoughts and feelings is a courageous step toward authentic personal growth and emotional freedom."
      }}
      expectations={{
        title: "What to Expect from Psychodynamic Therapy",
        body: (
          <>
            <p className='mb-4'>
              In psychodynamic therapy sessions with Helen, you'll be encouraged to speak freely about whatever comes to mind—your thoughts, feelings, dreams, and memories. This process, sometimes called free association, helps uncover unconscious patterns and meanings.
            </p>
            <p className='mb-4'>
              During your sessions, you can expect:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>A safe, non-judgmental space to explore your inner experience</li>
              <li>Thoughtful questions that help connect past experiences to present challenges</li>
              <li>Exploration of patterns in your relationships, including the therapeutic relationship</li>
              <li>Attention to dreams, fantasies, and seemingly random thoughts that may hold significance</li>
              <li>Gradual development of insight into unconscious motivations and conflicts</li>
            </ul>
            <p>
              The therapeutic relationship itself often becomes an important focus, as patterns from your other relationships may emerge in how you relate to your therapist. This provides valuable opportunities to recognise and work through longstanding patterns. Helen will work collaboratively with you, providing support as you gain insights and begin to make meaningful changes in your life.
            </p>
          </>
        )
      }}
      results={{
        title: "Benefits of Psychodynamic Therapy",
        intro: "Psychodynamic therapy offers profound and lasting benefits that continue to develop even after therapy ends. While everyone's journey is unique, many people experience these positive outcomes:",
        shortTerm: [
          "Increased self-awareness and understanding of your emotions",
          "Recognition of patterns in relationships and behaviors",
          "Relief from immediate psychological distress",
          "Development of a vocabulary for expressing complex feelings",
          "A sense of being deeply understood, perhaps for the first time"
        ],
        longTerm: [
          "Lasting personality changes that go beyond symptom relief",
          "Greater freedom from longstanding patterns and conflicts",
          "Enhanced capacity for meaningful relationships",
          "Improved ability to recognise and regulate emotions",
          "More authentic sense of self and personal identity",
          "Increased resilience in facing life challenges"
        ],
        conclusion: "Research shows that the benefits of psychodynamic therapy continue to grow after therapy ends, as the self-reflective capacity you develop becomes integrated into your daily life. This approach doesn't just help you solve current problems—it provides you with insights and emotional tools that continue to serve you throughout your life."
      }}
      cta={{
        title: "Ready to Explore the Deeper Influences on Your Life?",
        description: "Take the first step toward understanding yourself more fully and breaking free from limiting patterns. Contact us today to learn how psychodynamic therapy with Helen can help you create lasting positive change."
      }}
    />
  );
}
