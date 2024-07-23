import { useRouter } from "next/navigation";
import AnimationText from "../buttons/animationText";
import { constantText } from "./constant";
import { useState } from "react";
type tabs = string;

const Navbar = ({
  lan = "en",

}) => {
  const text = constantText[lan];
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="flex w-full px-20 py-10  h-12 justify-around items-center  gap-10 transition-all">
      <button
        onClick={() => {setActiveTab("tab1");router.push('/posts')}}
        className="p-4  rounded-md grow transition-all"
        style={{
          backgroundColor: activeTab === "tab1" ? "blue" : "gray",
          color: activeTab === "tab1" ? "white" : "black",
        }}
      >
        <AnimationText
          text={text.tab1}
          styles={{ width: "100%", height: "100%" }}
        ></AnimationText>
      </button>
      <button
        onClick={() => setActiveTab("tab2")}
        className="p-4  rounded-md grow transition-all"
        style={{
          backgroundColor: activeTab === "tab2" ? "blue" : "gray",
          color: activeTab === "tab2" ? "white" : "black",
        }}
      >
        <AnimationText
          text={text.tab2}
          styles={{ width: "100%", height: "100%" }}
        ></AnimationText>
      </button>
      <button
        onClick={() => setActiveTab("tab3")}
        className="p-4  rounded-md grow transition-all"
        style={{
          backgroundColor: activeTab === "tab3" ? "blue" : "gray",
          color: activeTab === "tab3" ? "white" : "black",
        }}
      >
        <AnimationText
          text={text.tab3}
          styles={{ width: "100%", height: "100%" }}
        ></AnimationText>
      </button>
      <button
        onClick={() => setActiveTab("tab4")}
        className="p-4  rounded-md grow transition-all"
        style={{
          backgroundColor: activeTab === "tab4" ? "blue" : "gray",
          color: activeTab === "tab4" ? "white" : "black",
        }}
      >
        <AnimationText
          text={text.tab4}
          styles={{ width: "100%", height: "100%" }}
        ></AnimationText>
      </button>
      <button
        onClick={() => setActiveTab("tab5")}
        className="p-4  rounded-md grow transition-all"
        style={{
          backgroundColor: activeTab === "tab5" ? "blue" : "gray",
          color: activeTab === "tab5" ? "white" : "black",
        }}
      >
        <AnimationText
          text={text.tab5}
          styles={{ width: "100%", height: "100%" }}
        ></AnimationText>
      </button>
    </div>
  );
};

export default Navbar;
