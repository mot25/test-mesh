import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { Icon, useTheme } from "react-native-paper";
import React from "react";
import { makeStyles } from "shared/utils/themeUtils";
import type { ImageStyle, StyleProp } from "react-native";
export interface DropDownOptions {
  value: number;
  label: string;
}

export interface DropDownProps {
  data: DropDownOptions[];
  setValue: (value: DropDownOptions) => void;
  value: DropDownOptions;
}

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    flex: 1,
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
}));

export const DropDown = ({ value, setValue, data }: DropDownProps) => {
  const theme = useTheme();
  const styles = useStyles();
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[
        styles.dropdown,
        isFocus && { borderColor: theme.colors.inversePrimary },
      ]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle as StyleProp<ImageStyle>}
      data={data}
      search={true}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? "Select item" : "..."}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(item);
        setIsFocus(false);
      }}
      renderLeftIcon={() => (
        <Icon
          color={
            isFocus
              ? theme.colors.inversePrimary
              : theme.colors.secondaryContainer
          }
          source="calendar"
          size={20}
        />
      )}
    />
  );
};
