import { useEffect, useState } from "react"
import HomeNavigation from "../components/HomeNavigation"
import CarCard from "../components/CarCard"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import { useCar } from "../context/CarContext"
import { HashLoader } from "react-spinners"
import { Link, useSearchParams } from "react-router-dom"

const HomePage: React.FC = () => {

    // get the date from query
    const carsContext = useCar()
    const [searchParams, setSearchParams] = useSearchParams()
    const date = searchParams.get("date")

    // get the cars state and loading value
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setSearchParams({date: `${new Date().toISOString().split('T')[0]}`})
        if(date) {
            carsContext.GetCars(date)
                .then(result => {
                    setLoading(result)// returns true or false
                })
        }
        
    }, [])

    // update the url when the date changes and re-fetch data
    useEffect(() => {
        if(date) {
            setLoading(true)
            setSearchParams({date: date})
            carsContext.GetCars(date)
                .then(result => {
                    setLoading(result)// returns true or false
                })
        }
    }, [date])
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
                    <p className="font-montserrat text-center text-xs">Add Data By clicking <Link to='/add-car-details'><b className="hover:text-customRed">plus(+) </b></Link> 
                        sign or change the Date by Clicking on the <b>Left</b> or <b>Right</b> arrow.
                    </p>
                </>
            }   
            <Footer />
        </div>
    )
}

export default HomePage