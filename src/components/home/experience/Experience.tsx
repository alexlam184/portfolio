"use client";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ExperienceType } from "@/constant/type";
import { useTranslations } from "next-intl";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  const t = useTranslations("IndexPage");
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={t("experience.header")} dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience: ExperienceType[] = [
  {
    title: "Shoalter Technology  - HKTV Group",
    position: "Software Engineer",
    time: "2022 - 2023",
    location: "Hong Kong",
    description:
      "Develop e-commerce online platform including website and mobile app “HKTVmall – online shopping” with 2,000,000+ current user in Hong Kong",
    tech: [
      "Typescript",
      "Python",
      "Java",
      "ReactJS",
      "React Native",
      "NextJS",
      "MySQL",
      "Redis",
      "Java",
      "Springboot",
    ],
  },
  {
    title: "Omron",
    position: "Application Engineer",
    time: "2020 - 2022",
    location: "Hong Kong",
    description: "Developing hardware & IT project",
    tech: [
      "Python",
      "Selenium",
      "OpenCV",
      "VBA",
      "Oracle JDE",
      "SAP Concur",
      "MySQL",
    ],
  },
  {
    title: "TURNED-E! Education Limited",
    position: "Software Engineer",
    time: "2019 - Present",
    location: "Hong Kong",
    description: "Developing hardware & IT project",
    tech: [
      "Python",
      "Java",
      "Springboot",
      "Typescript",
      "ReactJS",
      "NextJS",
      "Planetscale",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Google Cloud",
      "Microsoft Azure",
      "Vercel",
      "AWS",
      "Roboflow",
      "GPT-3",
      "EasyEDA",
      "Arduino C++",
      "PWA",
      "OneNET",
      "MQTT",
    ],
  },
];
