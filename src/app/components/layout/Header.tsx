'use client';

import React from 'react';
import useAuth from '@/app/hooks/useAuth';
import styles from './Layout.module.scss';

const Header: React.FC = () => {
  const { logout } = useAuth();

  return (
    <header className={styles.header}>
      <div>내 계정 설정</div>
      <div>
        <button
          onClick={logout}
          className="bg-red-600 text-white p-2 rounded"
        >
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
