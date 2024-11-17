import LeftDateNavigationButton from "./LeftDateNavigationButton"
import MonthCard from "./MonthCard"
import RightDateNavigationButton from "./RightDateNavigationButton"
import { useSearchParams } from "react-router-dom"
import { useEffect, useRef, useState} from "react"


const HomeNavigation: React.FC = () => {

    //toggle month card
    const [toggleMonthCard, setToggleMonthCard] = useState(false)
    const handleToggle = () => setToggleMonthCard(!toggleMonthCard)

    //ref for button
    const monthButtonRef = useRef<HTMLButtonElement>(null)

    const [searchParams] = useSearchParams()
    const date = searchParams.get("date")?.split('-')

    useEffect(() => {

        const handleClick = (event: MouseEvent) => {
            //check if the date and the card are not in the composed path
            if ((monthButtonRef.current) && !event.composedPath().includes(monthButtonRef.current)) {

                setToggleMonthCard(false)
            }
            
        }

        const handleMouseDown = (event: KeyboardEvent) => {
            if (event.code === 'Escape' || event.keyCode === 27) {
                setToggleMonthCard(false)
            }
        }

        document.body.addEventListener('click', handleClick)
        document.body.addEventListener('keydown', handleMouseDown)

        return () => {
            document.body.removeEventListener('click', handleClick)
            document.body.removeEventListener('keydown', handleMouseDown)
        }
    },[])

    if(!date) {
        return <>date is not correct or undefined</>
    }

    // change suffix for the date
    let suffix: string = 'th'
    switch(date[2]) {
        case '01':
        case '21':
        case '31':
            suffix = 'st'
            break;
        case '02':
        case '22':
            suffix = 'nd'
            break;
        case '03':
        case '23':
            suffix = 'rd'
            break;
    }

    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const monthNo = parseInt(date[1], 10)
    const month = monthList[monthNo - 1]

    return (
        <nav className="flex justify-center items-center gap-8 mt-4">

            <LeftDateNavigationButton />
            {/* date navigation */}
            <div 
                className="font-inter text-base font-medium relative"
            >
                <button type="button" title="day" className="inline-block pr-1 hover:text-customRed">{`${date[2]+suffix}  `}</button> 
                <button ref={monthButtonRef} onClick={handleToggle} type="button" title="month" className="inline-block hover:text-customRed">{month}</button>
                {toggleMonthCard? <MonthCard /> : null}
            </div>
            <RightDateNavigationButton />
            
        </nav>
    )
}

export default HomeNavigation