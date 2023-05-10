import { Container, Stack, Flex, Icon, Text, Box, Image, Heading, Code, Link, Button } from "@chakra-ui/react";

import COLOR from "../constant/color";
import { BsClipboardCheckFill } from "react-icons/bs";

import PortfolioQuran from "../images/quran_project.webp";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Projects = () => {
  return (
    <Container minW={"full"} bg={"white"} mx={"auto"} py={{ base: 10, "2xl": 20 }} overflow={"hidden"}>
      <Stack id="projects" spacing={10} mx={"auto"} maxW={{ base: "full", xl: "5xl", "2xl": "8xl" }} py={10} direction={"column"}>
        <Flex justify={"center"} align={"center"} gap={2} maxW={"8xl"}>
          <Icon fontSize={{ base: "4xl", md: "5xl" }} as={BsClipboardCheckFill} color={COLOR.MAIN_COLOR} data-aos="fade-right" data-aos-delay="70" />
          <Text className="subhead" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} data-aos="fade-left" data-aos-offset="50" data-aos-delay="90">
            Somethings I've Built
          </Text>
        </Flex>
        <Stack w={"full"} mx={"auto"} direction={"row"} pt={"14"} pb={{ base: "20", lg: "60" }}>
          {PROJECTS.map((val) => (
            <Flex gap={{ base: "12", lg: "20" }} w={"full"} key={val.key} direction={{ base: "column", lg: "row" }}>
              <Box minW={"460px"} maxW={"960px"} className={"portfolio-image"} flex={"1"} transition="all 300ms linear" filter={"grayscale(0%)"} mr={{ base: "20", lg: "0" }} ml={{ base: "-40", lg: "0" }}>
                <Image src={val.image} alt={val.alt} borderRadius={"xl"} shadow={"xl"} />
              </Box>
              <Stack direction={"column"} flex={"1"} px={{ base: "5", lg: "0" }}>
                <Heading>{val.title}</Heading>
                <Text fontSize={"lg"} textAlign={"justify"}>
                  {val.desc}
                </Text>
                <Text fontSize={"2xl"} color={"gray.600"} fontWeight={600}>
                  Tech Stack
                </Text>
                <Text fontFamily={"Consolas"}>{val.techStack}</Text>
                <Stack w={"24"}>
                  <Button as={Link} href={val.link} isExternal>
                    Visit <ExternalLinkIcon mx="2px" />
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Projects;

const PROJECTS = [
  {
    key: 1,
    image: PortfolioQuran,
    alt: "Portfolio quran image",
    title: "Quran Verse Online",
    desc: "This is my web application that utilizes a public Quran API to provide easy and fast access to the holy verses of the Quran. In this project, I have designed a minimalist and elegant interface, with a focus on a simple yet powerful user experience.\nFurthermore, this project adopts a responsive design approach, allowing for optimal viewing on various devices, ranging from desktop computers to mobile devices. Thus, users can easily access this application anywhere and anytime, both through web-based and mobile devices.",
    techStack: "PHP, CodeIgniter4, Tailwind",
    link: "expocn.000webhostapp.com/quran",
  },
];
