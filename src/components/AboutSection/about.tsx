import Image from "next/image";
import profilephoto from "@/assets/images/IMG_8940_Original.jpg";
import { Text } from "@/components/Text/Text";

export default function AboutSection() {
  return (
    <section id="about" className="flex h-200 items-center flex-col">
      <div className="text-center py-20 w-full">
        <Text variant="subtitle">About Me</Text>
      </div>
    </section>
  );
}
