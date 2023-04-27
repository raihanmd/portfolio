import { Button, Flex, Heading, Stack, Text, Container, Icon, Box, Link, Image } from "@chakra-ui/react";
import ParticleCustom from "./ParticleCustom";
import Navbar from "./Navbar";
import TypedJS from "../utils/TypedJS";

import { BsGithub, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";

import person from "../images/person.webp";

export default function Hero() {
  return (
    <Container maxW={{ lg: "4xl", xl: "6xl", "2xl": "7xl" }} minH={"100vh"} mx={"auto"} overflow={"hidden"}>
      <Navbar />
      <ParticleCustom />
      <Stack margin={0} py={{ base: "0", md: "20" }} px={{ lg: "38", xl: "30" }} maxW={"7xl"} minH={"80vh"} direction={{ base: "column", lg: "row" }}>
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
            <Text fontSize={"xl"} color={"gray.700"}>
              <TypedJS
                loop={true}
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
                <Flex
                  as={Link}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                  bgColor={"blue.400"}
                  borderRadius={"lg"}
                  p={1.5}
                  href={item.href}
                  boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
                  isExternal
                >
                  <Icon as={item.icon} fontSize={"1.3rem"} color={"white"} />
                </Flex>
              ))}
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <Box className="shape" boxShadow={"8px 8px 30px 10px rgb(144 205 244 / 48%)"}>
            <Box className="shape2" boxShadow={"8px 8px 30px 10px rgb(66 153 225 / 48%)"}></Box>
          </Box>
          <Image className="person" position={"absolute"} src={person} alt="Person Image" />
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
    icon: BsYoutube,
    href: "https://www.youtube.com/channel/UCT4aPXZrfCaKjYMCSGqUUEQ",
  },
];
