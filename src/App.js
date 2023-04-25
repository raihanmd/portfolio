import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./component/Hero";
import theme from "./constant/theme";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <div style={{ background: "tomato", width: "100%", height: "100vh" }}></div>
    </ChakraProvider>
  );
}

export default App;
