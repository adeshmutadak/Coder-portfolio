import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Education{" "}
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Engineering"
            subTitle=" SavitriBai Phule Pune University (2018 - 2022)"
            result="7.8/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the Engineering."
          />
          <ResumeCard
            title="HSC"
            subTitle="K.T.H.M College of Nashik (2016 - 2018)"
            result="60.00%"
            des="Holding a Higher Secondary Certificate (HSC), I have a strong foundation in diverse subjects, providing a well-rounded educational background."
          />
          <ResumeCard
            title="SSC"
            subTitle="Maratha HighSchool Nashik (2015 - 2016)"
            result="88.60%"
            des="With a solid foundation in academics, I have successfully completed my Secondary School Certificate (SSC), laying the groundwork for a versatile and knowledge-driven journey."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            {" "}
            Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Developer Intern"
            subTitle="INFOVIRTECH PVT. LTD - (July - Dec 2023)"
            result="Uttar Pradesh"
            des="Enhanced front-end development proficiency, skillfully translating design concepts into responsive interfaces. Cultivated robust collaboration, time management, and problem-solving capabilities during an enriching internship."
          />
          <ResumeCard
            title="Web Development Intern"
            subTitle="OCTANET SERVICES PVT. LTD - (Aug - Oct 2023)"
            result="Bhubaneshwar, Odisha"
            des="Strengthened front-end development, translating designs into responsive interfaces. Cultivated effective collaboration, time management, and problem-solving skills."
          />
          <ResumeCard
            title="Backend Developer Intern"
            subTitle="KBN MARKETING SOLUTIONS PVT LTD - (Sep 2022 - Feb 2023)"
            result="Maharashtra"
            des="Applied Java, Spring Boot, MySQL, HTML, and CSS skills in real-world projects. Played a pivotal role in Java application development with Spring Boot, efficiently managing MySQL databases. Enhanced communication through impactful presentations, emphasizing teamwork and clear idea presentation."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
