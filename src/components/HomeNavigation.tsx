import LeftDateNavigationButton from "./LeftDateNavigationButton"
import MonthCard from "./MonthCard"
import RightDateNavigationButton from "./RightDateNavigationButton"

const HomeNavigation: React.FC = () => {
    return (
        <nav className="flex justify-center items-center gap-8 mt-4">

            <LeftDateNavigationButton />
            {/* date navigation */}
            <p className="font-inter text-base font-medium relative">
                10th October
                <MonthCard />
            </p>
            <RightDateNavigationButton />
            
        </nav>
    )
}

export default HomeNavigation