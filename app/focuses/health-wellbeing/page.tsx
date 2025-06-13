import Link from 'next/link';
import { routes } from '@app/_config/routes';
import { FocusPage } from '../FocusPage';

export default function HealthWellbeingPage() {
  return (
    <FocusPage
      hero={{
        title: "Health & Wellbeing",
        subtitle: "Supporting your journey to wellness"
      }}
      intro={{
        title: "Understanding Health & Wellbeing",
        body: (
          <>
            <p className="mb-4">
              Health and wellbeing encompass far more than just the absence of illness—they reflect a state of
              complete physical, mental, and social wellness. Our bodies and minds are deeply interconnected, with
              mental health affecting physical health and vice versa. This connection becomes particularly evident
              when facing health challenges, chronic conditions, or during recovery from illness or injury.
            </p>
            <p>
              Living with health concerns can impact every aspect of life, from daily functioning to relationships,
              self-image, and sense of purpose. The emotional aspects of managing health challenges—including stress,
              uncertainty, and lifestyle adjustments—can be as demanding as the physical symptoms themselves. Therapy
              provides valuable support for navigating these challenges and developing a more balanced, integrated
              approach to overall wellbeing.
            </p>
          </>
        )
      }}
      common={{
        title: "The Mind-Body Connection",
        body: (
          <>
            <p className="mb-4">
              Many people seek therapeutic support for health-related concerns, whether they're dealing with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Adjusting to new health diagnoses or chronic conditions</li>
              <li>Managing stress-related health symptoms</li>
              <li>Coping with pain or physical limitations</li>
              <li>Navigating medical treatments and healthcare systems</li>
              <li>Recovering from illness, surgery, or injury</li>
              <li>Making sustainable lifestyle changes for better health</li>
              <li>Building resilience during health challenges</li>
              <li>Finding meaning and purpose while living with health limitations</li>
            </ul>
            <p className="mb-4">
              Research consistently demonstrates the powerful connections between mind and body:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Stress can exacerbate or even trigger physical symptoms and conditions</li>
              <li>Psychological approaches can reduce pain and improve recovery outcomes</li>
              <li>Mental wellbeing influences immune function and overall physical health</li>
              <li>How we think about our health affects how we experience symptoms</li>
              <li>Behavioral patterns significantly impact long-term health outcomes</li>
            </ul>
            <p>
              By addressing both the psychological and physical aspects of health, you can develop greater
              resilience, improved symptom management, and a more balanced approach to overall wellbeing.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Therapy",
        subtitle: "Consider seeking professional support if you experience these patterns:",
        items: [
          {
            title: "Health-Related Stress",
            description: "Feeling overwhelmed by health concerns, medical appointments, or treatment decisions."
          },
          {
            title: "Difficulty Coping",
            description: "Struggling emotionally with a diagnosis, chronic condition, or physical limitations."
          },
          {
            title: "Lifestyle Change Challenges",
            description: "Finding it hard to implement or maintain health-promoting behaviors despite wanting to change."
          },
          {
            title: "Mind-Body Symptoms",
            description: "Experiencing physical symptoms that worsen with stress or have a strong emotional component."
          },
          {
            title: "Identity Changes",
            description: "Adjusting to how health conditions have affected your sense of self or life roles."
          },
          {
            title: "Health Anxiety",
            description: "Spending excessive time worrying about health or engaging in frequent symptom checking."
          }
        ]
      }}
      reminder={{
        title: "Healing Takes Support",
        subtitle: "Seeking help for the psychological aspects of health challenges isn't a luxury—it's an essential component of comprehensive care. Supporting your mental wellbeing can positively impact your physical health and overall quality of life. Everyone deserves support during health challenges, and therapy provides a valuable space for this healing work."
      }}
      expectations={{
        title: "What to Expect from Therapy",
        body: (
          <>
            <p className="mb-4">
              Your therapy will be tailored to your specific needs and circumstances. Calen Therapy offers different
              therapeutic approaches for health and wellbeing concerns:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>With Helen:</strong> Helen's approach includes:
                <ul className="list-disc pl-6 ">
                  <li><strong><Link href={routes.styles.personCentered()} className="text-primary hover:underline">Person-Centered therapy</Link></strong> to provide a supportive environment for exploring your health journey</li>
                  <li><strong><Link href={routes.styles.cbt()} className="text-primary hover:underline">Cognitive Behavioral techniques</Link></strong> to address thoughts and behaviors that impact health</li>
                  <li><strong><Link href={routes.styles.psychodynamic()} className="text-primary hover:underline">Psychodynamic approaches</Link></strong> to explore how past experiences may affect your relationship with health</li>
                  <li><strong><Link href={routes.styles.show('lifecoaching')} className="text-primary hover:underline">Life Coaching</Link></strong> to develop concrete health goals and practical strategies for lifestyle changes</li>
                </ul>
              </li>
              <li className="mb-2"><strong>With Carl:</strong> <Link href={routes.styles.hypnotherapy()} className="text-primary hover:underline">Solution Focused Hypnotherapy</Link> can be particularly beneficial for health and wellbeing by:
                <ul className="list-disc pl-6 ">
                  <li>Using relaxation to access your mind's natural healing potential</li>
                  <li>Creating positive changes in how you respond to health challenges</li>
                  <li>Developing practical strategies to reduce the impact of stress on physical and mental health</li>
                </ul>
              </li>
            </ul>
            <p className="mb-4">
              Your therapy experience will be personalized to your specific health concerns, but may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Processing the emotional impact of health challenges or diagnoses</li>
              <li>Learning specific relaxation and stress reduction techniques</li>
              <li>Developing skills for managing pain or other physical symptoms</li>
              <li>Building motivation and strategies for sustainable lifestyle changes</li>
              <li>Improving sleep quality through cognitive and behavioral approaches</li>
              <li>Enhancing communication with healthcare providers and loved ones</li>
              <li>Finding meaning and cultivating resilience despite health limitations</li>
            </ul>
            <p>
              The goal isn't just to help you cope with health challenges but to support you in creating the best
              possible quality of life and wellbeing, whatever your current health circumstances. Both therapists
              recognize the powerful connections between mind and body and provide a holistic approach to health-related concerns.
            </p>
          </>
        )
      }}
      results={{
        title: "Your Path to Integrated Wellbeing",
        intro: "While everyone's health journey is unique, therapy can help you achieve meaningful improvements in how you manage and experience health challenges:",
        shortTerm: [
          "Reduced stress and anxiety related to health concerns",
          "Improved coping strategies for symptoms and treatment",
          "Better sleep quality and relaxation ability",
          "Initial progress with health-promoting behaviors"
        ],
        longTerm: [
          "More balanced perspective on health challenges",
          "Sustainable lifestyle changes that support wellbeing",
          "Improved management of chronic conditions or symptoms",
          "Greater overall resilience and life satisfaction despite health limitations"
        ],
        conclusion: "True wellbeing isn't about perfect health but about creating the most fulfilling life possible with whatever health circumstances you face. With professional support, you can develop the mental tools and perspectives that complement physical care, leading to a more integrated, balanced approach to your overall health and quality of life."
      }}
      cta={{
        title: "Support for Your Wellbeing Journey",
        description: "Take a proactive step toward supporting your mental health."
      }}
    />
  );
}
