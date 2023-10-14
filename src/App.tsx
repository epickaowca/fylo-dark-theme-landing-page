import { GlobalStyle, myTheme } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Advantages } from "./components/Advantages";
import { ProductiveSection } from "./components/ProductiveSection";
import { FeedbackSection } from "./components/FeedbackSection";

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <Header />
        <Hero />
        <Advantages />
        <ProductiveSection />
        <FeedbackSection />
      </ThemeProvider>
    </>
  );
}

export default App;
