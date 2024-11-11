import LeftDateNavigationButton from "./LeftDateNavigationButton"
// import MonthCard from "./MonthCard"
import RightDateNavigationButton from "./RightDateNavigationButton"
import { useSearchParams } from "react-router-dom"

const HomeNavigation: React.FC = () => {

    const [searchParams] = useSearchParams()
    const date = searchParams.get("date")?.split('-')
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
            <p className="font-inter text-base font-medium relative">
                {`${date[2]+suffix} ${month}`}
                {/* <MonthCard /> */}
            </p>
            <RightDateNavigationButton />
            
        </nav>
    )
}

export default HomeNavigation