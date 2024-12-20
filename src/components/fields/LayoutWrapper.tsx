"use client";

import React from "react";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
    return (
      <div className="flex flex-col items-center p-8 space-y-6 min-h-screen">
        {children}
      </div>
    );
}

export default LayoutWrapper