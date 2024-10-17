import LeftDateNavigationButton from "../components/LeftDateNavigationButton"
import RightDateNavigationButton from "../components/RightDateNavigationButton"
import CarCard from "../components/CarCard"
import { Link } from "react-router-dom"

const CarDetailsPage = () => {
    return (
        <div className="flex flex-col items-center">
            {/* navigation */}
            <div className="flex items-center gap-10 mt-3">
                <LeftDateNavigationButton />
                {/* back button */}
                <Link 
                    title="home page"
                    to='/'
                    className="w-24 h-8 rounded-45 bg-black text-white text-center leading-8 font-montserrat font-bold text-base"
                >
                    Back
                </Link>
                <RightDateNavigationButton />
            </div>
            <CarCard color={"cardBlue"}/>
        </div>
    )
}

export default CarDetailsPage