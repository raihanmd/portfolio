import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./component/Hero";
import theme from "./constant/theme";
import About from "./component/About";
import Projects from "./component/Projects";

function App() {
  document.oncontextmenu = new Function("return false;");
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <About />
      <Projects />
    </ChakraProvider>
  );
}

export default App;
