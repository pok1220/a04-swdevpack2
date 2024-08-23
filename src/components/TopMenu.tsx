import Link from "next/link"
import Image from "next/image"
import styles from "./topmenu.module.css"
import TopMenuItem from "./TopMenuItem"

export default function TopMenu(){
    return(
        // <div className={styles.navbarcontainer}>
        <div className="h-14 bg-white fixed top-0 left-0 right-0 z-30 flex items-center justify-end border-y-2 border-slate-300 ">
            
            
            {/* <div className="flex-1 flex items-center justify-start space-x-4">
                <TopMenuItem title="Home" pageRef="/" />
            </div> */}
            
            {/* <div className="justify-end flex right-100"> */}
                {/* <TopMenuItem title="About" pageRef="/"/> */}
                <TopMenuItem title="Menu Item Booking" pageRef="/booking"/>
            {/* </div> */}

            <Image src={'/img/logo.png'}
            className="h-[100%] w-auto ml-1 right-100"
            width={0}
            height={0}
            sizes="100vh"
            alt="logo"
            />
        </div>
    )
}