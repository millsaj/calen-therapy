import { routes } from '@app/_config/routes';
import { FocusPage } from '../FocusPage';
import Link from 'next/link';

export default function TraumaPage() {
  return (
    <FocusPage
      hero={{
        title: "Trauma & PTSD",
        subtitle: "Finding safety, healing, and growth after traumatic experiences"
      }}
      intro={{
        title: "Understanding Trauma & PTSD",
        body: (
          <>
            <p className="mb-4">
              Trauma occurs when we experience or witness events that overwhelm our capacity to cope. These events
              can involve actual or threatened death, serious injury, or sexual violence—but trauma can also result
              from persistent smaller violations, neglect, or emotional abuse. Post-Traumatic Stress Disorder (PTSD)
              is a specific condition that may develop following exposure to such events.
            </p>
            <p>
              When we experience trauma, our brain's natural alarm system can become dysregulated, leaving us feeling
              constantly on guard, easily startled, or emotionally numb. Memories of the trauma may intrude in the form
              of flashbacks or nightmares, and we might go to great lengths to avoid reminders of what happened. These
              responses are adaptive during danger but can significantly disrupt life when they persist after the threat
              has passed.
            </p>
          </>
        )
      }}
      common={{
        title: "Trauma Is More Common Than Many Realize",
        body: (
          <>
            <p className="mb-4">
              Traumatic experiences are unfortunately common, with research suggesting that a majority of people will
              experience at least one potentially traumatic event in their lifetime. While not everyone develops PTSD
              or trauma-related symptoms, those who do are not alone:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Single-incident trauma (accidents, assaults, natural disasters)</li>
              <li>Childhood abuse or neglect</li>
              <li>Domestic violence or relationship abuse</li>
              <li>Combat or military service experiences</li>
              <li>Medical trauma (serious illness, invasive procedures)</li>
              <li>Witnessing violence or harm to others</li>
              <li>Generational or collective trauma</li>
            </ul>
            <p className="mb-4">
              Various factors influence how trauma affects us:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The nature, severity, and duration of the traumatic experiences</li>
              <li>Age and developmental stage when trauma occurred</li>
              <li>Quality of support received during and after the traumatic events</li>
              <li>Prior history of trauma or adversity</li>
              <li>Individual neurobiological differences and resilience factors</li>
            </ul>
            <p>
              Many people struggle silently with trauma effects, not realizing that what they're experiencing
              is a normal response to abnormal events—and that effective treatment is available.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Trauma Therapy",
        subtitle: "Consider seeking professional support if you experience these patterns:",
        items: [
          {
            title: "Intrusive Memories",
            description: "Unwanted recollections, nightmares, or flashbacks where you feel as if the trauma is happening again."
          },
          {
            title: "Avoidance Behaviors",
            description: "Going to great lengths to avoid thoughts, feelings, or reminders of the traumatic experience."
          },
          {
            title: "Hypervigilance",
            description: "Feeling constantly on guard, easily startled, or experiencing sleep disturbances."
          },
          {
            title: "Negative Mood Changes",
            description: "Persistent negative beliefs about yourself or the world, feelings of shame, blame, or detachment."
          },
          {
            title: "Relationship Difficulties",
            description: "Trouble trusting others, maintaining connections, or managing conflict in relationships."
          },
          {
            title: "Unexplained Physical Symptoms",
            description: "Experiencing physical complaints that don't have clear medical causes or don't respond to treatment."
          }
        ]
      }}
      reminder={{
        title: "Healing Is Possible",
        subtitle: "Trauma responses are normal reactions to abnormal circumstances—not signs of weakness or failure. With appropriate support, you can process traumatic experiences and reclaim a sense of safety, choice, and connection in your life. Remember that seeking therapy is a courageous step toward healing, not a sign of weakness."
      }}
      expectations={{
        title: "What to Expect from Therapy",
        body: (
          <>
            <p className="mb-4">
              Your therapy will be tailored to your specific needs and circumstances. For trauma and PTSD,
              Helen brings specialized trauma training:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>With Helen:</strong> Helen's approach to trauma therapy prioritizes safety, choice, and empowerment:
                <ul className="list-disc pl-6 ">
                  <li><strong><Link href={routes.styles.show('trauma-informed')} className="text-primary hover:underline">Trauma-Informed Care</Link></strong> - Recognition of how trauma affects the brain and body, prioritizing safety and client choice</li>
                  <li><strong><Link href={routes.styles.psychodynamic()} className="text-primary hover:underline">Psychodynamic Therapy</Link></strong> - Exploring how past experiences shape current patterns while building internal resources</li>
                  <li><strong><Link href={routes.styles.cbt()} className="text-primary hover:underline">Cognitive Behavioral Techniques</Link></strong> - Addressing trauma-related beliefs and thought patterns</li>
                  <li><strong>Body-Aware Approaches</strong> - Recognizing how trauma is stored in the body and developing skills for regulation</li>
                  <li><strong><Link href={routes.styles.show('lifecoaching')} className="text-primary hover:underline">Life Coaching</Link></strong> - Setting goals and developing practical strategies for moving forward after trauma</li>
                </ul>
              </li>
            </ul>
            <p className="mb-4">
              Your therapy experience will be personalized to your needs, but may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Establishing safety and stability in your daily life and in the therapeutic relationship</li>
              <li>Learning skills to manage overwhelming emotions and physical sensations</li>
              <li>Gradually processing traumatic memories when you're ready (always at your pace)</li>
              <li>Addressing beliefs about yourself and the world that formed during or after trauma</li>
              <li>Rebuilding connections with others and with aspects of yourself affected by trauma</li>
              <li>Finding meaning and moving forward in your life after trauma</li>
            </ul>
            <p>
              The pace and approach of therapy will be guided by your needs and readiness. There is no pressure to
              discuss traumatic details before you feel safe and equipped to do so. Helen's specialized training
              in trauma (2021 diploma) and extensive clinical experience make her particularly well-equipped to
              help you reclaim your life from the effects of trauma.
            </p>
          </>
        )
      }}
      results={{
        title: "Your Healing Journey",
        intro: "While each person's trauma healing journey is unique, therapy can help you achieve meaningful progress:",
        shortTerm: [
          "Development of skills to manage trauma symptoms",
          "Better understanding of how trauma has affected you",
          "Increased sense of safety in your body and environment",
          "Reduction in overwhelming emotional responses"
        ],
        longTerm: [
          "Integration of traumatic experiences into your life story",
          "Renewed capacity for trust and connection in relationships",
          "Decreased influence of trauma on daily functioning",
          "Posttraumatic growth and increased resilience"
        ],
        conclusion: "Recovery from trauma isn't about erasing what happened, but rather about reducing its power over your present life. With appropriate support, most people not only heal from trauma but also discover new sources of strength, meaning, and connection that they might not have found otherwise."
      }}
      cta={{
        title: "Begin Your Healing Journey",
        description: "You don't have to continue struggling with the effects of trauma alone."
      }}
    />
  );
}
