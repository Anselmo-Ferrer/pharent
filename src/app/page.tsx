import PharentBanner from "@/assets/favicon.png"
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white w-full h-[5000px]">
      <Image className="w-full h-150" src={PharentBanner} alt="Pharent banenr" />
    </div>
  );
}
