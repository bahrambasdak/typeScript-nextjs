"use client"
import Navbar from "@/app/components/navbar";
import { useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeTab,setActiveTab] = useState('');
  return (
    <>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
      {children}
    </>
  );
}
