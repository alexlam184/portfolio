"use client";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProjectsType } from "@/constant/type";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects: ProjectsType = [
  {
    title: "Elma GPT",
    imgSrc: "images/project-imgs/elmagpt.png",
    code: "https://github.com/alexlam184/emla-chat-web",
    youtube: "https://www.youtube.com/watch?v=h0caIp_1Eqk&t=43s",
    projectLink: "https://emla-chat-web.vercel.app",
    tech: ["Reactjs", "Typescript", "Live2D", "Microsoft Azure", "ChatGPT"],
    description:
      "ElmaGPT, a hardware education web app, uses ChatGPT API and Azure Text-to-Voice. Its unique feature is a dynamic virtual teacher with a Live2D-generated avatar, enhancing engagement and learning.",
    modalContent: (
      <>
        <p>
          ElmaGPT revolutionizes hardware education with its interactive web
          application featuring a virtual teacher powered by ChatGPT API and
          Microsoft Azure Text-to-Voice. Students can effortlessly pose
          questions on hardware topics through the chat interface, benefiting
          from accurate and contextual responses. What sets ElmaGPT apart is its
          incorporation of a dynamic virtual avatar generated using Live2D
          technology. This animated companion adds a visually engaging element
          to the learning experience, providing a friendly face to the virtual
          teacher.
        </p>
        <p>
          The seamless integration of Live2D brings ElmaGPT to life, fostering a
          more immersive and enjoyable educational journey. As students explore
          the intricacies of hardware, the virtual avatar enhances their
          connection with the material, making ElmaGPT a cutting-edge and
          personable platform for mastering hardware concepts.
        </p>
      </>
    ),
  },
  {
    title: "Car simulator website",
    imgSrc: "images/project-imgs/carsim.png",
    projectLink: "https://car-sim-web.vercel.app",
    tech: ["Nextjs", "TailwindCSS"],
    description:
      "The Car Simulation Website showcases car simulators crafted from recycled scrap cars.",
    modalContent: (
      <>
        <p>
          The Car Simulation Website offers an immersive experience showcasing
          car simulators crafted from recycled scrap cars. Explore the product
          lineup and witness sustainable innovation in virtual driving using
          repurposed automotive materials.
        </p>
      </>
    ),
  },
];
