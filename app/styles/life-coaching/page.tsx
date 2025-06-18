import { StylePage } from '../StylePage';
import { routes } from '@app/_config/routes';
import { buildMetadata } from '@app/_config/metadata';

export const metadata = buildMetadata({
  title: 'Life Coaching',
  url: routes.styles.lifeCoaching(),
});

export default function LifeCoachingPage() {
  return (
    <StylePage
      hero={{
        title: "Life Coaching",
        subtitle: "Actionable strategies to achieve your personal and professional goals"
      }}
      intro={{
        title: "What is Life Coaching?",
        body: (
          <>
            <p className='mb-4'>
              Life Coaching is a forward-focused, goal-oriented approach that helps you bridge the gap between where you are now and where you want to be. Unlike traditional therapy that may focus on healing past wounds, Life Coaching concentrates on creating actionable strategies for achieving specific personal and professional objectives.
            </p>
            <p>
              This dynamic process involves identifying your core values, clarifying your vision, overcoming obstacles, and developing concrete plans to move toward your desired future. Life Coaching empowers you to tap into your potential, increase self-awareness, and make meaningful changes that align with your authentic self and deepest aspirations.
            </p>
          </>
        )
      }}
      why={{
        title: "Why Life Coaching is Used",
        body: (
          <>
            <p className='mb-4'>
              Life Coaching is particularly valuable when you're seeking structured support to achieve specific goals, navigate transitions, or enhance your overall quality of life. It provides accountability, perspective, and practical tools that accelerate your progress and help you overcome barriers to success.
            </p>
            <p className='mb-4'>
              Helen completed her Life Coaching diploma in 2012, adding this goal-oriented approach to her extensive therapeutic toolkit. With over 30 years of experience across multiple modalities, she brings a unique blend of coaching techniques and psychological insights to help you create tangible results and lasting change.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provides structure and accountability for achieving specific goals</li>
              <li>Helps clarify values, vision, and priorities</li>
              <li>Identifies and addresses limiting beliefs and obstacles</li>
              <li>Develops concrete action plans with measurable outcomes</li>
              <li>Builds on strengths and resources you already possess</li>
            </ul>
          </>
        )
      }}
      signs={{
        title: "Signs Life Coaching Might Help You",
        subtitle: "Consider this approach if you recognize these patterns in your life",
        items: [
          {
            title: "Goal Clarity Challenges",
            description: "You have aspirations but struggle to define clear, specific goals or aren't sure what you truly want."
          },
          {
            title: "Implementation Struggles",
            description: "You know what you want but have difficulty creating or following through with action plans to achieve it."
          },
          {
            title: "Life Transitions",
            description: "You're navigating significant changes such as career shifts, relationship changes, or major life decisions."
          },
          {
            title: "Motivation & Accountability",
            description: "You find it difficult to stay motivated or would benefit from structured accountability to reach your goals."
          },
          {
            title: "Work-Life Balance",
            description: "You're seeking more harmony between your professional responsibilities and personal well-being."
          },
          {
            title: "Potential Maximization",
            description: "You want to perform at your best, develop new skills, or advance in your personal or professional life."
          }
        ]
      }}
      reminder={{
        title: "Support and Structure Can Transform Your Results",
        subtitle: "Seeking professional guidance to achieve your goals is a strategic investment in your future and demonstrates your commitment to creating the life you truly want."
      }}
      expectations={{
        title: "What to Expect from Life Coaching",
        body: (
          <>
            <p className='mb-4'>
              Life Coaching with Helen is a collaborative, structured process designed to help you achieve specific outcomes. Each session builds on previous progress and keeps you moving toward your defined goals.
            </p>
            <p className='mb-4'>
              During your sessions, you can expect:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Clarification of your core values and vision for the future</li>
              <li>Development of specific, measurable, achievable, relevant, and time-bound (SMART) goals</li>
              <li>Exploration of potential obstacles and limiting beliefs</li>
              <li>Creation of concrete action plans with accountable deadlines</li>
              <li>Regular review of progress and adjustment of strategies as needed</li>
              <li>Celebration of achievements and insights gained along the way</li>
            </ul>
            <p className='mb-4'>
              Between sessions, you'll typically work on agreed-upon action steps that move you closer to your goals. These "homework" assignments are a crucial part of the coaching process, as they help you implement new behaviors, test strategies, and build momentum.
            </p>
            <p>
              Helen's extensive background in various therapeutic approaches allows her to bring additional depth to the coaching relationship, addressing underlying patterns or beliefs that may be hindering your progress. This integrated approach helps create not just external changes but also the internal shifts necessary for sustainable success.
            </p>
          </>
        )
      }}
      results={{
        title: "Benefits of Life Coaching",
        intro: "Life Coaching offers tangible benefits that extend across multiple areas of your life. While your specific outcomes will depend on your unique goals, many clients experience these valuable results:",
        shortTerm: [
          "Greater clarity about your values, priorities, and goals",
          "Increased motivation and accountability",
          "Concrete action plans for moving forward",
          "Enhanced ability to recognize and address obstacles",
          "Improved decision-making skills in alignment with your values"
        ],
        longTerm: [
          "Achievement of specific personal and professional goals",
          "Increased confidence and self-efficacy",
          "More effective time and energy management",
          "Better work-life balance and overall wellbeing",
          "Development of sustainable success habits and mindsets",
          "Enhanced leadership capabilities and interpersonal effectiveness"
        ],
        conclusion: "The benefits of Life Coaching extend beyond achieving specific goals—they include developing skills, mindsets, and approaches that continue to serve you long after the coaching relationship ends. By learning to set meaningful goals, create effective strategies, and overcome obstacles, you become more empowered to navigate future challenges and opportunities with confidence and clarity."
      }}
      cta={{
        title: "Ready to Transform Your Goals into Reality?",
        description: "Take the first step toward creating the life you truly want. Contact us today to learn how Life Coaching with Helen can help you clarify your vision and achieve your most important goals."
      }}
    />
  );
}
