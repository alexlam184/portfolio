"use client";
import { MyLinks } from "@/components/nav/MyLinks";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("IndexPage");
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              {t("aboutme.content1")}
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>{t("aboutme.content2")}</p>
          </Reveal>

          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
