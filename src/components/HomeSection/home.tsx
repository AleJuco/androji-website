import Image from "next/image";
import profilephoto from "@/assets/images/image0.jpg";
import { Text } from "@/components/Text/Text";

export default function HomeSection() {
  return (
    <section id="home" className="flex flex-col ">
      {/* Top hero area with name and image */} 
      <div className="w-full h-full bg-gray-200 py-17">
        <div className="container mx-auto px-6 flex flex-col items-center gap-18">
          <div className="w-full md:w-2/3 text-center">
            <Text variant="title">Alejandro Juco Imperial</Text>
          </div>

          <div className="w-40 h-40 md:w-72 md:h-72 overflow-hidden">
            <Image
              src={profilephoto}
              alt="Me"
              width={288}
              height={288}
              className="w-full h-full object-cover shadow-lg rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom band with different background */}
      <div className="w-full bg-gray-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <Text variant="subtitle">engineering student at the University of British Columbia</Text>
        </div>
      </div>
    </section>
  );
}
