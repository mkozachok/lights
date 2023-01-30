import React from 'react';
import { useForm } from 'react-hook-form';
import { useAddLights } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { VStack, SimpleGrid, GridItem, Button } from '@chakra-ui/react';
import { TextInput } from 'components/Form/TextInput';
import { Checkbox } from 'components/Form';

const defaultValues = {
  lights: '',
  lightsRegistered: false,
  lightsPayed: false,
  gas: '',
  gasRegistered: false,
  gasPayed: false,
};

export const ConsumingForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, reset, control } = useForm({
    defaultValues,
  });

  const addLights = useAddLights();

  if (addLights.isSuccess) {
    navigate('/');
  }

  const onSubmit = (data: any) => {
    console.log(data);
    addLights.mutate({
      lights: data.lights,
      gas: data.gas,
      lights_registered: data.lightsRegistered,
      gas_registered: data.gasRegistered,
      lights_payed: data.lightsPayed,
      gas_payed: data.gasPayed,
    });
  };
  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing={6}
      alignItems="flex-start"
      w="full"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        columnGap={3}
        rowGap={{ base: 3, md: 6 }}
        w="full"
      >
        <GridItem colSpan={1}>
          <TextInput
            name="lights"
            control={control as any}
            label="Electricity"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <TextInput name="gas" control={control as any} label="Gas" />
        </GridItem>
        <GridItem colSpan={1}>
          <Checkbox
            name="lightsRegistered"
            control={control as any}
            label="Light Registered"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Checkbox
            name="gasRegistered"
            control={control as any}
            label="Gas Registered"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Checkbox
            name="lightsPayed"
            control={control as any}
            label="Light Payed"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Checkbox
            name="gasPayed"
            control={control as any}
            label="Gas Payed"
          />
        </GridItem>
      </SimpleGrid>
      <Button
        disabled={addLights.isLoading}
        type="submit"
        colorScheme="teal"
      >
        Save
      </Button>
    </VStack>
  );
};
