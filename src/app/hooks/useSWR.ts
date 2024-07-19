import useSWR from 'swr';
import axiosInstance from '@/app/api/axiosInstance';

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export const useEventResources = (drType = '', date = '', resourceUid = '') => {
  const { data, error } = useSWR(`/eventresources?drtype=${drType}&date=${date}&resourceUid=${resourceUid}`, fetcher);
  return { data, error };
};

export const useCalendar = (start: string, end: string) => {
  const { data, error } = useSWR(`/calendar?start=${start}&end=${end}`, fetcher);
  return { data, error };
};

export const useDashboard = () => {
  const { data, error } = useSWR('/dashboard', fetcher);
  return { data, error };
};
