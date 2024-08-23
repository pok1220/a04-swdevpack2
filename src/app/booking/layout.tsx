import BookingMenu from "@/components/BookingMenu";

export default function BookingLayout({children}:{children:React.ReactNode}){
    return(
        <div className="p-10 flex flex-row">
            <BookingMenu/>
            {children}
        </div>
    )
}