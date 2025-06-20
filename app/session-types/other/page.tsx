import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import NormalPageHero from '@app/_components/hero/NormalPageHero';
import { routes, buildMetadata } from '@app/_config';
import Link from 'next/link';

export const metadata = buildMetadata({
  pageTitle: 'Alternative Therapy Options',
  description: 'Flexible therapy solutions including walk & talk sessions, intensive therapy days, and group workshops. Customized approaches to meet your unique therapeutic needs.',
  additionalKeywords: ["walk and talk therapy", "outdoor therapy sessions", "intensive therapy days", "therapy workshops", "group therapy", "alternative counselling", "flexible therapy options"],
  path: routes.sessionTypes.other(),
});

export default function OtherSessionTypesPage() {
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
        title='Alternative Therapy Options'
        subtitle='Flexible solutions for unique circumstances' />

      <StripedSection secondary={false} primary={false}>
        {renderContentSection(
          'Beyond Standard Sessions',
          <>
            <p className="mb-4">While our <Link href={routes.sessionTypes.inPerson()} className="text-primary underline hover:text-accent hover:no-underline decoration-primary/60">in-person</Link> and <Link href={routes.sessionTypes.online()} className="text-primary underline hover:text-accent hover:no-underline decoration-primary/60">online sessions</Link> work well for most clients, we understand that some situations call for different approaches. We're committed to finding solutions that make therapy accessible for everyone.</p>

            <p className="mb-4">All alternative options are arranged on a case-by-case basis. Please <Link href={routes.contact()} className="text-primary underline hover:text-accent hover:no-underline decoration-primary/60">contact us</Link> to discuss your specific needs.</p>

            <p className="mb-4">If you have a specific need or request, please let us know.</p>
          </>
        )}
      </StripedSection>

      <StripedSection secondary={true} primary={false}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Some Other Options</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Option 1 */}
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-xl font-semibold mb-3">Home Visits</h3>
              <p className="mb-3">For clients with mobility challenges or health conditions that make travel difficult.</p>
              <ul className="list-disc pl-6">
                <li className="mb-1">Available within limited area</li>
                <li className="mb-1">Additional travel fees may apply</li>
              </ul>
            </div>

            {/* Option 2 */}
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-xl font-semibold mb-3">Written Therapy</h3>
              <p className="mb-3">Email or letter-based therapy for those who prefer expressing themselves in writing.</p>
              <ul className="list-disc pl-6">
                <li className="mb-1">Structured exchange schedule</li>
                <li className="mb-1">Time to reflect between responses</li>
              </ul>
            </div>

            {/* Option 3 */}
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-xl font-semibold mb-3">Workplace Sessions</h3>
              <p className="mb-3">On-site therapy at your business location for organisations supporting employee mental health.</p>
              <ul className="list-disc pl-6">
                <li className="mb-1">Private space required</li>
                <li className="mb-1">Individual or group formats</li>
              </ul>
            </div>
          </div>
        </div>
      </StripedSection>

      <StripedSection secondary={false} primary={true}>
        <CallToAction
          title='Need a Custom Solution?'
          description={["We're committed to making therapy accessible. Contact us to discuss options that fit your specific circumstances."]} />
      </StripedSection>
    </div>
  );
}
