import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiPaloaltosoftware } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Website Development"
          des="Passionate web designer crafting visually stunning and user-centric websites to elevate online experiences. Expertise in modern design trends and technologies."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Software Developer"
          des="Dedicated software developer crafting robust and innovative solutions. Proficient in diverse technologies to deliver efficient and scalable software solutions."
          icon={<SiPaloaltosoftware />}
        />

        <Card
          title="UX Design"
          des="Creative UX/UI designer shaping exceptional digital experiences. Combining aesthetics and functionality for visually compelling and user-friendly interfaces."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Reliable web hosting expert ensuring seamless online presence. Optimize performance and security for a smooth and efficient hosting experience."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
