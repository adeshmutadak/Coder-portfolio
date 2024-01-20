import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold"> Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Developer Intern"
            subTitle="INFOVIRTECH PVT. LTD. - (July - Dec 2023)"
            result="UP"
            des="Completed 6-month Full Stack Web Development internship, honing front-end skills, translating designs into responsive interfaces. Enhanced collaboration, time management, and problem-solving abilities."
          />
          <ResumeCard
            title="Web Developer Intern"
            subTitle="OCTANET SERVICES PVT. LTD - (Aug - Oct 2023)"
            result="Odisha"
            des="Web development intern at OctaNet Software Services for 2 months. Improved front-end skills, translating designs into responsive interfaces. Developed effective collaboration, time management, and problem-solving abilities."
          />
          <ResumeCard
            title="Backend Developer Intern"
            subTitle="KBN MARKETING SOLUTIONS PVT LTD - (Sep-2022 - Feb-2023)"
            result="Maharashtra"
            des="Applied Java, Spring Boot, MySQL, HTML, and CSS skills in real-world projects. Key role in Spring Boot Java app development, MySQL database management. Improved communication with impactful presentations, emphasizing teamwork and clear idea presentation."
          />
        </div>
      </div>
      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Experience;
