import { routes } from '@app/_config/routes';
import { FocusPage } from '../FocusPage';
import { buildMetadata } from '@app/_config/metadata';

export const metadata = buildMetadata({
  title: 'Smoking',
  url: routes.focuses.show('smoking'),
});

export default function SmokingPage() {
  return (
    <FocusPage
      hero={{
        title: "Stop Smoking",
        subtitle: "Break free from smoking with the support of hypnotherapy and counselling"
      }}
      intro={{
        title: "Understanding Smoking Addiction",
        body: (
          <>
            <p className="mb-4">
              Smoking is a powerful addiction that affects both the body and mind. Many people struggle to quit despite knowing the health risks, often due to ingrained habits, stress, and emotional triggers. Hypnotherapy and counselling can help you address the root causes of your smoking and empower you to make lasting changes.
            </p>
            <p>
              Whether you have tried to quit before or are considering your first attempt, professional support can increase your chances of success and help you regain control over your health and wellbeing.
            </p>
          </>
        )
      }}
      common={{
        title: "Why Quitting Smoking Is Challenging",
        body: (
          <>
            <p className="mb-4">
              Smoking is not just a physical addiction to nicotine—it is also a deeply rooted habit linked to routines, emotions, and social situations. Common challenges include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nicotine withdrawal symptoms (irritability, cravings, restlessness)</li>
              <li>Using smoking to cope with stress, anxiety, or boredom</li>
              <li>Social triggers and routines (e.g., after meals, with friends)</li>
              <li>Fear of weight gain or losing a coping mechanism</li>
              <li>Previous unsuccessful quit attempts leading to self-doubt</li>
            </ul>
            <p>
              You are not alone—millions face these challenges, but with the right support, quitting is possible.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Support",
        subtitle: "Consider seeking help if you recognize these patterns:",
        items: [
          {
            title: "Repeated Failed Attempts",
            description: "You have tried to quit smoking multiple times without lasting success."
          },
          {
            title: "Strong Cravings",
            description: "You experience intense urges to smoke, especially in certain situations."
          },
          {
            title: "Smoking as Stress Relief",
            description: "You use smoking to manage stress, anxiety, or difficult emotions."
          },
          {
            title: "Health Concerns",
            description: "You are worried about the impact of smoking on your health but feel unable to stop."
          },
          {
            title: "Social or Financial Impact",
            description: "Smoking is affecting your relationships or causing financial strain."
          },
          {
            title: "Loss of Control",
            description: "You feel that smoking is controlling your life and want to regain your freedom."
          }
        ]
      }}
      reminder={{
        title: "You Can Quit—Support Makes a Difference",
        subtitle: "Quitting smoking is a courageous step. With professional help, you can overcome cravings, change habits, and build a healthier future."
      }}
      expectations={{
        title: "What to Expect from Hypnotherapy & Counselling",
        body: (
          <>
            <p className="mb-4">
              Carl offers Solution Focused Hypnotherapy, which uses relaxation and positive suggestion to help you break the cycle of addiction. Therapy sessions are tailored to your needs and may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Identifying triggers and breaking habitual patterns</li>
              <li>Building motivation and confidence to quit</li>
              <li>Managing cravings and withdrawal symptoms</li>
              <li>Developing healthier coping strategies</li>
              <li>Addressing underlying stress or emotional issues</li>
            </ul>
            <p>
              Both Carl and Helen can support you in your journey, providing a safe, non-judgmental space to explore your motivations and challenges.
            </p>
          </>
        )
      }}
      results={{
        title: "Your Path to a Smoke-Free Life",
        intro: "Therapy can help you achieve lasting freedom from smoking and improve your overall wellbeing:",
        shortTerm: [
          "Reduced cravings and withdrawal symptoms",
          "Increased motivation and self-belief",
          "Better stress management skills",
          "Improved sense of control"
        ],
        longTerm: [
          "Improved physical health and lung function",
          "More energy and better sleep",
          "Financial savings from not buying cigarettes",
          "Greater confidence and self-esteem"
        ],
        conclusion: "Quitting smoking is one of the best decisions you can make for your health. With support, you can overcome addiction and enjoy a healthier, smoke-free life."
      }}
      cta={{
        title: "Ready to Quit Smoking?",
        description: "Carl and Helen offer effective, compassionate support for smoking cessation. Take the first step today."
      }}
    />
  );
}
