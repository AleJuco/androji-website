import Image from "next/image";
import { Text } from "@/components/Text/Text";

export default function AboutMeSlide() {
  return (
    <div className="flex w-4/5 h-full mx-auto">
      <div className="w-1/2 flex flex-col items-center justify-center text-white">
        <div className="">
          <Text variant="title">alejandro</Text>
        </div>
        <div className="">
          <Text variant="subtitle">Join this cool club</Text>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
