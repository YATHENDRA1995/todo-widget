import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { themeLight } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
