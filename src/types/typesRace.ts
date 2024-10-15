import { ApplicationRequestWithPagination } from "types/ApplicationTypes";

export interface DriversGeneralType {
  driverId: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface DriversType extends DriversGeneralType {
  permanentNumber?: string;
  code?: string;
}

export interface DriversResponse {
  Drivers: DriversGeneralType[];
}

export interface DriversTypeOnceType extends DriversResponse {
  driverId: string;
}

export type DriversYear = number | undefined;

export interface DriversRequest extends ApplicationRequestWithPagination {
  year?: DriversYear;
  driverId?: number;
}
