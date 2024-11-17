import Month from "./Month"
import { forwardRef } from "react"

type MonthCardProps = {}

const MonthCard = forwardRef<HTMLDivElement, MonthCardProps>((_, ref) => {

    const monthsList: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return (
        <div ref={ref} className="absolute -left-4 top-1.5 w-38 h-36 rounded-2xl border-2 border-solid border-yearRed bg-white shadow-yearShadow z-10">
            {/* vertical lines */}
            <div className="flex  justify-center items-center w-full h-full gap-10.5">
                <hr className="border h-32 border-red-300"/>
                <hr className="border h-32 border-red-300"/>
            </div>
            {/* horizontal lines */}
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-8.5 w-full h-full z-20">
                <hr className="border w-32 border-red-500" />
                <hr className="border w-32 border-red-500" />
                <hr className="border w-32 border-red-500" />
            </div>
            {/* months list */}
            <div className="absolute inset-0 justify-center items-center flex flex-wrap gap-x-2 gap-y-0 w-full h-full z-30">
                {
                    monthsList.map( (month, index) => {
                        return <Month month={month} key={index} />
                    })
                }
            </div>
        </div>
    )
})

export default MonthCard