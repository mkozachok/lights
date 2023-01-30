import React from 'react';

import { Controller, useForm } from 'react-hook-form';
import useCreateUser from 'hooks/useCreateUser';

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const SignUp = () => {
  const { handleSubmit, control } = useForm({ defaultValues });
  const createUserMutation = useCreateUser();

  const onSubmit = ({ firstName, lastName, email, password }: any) => {
    createUserMutation.mutate({
      email,
      password,
      first_name: firstName,
      last_name: lastName,
    });
  };

  return <form onSubmit={handleSubmit(onSubmit)}></form>;
};
