import Date from "./Date"
import { useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"

type DateCardProps = {
    toggleState: boolean
}

const DateCard:React.FC<DateCardProps> = ({toggleState}) => {

    //scroll into view
    const [searchParams] = useSearchParams()
    const day = searchParams.get('date')?.split('-')[2]

    const dateCardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(toggleState === false) {
            return
        }

        if(dateCardRef.current && day) {
            const index = parseInt(day) - 1
            const ButtonElements = dateCardRef.current.children[0].children[index]
            ButtonElements.scrollIntoView({block: 'center', behavior: 'smooth'})
            
        }

    },[toggleState, dateCardRef.current])

    return (
        <div ref={dateCardRef} className="flex flex-col items-center gap-y-1 w-30 h-40 bg-white border border-solid border-yearRed shadow-yearShadow rounded-3xl absolute z-10 -top-2">
            <Date />
            <svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="52" height="3" viewBox="0 0 52 3" fill="none">
                <path d="M2 1.5H50" stroke="#E03F3F" strokeWidth="3" strokeLinecap="round"/>
            </svg>
        </div>
    )
}

export default DateCard