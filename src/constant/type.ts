export type LanguageType = "en" | "zh";

export type ProjectsType = {
  title: string;
  imgSrc: string;
  code?: string;
  youtube?: string;
  projectLink?: string;
  tech: string[];
  description: string;
  modalContent: JSX.Element;
}[];
