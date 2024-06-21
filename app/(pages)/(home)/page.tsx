"use client";

import Image from "next/image";
import Post from "../posts/page";
import AnimationText from "@/app/components/buttons/animationText";
import Navbar from "@/app/components/navbar";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AnimationText
          text="Project"
          styles={{ height: "100px", fontSize: "50px" }}
        ></AnimationText>
        <AnimationText
          text="Project"
          styles={{ height: "100px", fontSize: "50px" }}
        ></AnimationText>
      </main>
    </>
  );
}
