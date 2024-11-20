import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const Date = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const monthString = searchParams.get("date")?.split('-')[1]
    const yearString = searchParams.get("date")?.split('-')[0]
    if(!monthString || !yearString) {
        throw new Error("month format is not right")
    }
    const month = parseInt(monthString, 10)
    const year = parseInt(yearString, 10)

    const[noOfDays, setNoOfDays] = useState<number>(29)

    const handleClick = (value: number) => {
        const date = searchParams.get("date")
        if(date) {
            setSearchParams({'date': `${date.slice(0, 8)}${value <= 9? `0${value}` : value}`})
        }
    }

    useEffect(() => {
        if((year && year % 4 === 0) && month === 2) {
            setNoOfDays(30) 
        }

        switch(month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                setNoOfDays(31)
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                setNoOfDays(30)
                break;
            case 2:
                setNoOfDays(29)
                break;

        }
    },[monthString, yearString])

    return (
        <div className="mt-2 mb-2 flex flex-col gap-1 h-32 overflow-y-scroll snap-y scroll-pt-8 snap-mandatory snap-always scrollbar z-20">
            {Array.from({length: noOfDays}, (_, index) => {
                return (
                    <button 
                        key={index} 
                        type="button" 
                        value={index+1} 
                        onClick={(e) => {handleClick(parseInt(e.currentTarget.value))}} 
                        className="w-22 h-8.5 bg-customRed hover:bg-black rounded-3xl font-inter text-xl snap-center font-medium text-white">
                        {index + 1}
                    </button>
                )
            })}
        </div>
        
        
    )
}

export default Date