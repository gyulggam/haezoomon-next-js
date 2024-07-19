'use client';

import React, { useState } from 'react';
import Layout from '@/app/components/layout/Layout';
import Card from '@/app/components/card/Card';
import CardWrapper from '@/app/components/card/CardWrapper';
import Chart from '@/app/components/chart/Chart';
import ResourceList from '@/app/components/list/ResourceList';
import ResizeObserverComponent from '@/app/components/grid/ResizeObserverComponent';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useDashboard, useEventResources, useCalendar } from '@/app/hooks/useSWR';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './Dashboard.module.scss';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard: React.FC = () => {
  const { data: dashboardData, error: dashboardError } = useDashboard();
  const { data: eventResourcesData, error: eventResourcesError } = useEventResources('', '', '');
  const { data: calendarData, error: calendarError } = useCalendar('1719673200000', '1723302000000');

  const resourceList = dashboardData?.payload?.resources;
  const [layouts, setLayouts] = useState([
    { i: 'card1', x: 0, y: 0, w: 2, h: 2 }, // height를 증가시킵니다
    { i: 'chart', x: 2, y: 0, w: 2, h: 2 },
  ]);

  const handleResize = (height: number, key: string) => {
    setLayouts((prevLayouts) => prevLayouts.map((layout) => (layout.i === key ? { ...layout, h: Math.ceil(height / 30) } : layout)));
  };

  return (
    <Layout>
      <div className="p-4 space-y-4 bg-mainGray text-primary">
        <div className="text-2xl font-bold">대시보드</div>
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: layouts }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={25}
          width={1200}
        >
          <div key="card1">
            <CardWrapper className="bg-mainGray p-4 h-full">
              <ResizeObserverComponent
                gridKey="card1"
                onResize={(height) => handleResize(height, 'card1')}
              >
                <ResourceList
                  resources={resourceList}
                  className={'mb-4'}
                />
                <div className="flex flex-wrap gap-4">
                  <Card
                    title="용량"
                    value={dashboardData ? `${dashboardData.capacity} kW` : undefined}
                    isLoading={!dashboardData && !dashboardError}
                    error={dashboardError ? 'Error loading data' : undefined}
                  />
                  <Card
                    title="참여고객"
                    value={eventResourcesData ? `${eventResourcesData.participants} 개` : undefined}
                    isLoading={!eventResourcesData && !eventResourcesError}
                    error={eventResourcesError ? 'Error loading data' : undefined}
                  />
                  <Card
                    title="신뢰성DR 감축량"
                    value={dashboardData ? `${dashboardData.reduction} kWh` : undefined}
                    isLoading={!dashboardData && !dashboardError}
                    error={dashboardError ? 'Error loading data' : undefined}
                  />
                  <Card
                    title="경제성DR 감축시간"
                    value={calendarData ? `${calendarData.reductionTime} 시간` : undefined}
                    isLoading={!calendarData && !calendarError}
                    error={calendarError ? 'Error loading data' : undefined}
                  />
                </div>
              </ResizeObserverComponent>
            </CardWrapper>
          </div>
          <div key="chart">
            <CardWrapper className="bg-mainGray p-4 h-full">
              <ResizeObserverComponent
                gridKey="chart"
                onResize={(height) => handleResize(height, 'chart')}
              >
                <h2>전력량</h2>
                <Chart />
              </ResizeObserverComponent>
            </CardWrapper>
          </div>
        </ResponsiveGridLayout>
      </div>
    </Layout>
  );
};

export default Dashboard;
