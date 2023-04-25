import { Button, Flex, Heading, Stack, Text, Container, Icon, Box, Link } from "@chakra-ui/react";
import ParticleCustom from "./ParticleCustom";
import Navbar from "./Navbar";
import TypedJS from "../utils/TypedJS";

import { BsGithub, BsInstagram, BsTiktok } from "react-icons/bs";

export default function Hero() {
  return (
    <Container maxW={"7xl"} minH={"100vh"} mx={"auto"}>
      <Navbar />
      <ParticleCustom />
      <Stack py={{ base: "0", md: "20" }} px={{ xl: "30" }} maxW={"7xl"} minH={"80vh"} direction={{ base: "column", lg: "row" }}>
        <Flex flex={2} align={"center"} justify={"center"} alignItems={"center"}>
          <Stack spacing={4} w={"full"} maxW={{ base: "xl", lg: "full" }} px={{ base: "5" }}>
            <Heading fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}>
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
                marginTop={{ lg: "16" }}
                px={"1.65rem"}
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
            <Stack direction={"row"} spacing={3}>
              {SOCIAL_MEDIA.map((item) => (
                <Flex as={Link} bgColor={"blue.400"} borderRadius={"lg"} p={1.5} href={item.href} boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"} isExternal>
                  <Icon as={item.icon} fontSize={"1.3rem"} color={"white"} />
                </Flex>
              ))}
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={"center"}>
          <div className="shape">
            <div className="shape2"></div>
          </div>
        </Flex>
      </Stack>
    </Container>
  );
}

const SOCIAL_MEDIA = [
  {
    icon: BsGithub,
    href: "https://www.github.com/raihanmd",
  },
  {
    icon: BsInstagram,
    href: "https://www.instagram.com/_raihanmd/",
  },
  {
    icon: BsTiktok,
    href: "https://www.tiktok.com/@lynxpengenbisagolang",
  },
  {
    icon: BsTiktok,
    href: "https://www.tiktok.com/@lynxpengenbisagolang",
  },
];
