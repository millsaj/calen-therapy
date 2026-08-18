import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import NormalPageHero from '@app/_components/hero/NormalPageHero';
import { routes, buildMetadata } from '@app/_config';
import Link from 'next/link';

export const metadata = buildMetadata({
  pageTitle: 'Online & Telephone Therapy Sessions',
  siteTitle: 'Calen Therapy - Remote Therapy',
  description: 'Professional online therapy from the comfort of your home. Secure video sessions and telephone counselling for effective remote support, available across the UK.',
  additionalKeywords: ["online counselling", "virtual therapy", "video therapy", "remote counselling", "telephone therapy", "zoom therapy sessions", "digital therapy"],
  path: routes.sessionTypes.online,
});

export default function OnlinePage() {
  const renderContentSection = (title: string, body: React.ReactNode) => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="prose prose-lg">
        {body}
      </div>
    </div>
  );

  return (
    <div>
      <NormalPageHero
        title='Online & Phone Therapy'
        subtitle='Effective therapy from the comfort of your own space via secure video sessions or telephone calls, available to clients across the UK.' />

      <StripedSection>
        {renderContentSection(
          'Remote Therapy Experience',
          <>
            <p className="mb-4">My remote therapy sessions provide the same high-quality care as in-person sessions but with the added convenience of connecting from wherever you are. Choose between video calls using secure, confidential platforms or traditional telephone sessions - whichever feels most comfortable for you.</p>

            <p className="mb-4">Remote therapy has become increasingly popular, and research shows it can be just as effective as face-to-face therapy for many people. It eliminates travel time, provides flexibility with scheduling, and allows you to engage in therapy from a space where you feel most comfortable.</p>
          </>
        )}
      </StripedSection>

      <StripedSection variant="secondary">
        {renderContentSection(
          'What to Expect',
          <>
            <p className="mb-4">Online therapy offers a convenient and confidential way to access support from the comfort of your own home.</p>

            <p className="mb-4">Sessions are held securely via Zoom, with meetings protected and locked to maintain your privacy. After booking, you'll receive a secure link to join your video call, or confirmation of the phone number I'll use to reach you for telephone sessions. I recommend testing your equipment beforehand to ensure everything is working properly.</p>

            <p className="mb-4">If therapy involves more than one person, you do not need to be in the same location - each person can join securely from their own home. Online sessions can be particularly convenient for couples and families who live in different areas, or for busy parents who may prefer to arrange a session once the children are in bed.</p>

            <p className="mb-4">It gives you the flexibility to access therapy in a familiar, comfortable environment, without the need to travel.</p>
          </>
        )}
      </StripedSection>

      <StripedSection>
        {renderContentSection(
          'Benefits of Remote Therapy',
          <>
            <p className="mb-4">Remote therapy offers several unique advantages that make it an excellent option for many people:</p>

            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Convenience and Flexibility:</strong> No travel time means therapy can fit more easily into your busy schedule.</li>
              <li className="mb-2"><strong>Comfort of Your Own Space:</strong> Engage in therapy from familiar surroundings where you may feel more at ease.</li>
              <li className="mb-2"><strong>Increased Accessibility:</strong> Access quality therapy regardless of your location, mobility limitations, or transportation challenges.</li>
              <li className="mb-2"><strong>Reduced Barriers:</strong> Some people find it easier to open up when in their own environment, potentially accelerating the therapeutic process.</li>
              <li className="mb-2"><strong>Continuity of Care:</strong> Bad weather, illness, or travel won't interrupt your therapy journey.</li>
              <li className="mb-2"><strong>Options for Different Needs:</strong> Choose between video or phone depending on your comfort level, technological access, and personal preference.</li>
            </ul>

            <p className="mb-4">I understand that different preferences and circumstances might make remote or <Link href={routes.sessionTypes.inPerson} className="text-primary underline hover:text-accent hover:no-underline decoration-primary/60">in-person sessions</Link> more suitable for you. I'm happy to discuss which option might work best for your specific situation.</p>
          </>
        )}
      </StripedSection>


      <StripedSection variant="secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing Between Video and Phone Sessions</h2>
          <div className="prose prose-lg">
            <p className="mb-4">Both video and phone therapy have their own unique benefits. Your choice may depend on your personal preferences, technological comfort, and therapeutic needs:</p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Video Sessions</h3>
                <ul className="list-disc pl-6">
                  <li className="mb-2">Visual connection with me</li>
                  <li className="mb-2">Can pick up on non-verbal cues and facial expressions</li>
                  <li className="mb-2">May feel more similar to in-person therapy</li>
                  <li className="mb-2">Ability to share visuals when relevant</li>
                  <li className="mb-2">Great for those who connect better with visual interaction</li>
                  <li className="mb-2">Sessions usually take place on Zoom</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Phone Sessions</h3>
                <ul className="list-disc pl-6">
                  <li className="mb-2">No need for internet or video technology</li>
                  <li className="mb-2">Can be more accessible for those with limited tech experience</li>
                  <li className="mb-2">May feel less intrusive for some clients</li>
                  <li className="mb-2">Freedom to position yourself comfortably without camera constraints</li>
                </ul>
              </div>
            </div>

            <p className="mb-4">Many clients find that they prefer one method over the other, while some alternate between the two depending on their circumstances.</p>
          </div>
        </div>
      </StripedSection>

      <StripedSection variant="primary">
        <CallToAction />
      </StripedSection>
    </div>
  );
}
