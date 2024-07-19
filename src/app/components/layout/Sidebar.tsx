import React from 'react';
import styles from './Layout.module.scss';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className="text-2xl font-bold mb-4">DASHBOARD</div>
      <ul className="space-y-2 text-typography">
        <li>통합 모니터링</li>
        <li>감축 현황</li>
        <li>참여고객 모니터링</li>
        <li>DR</li>
        <li>수요자원 정보</li>
        <li>참여고객 정보</li>
        <li>수요감축요청</li>
        <li>감축 내역</li>
        <li>자원 입찰</li>
        <li>고객 입찰</li>
        <li>국민DR CBL 관리</li>
        <li>분석</li>
        <li>RRMSE</li>
        <li>CBL</li>
        <li>계량 데이터</li>
        <li>계량데이터 조회</li>
        <li>파워플래너 수집</li>
        <li>한전데이터 수집</li>
        <li>데이터 다운로드</li>
        <li>관리자</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
