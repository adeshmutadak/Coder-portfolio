import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Adesh Mutadak</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer /Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Applied Java, Spring Boot, MySQL, HTML, and CSS in real-world
          projects, contributing to comprehensive solutions. Played a pivotal
          role in Java application development, efficiently managing MySQL
          databases and enhancing communication through impactful
          presentations.1
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <span className="text-lightText cursor-pointer">+91-7030995694</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText cursor-pointer send">
            adeshmutadak@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/adesh-mutadak/"
            target="adesh_mutadak"
          >
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
    </div>
  );
};

export default ContactLeft;
