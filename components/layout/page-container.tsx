// components/layout/page-container.tsx
"use client";

import React from "react";

type PageContainerProps = {
  children: React.ReactNode;
  scrollable?: boolean;
  className?: string;
};

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  scrollable = false,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col p-4 ${scrollable ? "overflow-auto h-screen" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
