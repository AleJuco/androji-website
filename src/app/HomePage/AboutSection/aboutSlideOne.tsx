import ScrollFadeIn from "@/components/TextEffects/ScrollFadeIn"
import { Text } from "@/components/Text/Text";
import Image from "next/image";
import aboutMePhoto from "@/assets/images/IMG_0666.png"

export default function AboutSlideOne() {
  return (
    <div className="flex flex-row w-full h-full justify-evenly items-center text-dgrey">
        <div className="flex p-8 h-80 w-80 flex-col gap-4 bg-bg1 rounded-lg">
            <Text variant="title">
                Who Am I?
            </Text>
            <Text variant="body">
                    Hello, I'm Alejandro Imperial, a second year
                Integrated Engineering Student at the University of British Columbia! 
            </Text>
        </div>

        <div className="flex h-80 w-80 items-center justify-center overflow-hidden">
            <Image
                src={aboutMePhoto}
                alt="Me"
                width={300}
                height={300}
                className="w-full h-full object-cover shadow-lg rounded-lg"
            />
        </div>
    </div>
  );
}