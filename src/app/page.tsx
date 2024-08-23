import Banner from "@/components/Banner";
import Image from "next/image";
import VaccineCard from "@/components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
       <Banner/>
       <div className={styles.card_layout}>
          {/* <VaccineCard imgSrc="/img/vaccine02.jpg" hospitalName="Original"/> */}
          <VaccineCard imgSrc="/img/chula.jpg" hospitalName="Chulalongkorn Hospital"/>
          <VaccineCard imgSrc="/img/rajavithi.jpg" hospitalName="RajavithiHospital"/>
          <VaccineCard imgSrc="/img/thammasat.jpg" hospitalName="Thammasat University Hospital"/>
       </div>
    </main>
  );
}
