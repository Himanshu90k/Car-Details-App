import { useEffect, useState } from "react"
import HomeNavigation from "../components/HomeNavigation"
import CarCard from "../components/CarCard"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import { useCar } from "../context/CarContext"
import { HashLoader } from "react-spinners"
import { Link } from "react-router-dom"

const HomePage: React.FC = () => {

    // get the cars state and loading value
    const carsContext = useCar()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        carsContext.GetCars()
        .then(result => {
            setLoading(result)// returns true or false
        })
    }, [])
    const carsList = carsContext.cars

    return (
        <div className="flex flex-col items-center">
            <SearchBar />
            <HomeNavigation />
            {loading? 
                (<HashLoader color={'#3B8CCF'} size={100} cssOverride={{display: 'block', margin: '100px auto'}}/>) : 
                (carsList.map((car, index) => <CarCard car={car} key={index} index={index} />))
            }
            {(carsList.length === 0 && !loading) &&
                <>
                    <h2 className="font-montserrat text-center font-bold text-lg mt-10 text-customRed">No data to show for this Date.</h2> 
                    <p className="font-montserrat text-center text-xs">Add Data By clicking <Link to=''><b className="hover:text-customRed">plus(+)</b></Link> 
                        sign or change the Date by Clicking on the <Link to=''><b className="hover:text-customRed">Date</b></Link>.
                    </p>
                </>
            }   
            <Footer />
        </div>
    )
}

export default HomePage