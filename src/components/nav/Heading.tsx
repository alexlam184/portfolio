"use client";
import styles from "./heading.module.scss";
import { MyLinks } from "./MyLinks";
import { OutlineButton } from "@/components/common/buttons/OutlineButton";
import { PiTranslateBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const Heading = () => {
  const t = useTranslations("Topbar");
  return (
    <header className={styles.heading}>
      <MyLinks />

      <OutlineButton
        onClick={() => window.open("/LAM_ALEXANDER_CV_plan_text.pdf")}
      >
        {t("resume")}
      </OutlineButton>
    </header>
  );
};
