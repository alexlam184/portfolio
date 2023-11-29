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
        <h1 className={styles.title}>
          Hey, I&apos;m {t("hero.name")}
          <span>.</span>
        </h1>

        <h2 className={styles.subTitle}>
          {t("hero.iam")}
          <Reveal>
            <span>{t("hero.title")}</span>
          </Reveal>
        </h2>

        <Reveal>
          <p className={styles.aboutCopy}>{t("hero.description")}</p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            {t("hero.contactme")}
          </StandardButton>
        </Reveal>
      </div>
      {/* <DotGrid /> */}
    </section>
  );
};
