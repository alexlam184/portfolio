"use client";

import React from "react";
import { useLocale } from "next-intl";
import { ChangeEvent } from "react";
import { PiTranslateBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { locales } from "@/constant/constant";

import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
});

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    router.replace(`/${event.target.value}${pathname}`);
  }

  function onPressChange() {
    console.log("alex locale=", locale);
    //router.replace(`/${locale === "zh" ? "en" : "zh"}${pathname}`);
    router.push(pathname, { locale: locale === "zh" ? "en" : "zh" });
  }

  return (
    <motion.button
      className="pt-2"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.0 }}
      onClick={onPressChange}
    >
      <PiTranslateBold size="2.4rem" />
    </motion.button>
  );
}
