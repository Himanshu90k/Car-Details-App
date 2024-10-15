import HomeNavigation from "../components/HomeNavigation"
import HomeCard from "../components/HomeCard"
import HomeFooter from "../components/HomeFooter"

const HomePage = () => {
    const backroundColor: string = "cardBlue";

    return (
        <div className="flex flex-col items-center">
            <HomeNavigation />
            <HomeCard color={'customGreen'}/>
            <HomeCard color={backroundColor}/>
            <HomeCard color={'customGreen'}/>
            <HomeCard color={backroundColor}/>
            <HomeFooter />
        </div>
    )
}

export default HomePage