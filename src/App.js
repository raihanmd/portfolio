import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./component/Hero";
import theme from "./constant/theme";
import About from "./component/About";
import Skills from "./component/Skills";

function App() {
  // document.oncontextmenu = new Function("return false;");
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <About />
      <Skills />
    </ChakraProvider>
  );
}

export default App;
