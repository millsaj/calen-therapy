export interface IPricing {
  /** hourly rate in GBP */
  rateValue: number;

  /** formatted rate string */
  rate: string;
}

export const pricing: IPricing = {
  rateValue: 55,
  rate: "£55 per hour",
};
