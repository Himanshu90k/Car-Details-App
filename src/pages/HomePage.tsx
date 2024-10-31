import { useEffect } from "react"
import HomeNavigation from "../components/HomeNavigation"
import CarCard from "../components/CarCard"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import { useCar } from "../context/CarContext"
import { HashLoader } from "react-spinners"

const HomePage: React.FC = () => {
    const carsContext = useCar()
    useEffect(() => {
        carsContext.GetCars()
    }, [])
    const carsList = carsContext.cars

    // Handle loading state
    if (carsList.length === 0) {
        return <HashLoader color={'#3B8CCF'} size={100} cssOverride={{display: 'block', margin: '100px auto'}}/>;
    }

    return (
        <div className="flex flex-col items-center">
            <SearchBar />
            <HomeNavigation />
            {carsList.map((car, index) => <CarCard car={car} key={index} index={index} />)}
            <Footer />
        </div>
    )
}

export default HomePage