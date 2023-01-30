import React from 'react';
import {
  FormControl,
  FormLabel,
  Checkbox as ChakraCheckbox,
} from '@chakra-ui/react';
import { Control, Controller } from 'react-hook-form';

interface CheckboxProps {
  name: string;
  label: string;
  control: Control;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  control,
}) => {
  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ChakraCheckbox {...field}>{label}</ChakraCheckbox>
        )}
      />
    </FormControl>
  );
};
