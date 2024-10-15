import { Route, useRoute } from "@react-navigation/native";

export function useParams<T extends object>(initial: Partial<T> = {}): T {
  const { params = {} } = useRoute<Route<string, T>>();

  return { ...initial, ...params } as T;
}
