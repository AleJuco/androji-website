import Image from "next/image";
import profilephoto from "@/assets/images/image0.jpg";
import { Text } from "@/components/Text/Text";

export default function HomeSection() {
  return (
    <section id="home">
      <div className="w-full h-full py-30 text-text ">
        <div className="flex flex-col items-center justify-center gap-6">
          
          <div className="w-40 h-40 md:w-72 md:h-72 overflow-hidden">
            <Image
              src={profilephoto}
              alt="Me"
              width={288}
              height={288}
              className="w-full h-full object-cover shadow-lg rounded-full"
            />
          </div>
          
          <div className="w-full md:w-2/3 text-center">
            <Text variant="title">Alejandro Imperial</Text>
          </div>

          <div className="w-full md:w-2/3 text-center">
            <Text variant="subtitle">UBC Integrated Engineering</Text>
          </div>
        </div>
      </div>
    </section>
  );
}
