import React from 'react';
import { Button, useColorMode } from '@chakra-ui/react';

export const ColorModeSwitch: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  return <Button onClick={toggleColorMode}>Toggle color mode</Button>;
};
