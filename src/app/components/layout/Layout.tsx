'use client';

import React, { ReactNode } from 'react';
import Header from '@/app/components/layout/Header';
import Sidebar from '@/app/components/layout/Sidebar';
import useAuth from '@/app/hooks/useAuth';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useAuth(); // 인증 훅 호출

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
