import styles from "./loading.module.scss";
import { Bebas_Neue } from "next/font/google";

const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen m-0 bg-white">
      <div className="flex justify-center items-center h-[100px]">
        <div className={`${styles.loader} ${bebas_Neue.className}`}>
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );
}
