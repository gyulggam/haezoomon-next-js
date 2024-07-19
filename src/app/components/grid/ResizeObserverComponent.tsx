import React, { useState, useEffect, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

interface ResizeObserverProps {
  children: React.ReactNode;
  gridKey: string;
  onResize: (height: number) => void;
}

const ResizeObserverComponent: React.FC<ResizeObserverProps> = ({ children, gridKey, onResize }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        onResize(entry.contentRect.height);
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [onResize]);

  return (
    <div
      ref={ref}
      key={gridKey}
    >
      {children}
    </div>
  );
};

export default ResizeObserverComponent;
