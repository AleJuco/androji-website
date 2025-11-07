import Image from "next/image";
import profilephoto from "@/assets/images/image0.jpg";
import { Text } from "@/components/Text/Text";
import ScrollFadeIn from "@/components/TextEffects/ScrollFadeIn";
import Card from "@/components/Card/Card";

export default function ProjectsSection() {
  return (
      <div className="w-full h-full bg-bg1 py-30 ">
        <div className="flex justify-center items-center py-4">
          <ScrollFadeIn>
            <Text variant="title">Projects</Text>
          </ScrollFadeIn>    
        </div>
        
        <section className="flex justify-center items-center py-4">
          <Card 
            title="Personal Website"
            subtitle="Built using   "
            body="hi"
            
          />
            
          
        </section>
      </div>
    );
}
