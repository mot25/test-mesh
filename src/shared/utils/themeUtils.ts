import { useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import { isEmpty, isFunction } from "lodash";
import { useEffect, useMemo, useRef } from "react";
import type { MD3Theme } from "react-native-paper/src/types";
import {
  MakeStylesResultType,
  NamedStyles,
  NamedStylesFunc,
  ThemeProps,
} from "types/theme";

function useSynchronousEffect(func: any, values: any) {
  const key = useRef<any>([]);
  let output: any;

  // Store "generation" key. Just returns a new object every time
  const currentKey = useMemo(() => ({}), values);

  // "the first render", or "memo dropped the value"
  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  useEffect(
    () => () => {
      if (output != null) {
        output();
      }
    },
    [currentKey, output],
  );
}

function StyleCreator<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: NamedStylesFunc<T> | T,
) {
  return {
    create<D>(theme: ThemeProps): D {
      // @ts-ignore
      const baseStyles = isFunction(styles) ? styles(theme) : styles;

      // @ts-ignore
      return StyleSheet.create(baseStyles);
    },
  };
}
export function makeStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: NamedStylesFunc<T> | T,
): MakeStylesResultType<T> {
  const styleCreator = StyleCreator<T>(styles);

  return () => {
    const theme = useTheme();
    const key = useRef<NamedStyles<T> | NamedStyles<any>>({} as T);

    useSynchronousEffect(() => {
      if (!isEmpty(theme)) {
        key.current = styleCreator.create<T>(theme as MD3Theme);
      }
    }, [theme]);

    return key.current;
  };
}
