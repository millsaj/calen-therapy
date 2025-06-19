export interface IPricing {
  /** hourly rate in GBP */
  rateValue: number;

  /** formatted rate string */
  rate: string;
}

export const pricing: IPricing = {
  rateValue: 50,
  rate: "£50 per hour",
};
