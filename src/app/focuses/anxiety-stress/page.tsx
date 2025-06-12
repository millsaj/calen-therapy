import Link from 'next/link';
import { routes } from '@/config/routes';
import { FocusPage } from '../FocusPage';

export default function AnxietyStressPage() {
  return (
    <FocusPage
      hero={{
        title: "Anxiety & Stress",
        subtitle: "Finding calm and balance in an overwhelming world"
      }}
      intro={{
        title: "Understanding Anxiety & Stress",
        body: (
          <>
            <p className="mb-4">
              Anxiety and stress are natural responses to demanding or threatening situations, but when they become
              overwhelming or persistent, they can significantly impact your quality of life. Anxiety involves
              excessive worry, fear, and nervous feelings that can be difficult to control, while stress refers
              to the physical and emotional tension experienced when facing challenges or pressure.
            </p>
            <p>
              Both can manifest in various ways—from generalized anxiety that affects day-to-day life to specific
              phobias, panic attacks, or stress-related burnout. Left unaddressed, chronic anxiety and stress can
              affect your physical health, relationships, work performance, and overall wellbeing.
            </p>
          </>
        )
      }}
      common={{
        title: "You're Not Alone in This Experience",
        body: (
          <>
            <p className="mb-4">
              Anxiety disorders are among the most common mental health conditions, affecting millions globally.
              Modern life presents numerous stressors and triggers that contribute to their prevalence:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Work pressures and increasing demands for productivity</li>
              <li>Financial worries and economic uncertainty</li>
              <li>Social media and constant connectivity</li>
              <li>Major life changes and transitions</li>
              <li>Relationship and family challenges</li>
              <li>Health concerns and global events</li>
              <li>Genetic predispositions and neurobiological factors</li>
            </ul>
            <p>
              Many people attempt to manage these feelings alone, but effective treatment can substantially
              improve your capacity to handle stress and reduce anxiety symptoms.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Therapy",
        subtitle: "Consider seeking professional support if you experience these patterns:",
        items: [
          {
            title: "Persistent Worry",
            description: "You find it difficult to control worrying thoughts, even about everyday matters."
          },
          {
            title: "Physical Symptoms",
            description: "Experiencing tension, restlessness, increased heart rate, difficulty breathing, or digestive issues."
          },
          {
            title: "Sleep Disruption",
            description: "Trouble falling asleep or staying asleep due to racing thoughts or worry."
          },
          {
            title: "Avoidance Behaviors",
            description: "Avoiding situations, places, or activities due to anxiety or fear."
          },
          {
            title: "Difficulty Concentrating",
            description: "Finding it hard to focus or feeling that your mind goes blank due to worry."
          },
          {
            title: "Irritability",
            description: "Feeling on edge, irritable, or experiencing a shortened temper."
          }
        ]
      }}
      reminder={{
        title: "Seeking Help Is a Sign of Strength",
        subtitle: "Many people live with anxiety and stress for years before seeking help. Reaching out for support isn't a sign of weakness—it's a proactive step toward reclaiming your wellbeing and living a more fulfilling life. Everyone struggles at times, and seeking therapy is a responsible way to care for your mental health."
      }}
      expectations={{
        title: "What to Expect from Therapy",
        body: (
          <>
            <p className="mb-4">
              Your therapy will be tailored to your specific needs and circumstances. Calen Therapy offers different
              therapeutic approaches for anxiety and stress:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>With Helen:</strong> Helen's extensive training allows her to draw from multiple approaches
              including <Link href={routes.styles.cbt()} className="text-primary hover:underline">Cognitive Behavioral Therapy (CBT)</Link>, which helps identify and challenge anxious thought patterns, <Link href={routes.styles.personCentered()} className="text-primary hover:underline">Person-Centered
              therapy</Link> which provides a supportive environment to explore your concerns at your own pace, and <Link href={routes.styles.show('lifecoaching')} className="text-primary hover:underline">Life Coaching</Link> which focuses on setting goals and developing practical strategies to manage stress.</li>
              <li className="mb-2"><strong>With Carl:</strong> <Link href={routes.styles.hypnotherapy()} className="text-primary hover:underline">Solution Focused Hypnotherapy</Link> combines relaxation techniques with a focus on positive
              goals rather than problems, helping calm your nervous system and develop new ways of responding to stressors.</li>
            </ul>
            <p className="mb-4">
              Your treatment journey typically includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Initial assessment to understand your specific anxiety patterns and stressors</li>
              <li>Education about how anxiety and stress affect the mind and body</li>
              <li>Learning and practicing relaxation and mindfulness techniques</li>
              <li>Identifying and challenging unhelpful thinking patterns</li>
              <li>Gradual exposure to anxiety-provoking situations (when appropriate)</li>
              <li>Building resilience and developing personalized coping strategies</li>
            </ul>
            <p>
              The goal isn't to eliminate all stress (which is unrealistic and not necessarily desirable), but
              to develop a healthier relationship with stress and anxiety so they no longer control your life.
              Both therapists provide a safe, non-judgmental space where you can work at your own pace.
            </p>
          </>
        )
      }}
      results={{
        title: "Your Path to Greater Calm",
        intro: "While everyone's journey is unique, therapy for anxiety and stress can help you achieve meaningful improvements across many areas of your life:",
        shortTerm: [
          "Reduced physical symptoms of anxiety and stress",
          "Improved sleep quality and relaxation ability",
          "Development of effective coping techniques",
          "Better understanding of personal triggers"
        ],
        longTerm: [
          "Increased resilience to life's challenges",
          "Improved work performance and relationships",
          "Reduction in avoidance behaviors",
          "Greater overall sense of wellbeing and life satisfaction"
        ],
        conclusion: "With professional support and your commitment to practice new skills, you can transform your relationship with anxiety and stress. Rather than eliminating these natural human experiences, you'll develop the capacity to navigate them with greater ease and confidence."
      }}
      cta={{
        title: "Ready to Find Your Calm?",
        description: "Take the first step toward managing anxiety and stress."
      }}
    />
  );
}
