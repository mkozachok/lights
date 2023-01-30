import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Control, Controller } from 'react-hook-form';

interface TextInputProps {
  name: string;
  label: string;
  control: Control;
}

export const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  control,
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input type="text" {...field} />}
      />
    </FormControl>
  );
};
