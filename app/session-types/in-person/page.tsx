import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import NormalPageHero from '@app/_components/hero/NormalPageHero';
import { TheSpace } from '@app/session-types/in-person/TheSpace';
import { routes } from '@app/_config/routes';
import { contactDetails } from '@app/_config/main';
import Link from 'next/link';
import { mapLinks, MapComponent } from './Map';
import { buildMetadata } from '@app/_config/metadata';

export const metadata = buildMetadata({
  title: 'In Person',
  url: routes.sessionTypes.inPerson(),
});

export default function InPersonPage() {
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
        title='In Person Therapy'
        subtitle='Face-to-face therapy sessions in our dedicated space in Billinge.' />

      <StripedSection secondary={false} primary={false}>
        <TheSpace
          subtitle="Our therapy space is designed to be comfortable, private and welcoming. Located in our home in Billinge, it features comfortable seating, calming decor, and a peaceful ambiance to help you feel at ease during your therapy sessions."
        />
      </StripedSection>

      <StripedSection secondary={true} primary={false}>
        {renderContentSection(
          'What to Expect',
          <>
            <h3 className="text-xl font-semibold mt-6 mb-3">Arriving</h3>
            <p className="mb-4">When you arrive for your in-person therapy session, you'll find a private driveway and the entrance to the left round the side of the house.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">During Your Session</h3>
            <p className="mb-4">Your therapy session will take place in our comfortable, dedicated therapy space. We strive to create a warm, welcoming environment where you can feel at ease discussing whatever brings you to therapy. Sessions typically last 1-2 hours depending on your needs.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Privacy</h3>
            <p className="mb-4">Our therapy room has an exterior door so you can enter and exit without passing through the main house, ensuring your privacy and comfort.</p>
          </>
        )}
      </StripedSection>

      <StripedSection secondary={false} primary={false}>
        {renderContentSection(
          'Benefits of In-Person Therapy',
          <>
            <p className="mb-4">Face-to-face therapy offers several unique advantages that can enhance your therapeutic experience:</p>

            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Enhanced Non-Verbal Communication:</strong> In-person sessions allow your therapist to pick up on subtle facial expressions, body language, and emotional cues that might be missed online.</li>
              <li className="mb-2"><strong>Dedicated Therapeutic Space:</strong> Complete separation from your home environment can help you focus solely on therapy and create a clear boundary between therapy and everyday life.</li>
              <li className="mb-2"><strong>No Technology Barriers:</strong> Avoid potential internet connection issues or technical difficulties that might interrupt an online session.</li>
              <li className="mb-2"><strong>Heightened Presence:</strong> Many people find it easier to be fully present and engaged when physically in the room with their therapist.</li>
              <li className="mb-2"><strong>Ritual of Attending:</strong> The act of traveling to therapy can provide valuable transition time to prepare mentally before sessions and process afterwards.</li>
            </ul>

            <p className="mb-4">We understand that different preferences and circumstances might make either in-person or <Link href={routes.sessionTypes.online()} className="text-primary hover:underline hover:text-accent">online sessions</Link> more suitable for you. We're happy to discuss which option might work best for your specific situation.</p>
          </>
        )}
      </StripedSection>

      <StripedSection secondary={true} primary={false}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-center">Find Us</h2>
          <a id="find-us" className="block relative -top-48 invisible">Anchor for #find-us</a>

          {/* Map first - full width */}
          <div className="mb-10">
            <MapComponent height="450" width="100%"></MapComponent>
          </div>

          {/* Content below map in three columns on desktop, single column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <address className="not-italic mb-6">
                <p>{contactDetails.address.street}</p>
                <p>{contactDetails.address.town}</p>
                <p>{contactDetails.address.city}</p>
                <p>{contactDetails.address.postcode}</p>
              </address>

              <h3 className="text-xl font-semibold mb-3">Get Directions:</h3>
              <div className="flex flex-col space-y-2">
                <a href={mapLinks.google} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline hover:text-accent">Google Maps</a>
                <a href={mapLinks.apple} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline hover:text-accent">Apple Maps</a>
                <a href={mapLinks.openStreetMap} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline hover:text-accent">OpenStreetMap</a>
              </div>
            </div>

            {/* Column 2: Transportation */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Public Transportation</h3>
              <ul className="space-y-3">
                <li><span className="font-medium">Bus:</span> Route 352 (St Helens - Wigan) stops at Billinge Library, a 5-minute walk away</li>
                <li><span className="font-medium">Nearest Train Stations:</span> Wigan North Western or St Helens Central (both approximately 5 miles away)</li>
                <li><span className="font-medium">Taxi:</span> Recommended from train stations (approx. 15-minute journey)</li>
              </ul>
            </div>

            {/* Column 3: Accessibility */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Accessibility Information</h3>
              <ul className="space-y-3">
                <li>There is one step at the entrance to the therapy room</li>
                <li>Support handles are available to assist with access</li>
                <li>Private driveway parking available close to the entrance</li>
                <li>Please <Link className='text-primary hover:underline hover:text-accent' href={routes.contact()}>contact us</Link> in advance if you have specific accessibility requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </StripedSection>

      <StripedSection secondary={false} primary={true}>
        <CallToAction />
      </StripedSection>
    </div>
  );
}
