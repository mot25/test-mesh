import { useState } from "react";
import Pdf from "react-native-pdf";
import { AppScreen } from "containers/AppScreenProps";
import { Text } from "react-native";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const sourvePdfResume = require("assets/pdf/ResumePogodaevDev.pdf");

export const MyPage = () => {
  const [errorLoadPdf, setErrorLoadPdf] = useState("");

  if (errorLoadPdf) {
    return (
      <AppScreen>
        <Text>download error: {errorLoadPdf}</Text>
      </AppScreen>
    );
  }

  return (
    <AppScreen>
      <Pdf
        trustAllCerts={false}
        style={{ flex: 1 }}
        source={sourvePdfResume}
        onError={(err) => {
          const error =
            err instanceof Error ? err : new Error(JSON.stringify(err));
          setErrorLoadPdf(error.message);
        }}
      />
    </AppScreen>
  );
};
