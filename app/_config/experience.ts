export interface IExperience {
  start: number;
  end: number;
}

const helen: { [key: string]: IExperience } = {
  total: {
    start: 1993,
    end: new Date().getFullYear(),
  },
  relate: {
    start: 2005,
    end: 2016,
  },
  calen: {
    start: 2011,
    end: new Date().getFullYear(),
  },
};


/**
 * Helper to calculate years of experience
 * @param exp Experience duration object
 * @returns Function that calculates years, optionally rounding to nearest 5
 */
const getCalculator = (exp: IExperience) => {
  return (exact: boolean = false) => {
    const exactVal = exp.end - exp.start;
    return exact ? exactVal : Math.round(exactVal / 5) * 5;
  };
};

export const experience = {

  /**
   * Access Helen's experience durations
   */
  helen: {
    total: getCalculator(helen.total),
    relate: getCalculator(helen.relate),
    calen: getCalculator(helen.calen),
  },
};
