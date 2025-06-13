import { StylePage } from '../StylePage';

export default function CbtPage() {
  return (
    <StylePage
      hero={{
        title: "Cognitive Behavioral Therapy (CBT)",
        subtitle: "Transforming negative thinking patterns to improve your emotional wellbeing"
      }}
      intro={{
        title: "What is Cognitive Behavioral Therapy?",
        body: (
          <>
            <p className='mb-4'>
              Cognitive Behavioral Therapy (CBT) is a practical, evidence-based approach that focuses on how your thoughts, beliefs, and attitudes affect your feelings and behavior. This therapeutic method is based on the concept that our thoughts, feelings, physical sensations, and actions are interconnected, and that negative patterns in these areas can trap us in a cycle of unhelpful behaviors and emotional distress.
            </p>
            <p>
              CBT provides practical tools to help you identify and challenge negative thinking patterns and beliefs, develop more balanced perspectives, and learn new behaviors that improve your mood and effectiveness in daily life. Unlike some therapeutic approaches that focus extensively on the past, CBT primarily addresses current problems and is goal-oriented, focusing on specific challenges you're facing right now.
            </p>
          </>
        )
      }}
      why={{
        title: "Why Cognitive Behavioral Therapy is Used",
        body: (
          <>
            <p className='mb-4'>
              CBT is one of the most widely researched and effective therapeutic approaches, with strong evidence supporting its use for a wide range of mental health concerns and life challenges. Its practical, structured approach makes it particularly valuable because it equips you with specific skills and techniques you can use throughout your life.
            </p>
            <p className='mb-4'>
              Helen completed her CBT diploma in 2023, adding this powerful approach to her extensive therapeutic toolkit. With over 30 years of experience and multiple therapeutic qualifications, she skillfully integrates CBT techniques with other approaches when appropriate to provide personalized support for your unique situation.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Helps you identify and challenge distorted thinking patterns</li>
              <li>Provides practical strategies for managing difficult emotions</li>
              <li>Teaches specific skills you can continue using after therapy ends</li>
              <li>Focuses on achieving measurable improvements in your wellbeing</li>
              <li>Can be effectively combined with other therapeutic approaches</li>
            </ul>
          </>
        )
      }}
      signs={{
        title: "Signs Cognitive Behavioral Therapy Might Help You",
        subtitle: "Consider this approach if you recognize these patterns in your life",
        items: [
          {
            title: "Persistent Negative Thinking",
            description: "You experience recurring negative thoughts that are hard to control and impact your mood and confidence."
          },
          {
            title: "Anxiety & Worry",
            description: "You struggle with excessive worry, fears, or anxiety that interfere with your daily activities or enjoyment of life."
          },
          {
            title: "Depression",
            description: "You feel persistent sadness, hopelessness, or lack of interest in activities you once enjoyed."
          },
          {
            title: "Managing Strong Emotions",
            description: "You find it difficult to regulate your emotional responses in certain situations."
          },
          {
            title: "Unhelpful Behavioral Patterns",
            description: "You engage in behaviors that provide short-term relief but create longer-term problems (avoidance, procrastination, etc.)."
          },
          {
            title: "Low Self-Esteem",
            description: "You struggle with persistent self-criticism, perfectionism, or feelings of inadequacy."
          }
        ]
      }}
      reminder={{
        title: "You Can Change How You Think and Feel",
        subtitle: "Seeking help to develop healthier thinking patterns and coping strategies is a powerful step toward improving your quality of life and emotional wellbeing."
      }}
      expectations={{
        title: "What to Expect from Cognitive Behavioral Therapy",
        body: (
          <>
            <p className='mb-4'>
              CBT with Helen is a collaborative, structured approach that involves working together to understand and address your specific challenges. The process is active and practical, focusing on developing concrete skills you can apply in your daily life.
            </p>
            <p className='mb-4'>
              During your sessions, you can expect:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Collaborative goal-setting to ensure therapy addresses your priorities</li>
              <li>Education about how thoughts influence emotions and behaviors</li>
              <li>Identification of specific thought patterns that contribute to your difficulties</li>
              <li>Learning and practicing techniques to challenge unhelpful thoughts</li>
              <li>Development of new coping strategies and behavioral experiments</li>
              <li>Regular review of progress toward your goals</li>
            </ul>
            <p className='mb-4'>
              Between sessions, you'll often be encouraged to complete specific activities or exercises that help reinforce what you're learning. These "homework" assignments are an important part of CBT, as they help you apply new skills in real-life situations and accelerate your progress.
            </p>
            <p>
              Helen's extensive experience allows her to tailor CBT techniques to your individual needs and integrate them with other therapeutic approaches when beneficial. Throughout the process, you'll develop practical skills that will continue to serve you long after therapy ends.
            </p>
          </>
        )
      }}
      results={{
        title: "Benefits of Cognitive Behavioral Therapy",
        intro: "CBT has been extensively researched and shown to create significant positive outcomes for many people. While everyone's experience is unique, these are common benefits many clients experience:",
        shortTerm: [
          "Reduced intensity of difficult emotions like anxiety or sadness",
          "Increased awareness of how thoughts influence feelings",
          "Ability to identify and challenge unhelpful thinking patterns",
          "Improved management of specific symptoms or challenges",
          "Development of practical coping strategies for immediate use"
        ],
        longTerm: [
          "Lasting changes in thought patterns and core beliefs",
          "Greater emotional resilience when facing challenges",
          "Improved problem-solving skills applicable to various life situations",
          "Reduced likelihood of relapse into previous difficulties",
          "Better relationships through improved communication and understanding",
          "Increased confidence in your ability to manage future challenges"
        ],
        conclusion: "The skills learned in CBT become part of your psychological toolkit, enabling you to serve as your own therapist after formal sessions end. By developing the ability to recognize and modify unhelpful thinking patterns, you gain greater control over your emotional responses and behaviors. This creates a foundation for continued growth and resilience throughout your life."
      }}
      cta={{
        title: "Ready to Transform Your Thinking Patterns?",
        description: "Take the first step toward developing a healthier mindset and more effective coping strategies. Contact us today to learn how Cognitive Behavioral Therapy with Helen can help you create positive change in your life."
      }}
    />
  );
}
