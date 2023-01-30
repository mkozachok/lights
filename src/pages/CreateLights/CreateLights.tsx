import React from 'react';
import { Heading, Text, VStack } from '@chakra-ui/react';

import { ConsumingForm } from 'components/ConsumingForm';

export const CreateLights = () => {
  return (
    <VStack spacing={10} p={10} w="full" h="full" alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start" w="full">
        <Heading size="xl">Add new counters</Heading>
        <Text>Add last counters from gas and electricity counters</Text>
      </VStack>
      <ConsumingForm />
    </VStack>
  );
};
