import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Link,
  Flex,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitch } from 'components/ColorModeSwitch';

const NavBar = () => {
  const bgColor = useColorModeValue('teal.100', 'teal.900');
  return (
    <HStack bg={bgColor} p={2} justifyContent="space-between">
      <Flex gap={2}>
        <Link as={RouterLink} to="/">
          Home
        </Link>
        <Link as={RouterLink} to="lights/add">
          Add new counters
        </Link>
      </Flex>
      <ColorModeSwitch />
    </HStack>
  );
};

export const Layout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <Container maxW={'container.lg'}>
      <NavBar />
      {children}
    </Container>
  );
};
