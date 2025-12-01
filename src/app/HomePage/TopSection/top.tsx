import Image from "next/image";
import profilephoto from "@/assets/images/IMG_0651.png";
import { Text } from "@/components/Text/Text";
import ScrollFadeIn from "@/components/TextEffects/ScrollFadeIn";

export default function TopSection() {
  return ( 
      <div className="w-full h-full bg-bg1 py-40 ">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          
          <div className="w-40 h-40 md:w-72 md:h-72 overflow-hidden fade-up-1s">
            <Image
              src={profilephoto}
              alt="Me"
              width={288}
              height={288}
              className="w-full h-full object-cover object-center shadow-lg rounded-full"
            />
          </div>

          <div className="flex w-100 justify-center items-center text-dgrey fade-up-1p5s">
            <Text variant="largetitle">Alejandro Imperial</Text>
          </div>

          <div className="text-lgrey fade-up-2s">
            <Text variant="subtitle">UBC Integrated Engineering</Text>
          </div>
        </div>
      </div>
    );
}
