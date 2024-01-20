import React from "react";
import Title from "../layouts/Title";
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
import {
  projectOne,
  projectTwo,
  projectThree,
  landingPage1,
  landingPage2,
  projectFour,
  projectFive,
  landingPage3,
  projectSix,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Travelling Website"
          des=" Developed a dynamic Travel Project with MERN stack, enabling easy user login, reviews, and tour bookings. Integrated intuitive search for personalized travel. 
          Tech stack: HTML, CSS, JavaScript, React, Tailwind CSS, Node, MongoDB, VS Code."
          src={projectOne}
          gitLink={"https://github.com/adeshmutadak/travel-MERN-project"}
          deploymentLink={"https://github.com/adeshmutadak/travel-MERN-project"}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Dynamic e-commerce web app crafted with HTML, CSS, JavaScript, React, and Tailwind CSS. User-friendly interface for effortless product exploration, buying, and seamless online shopping."
          src={projectThree}
          gitLink={
            "https://github.com/adeshmutadak/totalitycorp-frontend-challenge"
          }
          deploymentLink={
            "https://totalitycorp-frontend-challenge-phi-flame.vercel.app/"
          }
        />
        <ProjectsCard
          title="IMDB Clone"
          des="Developed IMDb clone with React, enabling intuitive UI, real-time movie data, and enhanced user experience for film enthusiasts."
          src={projectTwo}
          gitLink={"https://github.com/adeshmutadak/IMDB-Clone"}
          deploymentLink={"https://imdb-clone-new.vercel.app/"}
        />
        <ProjectsCard
          title="Eat Drink Play "
          des="Crafted an Eat-Drink-Play website using HTML, CSS , Javascript offering a dynamic  experiences with engaging features."
          src={projectFour}
          gitLink={"https://github.com/adeshmutadak/Eat-Drink-Play-Clone"}
          deploymentLink={"https://eat-drink-play-clone.vercel.app/"}
        />
        <ProjectsCard
          title="weather Website"
          des=" Developed a weather website with HTML, CSS, and JavaScript, providing real-time forecasts and interactive features for a seamless user experience."
          src={projectFive}
          gitLink={"https://github.com/adeshmutadak/weather-app"}
          deploymentLink={"https://weather-app-two-gold-39.vercel.app/"}
        />
        <ProjectsCard
          title="Calculator"
          des="Developed a functional calculator with HTML, CSS, and JavaScript, providing a user-friendly interface for performing mathematical calculations seamlessly."
          src={projectSix}
          gitLink={"https://github.com/adeshmutadak/Calculator"}
          deploymentLink={"https://calculator-six-henna.vercel.app/"}
        />
      </div>
      <div className="flex justify-center items-center text-center">
        <Title des="Landing Pages" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Restaurant Page"
          des=" Indulge in culinary delights! Join us at our new restaurant for a taste journey. Reserve your table for an exceptional dining adventure. 
          Tech stack: HTML, CSS, JavaScript, React"
          src={landingPage1}
          gitLink={"https://github.com/adeshmutadak/Restaurant-Landing-Page-1"}
          deploymentLink={"https://restaurant-landing-page-1.vercel.app/"}
        />
        <ProjectsCard
          title="Christmas Page"
          des="Celebrate Christmas with festive feasts! Join us for joyful dining at our holiday-themed restaurant. Book your table for a merry experience. 
          Tech stack: HTML, CSS, JavaScript"
          src={landingPage2}
          gitLink={"https://github.com/adeshmutadak/Christmas-Landing-page-2"}
          deploymentLink={"https://christmas-landing-page-2.vercel.app/"}
        />
        <ProjectsCard
          title="Netflix"
          des="Crafted a visually appealing Netflix UI clone using HTML and CSS, ensuring a responsive design for an immersive streaming experience"
          src={landingPage3}
          gitLink={"https://github.com/adeshmutadak/Netflix-clone"}
          deploymentLink={"https://netflix-clone-zeta-five-30.vercel.app/"}
        />
      </div>
    </section>
  );
};

export default Projects;
