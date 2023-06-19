import Image from "next/image";
import styles from "./page.module.css";
import { Preview, Products, Reviews } from "@/widgets";
import { About } from "@/widgets/components/About/About";

export default function Home() {
  return (
    <>
      <Preview />
      <Products />
      <About />
      <Reviews />
    </>
  );
}
