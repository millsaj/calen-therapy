import Link from 'next/link';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { routes, contactDetails } from '@app/_config';

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Calen Therapy</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Professional therapy services for individuals, couples, and families in Wigan, St Helens, and online.
            </p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-6">About</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={routes.helen()}
                  className="text-gray-600 hover:text-accent transition-colors"
                >
                  Helen
                </Link>
              </li>
              <li>
                <Link
                 href={routes.carl()}
                  className="text-gray-600 hover:text-accent transition-colors"
                >
                  Carl
                </Link>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-3 mt-0.5" />
                <Link
                  href="/find-us"
                  className="text-gray-600 hover:text-accent transition-colors"
                >
                  Find Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 mr-3 mt-0.5" />
                <Link
                  href={`mailto:${contactDetails.emails.helen}`}
                  className="text-gray-600 hover:text-accent transition-colors break-all"
                >
                  {contactDetails.emails.helen}
                </Link>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 mr-3 mt-0.5" />
                <Link
                 href={`mailto:${contactDetails.emails.carl}`}
                  className="text-gray-600 hover:text-accent transition-colors break-all"
                >
                  {contactDetails.emails.carl}
                </Link>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-3 mt-0.5" />
                <Link
                  href={`tel:${contactDetails.phones.helen}`}
                  className="text-gray-600 hover:text-accent transition-colors break-all"
                >
                  Helen: {contactDetails.phones.helen}
                </Link>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-3 mt-0.5" />
                <Link
                  href={`tel:${contactDetails.phones.carl}`}
                  className="text-gray-600 hover:text-accent transition-colors break-all"
                >
                  Carl: {contactDetails.phones.carl}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
