import { ThemeProvider } from "styled-components";
import Home from "./pages/home/Home";
import { GlobalStyles } from "./styles/globalStyles";
import { themeDark } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={themeDark}>
      <GlobalStyles />
      {/* Pages */}
      <Home />
    </ThemeProvider>
  );
};

export default App;
