import {
  Box,
  Stack,
  Flex,
  Icon,
  Heading,
  Container,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import { GoPerson } from "react-icons/go";
import { BsArrowDownCircle } from "react-icons/bs";
import { RiRoadMapFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import COLOR from "../constant/color";
import personPic2 from "../images/person_2.webp";

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <Container
      minW={"full"}
      bg={"white"}
      mx={"auto"}
      py={{ base: 10, "2xl": 20 }}
      overflow={"hidden"}
      color={"gray.700"}
    >
      <Stack
        id="about"
        spacing={10}
        mx={"auto"}
        maxW={{ base: "xl", xl: "5xl", "2xl": "7xl" }}
        py={10}
        direction={"column"}
        px={{ lg: "38", xl: "30" }}
      >
        <Flex justify={"center"} align={"center"} gap={2} maxW={"7xl"}>
          <Icon
            fontSize={{ base: "4xl", md: "5xl" }}
            as={GoPerson}
            color={COLOR.MAIN_COLOR}
            data-aos="fade-right"
            data-aos-delay="70"
          />
          <Text
            className="subhead"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-delay="90"
          >
            About <span style={{ color: COLOR.MAIN_BLUE }}>Me</span>
          </Text>
        </Flex>
        <Stack
          spacing={10}
          maxW={"7xl"}
          direction={{ base: "column", lg: "row" }}
          px={{ base: "5", lg: "30", xl: "30" }}
          align={{ base: "center", xl: "start" }}
        >
          <Box
            w={{ base: "250px", md: "xs", lg: "sm" }}
            h={{ base: "250px", md: "xs", lg: "sm" }}
            cursor={"pointer"}
            borderRadius={"full"}
            backgroundImage={personPic2}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            transition="all 200ms linear !important"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-delay="100"
          />
          <Flex
            flex={2}
            gap={{ base: "10", lg: "5" }}
            direction={"column"}
            textAlign={{ base: "center", lg: "start" }}
          >
            <Heading
              fontSize={{ base: "3xl", lg: "4xl" }}
              data-aos="zoom-in"
              data-aos-offset="50"
              data-aos-delay="300"
              id="name-typed"
            >
              Muhammad <span style={{ color: "#4299e1" }}>Raihan</span> Firdaus
            </Heading>
            <Heading
              fontSize={"xl"}
              fontWeight={350}
              textAlign={{ base: "justify", lg: "justify" }}
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-delay="500"
            >
              My name is Muhammad Raihan Firdaus, currently{" "}
              {new Date().getFullYear() - 2006} years old. I&apos;m a passionate
              Web Developer specializing in frontend development with a strong
              command of React, TypeScript, and Next.js. My journey in tech
              started with a deep interest in creating user-friendly and
              visually appealing interfaces, which I&apos;ve honed through
              various projects, including building responsive and modern
              websites. In addition to my frontend expertise, I also have solid
              experience in backend development, particularly with Golang and
              Next.js. I enjoy working on both sides of the stack, ensuring
              seamless integration and efficient performance across the entire
              application.
            </Heading>
            <Box>
              {INFO.map((item) => (
                <Flex
                  key={item.label}
                  direction={"row"}
                  gap={2}
                  align={"center"}
                  data-aos="fade-up"
                  data-aos-offset="50"
                  data-aos-delay={item.delay}
                >
                  <Icon
                    as={item.icon}
                    fontSize={"3xl"}
                    color={COLOR.MAIN_BLUE}
                  />
                  <Text color={COLOR.SECOND_COLOR}>{item.label}</Text>
                </Flex>
              ))}
            </Box>
            <Stack direction={{ base: "column", lg: "row" }}>
              <Button
                data-aos="zoom-in"
                data-aos-offset="50"
                data-aos-delay="800"
                as={Link}
                textDecoration={"none"}
                href={"#projects"}
                px={"1.8rem"}
                fontSize={"sm"}
                rounded={"full"}
                bg={COLOR.MAIN_COLOR}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(232 160 191 / 48%), 0 10px 10px -5px rgb(232 160 191 / 43%)"
                }
                _hover={{
                  bg: "#D090AB",
                  textDecoration: "none",
                }}
                _focus={{
                  bg: "#D090AB",
                }}
              >
                Check out what i've done
                <Icon as={BsArrowDownCircle} fontSize={"xl"} marginLeft={"2"} />
              </Button>
              <Button
                data-aos="zoom-in"
                data-aos-offset="50"
                data-aos-delay="900"
                as={Link}
                textDecoration={"none"}
                href={"mailto:lynxeveloperofficial@gmail.com"}
                px={"1.8rem"}
                fontSize={"sm"}
                rounded={"full"}
                bg={COLOR.MAIN_COLOR}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(232 160 191 / 48%), 0 10px 10px -5px rgb(232 160 191 / 43%)"
                }
                _hover={{
                  bg: "#D090AB",
                  textDecoration: "none",
                }}
                _focus={{
                  bg: "#D090AB",
                }}
              >
                Contact Email
              </Button>
            </Stack>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
}

const INFO = [
  {
    icon: RiRoadMapFill,
    label: "West Java, Indonesia",
    delay: "600",
  },
  {
    icon: MdMail,
    label: "lynxdeveloperofficial@gmail.com",
    delay: "700",
  },
];
