import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./component/Hero";
import theme from "./constant/theme";
import About from "./component/About";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <About />
    </ChakraProvider>
  );
}

export default App;
