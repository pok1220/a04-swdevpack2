import style from "./card.module.css"
import Image from "next/image"

export default function VaccineCard({hospitalName,imgSrc}:{hospitalName:string,imgSrc:string}){
    return(
        <div className="w-1/5 h-[500px] rounded-t-xl shadow-md bg-white">
            <div className="w-full h-[40%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt="Rabies_Vaccine"
                fill={true}
                className="object-cover rounded-t-lg"
                // style={{objectFit: "cover"}}
                // objectFit="cover"
                />    
            </div>
            <div className="w-full h-[60%] p-[10px] text-black">
                <div className={style.vaccine_name}>Rabies vaccine</div>
                <div className="font-bold font-serif text-center p-2">
                    {hospitalName}
                </div>
                <p className="text-sm">
                You should receive 2 doses of rabies vaccine given on days 0 and 7.
                Depending on your level of risk, you may be advised to have one or more 
                blood tests or receive a booster dose within 3 years after the first 2 doses. 
                Your health care provider can give you more details.
                </p>
            </div>
        </div>
    )
}