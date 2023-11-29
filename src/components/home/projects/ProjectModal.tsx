import styles from "./projectmodal.module.scss";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport, AiFillYoutube } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  title: string;
  imgSrc: string;
  code?: string;
  youtube?: string;
  projectLink?: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  onOpenChange,
  imgSrc,
  isOpen,
  title,
  code,
  youtube,
  tech,
}: Props) => {
  // useEffect(() => {
  //   const body = document.querySelector("body");

  //   if (isOpen) {
  //     body!.style.overflowY = "hidden";
  //   } else {
  //     body!.style.overflowY = "scroll";
  //   }
  // }, [isOpen]);

  // const content = (
  //   <div className={styles.modal} onClick={() => setIsOpen(false)}>
  //     <button className={styles.closeModalBtn}>
  //       <MdClose />
  //     </button>

  //     <motion.div
  //       initial={{ y: 100, opacity: 0 }}
  //       animate={{ y: 0, opacity: 1 }}
  //       onClick={(e) => e.stopPropagation()}
  //       className={styles.modalCard}
  //     >
  //       <img
  //         className={styles.modalImage}
  //         src={imgSrc}
  //         alt={`An image of the ${title} project.`}
  //       />
  //       <div className={styles.modalContent}>
  //         <h4>{title}</h4>
  //         <div className={styles.modalTech}>{tech.join(" - ")}</div>

  //         <div className={styles.suppliedContent}>{modalContent}</div>

  //         <div className={styles.modalFooter}>
  //           <p className={styles.linksText}>
  //             Project Links<span>.</span>
  //           </p>
  //           <div className={styles.links}>
  //             <Link target="_blank" rel="nofollow" href={code}>
  //               <AiFillGithub /> source code
  //             </Link>
  //             <Link target="_blank" rel="nofollow" href={projectLink}>
  //               <AiOutlineExport /> live project
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </motion.div>
  //   </div>
  // );

  // if (!isOpen) return <></>;

  // @ts-ignore
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <div className={styles.modal}>
                <Button className={styles.closeModalBtn} onPress={onClose}>
                  <MdClose />
                </Button>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  onClick={(e) => e.stopPropagation()}
                  className={styles.modalCard}
                >
                  <img
                    className={styles.modalImage}
                    src={imgSrc}
                    alt={`An image of the ${title} project.`}
                  />
                  <div className={styles.modalContent}>
                    <h4>{title}</h4>
                    <div className={styles.modalTech}>{tech.join(" - ")}</div>

                    <div className={styles.suppliedContent}>{modalContent}</div>

                    <div className={styles.modalFooter}>
                      <p className={styles.linksText}>
                        Project Links<span>.</span>
                      </p>
                      <div className={styles.links}>
                        {code && (
                          <Link target="_blank" rel="nofollow" href={code}>
                            <AiFillGithub /> source code
                          </Link>
                        )}
                        {youtube && (
                          <Link target="_blank" rel="nofollow" href={youtube}>
                            <AiFillYoutube /> Youtube
                          </Link>
                        )}
                        {projectLink && (
                          <Link
                            target="_blank"
                            rel="nofollow"
                            href={projectLink}
                          >
                            <AiOutlineExport /> live project
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
