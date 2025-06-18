'use client';

import Link from 'next/link';
import { mapLinks, MapComponent } from '@app/_components/ui/Map';
import { contactDetails } from '@app/_config/main';
import { routes } from '@app/_config/routes';

interface IFindUsProps {
  title?: string;
}

export const FindUs: React.FC<IFindUsProps> = ({
  title = 'Find Us',
}) => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <a id="find-us" className="block relative -top-48 invisible">Anchor for #find-us</a>

      {/* Map first - full width */}
      <div className="my-10">
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
  );
};
