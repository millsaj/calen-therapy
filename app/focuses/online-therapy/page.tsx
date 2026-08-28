import Link from 'next/link';
import { routes, buildMetadata } from '@app/_config';
import { FocusPage } from '../FocusPage';

export const metadata = buildMetadata({
  pageTitle: 'Online & Telephone Therapy Sessions',
  siteTitle: 'Calen Therapy - Remote Therapy',
  description: 'Professional online therapy from the comfort of your home. Secure video sessions and telephone counselling for effective remote support, available across the UK.',
  additionalKeywords: ["online counselling", "virtual therapy", "video therapy", "remote counselling", "telephone therapy", "zoom therapy sessions", "digital therapy"],
  path: routes.focuses.onlineTherapy,
});

export default function OnlineTherapyPage() {
  return (
    <FocusPage
      hero={{
        title: "Online & Phone Therapy",
        subtitle: "Effective therapy from the comfort of your own space, available to clients across the UK"
      }}
      intro={{
        title: "What Is Online Therapy?",
        body: (
          <>
            <p className="mb-4">
              Online therapy offers the same high-quality care as in-person sessions, with the added convenience
              of connecting from wherever you are. Choose between video calls using secure, confidential
              platforms or traditional telephone sessions - whichever feels most comfortable for you.
            </p>
            <p>
              Remote therapy has become increasingly popular, and research shows it can be just as effective as
              face-to-face therapy for many people. It eliminates travel time, provides flexibility with
              scheduling, and allows you to engage in therapy from a space where you feel most comfortable.
            </p>
          </>
        )
      }}
      common={{
        title: "Why People Choose Online Therapy",
        body: (
          <>
            <p className="mb-4">
              There are many reasons clients choose to work with me remotely rather than in person:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Busy schedules that leave little time for travel</li>
              <li>Living outside the Wigan and St Helens area, or elsewhere in the UK</li>
              <li>Wanting to speak from a familiar, comfortable environment</li>
              <li>Mobility or health considerations that make travelling difficult</li>
              <li>Couples or families based in different locations who still want to attend sessions together</li>
              <li>A simple preference for privacy</li>
            </ul>
            <p>
              Whatever the reason, online and phone sessions give you a flexible way to access the same
              professional support.
            </p>
          </>
        )
      }}
      signs={{
        title: "Is Online Therapy Right for You?",
        subtitle: "Online or phone sessions may suit you well if:",
        items: [
          {
            title: "Busy Schedule",
            description: "You struggle to fit travel time around work, family, or other commitments."
          },
          {
            title: "Distance",
            description: "You live outside the Wigan and St Helens area, or elsewhere in the UK."
          },
          {
            title: "Comfort of Home",
            description: "You'd feel more at ease speaking from a familiar, private space."
          },
          {
            title: "Mobility or Health",
            description: "Travelling to sessions is difficult or impractical for you."
          },
          {
            title: "Family in Different Locations",
            description: "You want to attend sessions together with a partner or family member who isn't based nearby."
          },
          {
            title: "Preference for Privacy",
            description: "You'd rather not be seen visiting a therapy space."
          }
        ]
      }}
      reminder={{
        title: "Just as Effective as Face-to-Face",
        subtitle: "Remote therapy is a legitimate, evidence-backed way to work through what's troubling you - not a lesser substitute for in-person sessions. What matters most is the relationship we build together, which works just as well over video or the phone as it does in person."
      }}
      expectations={{
        title: "What to Expect",
        body: (
          <>
            <p className="mb-4">
              Sessions are held securely via Zoom, with meetings protected and locked to maintain your privacy.
              After booking, you'll receive a secure link to join your video call, or confirmation of the phone
              number I'll use to reach you for telephone sessions. I recommend testing your equipment beforehand
              to ensure everything is working properly.
            </p>
            <p className="mb-4">
              If therapy involves more than one person, you do not need to be in the same location - each
              person can join securely from their own home.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Video Sessions</h3>
                <ul className="list-disc pl-6">
                  <li className="mb-2">Visual connection with me</li>
                  <li className="mb-2">Picks up on non-verbal cues and facial expressions</li>
                  <li className="mb-2">May feel more similar to in-person therapy</li>
                  <li className="mb-2">Sessions usually take place on Zoom</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Phone Sessions</h3>
                <ul className="list-disc pl-6">
                  <li className="mb-2">No need for internet or video technology</li>
                  <li className="mb-2">Can be more accessible for those with limited tech experience</li>
                  <li className="mb-2">Freedom to position yourself comfortably without camera constraints</li>
                </ul>
              </div>
            </div>

            <p>
              I also offer <Link href={routes.findUs} className="text-primary underline hover:text-accent hover:no-underline decoration-primary/60">in-person sessions</Link> at my therapy space in Billinge, if you'd prefer to meet face to face.
            </p>
          </>
        )
      }}
      results={{
        title: "What Online Therapy Can Offer You",
        intro: "Working together remotely can bring the same meaningful benefits as in-person therapy, with a few practical advantages of its own:",
        shortTerm: [
          "No travel time, so sessions fit more easily around your day",
          "A comfortable, familiar setting to speak from",
          "Flexibility to choose video or phone depending on how you feel",
          "The same confidential, professional support as an in-person session"
        ],
        longTerm: [
          "Consistent attendance, even when weather, health or travel would otherwise get in the way",
          "Access to support regardless of where you live",
          "A therapeutic relationship that develops just as effectively over time",
          "The flexibility to keep therapy going through changing circumstances"
        ],
        conclusion: "Working remotely doesn't mean compromising on the quality of the work we do together - it simply means finding the format that lets you engage with it most easily."
      }}
      cta={{
        title: "Ready to Begin Online?",
        description: "Start your therapy journey from wherever you feel most comfortable."
      }}
    />
  );
}
