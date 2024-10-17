import HomeNavigation from "../components/HomeNavigation"
import CarCard from "../components/CarCard"
import HomeFooter from "../components/HomeFooter"
import SearchBar from "../components/SearchBar"

const HomePage: React.FC = () => {
    const backroundColor: string = "cardBlue";

    return (
        <div className="flex flex-col items-center">
            <SearchBar />
            <HomeNavigation />
            <CarCard color={'customGreen'}/>
            <CarCard color={backroundColor}/>
            <CarCard color={'customGreen'}/>
            <CarCard color={backroundColor}/>
            <HomeFooter />
        </div>
    )
}

export default HomePage