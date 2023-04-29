import { Box, Stack, Flex, Icon, Heading, Container, Text, Button, Link, Image } from "@chakra-ui/react";
import { GoPerson } from "react-icons/go";
import { BsArrowDownCircle } from "react-icons/bs";
import { RiRoadMapFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import COLOR from "../constant/color";
import Picture from "../images/picture.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Container minW={"full"} background={"white"} mx={"auto"} clipPath={{ "2xl": "polygon(0 20%, 100% 0, 100% 80%, 0% 100%)" }} py={{ base: 10, "2xl": 20 }} overflow={"hidden"}>
      <Stack id="about" spacing={10} mx={"auto"} maxW={"7xl"} py={10} direction={"column"} background={"white"}>
        <Flex justify={"center"} align={"center"} gap={2} maxW={"7xl"} data-aos="zoom-in" data-aos-offset="50" data-aos-once="true">
          <Icon fontSize={{ base: "4xl", md: "5xl" }} as={GoPerson} color={COLOR.MAIN_COLOR} />
          <Text className="logo" fontSize={{ base: "3xl", md: "5xl" }}>
            About <span style={{ color: COLOR.MAIN_BLUE }}>Me</span>
          </Text>
        </Flex>
        <Stack spacing={10} maxW={"7xl"} direction={{ base: "column", lg: "row" }} px={{ base: "5", lg: "30", xl: "30" }} align={{ base: "center", xl: "start" }}>
          <Box
            w={{ base: "250px", md: "sm", lg: "sm" }}
            h={{ base: "250px", md: "sm", lg: "sm" }}
            borderRadius={"full"}
            // backgroundImage={Picture}
            background={COLOR.MAIN_BLUE}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            filter="blur(20px)"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-once="true"
          />
          <Flex flex={2} gap={{ base: "10", lg: "5" }} direction={"column"} textAlign={{ base: "center", lg: "start" }} data-aos="fade-left" data-aos-duration="900" data-aos-offset="50" data-aos-once="true">
            <Heading fontSize={{ base: "3xl", lg: "4xl" }} fontWeight={700}>
              Muhammad{" "}
              <Heading display={"inline"} color={COLOR.MAIN_BLUE} fontSize={{ base: "3xl", lg: "4xl" }} fontWeight={700}>
                Raihan
              </Heading>{" "}
              Firdaus
            </Heading>
            <Heading fontSize={"xl"} fontWeight={350} textAlign={{ base: "justify", lg: "start" }}>
              My name is Muhammad Raihan Firdaus, I currently reside in West Java, Indonesia. I am 16 years old student at SMK Miftahussalam. My passion lies in web development, specifically in both front-end and back-end development, as
              well as game development. I am highly motivated to learn and expand my skills in these fields, and I am always on the lookout for new and exciting projects to work on. In my free time, I enjoy experimenting with various coding
              languages and frameworks. I am excited to continue pursuing my interests and developing my portfolio in the ever-growing field of web and game development.
            </Heading>
            <Box>
              {INFO.map((item) => (
                <Flex direction={"row"} gap={2} align={"center"}>
                  <Icon as={item.icon} fontSize={"3xl"} color={COLOR.MAIN_BLUE} />
                  <Text color={COLOR.SECOND_COLOR}>{item.label}</Text>
                </Flex>
              ))}
            </Box>
            <Stack direction={{ base: "column", lg: "row" }}>
              <Button
                as={Link}
                textDecoration={"none"}
                href={"#skills"}
                px={"1.8rem"}
                fontSize={"sm"}
                rounded={"full"}
                bg={COLOR.MAIN_COLOR}
                color={"white"}
                boxShadow={"0px 1px 25px -5px rgb(232 160 191 / 48%), 0 10px 10px -5px rgb(232 160 191 / 43%)"}
                _hover={{
                  bg: "#D090AB",
                }}
                _focus={{
                  bg: "#D090AB",
                }}
              >
                My Skills
                <Icon as={BsArrowDownCircle} fontSize={"xl"} marginLeft={"2"} />
              </Button>
              <Button
                as={Link}
                textDecoration={"none"}
                href={"mailto:lynxeveloperofficial@gmail.com"}
                px={"1.8rem"}
                fontSize={"sm"}
                rounded={"full"}
                bg={COLOR.MAIN_COLOR}
                color={"white"}
                boxShadow={"0px 1px 25px -5px rgb(232 160 191 / 48%), 0 10px 10px -5px rgb(232 160 191 / 43%)"}
                _hover={{
                  bg: "#D090AB",
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
  },
  {
    icon: MdMail,
    label: "lynxdeveloperofficial@gmail.com",
  },
];
