import Image from "next/image";
import profilephoto from "@/assets/images/image0.jpg";
import { Text } from "@/components/Text/Text";
import ScrollFadeIn from "@/components/TextEffects/ScrollFadeIn";
import { Card } from "@/components/Card"

export default function AboutSection() {
  return (
      <div className="w-full h-full bg-bg1 py-30 ">
        <div className="flex justify-center items-center py-4">
          <ScrollFadeIn>
            <Text variant="title">About Me</Text>
          </ScrollFadeIn>    
        </div>
        <div className="flex items-center justify-center md:grid">
          <Card/>
        </div>
      </div>
    );
}
