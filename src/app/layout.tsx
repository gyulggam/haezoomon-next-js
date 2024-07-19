import React, { ReactNode } from 'react';
import '@styles/globals.scss';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-[#D3D3D3] text-primary">{children}</body>
    </html>
  );
};

export default RootLayout;
