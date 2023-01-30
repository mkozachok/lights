import React, { ReactElement, ReactNodeArray } from 'react';
import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
} from '@chakra-ui/react';
import { Control, Controller } from 'react-hook-form';

interface SelectProps {
  name: string;
  label: string;
  control: Control;
  children: Array<ReactElement<HTMLOptionElement>>;
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  control,
  children,
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ChakraSelect {...field}>{children}</ChakraSelect>
        )}
      />
    </FormControl>
  );
};
