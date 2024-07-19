import axiosInstance from '@/app/api/axiosInstance';
import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import { LoginPayload } from '@/app/api/types';

// CancelToken을 관리하기 위한 객체
const cancelTokens: { [key: string]: CancelTokenSource } = {};

const getToken = (key: string): CancelTokenSource => {
  if (cancelTokens[key]) {
    cancelTokens[key].cancel('Operation canceled due to new request.');
  }
  cancelTokens[key] = axios.CancelToken.source();
  return cancelTokens[key];
};

// 로그인 요청
export const login = async (id: string, password: string): Promise<LoginPayload> => {
  const cancelToken = getToken('login');
  const response: AxiosResponse<{ payload: LoginPayload }> = await axiosInstance.post('/login', { username: id, password }, { cancelToken: cancelToken.token });
  if (response.data && response.data.payload) {
    return response.data.payload;
  } else {
    throw new Error('Invalid response structure');
  }
};

// Event Resources 가져오기
export const getEventResources = async (drType = '', date = '', resourceUid = ''): Promise<any> => {
  const response = await axiosInstance.get(`/eventresources?drtype=${drType}&date=${date}&resourceUid=${resourceUid}`);
  return response.data;
};

// Calendar 데이터 가져오기
export const getCalendar = async (start: string, end: string): Promise<any> => {
  const response = await axiosInstance.get(`/calendar?start=${start}&end=${end}`);
  return response.data;
};

// Dashboard 데이터 가져오기
export const getDashboard = async (): Promise<any> => {
  const response = await axiosInstance.get('/dashboard');
  return response.data;
};
