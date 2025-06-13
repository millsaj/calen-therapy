import Link from 'next/link';
import { routes } from '@app/_config/routes';
import { FocusPage } from '../FocusPage';

export default function GriefLossPage() {
  return (
    <FocusPage
      hero={{
        title: "Grief & Loss",
        subtitle: "Finding your way through loss and toward healing"
      }}
      intro={{
        title: "Understanding Grief & Loss",
        body: (
          <>
            <p className="mb-4">
              Grief is a natural response to loss – the deep sorrow, often mixed with other emotions, that we
              experience when something or someone important is taken from our lives. While we often associate
              grief with the death of a loved one, it can emerge from many types of losses: the end of a relationship,
              loss of health, career changes, moving away from home, or even the loss of hopes and expectations.
            </p>
            <p>
              Grief is deeply personal and can affect every dimension of life – emotional, physical, cognitive,
              behavioral, social, and spiritual. There is no "right way" to grieve, and the process rarely follows
              a predictable timeline or pattern. However, when grief feels overwhelming or persists without change
              for extended periods, professional support can provide comfort and guidance on the path to healing.
            </p>
          </>
        )
      }}
      common={{
        title: "The Universal Experience of Loss",
        body: (
          <>
            <p className="mb-4">
              Loss is an inevitable part of human experience, and grief is the natural response that helps us
              process and integrate these experiences into our lives. What many people don't realize is that
              grief can manifest in numerous ways beyond sadness:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Emotional responses: sadness, anger, guilt, anxiety, relief, numbness</li>
              <li>Physical sensations: fatigue, achiness, sleep disturbances, appetite changes</li>
              <li>Cognitive effects: confusion, difficulty concentrating, preoccupation with the loss</li>
              <li>Behavioral changes: restlessness, social withdrawal, searching behaviors</li>
              <li>Spiritual questions: questioning meaning and purpose, changes in beliefs</li>
            </ul>
            <p className="mb-4">
              Many factors can influence your grief experience:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The nature of your relationship with what was lost</li>
              <li>The circumstances of the loss (sudden vs. anticipated, traumatic elements)</li>
              <li>Previous experiences with loss and your coping mechanisms</li>
              <li>Cultural and familial beliefs about grief and mourning</li>
              <li>Current life stressors and available support systems</li>
            </ul>
            <p>
              While grief is universal, it can feel isolating when others don't understand or expect you to
              "move on" before you're ready. Therapy provides a space where your grief is acknowledged and
              respected, no matter what form it takes.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Therapy",
        subtitle: "Consider seeking professional support if you experience these patterns:",
        items: [
          {
            title: "Overwhelming Emotions",
            description: "Feelings of grief that are intensely painful and don't seem to ease with time."
          },
          {
            title: "Persistent Avoidance",
            description: "Avoiding reminders of the loss or unable to talk about what happened."
          },
          {
            title: "Complicated Circumstances",
            description: "Loss that occurred under traumatic, sudden, or ambiguous circumstances."
          },
          {
            title: "Prolonged Functioning Issues",
            description: "Ongoing difficulty meeting basic responsibilities or engaging in daily activities."
          },
          {
            title: "Persistent Guilt or Regret",
            description: "Ruminating on what you could have done differently or blaming yourself."
          },
          {
            title: "Lack of Support",
            description: "Feeling isolated or misunderstood by those around you during your grief."
          }
        ]
      }}
      reminder={{
        title: "There Is No Timeline for Grief",
        subtitle: "Grief doesn't follow a set schedule or pattern. Seeking help isn't a sign of weakness, but rather an acknowledgment that your loss matters and deserves care and attention as you navigate this difficult journey. Everyone experiences grief differently, and therapy provides a safe space to process your unique experience."
      }}
      expectations={{
        title: "What to Expect from Therapy",
        body: (
          <>
            <p className="mb-4">
              Your therapy will be tailored to your specific needs and circumstances. For grief and loss,
              Helen brings specialized training:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>With Helen:</strong> Helen's approach to grief therapy is personalized,
              drawing from multiple therapeutic modalities:
                <ul className="list-disc pl-6 ">
                  <li><strong><Link href={routes.styles.personCentered()} className="text-primary hover:underline hover:text-accent">Person-Centered Approach</Link></strong> - Creating a safe environment where your grief is acknowledged and validated</li>
                  <li><strong><Link href={routes.styles.psychodynamic()} className="text-primary hover:underline hover:text-accent">Psychodynamic Elements</Link></strong> - Exploring how your relationship with what was lost influences your grief</li>
                  <li><strong><Link href={routes.styles.cbt()} className="text-primary hover:underline hover:text-accent">Cognitive Behavioral Techniques</Link></strong> - Developing tools to manage intense emotions and navigate daily life</li>
                  <li><strong><Link href={routes.styles.show('lifecoaching')} className="text-primary hover:underline hover:text-accent">Life Coaching</Link></strong> - Setting goals for rebuilding and moving forward while honoring your loss</li>
                </ul>
              </li>
            </ul>
            <p className="mb-4">
              Your therapy experience may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Telling the story of your loss in a supportive environment</li>
              <li>Exploring the full range of your thoughts and feelings about the loss</li>
              <li>Identifying and addressing any complicated aspects of your grief</li>
              <li>Learning strategies to cope with intense emotions and difficult moments</li>
              <li>Finding meaningful ways to maintain connection while adapting to your new reality</li>
              <li>Developing rituals or practices that support your ongoing healing</li>
            </ul>
            <p>
              The goal isn't to "get over" your loss or reach an endpoint where grief disappears. Rather, therapy
              helps you find ways to integrate the loss into your life while reconnecting with sources of meaning,
              purpose, and joy. Helen creates a compassionate, non-judgmental space where you can express and
              explore your grief in all its dimensions.
            </p>
          </>
        )
      }}
      results={{
        title: "Your Path Through Grief",
        intro: "While grief is a deeply personal journey, therapy can provide meaningful support and facilitate healing in several ways:",
        shortTerm: [
          "A safe space to express all aspects of your grief",
          "Validation and normalization of your experience",
          "Immediate coping strategies for overwhelming moments",
          "Relief from isolation in your grief journey"
        ],
        longTerm: [
          "Integration of the loss into your life narrative",
          "Ability to remember and honor what was lost while engaging with present life",
          "Development of new sources of meaning and connection",
          "Greater resilience and capacity to navigate future losses"
        ],
        conclusion: "While grief is the price we pay for love and connection, it need not remain overwhelmingly painful forever. With support, most people find that grief eventually transitions—not disappearing, but changing form—allowing space for both honoring what was lost and embracing new possibilities in life."
      }}
      cta={{
        title: "Support for Grief",
        description: "Get in touch today to get help with your path forward."
      }}
    />
  );
}
