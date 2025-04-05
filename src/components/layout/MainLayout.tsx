"use client";
import { useState, useEffect } from "react";

import Navigation from "@/components/layout/Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      {children}
    </div>
  );
};

export default MainLayout;
