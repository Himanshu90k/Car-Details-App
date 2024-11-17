import { useSearchParams } from "react-router-dom"

interface MonthProps {
    month: string
}

const Month: React.FC<MonthProps> = ({month}) => {

    // get date from the url query
    const [searchParams, setSearchParams] = useSearchParams()
    const date = searchParams.get("date")

    const monthList= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const handleOnClick = () => {
        if(date) {
            const index = monthList.findIndex((monthListValue) => {
                return monthListValue === month
            })
            setSearchParams({'date': `${date.slice(0, 5)}${index <= 8? `0${index+1}`: index+1}${date.slice(7)}`})
        }
    }

    return (
        <button onClick={handleOnClick} type="button" title={month} className="flex justify-center items-center w-9 h-6 rounded bg-customRed hover:bg-black">
            <p className="font-inter font-medium text-xs text-white">{month}</p>
        </button>
    )
}

export default Month