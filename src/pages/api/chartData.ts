// src/pages/api/chartData.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { ChartDataResponse } from '@/app/api/types'; // 적절한 경로로 수정 필요

const generateFakeData = (): ChartDataResponse => {
  const data = [];
  for (let i = 0; i < 24; i++) {
    const value = Math.floor(Math.random() * 1000) + 500; // 500에서 1500 사이의 랜덤 값
    data.push({
      hour: `${i}:00`,
      value,
    });
  }
  return { data };
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const data = generateFakeData();
  res.status(200).json(data);
};

export default handler;
