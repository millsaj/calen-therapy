import Link from 'next/link';
import { routes } from '@/config/routes';
import { FocusPage } from '../FocusPage';

export default function DepressionPage() {
  return (
    <FocusPage
      hero={{
        title: "Depression",
        subtitle: "Finding your way back to hope and connection"
      }}
      intro={{
        title: "Understanding Depression",
        body: (
          <>
            <p className="mb-4">
              Depression is more than just feeling sad or going through a rough patch. It's a serious mental health
              condition that affects how you feel, think, and handle daily activities. Depression can vary from mild
              to severe and may include feelings of sadness, loss of interest in previously enjoyed activities,
              changes in appetite or sleep, lack of energy, difficulty concentrating, and in some cases, thoughts
              of death or suicide.
            </p>
            <p>
              Depression isn't a sign of weakness or something that can be simply "snapped out of." It's a
              complex condition influenced by biological, psychological, and social factors. With proper support
              and treatment, however, most people with depression can improve significantly and reclaim their lives.
            </p>
          </>
        )
      }}
      common={{
        title: "A Common Yet Serious Condition",
        body: (
          <>
            <p className="mb-4">
              Depression is one of the most common mental health conditions worldwide, affecting people of all ages,
              backgrounds, and life circumstances. Various factors can contribute to its development:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Biological factors such as genetics, brain chemistry, and hormones</li>
              <li>Psychological factors including personality traits and coping styles</li>
              <li>Environmental stressors like significant life changes or trauma</li>
              <li>Chronic medical conditions or persistent pain</li>
              <li>Grief and loss experiences</li>
              <li>Isolation and lack of social support</li>
              <li>Family history of depression or other mental health conditions</li>
            </ul>
            <p>
              Despite its prevalence, many people with depression don't seek help due to stigma, lack of awareness,
              or the mistaken belief that their symptoms aren't severe enough to warrant treatment. However,
              depression is highly treatable, and therapy can make a significant difference in recovery.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Therapy",
        subtitle: "Consider seeking professional support if you experience these patterns:",
        items: [
          {
            title: "Persistent Low Mood",
            description: "Feeling sad, empty, or hopeless most of the day, nearly every day."
          },
          {
            title: "Loss of Interest",
            description: "No longer finding pleasure in activities you once enjoyed."
          },
          {
            title: "Energy Depletion",
            description: "Feeling tired most days and finding it difficult to accomplish simple tasks."
          },
          {
            title: "Sleep Changes",
            description: "Sleeping too much or experiencing insomnia and disrupted sleep patterns."
          },
          {
            title: "Appetite or Weight Changes",
            description: "Significant weight loss or gain, or changes in appetite."
          },
          {
            title: "Concentration Problems",
            description: "Difficulty focusing, making decisions, or remembering things."
          }
        ]
      }}
      reminder={{
        title: "Depression Is Treatable",
        subtitle: "Depression can make you feel like things will never get better, but this is part of the condition, not reality. With appropriate support, most people experience significant improvement in their symptoms and quality of life."
      }}
      expectations={{
        title: "What to Expect from Therapy",
        body: (
          <>
            <p className="mb-4">
              Your therapy will be tailored to your specific needs and circumstances. Calen Therapy offers different
              therapeutic approaches for depression:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>With Helen:</strong> Helen draws from several evidence-based approaches including:
                <ul className="list-disc pl-6 ">
                  <li><strong><Link href={routes.styles.psychodynamic()} className="text-primary hover:underline">Psychodynamic therapy</Link></strong> to explore underlying patterns and past experiences that may contribute to depression</li>
                  <li><strong><Link href={routes.styles.cbt()} className="text-primary hover:underline">Cognitive Behavioral Therapy (CBT)</Link></strong> to identify and change negative thought patterns and develop new coping strategies</li>
                  <li><strong><Link href={routes.styles.personCentered()} className="text-primary hover:underline">Person-Centered therapy</Link></strong> to create a supportive environment for processing difficult emotions</li>
                </ul>
              </li>
              <li className="mb-2"><strong>With Carl:</strong> <Link href={routes.styles.hypnotherapy()} className="text-primary hover:underline">Solution Focused Hypnotherapy</Link> helps redirect your focus toward positive goals
              and solutions while using relaxation techniques to reduce stress and improve mood.</li>
            </ul>
            <p className="mb-4">
              Your treatment journey typically includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comprehensive assessment to understand your unique experience of depression</li>
              <li>Collaborative development of treatment goals and a personalized plan</li>
              <li>Exploration of thoughts, feelings, and behaviors that maintain depression</li>
              <li>Learning techniques to manage symptoms and improve day-to-day functioning</li>
              <li>Addressing underlying issues that may contribute to your depression</li>
              <li>Building a toolkit of strategies to prevent relapse and maintain well-being</li>
            </ul>
            <p>
              Therapy provides a safe, non-judgmental space to work through your feelings and develop practical
              skills for managing depression. Your therapist will partner with you throughout this process,
              adjusting approaches as needed to support your recovery.
            </p>
          </>
        )
      }}
      results={{
        title: "Your Path Forward",
        intro: "While everyone's experience is unique, therapy for depression can help you achieve meaningful changes:",
        shortTerm: [
          "Relief from some symptoms of depression",
          "Better understanding of your condition and its triggers",
          "Development of initial coping strategies",
          "Improved ability to manage daily activities"
        ],
        longTerm: [
          "Significant reduction in depressive symptoms",
          "Enhanced resilience and emotional regulation",
          "Improved relationships and social connections",
          "Greater sense of meaning and enjoyment in life"
        ],
        conclusion: "Progress with depression isn't always linear, and there may be setbacks along the way. With professional support and your commitment to the process, you can experience meaningful and lasting improvements in your mood, outlook, and quality of life."
      }}
      cta={{
        title: "Ready to Take the First Step?",
        description: "You don't have to face depression alone. Our therapists provide compassionate, evidence-based support to help you move toward recovery and renewed well-being."
      }}
    />
  );
}
