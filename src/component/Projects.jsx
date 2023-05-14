import { Container, Stack, Flex, Icon, Text, Box, Image, Heading, Link, Button } from "@chakra-ui/react";

import COLOR from "../constant/color";
import { BsClipboardCheckFill } from "react-icons/bs";

import PortfolioQuran from "../images/quran_project.webp";
import PortfolioPersonal from "../images/portfolio_project.webp";
import PortfolioBlog from "../images/personal_blog_project.webp";
import PortfolioBlogAPI from "../images/blog_api_project.webp";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Projects = () => {
  return (
    <Container minW={"full"} bg={"white"} mx={"auto"} py={{ base: 10, "2xl": 20 }} overflow={"hidden"}>
      <Stack id="projects" spacing={10} mx={"auto"} maxW={{ base: "full", xl: "7xl", "2xl": "8xl" }} py={10} direction={"column"}>
        <Flex justify={"center"} align={"center"} gap={2} maxW={"8xl"}>
          <Icon fontSize={{ base: "4xl", md: "5xl" }} as={BsClipboardCheckFill} color={COLOR.MAIN_COLOR} data-aos="fade-right" data-aos-delay="70" />
          <Text className="subhead" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} data-aos="fade-left" data-aos-offset="50" data-aos-delay="90">
            Featured Projects
          </Text>
        </Flex>
        <Stack gap={{ base: "20", lg: "32" }} wrap={"wrap"} w={"full"} mx={"auto"} direction={"row"} pt={"14"} pb={{ base: "20", lg: "60" }}>
          {PROJECTS.map((val) => (
            <Flex gap={{ base: "12", md: "20" }} w={"full"} key={val.key} direction={{ base: "column", lg: val.key % 2 === 0 ? "row-reverse" : "row" }}>
              <Box
                minW={"460px"}
                maxW={"720px"}
                flex={"1"}
                transition="all 300ms linear"
                filter={"grayscale(100%)"}
                mr={{ base: val.key % 2 === 0 ? "-40" : "10", md: "0" }}
                ml={{ base: val.key % 2 === 0 ? "10" : "-40", md: "0" }}
                transform={`rotateZ(${val.key % 2 === 0 ? "8deg" : "-8deg"})`}
                _hover={{
                  filter: `grayscale(0%)`,
                  transform: `rotateZ(${val.key % 2 === 0 ? "3deg" : "-3deg"}) scale(110%)`,
                }}
                my={"auto"}
              >
                <Image src={val.image} alt={val.alt} borderRadius={"xl"} shadow={"xl"} />
              </Box>
              <Stack direction={"column"} flex={"1"} px={{ base: "5", lg: "0" }}>
                <Heading data-aos={"zoom-in"} data-aos-delay={"200"}>
                  {val.title}
                </Heading>
                <Text data-aos={"zoom-in"} data-aos-delay={"300"} fontSize={{ base: "lg", lg: "md", "2xl": "lg" }} textAlign={"justify"}>
                  {val.desc}
                </Text>
                <Text data-aos={"zoom-in"} data-aos-delay={"400"} fontSize={"2xl"} color={"gray.600"} fontWeight={600}>
                  Tech Stack
                </Text>
                <Text data-aos={"zoom-in"} data-aos-delay={"500"} fontFamily={"Consolas"}>
                  {val.techStack}
                </Text>
                <Stack w={"full"}>
                  <Button
                    w={"32"}
                    as={Link}
                    href={val.link}
                    px={"1.8rem"}
                    fontSize={"md"}
                    rounded={"3xl"}
                    bg={COLOR.MAIN_COLOR}
                    color={"white"}
                    boxShadow={"0px 1px 25px -5px rgb(232 160 191 / 48%), 0 10px 10px -5px rgb(232 160 191 / 43%)"}
                    _hover={{
                      bg: "#D090AB",
                      textDecoration: "none",
                    }}
                    _focus={{
                      bg: "#D090AB",
                    }}
                    isExternal
                    data-aos={"zoom-in"}
                    data-aos-delay={"600"}
                  >
                    Visit
                    <ExternalLinkIcon mx="2px" />
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
    link: "https://expocn.000webhostapp.com/quran",
    delay: 200,
  },
  {
    key: 2,
    image: PortfolioBlogAPI,
    alt: "Portfolio Personal Blog API",
    title: "Personal Blog API",
    desc: "In this project, i've develop a blog API using Express.js and utilize MySQL as the database. By combining these technologies, i've created a powerful blog with the ability to store and manage content through a database. The blog API i've built has utilize Express.js, a robust Node.js framework for building web applications. With Express.js, i can easily create endpoints for retrieving, storing, and deleting blog content. The framework provides an efficient structure and extensive support for building reliable RESTful APIs.",
    techStack: "Express, MySQL",
    link: "https://raihanmd-blog-api.vercel.app",
  },
  {
    key: 3,
    image: PortfolioBlog,
    alt: "Personal Blog",
    title: "Personal Web Blog",
    desc: "In this project, i've created personal blog that integrates a custom-built API. By utilizing React and CSS Vanilla, i've designed an engaging user interface (UI) that enhances the overall user experience. The personal blog i am creating will serve as a digital space for you to share your thoughts, experiences, and creative endeavors with your readers. By incorporating my own custom API, i can ensure a seamless flow of dynamic and relevant content, keeping your blog fresh and engaging.",
    techStack: "React, Vanilla CSS, React Hooks",
    link: "https://raihanmd-blog.vercel.app",
  },
  {
    key: 4,
    image: PortfolioPersonal,
    alt: "Portfolio Personal Website",
    title: "Personal Web Profile",
    desc: "Built with React JS technology, this project offers a seamless and responsive user experience. Every interaction with the page provides fast and smooth feedback, ensuring intuitive navigation and a delightful user experience. The choice of using Chakra UI as the styled component provides flexibility in designing the interface with ease. With this framework, you can quickly create beautiful and consistent components, simplifying development and speeding up the workflow.",
    techStack: "React, Chakra UI, React Hooks",
    link: "https://raihanmd.vercel.app",
  },
];
