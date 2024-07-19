'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useChartData } from '@/app/hooks/useChartData';
import styles from './Chart.module.scss';
import colors from '@/app/style/tailwindColors'; // Tailwind 색상 설정을 가져옵니다.

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart: React.FC = () => {
  const { data, error, isLoading } = useChartData();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const chartData = {
    labels: data?.map((d) => d.hour) || [],
    datasets: [
      {
        label: '전력량',
        data: data?.map((d) => d.value) || [],
        borderColor: colors.primary,
        backgroundColor: 'rgba(255, 127, 80, 0.2)', // primary 색상의 rgba 값입니다.
        fill: true,
        pointBackgroundColor: colors.accent2, // Red
        pointBorderColor: colors.primary,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: colors.primary,
        },
      },
      title: {
        display: true,
        text: '전력량 변화',
        color: colors.primary,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: '시간',
          color: colors.primary,
        },
        ticks: {
          color: colors.primary,
        },
      },
      y: {
        title: {
          display: true,
          text: '전력량 (kW)',
          color: colors.primary,
        },
        ticks: {
          color: colors.primary,
        },
      },
    },
  };

  return (
    <div className={styles['chart-container']}>
      <Line
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default Chart;
