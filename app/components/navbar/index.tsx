import AnimationText from "../buttons/animationText";
import { constantText } from "./constant";
type tabs = string;

const Navbar = ({
  activeTab = "tab1",
  setActiveTab = (tab: string) => {},
  lan = "en",
}) => {
  const text = constantText[lan];
  return (
    <div className="flex w-full px-10  h-12 justify-around items-center  gap-4 transition-all">
      <button
        onClick={() => setActiveTab("tab1")}
        className="h-full bg-gray-50 rounded-md grow transition-all"
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
        className="h-full bg-gray-50 rounded-md grow transition-all"
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
        className="p-4 bg-gray-50 rounded-md grow transition-all"
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
        className="p-4 bg-gray-50 rounded-md grow transition-all"
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
        className="p-4 bg-gray-50 rounded-md grow transition-all"
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
