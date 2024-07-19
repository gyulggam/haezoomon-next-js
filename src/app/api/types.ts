export interface LoginPayload {
  accessToken: string;
  user: {
    uid: string;
    username: string;
    type: string;
    last_login: string;
    permissions: string[];
  };
}

export interface ChartDataPoint {
  hour: string;
  value: number;
}

export interface ChartDataResponse {
  data: ChartDataPoint[];
}
