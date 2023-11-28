"use client";
import { StandardButton } from "@/components/common/buttons/StandardButton";
import { Reveal } from "@/components/common/Reveal";
import { useTranslations } from "next-intl";
// import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  const t = useTranslations("IndexPage");
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m {t("hero.name")}
            <span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>{t("hero.title")}</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            {/* I&apos;ve spent the last 3 years building and scaling software for
            some pretty cool companies. I also teach people to paint online
            (incase you&apos;ve got an empty canvas layin&apos; around 🎨).
            Let&apos;s connect! */}
            {t("hero.description")}
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      {/* <DotGrid /> */}
    </section>
  );
};
