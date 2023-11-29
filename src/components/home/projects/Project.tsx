import { Reveal } from "@/components/common/Reveal";
import { useDisclosure } from "@nextui-org/react";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport, AiFillYoutube } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import styles from "./projects.module.scss";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink?: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code?: string;
  youtube?: string;
}

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  youtube,
  tech,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onOpen}
          className={styles.projectImage}
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>
        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />

              {code && (
                <Link href={code} target="_blank" rel="nofollow">
                  <AiFillGithub size="2.8rem" />
                </Link>
              )}
              {youtube && (
                <Link href={youtube} target="_blank" rel="nofollow">
                  <AiFillYoutube size="2.8rem" />
                </Link>
              )}

              {projectLink && (
                <Link href={projectLink} target="_blank" rel="nofollow">
                  <AiOutlineExport size="2.8rem" />
                </Link>
              )}
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.projectTech}>{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className={styles.projectDescription}>
              {description} <span onClick={onOpen}>Learn more {">"}</span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
