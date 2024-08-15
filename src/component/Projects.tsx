import {
  Container,
  Stack,
  Flex,
  Icon,
  Text,
  Box,
  Image,
  Heading,
  Link,
  Button,
} from "@chakra-ui/react";

import COLOR from "../constant/color";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsClipboardCheckFill } from "react-icons/bs";

import PortfolioPersonal from "../images/portfolio_project.webp";
import PortfolioKreateams from "../images/kreateams.webp";
import PortfolioSirekap from "../images/sirekap.webp";
import PortfolioPPDB from "../images/ppdb.webp";
import PortfolioLaughify from "../images/laughify.webp";
import PortfolioJournee from "../images/journee.webp";

const Projects = () => {
  return (
    <Container
      color={"gray.700"}
      minW={"full"}
      bg={"white"}
      mx={"auto"}
      py={{ base: 10, "2xl": 20 }}
      overflow={"hidden"}
    >
      <Stack
        id="projects"
        spacing={10}
        mx={"auto"}
        maxW={{ base: "full", xl: "7xl", "2xl": "8xl" }}
        py={10}
        direction={"column"}
      >
        <Flex justify={"center"} align={"center"} gap={2} maxW={"8xl"}>
          <Icon
            fontSize={{ base: "4xl", md: "5xl" }}
            as={BsClipboardCheckFill}
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
            Featured Projects
          </Text>
        </Flex>
        <Stack
          gap={{ base: "20", lg: "32" }}
          wrap={"wrap"}
          w={"full"}
          mx={"auto"}
          direction={"row"}
          pt={"14"}
          pb={{ base: "20", lg: "60" }}
        >
          {PROJECTS.map((val, i) => (
            <Flex
              gap={{ base: "12", md: "20" }}
              w={"full"}
              key={i}
              direction={{
                base: "column",
                lg: i % 2 === 0 ? "row-reverse" : "row",
              }}
            >
              <Box
                minW={"460px"}
                maxW={"720px"}
                flex={"1"}
                transition="all 300ms linear"
                filter={"grayscale(100%)"}
                mr={{ base: i % 2 === 0 ? "-40" : "10", md: "0" }}
                ml={{ base: i % 2 === 0 ? "10" : "-40", md: "0" }}
                transform={`rotateZ(${i % 2 === 0 ? "8deg" : "-8deg"})`}
                _hover={{
                  filter: `grayscale(0%)`,
                  transform: `rotateZ(${
                    i % 2 === 0 ? "3deg" : "-3deg"
                  }) scale(110%)`,
                }}
                my={"auto"}
              >
                <Image
                  draggable={false}
                  src={val.image}
                  alt={val.alt}
                  borderRadius={"xl"}
                  shadow={"xl"}
                />
              </Box>
              <Stack
                direction={"column"}
                flex={"1"}
                px={{ base: "5", lg: "0" }}
              >
                <Heading data-aos={"zoom-in"} data-aos-delay={"200"}>
                  {val.title}
                </Heading>
                <Text
                  data-aos={"zoom-in"}
                  data-aos-delay={"300"}
                  fontSize={{ base: "lg", lg: "md", "2xl": "lg" }}
                  textAlign={"justify"}
                >
                  {val.desc}
                </Text>
                <Text
                  data-aos={"zoom-in"}
                  data-aos-delay={"400"}
                  fontSize={"2xl"}
                  color={"gray.600"}
                  fontWeight={600}
                >
                  Tech Stack
                </Text>
                <Text
                  data-aos={"zoom-in"}
                  data-aos-delay={"500"}
                  fontFamily={"Consolas"}
                >
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
    image: PortfolioJournee,
    alt: "Jourñee - Travel Agent Landing Page",
    title: "Journee",
    desc: "Journee is a modern and minimalist landing page designed for a travel agent, showcasing various destinations and travel packages with a stylish and intuitive interface. The website is built using Next.js and TypeScript, ensuring a robust and scalable foundation. Tailwind CSS is used for rapid styling, while shadcn/ui provides a refined component library for consistent design. To bring the site to life, Framer Motion is utilized for smooth and engaging animations, enhancing the overall user experience.",
    techStack: "NextJS, Tailwind CSS, Shadcn/UI, Framer Motion",
    link: "https://journee-eight.vercel.app/",
  },
  {
    image: PortfolioKreateams,
    alt: "Portfolio kreateams image",
    title: "Kreateams",
    desc: "Kreateams is a non-profit organization dedicated to connecting programmers worldwide to collaborate and innovate together. Our mission is to provide a platform where programmers can share knowledge, work on exciting projects, and develop their skills. We focus on creating an inclusive and supportive environment where every member can grow and contribute.",
    techStack: "NextJs, ShadcnUI, Tailwind",
    link: "https://kreateams-landing-page.vercel.app/",
  },
  {
    image: PortfolioPPDB,
    alt: "PPDB (UI)",
    title: "PPDB (UI)",
    desc: "This is a static website for the New Student Admission (PPDB) system, where I designed the user interface using React, SHDCN UI, and Tailwind CSS. The design is minimalist and modern, ensuring a clean and intuitive user experience. The website is also fully responsive, providing optimal viewing and interaction across a wide range of devices, from desktop computers to mobile phones. This ensures that users can easily access and navigate the admission process anywhere and anytime.",
    techStack: "NextJS, Chakra UI",
    link: "https://whatschools.vercel.app/ppdb",
  },
  {
    image: PortfolioLaughify,
    alt: "Laughify",
    title: "Laughify - Meme Comminuty",
    desc: "Laughify is a community-driven meme website that I built as my final project for the SMK Coding 2023 training program, where I achieved the highest score. This web application was developed using Nuxt.js, Vue.js, Tailwind CSS, and Supabase as the database. The project was completed within five days, showcasing my ability to create a functional and engaging platform quickly. Laughify allows users to share and enjoy memes, fostering a fun and interactive community. The design is both modern and responsive, ensuring a seamless experience on various devices, from desktops to mobile phones.",
    techStack: "NuxtJS, Vue, Supabase",
    link: "https://laughify.vercel.app",
  },
  {
    image: PortfolioSirekap,
    alt: "Sirekap",
    title: "Sirekap - Aplikasi Voting (BE)",
    desc: "This is a voting application where I developed the backend using NestJS and MySQL as the database. The documentation for this application is created using Swagger UI. I implemented JWT for secure authentication and Prisma as the ORM to manage the database interactions efficiently. This application provides a robust and secure platform for creating and participating in voting processes, ensuring a smooth and user-friendly experience for all users.",
    techStack: "NestJs, Prisma, MySQL",
    link: "https://sirekap-be.vercel.app/v1",
  },
  {
    image: PortfolioPersonal,
    alt: "Portfolio Personal Website",
    title: "Personal Web Profile",
    desc: "Built with React JS technology, this project offers a seamless and responsive user experience. Every interaction with the page provides fast and smooth feedback, ensuring intuitive navigation and a delightful user experience. The choice of using Chakra UI as the styled component provides flexibility in designing the interface with ease. With this framework, you can quickly create beautiful and consistent components, simplifying development and speeding up the workflow.",
    techStack: "React, Chakra UI, React Hooks",
    link: "https://raihanmd.vercel.app",
  },
];
