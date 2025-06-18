import { routes } from '@app/_config/routes';
import { FocusPage } from '../FocusPage';
import { buildMetadata } from '@app/_config/metadata';

export const metadata = buildMetadata({
  title: 'Weight Loss',
  url: routes.focuses.show('weight-loss'),
});

export default function WeightLossPage() {
  return (
    <FocusPage
      hero={{
        title: "Weight Loss",
        subtitle: "Achieve your goals with the support of hypnotherapy and counselling"
      }}
      intro={{
        title: "Understanding Weight Loss Challenges",
        body: (
          <>
            <p className="mb-4">
              Weight loss is about more than just diet and exercise—it's also about mindset, habits, and emotional wellbeing. Many people struggle to lose weight due to stress, emotional eating, or ingrained patterns that are hard to break alone. Hypnotherapy and counselling can help you address these underlying factors and support lasting change.
            </p>
            <p>
              Whether you want to lose a few pounds or make a significant lifestyle change, professional support can help you stay motivated, overcome setbacks, and achieve your goals in a healthy, sustainable way.
            </p>
          </>
        )
      }}
      common={{
        title: "Why Weight Loss Is Difficult",
        body: (
          <>
            <p className="mb-4">
              Many people face obstacles on their weight loss journey, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Emotional eating in response to stress or negative feelings</li>
              <li>Unhelpful habits and routines around food</li>
              <li>Lack of motivation or self-belief</li>
              <li>Previous unsuccessful attempts leading to frustration</li>
              <li>Social pressures and conflicting advice</li>
              <li>Medical or hormonal factors</li>
            </ul>
            <p>
              You are not alone—many people struggle with these challenges, but with the right support, change is possible.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Support",
        subtitle: "Consider seeking help if you recognize these patterns:",
        items: [
          {
            title: "Yo-Yo Dieting",
            description: "You have tried multiple diets but struggle to maintain weight loss."
          },
          {
            title: "Emotional Eating",
            description: "You eat in response to stress, boredom, or difficult emotions."
          },
          {
            title: "Lack of Motivation",
            description: "You find it hard to stay motivated or believe in your ability to succeed."
          },
          {
            title: "Negative Body Image",
            description: "You feel unhappy with your body and it affects your self-esteem."
          },
          {
            title: "Health Concerns",
            description: "You are worried about the impact of your weight on your health."
          },
          {
            title: "Difficulty Breaking Habits",
            description: "You struggle to change unhelpful eating or activity patterns."
          }
        ]
      }}
      reminder={{
        title: "You Deserve to Feel Good in Your Body",
        subtitle: "Seeking support for weight loss is a positive, empowering step. With help, you can build healthier habits and a better relationship with food and yourself."
      }}
      expectations={{
        title: "What to Expect from Hypnotherapy & Counselling",
        body: (
          <>
            <p className="mb-4">
              Carl offers Solution Focused Hypnotherapy to help you change unhelpful patterns and build motivation for healthy choices. Therapy sessions may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Identifying triggers for emotional eating</li>
              <li>Building self-confidence and motivation</li>
              <li>Developing healthier habits and routines</li>
              <li>Addressing negative self-talk and body image</li>
              <li>Setting realistic, achievable goals</li>
            </ul>
            <p>
              Both Carl and Helen can support you, providing a safe, non-judgmental space to explore your challenges and celebrate your progress.
            </p>
          </>
        )
      }}
      results={{
        title: "Your Path to Lasting Change",
        intro: "Therapy can help you achieve sustainable weight loss and greater wellbeing:",
        shortTerm: [
          "Improved motivation and self-belief",
          "Healthier eating habits",
          "Better stress management",
          "Increased confidence"
        ],
        longTerm: [
          "Sustained weight loss and improved health",
          "Greater self-acceptance and body confidence",
          "More energy and enjoyment of life",
          "Lasting positive habits"
        ],
        conclusion: "Weight loss is a journey, not a quick fix. With support, you can make meaningful changes and enjoy a healthier, happier life."
      }}
      cta={{
        title: "Ready to Start Your Weight Loss Journey?",
        description: "Carl and Helen offer effective, compassionate support for weight loss. Take the first step today."
      }}
    />
  );
}
