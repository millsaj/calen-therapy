export interface ICalenImage {
  path: string;
  alt: string;
}

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
  carl: {
    main: calenImage("/images/carl/carl.jpg", "Carl Porter"),
    hero: calenImage("/images/carl/carl-hero.jpeg", "Carl Porter"),
  },
  space: [
    calenImage("/images/space/sat-down-1.jpeg", "Therapy Space"),
    calenImage("/images/space/center-1.jpeg", "Therapy Space"),
    calenImage("/images/space/center-2.jpeg", "Therapy Space"),
    calenImage("/images/space/corner-1.jpeg", "Therapy Space"),
    calenImage("/images/space/corner-2.jpeg", "Therapy Space"),
    calenImage("/images/space/corner-3.jpeg", "Therapy Space"),
  ],
  general: {
    homeHero: calenImage("/images/general/hands_connecting.webp", "Two hands reaching towards each other"),
  }
};
