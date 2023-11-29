"use client";
import { Reveal } from "@/components/common/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Contact = () => {
  const t = useTranslations("IndexPage");
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            {t("contact.header")}
            <span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            {t("contact.description1")}
            <Link
              href="https://www.linkedin.com/in/alex-lam-724992152/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>
            {t("contact.description2")}
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:lamalex0211@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>lamalex0211@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
