'use client';

import { Testimonials } from '@app/_components/sections/Testimonials';
import { testimonials } from '@app/_config/testimonials';
import { focuses } from '@app/_config/focuses';
import { styles } from '@app/_config/styles';
import { images } from '@app/_config/images';
import { routes } from '@app/_config/routes';
import { Focuses } from '@app/_components/sections/Focuses';
import { TherapyStyles } from '@app/_components/sections/TherapyStyles';
import { SplitPageHero } from '@app/_components/hero/SplitPageHero';
import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import Link from 'next/link';
import Image from 'next/image';

export default function HelenPage() {

  return (
    <div>
      {/* Hero Section */}
      <SplitPageHero
        imageSrc={images.helen.main.src}
        imageAlt={images.helen.main.alt}
        title='Helen Mills Porter'>

        <p>Hi, I'm Helen. I've spent the last 25 years working as a psychotherapist.
          I've worked with individuals, couples, and families across a wide range of concerns.</p>
        <p>I specialize in Psychodynamic Psychotherapy, Systemic Therapy, and Cognitive Behavioral Therapy (CBT).
          I also have some specialist training in working with sex addiction and trauma.
        </p>
        <p>As a registered member of the British Association for Counselling & Psychotherapy (BACP), I adhere to their
          ethical framework, ensuring professional standards in all aspects of my practice.</p>
        <p>Whether you're facing an addiction, anxiety, stress, a long term illness or relationship problems; I provide a safe,
          confidential, and non-judgmental space where you can explore your thoughts and feelings at your own pace. Together, we'll
          work toward meaningful and lasting positive change in your life</p>

        <Link href={routes.external.helenBacp()} target="_blank">
          <Image
            src={images.helen.bacp.src}
            alt={images.helen.bacp.alt}
            width={250}
            height={0}
            className="mt-10 h-auto"
          />
        </Link>
      </SplitPageHero>

      <StripedSection secondary={true} primary={false}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">Qualifications & Experience</h2>
          <p className="text-xl text-gray-600 mb-10">Over 30 years of professional training and experience.</p>

          <div className="flex flex-col gap-8 items-center">
            {/* Qualifications Card */}
            <div className="w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 hover:scale-[1.02] transition-transform">
              <div className="bg-secondary w-14 h-14 flex items-center justify-center rounded-full shadow-lg mt-1">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <div className="text-center max-w-[85%]">
                <h3 className="text-xl font-semibold text-primary mb-4">Qualifications</h3>
                <p className="text-gray-700 text-sm mb-6">
                  I graduated with my first degree in Psychology in 1995<br/>

                  I have since completed various specialist diplomas to allow me to provide the best support for my clients.
                </p>
                <ul className="text-gray-700 space-y-3 font-medium w-full">
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">Cognitive Behavioral Therapy (CBT) (Level 5)</li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">Systemic & Psychodynamic Therapy (Level 7  - Postgrad)</li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">Working with Children & Young People (with Relate)</li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">Person-Centred Therapy (Level 5)</li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">Sex Addiction Therapy (Level 5)</li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">Working with Trauma</li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">Same Sex Relationships & Polyamory</li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">Online & Email Therapy (with Relate)</li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">Working with Children 5-18</li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">Life Coaching</li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">Hypnotherapy Diploma</li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">Psychology & Adult Careers Guidance</li>
                </ul>
              </div>
            </div>

            {/* Experience Card */}
            <div className="w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 hover:scale-[1.02] transition-transform">
              <div className="bg-secondary w-14 h-14 flex items-center justify-center rounded-full shadow-lg mt-1">
                <span className="text-white text-2xl">📜</span>
              </div>
              <div className="text-center max-w-[85%]">
                <h3 className="text-xl font-semibold text-primary mb-4">In Practice</h3>
                <p className="text-gray-700 text-sm mb-6">
                  I've worked as a therapist for the last 30 years
                </p>
                <ul className="text-gray-700 space-y-3 font-medium w-full">
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">Calen Therapy (since 20XX)</li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors"><Link className='text-primary hover:underline hover:text-accent' href={routes.external.relate()}>Relate</Link> (20XX - 20XX)</li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">etc</li>
                </ul>
              </div>
            </div>

            {/* Memberships Section */}
            <div className="w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 hover:scale-[1.02] transition-transform">
              <div className="bg-secondary w-14 h-14 flex items-center justify-center rounded-full shadow-lg mt-1">
                <span className="text-white text-2xl">🏅</span>
              </div>
              <div className="text-center max-w-[85%]">
                <h3 className="text-xl font-semibold text-primary mb-4">Professional Memberships</h3>
                <p className="text-gray-700 text-sm mb-6">
                  Helen is a proud member of the following professional organisations:
                </p>
                <ul className="text-gray-700 space-y-3 font-medium w-full">
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <Link href={routes.external.helenBacp()} target="_blank"><span>BACP (Registered Member)</span></Link>
                  </li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <Link href={routes.external.helenCounsellingDirectory()} target="_blank"><span>Counselling Directory</span></Link>
                  </li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <Link href={routes.external.helenPsychologyToday()} target="_blank"><span>Psychology Today</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </StripedSection>

      <StripedSection secondary={false} primary={false}>
        <TherapyStyles
          title = 'Our Therapy Approaches'
          subtitle = 'We offer a variety of therapeutic approaches, each tailored to address specific needs and goals.'
          styles={styles.helen()}
          striped={false} />
      </StripedSection>

      <StripedSection secondary={true} primary={false}>
        <Focuses
          focuses={focuses.helen()}
          striped={true} />
      </StripedSection>

      <StripedSection secondary={false} primary={false}>
        <Testimonials testimonials={testimonials.filter((t) => t.therapists.includes('helen'))} />
      </StripedSection>

      <StripedSection secondary={false} primary={true}>
        <CallToAction />
      </StripedSection>
    </div>
  );
}
