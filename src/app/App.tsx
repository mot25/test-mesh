import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavContainer } from "containers/NavContainer";
import { ThemeContainer } from "containers/ThemeContainer";
import { StoreContainer } from "containers/StoreContainer";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ThemeContainer>
        <StoreContainer>
          <NavContainer />
        </StoreContainer>
      </ThemeContainer>
    </SafeAreaView>
  );
}

export default App;
