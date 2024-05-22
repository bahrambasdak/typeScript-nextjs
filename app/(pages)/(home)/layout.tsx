"use client"
import Navbar from "@/app/components/navbar";
import { cloneElement, useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
