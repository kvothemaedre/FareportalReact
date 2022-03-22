import { Container, Box, Heading } from "@chakra-ui/react";
import AllEmployees from "./Components/AllEmployees";

function App() {
  return (
    <Container bg="white" color="tomato">
      <Box paddingBottom={4}>
        <Heading>React Redux</Heading>
      </Box>
      <AllEmployees />
    </Container>
  );
}

export default App;
