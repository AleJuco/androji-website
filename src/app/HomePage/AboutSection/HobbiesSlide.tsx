import Image from "next/image";
import { Text } from "@/components/Text/Text";

export default function HobbiesSlide() {
  return (
    <div className="flex h-full mx-auto">
      <div className="flex flex-col items-center justify-center text-white">
        <div className="">
          <Text variant="title">hobbies fr</Text>
        </div>
        <div className="">
          <Text variant="subtitle">Some of my hobbies</Text>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
