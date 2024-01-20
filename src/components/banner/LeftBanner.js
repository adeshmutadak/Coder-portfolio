import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiJava,
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiHibernate,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiLeetcode,
  SiGeeksforgeeks,
  SiGithub,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "Software Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal uppercase">
          WELCOME TO MY Profile
        </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Adesh Mutadak</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a full-stack developer specializing in Java and Spring Boot for
          robust backend solutions. Proficient in database management with MySQL
          and MongoDB. Frontend expertise includes React, while Node.js and
          Express.js amplify my capabilities for full-stack development.
        </p>
      </div>
      <div className="flex flex-wrap xl:flex-row gap-6 lgl:gap-5 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/adesh-mutadak/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://twitter.com/Adesh_Mutadak" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex flex-wrap gap-6">
            <span className="bannerIcon">
              <SiJava />
            </span>
            <span className="bannerIcon">
              <SiSpringboot />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>

            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiHibernate />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiBootstrap />
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Coding Profiles
          </h2>
          <div className="flex gap-4">
            <a href="https://leetcode.com/AdeshMutadak123/" target="blank">
              <span className="bannerIcon">
                <SiLeetcode />
              </span>
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/adeshmutyfbb/practice"
              target="blank"
            >
              <span className="bannerIcon">
                <SiGeeksforgeeks />
              </span>
            </a>
            <a href="https://github.com/adeshmutadak" target="blank">
              <span className="bannerIcon">
                <SiGithub />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
