import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import NormalPageHero from '@app/_components/hero/NormalPageHero';
import { routes, buildMetadata } from '@app/_config';
import Link from 'next/link';

export const metadata = buildMetadata({
  pageTitle: 'Online & Telephone Therapy Sessions',
  siteTitle: 'Calen Therapy - Remote Therapy',
  description: 'Professional online therapy from the comfort of your home. Secure video sessions and telephone counselling with qualified therapists for effective remote support.',
  additionalKeywords: ["online counselling", "virtual therapy", "video therapy", "remote counselling", "telephone therapy", "zoom therapy sessions", "digital therapy"],
  path: routes.sessionTypes.online(),
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
        subtitle='Effective therapy from the comfort of your own space via secure video sessions or telephone calls.' />

      <StripedSection secondary={false} primary={false}>
        {renderContentSection(
          'Remote Therapy Experience',
          <>
            <p className="mb-4">Our remote therapy sessions provide the same high-quality care as our in-person sessions but with the added convenience of connecting from wherever you are. Choose between video calls using secure, confidential platforms or traditional telephone sessions - whichever feels most comfortable for you.</p>

            <p className="mb-4">Remote therapy has become increasingly popular, and research shows it can be just as effective as face-to-face therapy for many people. It eliminates travel time, provides flexibility with scheduling, and allows you to engage in therapy from a space where you feel most comfortable.</p>
          </>
        )}
      </StripedSection>

      <StripedSection secondary={true} primary={false}>
        {renderContentSection(
          'What to Expect',
          <>
            <h3 className="text-xl font-semibold mt-6 mb-3">Before Your Session</h3>
            <p className="mb-4">After booking, you'll receive details for your session - either a secure link to join your video call or confirmation of the phone number we'll use to reach you. For video calls, we recommend testing your equipment beforehand to ensure everything is working properly.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">During Your Session</h3>
            <p className="mb-4">Remote sessions follow the same format as in-person therapy. We'll connect at your scheduled time, and we will guide the conversation based on your needs. Sessions typically last 1-2 hours depending on what you've arranged.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Privacy</h3>
            <p className="mb-4">For video calls, we use secure, encrypted platforms that comply with privacy regulations. For all remote sessions, we recommend finding a quiet, private space where you won't be interrupted, and where you feel comfortable speaking openly.</p>
          </>
        )}
      </StripedSection>

      <StripedSection secondary={false} primary={false}>
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

            <p className="mb-4">We understand that different preferences and circumstances might make remote or <Link href={routes.sessionTypes.inPerson()} className="text-primary hover:underline hover:text-accent">in-person sessions</Link> more suitable for you. We're happy to discuss which option might work best for your specific situation.</p>
          </>
        )}
      </StripedSection>


      <StripedSection secondary={true} primary={false}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing Between Video and Phone Sessions</h2>
          <div className="prose prose-lg">
            <p className="mb-4">Both video and phone therapy have their own unique benefits. Your choice may depend on your personal preferences, technological comfort, and therapeutic needs:</p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Video Sessions</h3>
                <ul className="list-disc pl-6">
                  <li className="mb-2">Visual connection with us</li>
                  <li className="mb-2">Can pick up on non-verbal cues and facial expressions</li>
                  <li className="mb-2">May feel more similar to in-person therapy</li>
                  <li className="mb-2">Ability to share visuals when relevant</li>
                  <li className="mb-2">Great for those who connect better with visual interaction</li>
                  <li className="mb-2">Sessions usally take place on Zoom</li>
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

      <StripedSection secondary={true} primary={true}>
        <CallToAction />
      </StripedSection>
    </div>
  );
}
