import AnimationText from "@/app/components/buttons/animationText";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">

      <p className="w-1/3 h-1/5 bg-red">About us</p>
      <AnimationText
        text="Project"
        styles={{  fontSize: "40px" }}
      ></AnimationText>
    </div>
  );
}
