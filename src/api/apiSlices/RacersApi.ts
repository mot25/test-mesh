import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "shared/api/apiHelpers";
import { ApiConstant } from "shared/api/ApiConstant";
import { APIErgastResponse } from "types/ApiTypes";
import {
  DriversRequest,
  DriversResponse,
  DriversTypeOnceType,
} from "types/typesRace";
import { buildUrlDrivers } from "shared/utils/apiUtils";

export const RacersApi = createApi({
  reducerPath: "RacersApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (build) => ({
    getRacers: build.query<APIErgastResponse<DriversResponse>, DriversRequest>({
      query: ({ page, limit, year, driverId }) => {
        const offset = page * limit;
        return {
          url: buildUrlDrivers({ year, driverId }),
          params: { limit, offset },
        };
      },
    }),
    getRacerDetail: build.query<APIErgastResponse<DriversTypeOnceType>, string>(
      {
        query: (id) => ({ url: `${ApiConstant.getRacers}/${id}.json` }), // Предположим, у вас есть подходящий URL
      },
    ),
  }),
});

export const { useGetRacersQuery, useGetRacerDetailQuery } = RacersApi;
