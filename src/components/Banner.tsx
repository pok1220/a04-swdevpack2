import styles from "./banner.module.css"
import Image from "next/image"

export default function Banner(){
    return(
        <div className={styles.main_banner}>
             <Image src={'/img/vaccine01.jpg'}
             alt='main_cover'
             fill={true}
            //  objectFit="cover"
             />
             <div className={styles.main_bannerText}>
                <h1 className="text-5xl font-medium my-5">Vaccine Service Center</h1>
                <h4 className="text-2xl font-serif">Service For Everyone!?</h4>
             </div>
        </div>
    )
}