import { Testimonials } from '@app/_components/sections/Testimonials';
import { testimonials } from '@app/_config/testimonials';
import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import NormalPageHero from '@app/_components/hero/NormalPageHero';
import { routes } from '@app/_config/routes';
import { images } from '@app/_config/images';
import { contactDetails } from '@app/_config/main';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata } from '@app/_config/metadata';
import { ContactForm } from './ContactForm';

export const metadata = buildMetadata({
  pageTitle: 'Contact Our Therapists',
  description: 'Contact our therapy team for appointments and inquiries. Reach out to Helen for psychotherapy and CBT or Carl for hypnotherapy via phone, email or our online form.',
  additionalKeywords: ["book therapy session", "therapy appointment", "contact therapist", "therapy inquiry", "therapy consultation", "phone consultation"],
  path: routes.contact(),
});

const contactSections = [
  {
    name: 'Helen',
    credentials: 'B.A., PGDip., MBACP., GQHP',
    email: contactDetails.emails.helen,
    phone: contactDetails.phones.helen,
    image: images.helen.main,
    description: ['Psychotherapy, CBT, Counselling', 'For individuals, couples, and families.'],
    link: routes.helen(),
  },
  {
    name: 'Carl',
    credentials: 'Solution Focused Hypnotherapist & NLP Practitioner',
    email: contactDetails.emails.carl,
    phone: contactDetails.phones.carl,
    image: images.carl.main,
    description: ['Solution-focused Hypnotherapy', 'Make positive change.'],
    link: routes.carl(),
  }
];

export default function ContactUsPage() {
  return (
    <>
      <NormalPageHero
        title='Contact Us'
        subtitle='This page contains information on how to get in touch with us for any inquiries or support.' />

      <StripedSection secondary={false} primary={false}>
        <ContactForm />
      </StripedSection>

      <StripedSection secondary={true} primary={false}>
        <div className="max-w-4xl mx-auto">
          {/* Contact Details */}
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto text-center items-center">
            {contactSections.map((contact, index) => {
              return <div key={index}>
                <div className="mb-8 relative">
                  <div className="w-[288px] h-[288px] mx-auto"> 
                    <Image
                      src={contact.image.url}
                      alt={contact.image.alt}
                      width={288}
                      height={288}
                      className="w-full h-full object-cover rounded-full shadow-lg ring-4 ring-white"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">{contact.name}</h3>
                    <p className="text-sm text-gray-500">{contact.credentials}</p>
                  </div>

                  <ul className='mb-6'>
                    <li className="flex justify-center">
                      <EnvelopeIcon className="h-5 w-5 mr-3 mt-0.5" />
                      <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
                    </li>
                    <li className="flex justify-center">
                      <PhoneIcon className="h-5 w-5 mr-3 mt-0.5" />
                      <a href={`tel:${contact.phone}`} className="hover:underline">{contact.phone}</a>
                    </li>
                  </ul>
                  <p>
                    <Link href={contact.link} className="hover:underline text-gray-500">
                      See profile
                    </Link>
                  </p>
                </div>
              </div>
            })}
          </div>
        </div>
      </StripedSection>

      <StripedSection secondary={false} primary={false}>
        <Testimonials testimonials={testimonials} />
      </StripedSection>

      <StripedSection secondary={false} primary={true}>
        <CallToAction />
      </StripedSection>
    </>
  );
}
