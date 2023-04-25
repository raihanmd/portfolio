import { Button, Flex, Heading, Stack, Text, Container } from "@chakra-ui/react";
import ParticleCustom from "./ParticleCustom";
import Navbar from "./Navbar";
import TypedJS from "../utils/TypedJS";

export default function Hero() {
  return (
    <Container maxW={"7xl"} minH={"100vh"} mx={"auto"}>
      <Navbar />
      <ParticleCustom />
      <Stack py={{ base: "0", md: "20" }} maxW={"7xl"} minH={"80vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={2} align={"center"} justify={"center"} alignItems={"center"}>
          <Stack spacing={3} w={"full"} maxW={{ base: "lg", lg: "full" }} px={{ base: "5" }}>
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                Hello There 👋
              </Text>
              <br />
              <Text color={"blue.400"} as={"span"}>
                I'm <span style={{ color: "tomato" }}>Muhammad</span> Raihan Firdaus.
              </Text>{" "}
            </Heading>
            <Text fontSize={"lg"} color={"gray.700"}>
              <TypedJS
                string={[
                  'I\'m <span style="color: black">Frontend</span> Developer.',
                  'I\'m <span style="color: red">Backend</span> Developer.',
                  'I\'m <span style="color: green">Fullstack</span> Developer.',
                  'I\'m <span style="color: gray">Unity</span> Engineer.',
                ]}
              />
            </Text>
            <Stack direction={{ base: "column", md: "row" }}>
              <Button
                px={4}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Let's get in touch
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={"center"}>
          <div className="shape">
            <div className="shape2">
              <div className="shape3"></div>
            </div>
          </div>
        </Flex>
      </Stack>
    </Container>
  );
}
