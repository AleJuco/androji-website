import Image from "next/image";
import profilephoto from "@/assets/images/image0.jpg";
import { Text } from "@/components/Text/Text";
import ScrollFadeIn from "@/components/TextEffects/ScrollFadeIn";
import Card from "@/components/Card/Card";
import Website_Project_Image from "@/assets/images/Website Project Picture.png";

export default function SkillsandAchievementsSection() {
  return (
      <div className="flex flex-col gap-6 w-full h-full bg-bgtwo text-bg1 py-12 sm:py-20 lg:py-32 px-20">
        <div className="flex justify-center items-center py-4">
          <ScrollFadeIn>
            <Text variant="title">Skills and Achievements</Text>
          </ScrollFadeIn>    
        </div>
        
        <ScrollFadeIn>
          <section className=" text-bg1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 place-items-stretch justify-items-center">
            <Card 
              title="This Personal Website"
              subtitle="Built with Next.js and Tailwind CSS"
              image={Website_Project_Image}
              rotation={4}
              imagePosition="top"
              bgColor="border-2 border-white"
            />
            <Card
              title="RFID Room Attendance System"
              subtitle="Using RFID technology to track attendance"
              body="hi"
              rotation={-4}
              imagePosition="bottom"
              bgColor="border-2 border-white"
            />
            <Card 
              title="This Personal Website"
              subtitle="Built with Next.js and Tailwind CSS"
              image={Website_Project_Image}
              rotation={4}    
              bgColor="border-2 border-white"      
            />
            <Card
              title="RFID Room Attendance System"
              subtitle="Using RFID technology to track attendance"
              body="hi"
              rotation={-4}
              bgColor="border-2 border-white"
            />

          </section>
        </ScrollFadeIn>
            
          
        
      </div>
    );
}
