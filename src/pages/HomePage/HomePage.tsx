import React from 'react';
import { Heading, Text, CircularProgress, VStack } from '@chakra-ui/react';

import { DataTable } from 'components';
import { useCounters } from 'hooks/useCounters';

export const HomePage = () => {
  const { data, isLoading } = useCounters();

  console.log(isLoading);

  if (isLoading) {
    <CircularProgress isIndeterminate color="teal.300" />;
  }

  return (
    <VStack spacing={10}>
      <Heading size="xl">Home page</Heading>
      {data && <DataTable rows={data} />}
    </VStack>
  );
};
