export interface APIErgastResponse<T> {
  MRData: MRData<T>;
}

export interface MRData<T> {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  DriverTable: T;
}
