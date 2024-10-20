import HomeNavigation from "../components/HomeNavigation"
import CarCard from "../components/CarCard"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"

const HomePage: React.FC = () => {

    const cars = ['customGreen','cardBlue','customGreen','cardBlue','customGreen'];

    return (
        <div className="flex flex-col items-center">
            <SearchBar />
            <HomeNavigation />
            {cars.map((cars, index) => <CarCard cars={cars} key={index} index={index} />)}
            <Footer />
        </div>
    )
}

export default HomePage