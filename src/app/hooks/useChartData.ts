import useSWR from 'swr';
import axios from 'axios';
import { ChartDataResponse } from '@/app/api/types';

const fetcher = (url: string) => axios.get<ChartDataResponse>(url).then((res) => res.data);

export const useChartData = () => {
  const { data, error } = useSWR<ChartDataResponse>('/api/chartData', fetcher);
  return {
    data: data?.data,
    error,
    isLoading: !error && !data,
  };
};
