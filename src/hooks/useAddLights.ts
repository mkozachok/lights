import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from 'api';
import { queryKeys } from 'consts';

export const addLights = async (lights: any) => {
  const { data, error } = await supabase
    .from('counters')
    .upsert(lights)
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const useAddLights = () => {
  const queryClient = useQueryClient();
  return useMutation((data: any) => addLights(data), {
    onSuccess: newData => {
      const [[, prevCounters]] = queryClient.getQueriesData([
        queryKeys.counters,
      ]);
      queryClient.setQueryData(
        [queryKeys.counters],
        (prevCounters as any).concat(newData),
      );
    },
  });
};
