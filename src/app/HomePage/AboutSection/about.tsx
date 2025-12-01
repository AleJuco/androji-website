import Image from "next/image";
import profilephoto from "@/assets/images/image0.jpg";
import { Text } from "@/components/Text/Text";
import ScrollFadeIn from "@/components/TextEffects/ScrollFadeIn";
import Card from "@/components/Card/Card";
import Carousel from "@/components/Carousel/Carousel";
import AboutSlideOne from "./aboutSlideOne"
import AboutSlideTwo from "./aboutSlideTwo"

export default function AboutSection() {
  return (
      <div className="w-full h-full bg-bgtwo text-bg1 py-30 ">
        <div className="flex justify-center items-center py-4">
          <ScrollFadeIn>
            <Text variant="title">About Me</Text>
          </ScrollFadeIn>    
        </div>

        <div className="flex justify-center items-center py-4 h-full w-full">
          <ScrollFadeIn>
            <Carousel 
              slides={[

                <AboutSlideOne key="slide_1"/>, 
                <AboutSlideTwo key="slide_2"/>, 
                <AboutSlideOne key="slide_3"/>

              ]} />
          </ScrollFadeIn>
        </div>
      </div>
    );
}

