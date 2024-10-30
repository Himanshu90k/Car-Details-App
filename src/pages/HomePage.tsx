import { useEffect } from "react"
import HomeNavigation from "../components/HomeNavigation"
import CarCard from "../components/CarCard"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import { useCar } from "../context/CarContext"

const HomePage: React.FC = () => {

    const cars = useCar();
    useEffect(() => {
        cars.GetCars();
    }, [])
    

    const carsList = cars.state

    console.log(cars)
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