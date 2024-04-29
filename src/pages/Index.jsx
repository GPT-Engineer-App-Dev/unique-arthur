import { Box, Container, Heading, Text, Image, SimpleGrid, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={10}>
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>Chester A. Arthur</Heading>
          <Text fontSize="xl">The 21st President of the United States</Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>Biography</Heading>
          <Text>
            Chester Alan Arthur (October 5, 1829 – November 18, 1886) was an American attorney and politician who served as the 21st president of the United States from 1881 to 1885. Arthur was born in Fairfield, Vermont, and studied law at State and National Law School in Ballston Spa, New York.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>Achievements</Heading>
          <Text>
            As president, Arthur advocated for civil service reform. His administration enacted the first general federal immigration law and presided over the rebirth of the United States Navy, but he failed to alleviate the tensions between Native Americans and settlers.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>Gallery</Heading>
          <SimpleGrid columns={3} spacing={4}>
            <Image src="https://example.com/image1.jpg" alt="Chester A. Arthur" />
            <Image src="https://example.com/image2.jpg" alt="Historical event" />
            <Image src="https://example.com/image3.jpg" alt="Presidential portrait" />
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;