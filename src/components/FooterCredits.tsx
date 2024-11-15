import { Link } from "react-router-dom"
import { useCar } from "../context/CarContext"
import { useEffect, useState } from "react"

const FooterCredits:React.FC = () => {

    const carsContext = useCar()
    const [display, setDisplay] = useState("sticky")
    useEffect(() => {
        const carsList = carsContext.cars
        if(carsList.length === 0) {
            setDisplay("fixed")
        } else {
            setDisplay("sticky")
        }
        console.log(display)
        console.log(carsList.length)
    },[carsContext.cars])

    return (
        <div className={`bottom-4 ${display} flex flex-col items-center py-4 mb-20`}>
            <p className="font-inter text-xs font-normal text-center">Created and Designed by Himanshu Rawat | 
                <Link target="_blank" to="https://api.whatsapp.com/send/?phone=%2B919968453518&text=I%27m+interested+in+connecting+with+you&type=phone_number&app_absent=0">
                <b className="hover:text-customRed"> contact me</b></Link></p>
        </div>
    )
}

export default FooterCredits