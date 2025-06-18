import { ApproachPage } from '../ApproachPage';
import { routes } from '@app/_config/routes';
import { buildMetadata } from '@app/_config/metadata';

export const metadata = buildMetadata({
  title: 'Hypnotherapy',
  url: routes.approaches.hypnotherapy(),
});

export default function HypnotherapyPage() {
  return (
    <ApproachPage
      hero={{
        title: "Solution Focused Hypnotherapy",
        subtitle: "Harnessing your subconscious mind to create positive change"
      }}
      intro={{
        title: "What is Solution Focused Hypnotherapy?",
        body: (
          <>
            <p className='mb-4'>
              Solution Focused Hypnotherapy is a modern, research-based combination of hypnosis and solution focused brief therapy. This powerful approach focuses on your future and desired outcomes rather than dwelling on problems from your past. It recognizes that positive change happens when we focus on solutions and goals rather than analyzing problems.
            </p>
            <p>
              During sessions, you'll experience a deeply relaxed state (hypnosis) where your subconscious mind becomes more receptive to positive suggestions. This allows you to access your inner resources and develop new perspectives, breaking free from limiting patterns and moving toward your goals with greater ease.
            </p>
          </>
        )
      }}
      why={{
        title: "Why Solution Focused Hypnotherapy is Used",
        body: (
          <>
            <p className='mb-4'>
              Solution Focused Hypnotherapy is particularly effective because it works with both the conscious and subconscious parts of your mind. While your conscious mind makes rational decisions, your subconscious influences automatic behaviors, emotions, and responses—often in ways that can maintain unwanted patterns despite your best efforts to change.
            </p>
            <p className='mb-4'>
              Carl specializes in Solution Focused Hypnotherapy, providing a professional and confidential service that enables you to make significant positive changes to your wellbeing. This approach is particularly valuable because it:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Focuses on solutions and your preferred future rather than problems</li>
              <li>Works efficiently, often requiring fewer sessions than traditional talk therapies</li>
              <li>Addresses both the cognitive aspects of issues and the deeper emotional patterns</li>
              <li>Helps you manage daily stresses while building new, positive neural pathways</li>
              <li>Empowers you to take control of your responses and behaviors</li>
            </ul>
          </>
        )
      }}
      signs={{
        title: "Signs Solution Focused Hypnotherapy Might Help You",
        subtitle: "Consider this approach if you recognize these patterns in your life",
        items: [
          {
            title: "Anxiety & Stress",
            description: "You experience persistent worry, nervousness, or heightened stress responses that interfere with your daily life or enjoyment."
          },
          {
            title: "Unwanted Habits",
            description: "You struggle with habits or behaviors you want to change, such as smoking, nail-biting, or emotional eating."
          },
          {
            title: "Sleep Difficulties",
            description: "You have trouble falling asleep, staying asleep, or experience poor quality sleep that affects your daily functioning."
          },
          {
            title: "Phobias & Fears",
            description: "You have specific fears that limit your activities or cause significant distress, such as fear of flying, public speaking, or confined spaces."
          },
          {
            title: "Confidence Issues",
            description: "You struggle with self-doubt, low confidence, or performance anxiety in personal or professional situations."
          },
          {
            title: "Feeling Stuck",
            description: "You feel unable to move forward with your goals or make desired changes despite knowing what you want."
          }
        ]
      }}
      reminder={{
        title: "Your Mind Has Incredible Resources for Change",
        subtitle: "Seeking help to tap into your mind's natural ability to solve problems and create positive change is a wise and empowering choice for your wellbeing."
      }}
      expectations={{
        title: "What to Expect from Solution Focused Hypnotherapy",
        body: (
          <>
            <p className='mb-4'>
              Solution Focused Hypnotherapy sessions with Carl combine positive, future-focused conversation with the deeply relaxing experience of hypnosis. Each session builds on your progress and moves you closer to your goals.
            </p>
            <p className='mb-4'>
              A typical session includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Discussion of positive changes and progress since your last session</li>
              <li>Exploration of your goals and how you want things to be different</li>
              <li>Education about how your mind works and how hypnosis can help</li>
              <li>Guided relaxation into a comfortable hypnotic state</li>
              <li>Positive suggestions aligned with your goals while you're deeply relaxed</li>
            </ul>
            <p className='mb-4'>
              The hypnosis portion feels similar to that relaxed state you experience just before falling asleep—you remain aware and in control throughout, but your mind becomes more receptive to positive change. Many clients describe it as deeply refreshing and enjoyable.
            </p>
            <p>
              Carl offers both face-to-face sessions in Wigan and online sessions via Zoom, making this effective approach accessible regardless of your location in the UK. Throughout the process, you'll develop skills and perspectives that help you maintain your progress long after your sessions end.
            </p>
          </>
        )
      }}
      results={{
        title: "Benefits of Solution Focused Hypnotherapy",
        intro: "Solution Focused Hypnotherapy can create positive changes quickly and effectively. While everyone's experience is unique, many clients report these significant benefits:",
        shortTerm: [
          "Rapid reduction in anxiety and stress levels",
          "Improved sleep quality and ability to relax",
          "Increased positivity and motivation",
          "Better ability to cope with challenging situations",
          "Relief from specific symptoms or unwanted behaviors"
        ],
        longTerm: [
          "Sustainable changes in thought patterns and behaviors",
          "Enhanced resilience and emotional regulation",
          "Improved relationships and communication",
          "Greater confidence and self-belief",
          "Reduction or elimination of phobias and fears",
          "Development of healthy coping strategies for life's challenges"
        ],
        conclusion: "The tools and perspectives you gain through Solution Focused Hypnotherapy continue working for you long after your sessions end. By focusing on solutions rather than problems, you develop a more positive mindset and approach to life's challenges. Many clients report that the benefits extend beyond their initial goals, creating positive ripple effects throughout many areas of their lives."
      }}
      cta={{
        title: "Ready to Harness Your Mind's Power for Positive Change?",
        description: "Take the first step toward a calmer, more confident, and more resourceful you. Contact us today to learn how Solution Focused Hypnotherapy with Carl can help you achieve the changes you desire."
      }}
    />
  );
}
