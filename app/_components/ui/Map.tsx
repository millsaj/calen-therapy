import { contactDetails } from '@app/_config';

const place = contactDetails.address.full.split(" ").join("+");
const lat = contactDetails.address.coordinates.lat;
const lng = contactDetails.address.coordinates.lng;

const zoomLevel = 13; // Adjust this value to change the zoom level of the map
const offset = 0.01 / Math.pow(2, zoomLevel - 13);

const bbox = {
  minLng: lng - offset,
  minLat: lat - offset,
  maxLng: lng + offset,
  maxLat: lat + offset
};

export const mapLinks = {
  google: `https://www.google.com/maps/place/${place}`,
  apple: `https://maps.apple.com/place?address=${place}`,
  openStreetMap: `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoomLevel}/${lat}/${lng}`,
  embed: `https://www.openstreetmap.org/export/embed.html?bbox=${bbox.minLng}%2C${bbox.minLat}%2C${bbox.maxLng}%2C${bbox.maxLat}&layer=mapnik&marker=${lat}%2C${lng}`,
};

interface IMapComponentProps {
  height: string;
  width: string;
}

export const MapComponent = function MapComponent({
  height,
  width
}: IMapComponentProps) {
  return (
    <iframe
      width={width}
      height={height}
      src={mapLinks.embed}
      style={{ border: '1px solid black' }}
      title="Map of the location"
      loading="lazy"
    ></iframe>
  );
}
