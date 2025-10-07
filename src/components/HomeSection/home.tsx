import Image from "next/image";
import profilephoto from "@/assets/images/IMG_8940_Original.jpg";
import { Text } from "@/components/Text/Text";

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen bg-gray-200 flex items-center">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-col items-center gap-8">
        {/* Image column */}
        <div className="w-80 h-80 rounded-full overflow-hidden">
          <Image
            src={profilephoto}
            alt="Me"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg radius-full"
          />
        </div>

        {/* Text column */}
        <div className="w-full md:w-2/3 text-center">
          <Text variant="title">hi, i'm <span className="text-[#3972A8]">alejandro</span>, an engineering student at the University of British Columbia</Text>
        </div>
        <div className="w-full md:w-2/3 text-center">
          <Text variant="subtitle"> </Text>
        </div>
      </div>
    </section>
  );
}
