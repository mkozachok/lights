import { useMutation } from '@tanstack/react-query';
import { supabase } from 'api';

interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const createUser = async (user: User) => {
  // check if user exists
  const { data: userWithEmail } = await supabase
    .from('users')
    .select('*')
    .eq('email', user.email)
    .single();
  if (userWithEmail) {
    throw new Error('User exists');
  }

  // authenticate new user
  const { user: createdUser, error: signUpError } =
    await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });

  if (signUpError) {
    throw signUpError;
  }

  // extend user obj with id
  return { ...createdUser, ...user };
};

export default function useCreateUser() {
  return useMutation((user: User) => createUser(user), {
    onSuccess: async data => {
      const { data: insertData, error: insertError } = await supabase
        .from('users')
        .insert({
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          id: (data as any).id,
        });

      if (insertError) {
        throw insertError;
      }

      return insertData;
    },
  });
}
