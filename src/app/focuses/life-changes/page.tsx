import Link from 'next/link';
import { routes } from '@/config/routes';
import { FocusPage } from '../FocusPage';

export default function LifeChangesPage() {
  return (
    <FocusPage
      hero={{
        title: "Life Changes & Transitions",
        subtitle: "Finding stability and meaning during times of change"
      }}
      intro={{
        title: "Understanding Life Transitions",
        body: (
          <>
            <p className="mb-4">
              Life is marked by transitions—those significant turning points that move us from one chapter to another.
              Some transitions are planned and welcome, like starting a new job, getting married, or becoming a parent.
              Others arrive unexpectedly through job loss, relationship endings, health challenges, or bereavement.
              Whether chosen or thrust upon us, these transitions can profoundly impact our sense of identity, purpose,
              and wellbeing.
            </p>
            <p>
              During major life changes, it's normal to experience a mix of emotions—excitement and anticipation might
              blend with anxiety, grief, or confusion. Even positive changes can bring stress as we adjust to new roles,
              routines, and expectations. Navigating these periods with awareness and support can transform potentially
              overwhelming transitions into opportunities for growth and renewed purpose.
            </p>
          </>
        )
      }}
      common={{
        title: "Navigating the Challenges of Change",
        body: (
          <>
            <p className="mb-4">
              All of us face significant life transitions, yet they can often feel isolating as we adjust to new
              realities. Common life changes that bring people to therapy include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Career changes, redundancy, or retirement</li>
              <li>Relationship beginnings, endings, or significant shifts</li>
              <li>Becoming a parent or experiencing an empty nest</li>
              <li>Relocation or significant changes in living situation</li>
              <li>Health diagnoses or changes in physical capabilities</li>
              <li>Loss and bereavement</li>
              <li>Identity shifts and redefinitions</li>
              <li>Aging and life stage transitions</li>
            </ul>
            <p className="mb-4">
              These transitions often involve multiple adjustments happening simultaneously:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Practical changes in daily routines and responsibilities</li>
              <li>Emotional processing of what's been lost or gained</li>
              <li>Shifts in how we see ourselves and our place in the world</li>
              <li>Adjustments in relationships and social networks</li>
              <li>Development of new skills and coping strategies</li>
            </ul>
            <p>
              While transitions can be challenging, they also offer unique opportunities to reassess priorities,
              discover new aspects of yourself, and create a life more aligned with your authentic values and needs.
            </p>
          </>
        )
      }}
      signs={{
        title: "Signs You Might Benefit from Therapy",
        subtitle: "Consider seeking professional support if you experience these patterns during a transition:",
        items: [
          {
            title: "Prolonged Emotional Distress",
            description: "Experiencing persistent anxiety, sadness, or mood swings that interfere with daily functioning."
          },
          {
            title: "Identity Confusion",
            description: "Struggling with questions about who you are or your purpose now that circumstances have changed."
          },
          {
            title: "Difficulty Letting Go",
            description: "Finding it hard to accept the reality of your new situation or release past roles and expectations."
          },
          {
            title: "Adjustment Challenges",
            description: "Struggling to adapt to new routines, responsibilities, or social dynamics."
          },
          {
            title: "Decision Paralysis",
            description: "Feeling overwhelmed by choices or unable to determine next steps in your changed circumstances."
          },
          {
            title: "Relationship Strain",
            description: "Experiencing conflict or disconnection in relationships as you navigate your transition."
          }
        ]
      }}
      reminder={{
        title: "Seeking Support Shows Wisdom",
        subtitle: "Reaching out during major life transitions isn't a sign of weakness but of self-awareness. Professional support can help you navigate change with greater clarity, purpose, and resilience. Everyone faces challenging transitions, and therapy provides a valuable space to process and grow through these times."
      }}
      expectations={{
        title: "What to Expect from Therapy",
        body: (
          <>
            <p className="mb-4">
              Your therapy will be tailored to your specific needs and circumstances. Calen Therapy offers different
              therapeutic approaches for navigating life transitions:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>With Helen:</strong> Helen's approach draws from:
                <ul className="list-disc pl-6 ">
                  <li><strong><Link href={routes.styles.personCentered()} className="text-primary hover:underline">Person-Centered Therapy</Link></strong> - Creating a supportive environment where you can explore your reactions to change and clarify your needs and values</li>
                  <li><strong><Link href={routes.styles.psychodynamic()} className="text-primary hover:underline">Psychodynamic approaches</Link></strong> - Understanding how your past experiences influence your response to present transitions</li>
                  <li><strong>Systemic perspective</strong> - Examining how life changes affect your relationships and broader life systems</li>
                  <li><strong><Link href={routes.styles.show('lifecoaching')} className="text-primary hover:underline">Life Coaching</Link></strong> - Setting concrete goals and developing actionable plans for your next chapter</li>
                </ul>
              </li>
              <li className="mb-2"><strong>With Carl:</strong> <Link href={routes.styles.hypnotherapy()} className="text-primary hover:underline">Solution-Focused Hypnotherapy</Link> can help you:
                <ul className="list-disc pl-6 ">
                  <li>Develop a positive vision for your future beyond this transition</li>
                  <li>Access inner resources and strengths through relaxation techniques</li>
                  <li>Reduce anxiety and build confidence to face changes proactively</li>
                </ul>
              </li>
            </ul>
            <p className="mb-4">
              Your therapy experience will be personalized to your specific transition, but may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Processing the emotional impact of your transition, including any grief for what's been lost</li>
              <li>Exploring how this change affects your sense of identity and meaning</li>
              <li>Identifying your core values to guide decision-making in your new circumstances</li>
              <li>Developing practical strategies for managing the concrete challenges of your transition</li>
              <li>Building resilience and coping skills for navigating uncertainty</li>
              <li>Creating meaningful rituals to honor endings and beginnings</li>
              <li>Envisioning and planning for your desired future</li>
            </ul>
            <p>
              The goal isn't to eliminate the challenges of transition but to help you move through them with greater
              awareness, self-compassion, and clarity about what matters most to you. Both therapists provide a
              supportive space to process change and intentionally shape your next chapter.
            </p>
          </>
        )
      }}
      results={{
        title: "Moving Forward with Purpose",
        intro: "While every transition is unique, therapy can help you navigate change with greater ease and intentionality:",
        shortTerm: [
          "Relief from overwhelming emotions through effective processing",
          "Clarity about your values and priorities in this new chapter",
          "Practical strategies for immediate challenges",
          "Greater self-compassion during the adjustment process"
        ],
        longTerm: [
          "Integration of your experience into a cohesive life narrative",
          "Deeper connection with your authentic self and values",
          "Enhanced resilience for navigating future transitions",
          "A renewed sense of meaning and purpose moving forward"
        ],
        conclusion: "Life transitions, while often challenging, can become powerful catalysts for growth and positive change when navigated consciously. With professional support, you can not only survive your current transition but use it as an opportunity to create a life that better reflects who you are and what truly matters to you."
      }}
      cta={{
        title: "Support for Your Journey Through Change",
        description: "You don't have to navigate this transition alone. We can help you look for stability, meaning, and new possibilities during times of change."
      }}
    />
  );
}
