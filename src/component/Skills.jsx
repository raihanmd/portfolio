import { Container, Box } from "@chakra-ui/react";
import COLOR from "../constant/color";

const Skills = () => {
  return (
    <Container background={COLOR.MAIN_COLOR} minW={"full"} zIndex={{ xl: "-10" }} pt={{ xs: 40 }} marginTop={{ "2xl": "-40" }}>
      <Box pb={"20rem"}>
        <p>SKills</p>
      </Box>
    </Container>
  );
};

export default Skills;
