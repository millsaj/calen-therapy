/** An image asset used on the site. */
export interface ICalenImage {
  /** Absolute path to the image file (e.g. '/images/helen/helen.jpg'). */
  path: string;
  /** Alt text for accessibility and SEO. */
  alt: string;
}

/**
 * Returns the URL for an image, using the Netlify Image CDN when deployed.
 * Falls back to the raw file path in local development.
 */
export const getImageUrl = (
  image: ICalenImage,
  w?: number,
  h?: number,
  fit?: 'cover' | 'contain' | 'fill',
  position?: 'left' | 'right' | 'top' | 'bottom' | 'center',
  quality: number = 90,
) => {
  if (!process.env.NETLIFY) {
    return image.path;
  }
  const baseUrl = '/.netlify/images';

  // Uncomment the line below for testing production images locally
  // const baseUrl = 'https://calentherapy.co.uk/.netlify/images';

  const params = new URLSearchParams();

  params.set('url', image.path);

  if (w) params.set('w', w.toString());
  if (h) params.set('h', h.toString());
  if (fit) params.set('fit', fit);
  if (position) params.set('position', position);
  if (quality) params.set('q', quality.toString());

  return `${baseUrl}?${params.toString()}`;
}

const calenImage = (path: string, alt: string): ICalenImage => {
  return {
    path,
    alt,
  }
}

/**
 * All images used throughout the site
 */
export const images = {
  helen: {
    main: calenImage("/images/helen/helen.jpg", "Helen Porter"),
    hero: calenImage("/images/helen/helen-hero.jpg", "Helen Porter"),
    bacp: calenImage("/images/helen/bacp-member.png", "BACP Registered Member 52368"),
  },
  space: [
    calenImage("/images/space/seating.jpg", "Two soft armchairs in the therapy room, below a wall clock and butterfly wall art"),
    calenImage("/images/space/entrance-corner.jpg", "The therapy room's own external door, with an armchair and shelves alongside it"),
    calenImage("/images/space/wall-art.jpg", "Framed prints on the therapy room wall, beside the door through to the bathroom"),
  ],
  general: {
    homeHero: calenImage("/images/general/hands_connecting.webp", "Two hands reaching towards each other"),
  }
};
