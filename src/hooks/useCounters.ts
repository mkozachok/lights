import { useQuery } from '@tanstack/react-query';
import { supabase } from 'api';
import { queryKeys, supabaseTables } from 'consts';
import { Counter } from 'types/counters';

const getCounters = async () => {
  const { data, error } = await supabase
    .from(supabaseTables.counters)
    .select();

  return data as Counter[];
};

export const useCounters = () => {
  return useQuery<Counter[]>([queryKeys.counters], getCounters);
};
