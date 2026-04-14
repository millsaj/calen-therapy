/** Pre-computed years of experience for each therapist. Values are calculated once at build time. */

const thisYear = new Date().getFullYear();

/** Calculates years between two years, rounded down to the nearest 5. */
function yearsRounded(start: number, end: number): number {
  return Math.floor((end - start) / 5) * 5;
}

export const experience = {
  helen: {
    /** Total years as a therapist, rounded down to the nearest 5 (e.g. 30). */
    total: yearsRounded(1993, thisYear),
    /** Exact years working with Relate (2005–2016). */
    relate: 2016 - 2005,
    /** Exact years running Calen Therapy. */
    calen: thisYear - 2011,
  },
};
