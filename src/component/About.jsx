import { Box, Stack, Flex, Icon, Heading, Container, Text, Button, Link } from "@chakra-ui/react";
import { GoPerson } from "react-icons/go";
import { BsArrowDownCircle } from "react-icons/bs";
import { RiRoadMapFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import COLOR from "../constant/color";
import Picture from "../images/picture.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import TypedJS from "../utils/TypedJS";

AOS.init();
export default function About() {
  return (
    <Container minW={"full"} background={"white"} mx={"auto"} clipPath={{ "2xl": "polygon(0 20%, 100% 0, 100% 80%, 0% 100%)" }} py={{ base: 10, "2xl": 20 }} overflow={"hidden"}>
      <Stack id="about" spacing={10} mx={"auto"} maxW={{ base: "xl", xl: "5xl", "2xl": "7xl" }} py={10} direction={"column"} background={"white"} px={{ lg: "38", xl: "30" }}>
        <Flex justify={"center"} align={"center"} gap={2} maxW={"7xl"} data-aos="zoom-in" data-aos-offset="50" data-aos-once="true">
          <Icon fontSize={{ base: "4xl", md: "5xl" }} as={GoPerson} color={COLOR.MAIN_COLOR} />
          <Text className="subhead" fontSize={{ base: "3xl", md: "5xl" }}>
            About <span style={{ color: COLOR.MAIN_BLUE }}>Me</span>
          </Text>
        </Flex>
        <Stack spacing={10} maxW={"7xl"} direction={{ base: "column", lg: "row" }} px={{ base: "5", lg: "30", xl: "30" }} align={{ base: "center", xl: "start" }}>
          <Box
            w={{ base: "250px", md: "xs", lg: "sm" }}
            h={{ base: "250px", md: "xs", lg: "sm" }}
            borderRadius={"full"}
            backgroundImage={Picture}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-delay="100"
          />
          <Flex flex={2} gap={{ base: "10", lg: "5" }} direction={"column"} textAlign={{ base: "center", lg: "start" }}>
            <Heading fontSize={{ base: "3xl", lg: "4xl" }} data-aos="zoom-in" data-aos-offset="50" data-aos-delay="300">
              <TypedJS string={['Muhammad <span style="color: #4299e1;">Raihan</span> Firdaus']} disableCursor={true} />
            </Heading>
            <Heading fontSize={"xl"} fontWeight={350} textAlign={{ base: "justify", lg: "start" }} data-aos="fade-left" data-aos-offset="50" data-aos-delay="500">
              My name is Muhammad Raihan Firdaus, I currently reside in West Java, Indonesia. I am 16 years old student at SMK Miftahussalam. My passion lies in web development, specifically in both front-end and back-end development, as
              well as game development. I am highly motivated to learn and expand my skills in these fields, and I am always on the lookout for new and exciting projects to work on. In my free time, I enjoy experimenting with various coding
              languages and frameworks. I am excited to continue pursuing my interests and developing my portfolio in the ever-growing field of web and game development.
            </Heading>
            <Box>
              {INFO.map((item) => (
                <Flex direction={"row"} gap={2} align={"center"} data-aos="fade-up" data-aos-offset="50" data-aos-delay={item.delay}>
                  <Icon as={item.icon} fontSize={"3xl"} color={COLOR.MAIN_BLUE} />
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
                boxShadow={"0px 1px 25px -5px rgb(232 160 191 / 48%), 0 10px 10px -5px rgb(232 160 191 / 43%)"}
                _hover={{
                  bg: "#D090AB",
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
    delay: "600",
  },
  {
    icon: MdMail,
    label: "lynxdeveloperofficial@gmail.com",
    delay: "700",
  },
];
