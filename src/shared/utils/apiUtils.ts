import { DriversRequest } from "types/typesRace";

export const buildUrlDrivers = ({
  year,
  driverId,
}: Omit<DriversRequest, "limit" | "page">) => {
  let url = "";
  if (year) {
    url += `${year}/`;
  }
  url += "drivers";
  if (driverId) {
    url += `/${driverId}`;
  }
  url += ".json";
  return url;
};
