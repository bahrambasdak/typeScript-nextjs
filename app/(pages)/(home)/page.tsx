import Image from "next/image";
import Post from "../post/page";

export default function Home() {




  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Post activeTab={'tab1'}/>

    </main>
  );
}
