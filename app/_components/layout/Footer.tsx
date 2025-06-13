import Link from 'next/link';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { routes } from '@app/_config/routes';
import { contactDetails } from '@app/_config/main';

export default function Footer() {
  const sections = [
    {
      title: "About",
      links: [
        { name: 'Helen', href: routes.helen() },
        { name: 'Carl', href: routes.carl() },
        { name: 'Find us', href: routes.findUs() },
      ],
    },
  ];

  return (
    <footer className="bg-secondary text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Calen Therapy</h3>
            <p className="text-gray-400 mb-6">
              Professional therapy services for individuals, couples, and families in Wigan, St Helens, and online.
            </p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">About</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={routes.helen()}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Helen
                </Link>
              </li>
              <li>
                <Link
                 href={routes.carl()}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Carl
                </Link>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-3 mt-0.5" />
                <Link
                  href="/find-us"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Find Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 mr-3 mt-0.5" />
                <Link
                  href={`mailto:${contactDetails.emails.helen}`}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {contactDetails.emails.helen}
                </Link>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 mr-3 mt-0.5" />
                <Link
                 href={`mailto:${contactDetails.emails.carl}`}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {contactDetails.emails.carl}
                </Link>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-3 mt-0.5" />
                <Link
                  href={`tel:${contactDetails.phones.helen}`}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Helen: {contactDetails.phones.helen}
                </Link>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-3 mt-0.5" />
                <Link
                  href={`tel:${contactDetails.phones.carl}`}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
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
