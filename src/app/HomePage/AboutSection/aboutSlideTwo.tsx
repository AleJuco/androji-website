import ScrollFadeIn from "@/components/TextEffects/ScrollFadeIn"
import { Text } from "@/components/Text/Text";
import Image from "next/image";

export default function AboutSlideOne() {
  return (
    <div className="flex w-full h-full justify-between items-center p-10 m-30">
        <div className="flex h-max-screen w-full flex-col gap-4 mx-10">
            <Text variant="title">
                Hobbies
            </Text>
            <Text variant="body">
                    snowboarding
            </Text>
        </div>

        <div>


        </div>
    </div>
  );
}