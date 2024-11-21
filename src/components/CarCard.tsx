import { useLocation, Link, useSearchParams } from "react-router-dom"
import { Car } from "../context/CarContext"

interface CarCardProps {
    car?: Car
    index: number
}

const CarCard: React.FC<CarCardProps> = ({car, index}) => {
    //set the color of cards alternatively
    let bgColor:string = ''
    if (index !== undefined) {
        bgColor= (index % 2 === 0) ? 'bg-customGreen' : 'bg-cardBlue'
    }

    if (!car) {
        throw new Error("no data to show")
    }

    //get the date from the state
    const [searchParams] = useSearchParams()
    const date = searchParams.get("date")
    //different margin for single view car details page
    const location = useLocation()
    const marginTop = location.pathname === '/'? 'mt-4':'mt-1'
    const dynamicHtmlTag = location.pathname === `/`? true : false

    const cardDate = new Date(car.date).toString().split(" ")

    return (
        dynamicHtmlTag ? 
        (<div className={`${marginTop}`}>
        <p className="text-center font-semibold font-inter text-xs">{`${cardDate[2]} ${cardDate[1]} ${cardDate[3]}, ${cardDate[0]}`}</p>
        <Link 
            to={`car-details/${index}?date=${date}`}
            title='single view car details page'
            className={`flex flex-col items-center w-86 h-44 rounded-4-xl border-2 border-white border-solids ${bgColor} shadow-cardShadow`}
        >
            <div className=" flex justify-between items-center mt-2.5 w-80 h-8 rounded-3xl px-8 bg-white">
                {/* car name */}
                <h2 className="text-customGrey text-xs font-extrabold font-montserrat">{car.carName}</h2>

                {/* car number */}
                <h2 className="text-customGrey text-xs font-extrabold font-montserrat">{car.carNo}</h2>
            </div>

            <div className="flex flex-col gap-2.5 w-full pl-10 mt-4">
                {/* mechanic name */}
                <div className="flex items-center gap-8">
                    {/* label */}
                    <h3 className="text-xxs font-montserrat font-bold text-white w-22">Mechanic Name</h3>
                    <hr className="w-2 h-0.5 border-white"/>
                    {/* value */}
                    <p className="text-xxs font-montserrat font-bold text-white">{car.mechanicName}</p>
                </div>

                {/* service advisor */}
                <div className="flex items-center gap-8">
                    {/* label */}
                    <h3 className="text-xxs font-montserrat font-bold text-white w-22">Service Advisor</h3>
                    <hr className="w-2 h-0.5 border-white"/>
                    {/* value */}
                    <p className="text-xxs font-montserrat font-bold text-white">{car.serviceAdvisor}</p>
                </div>
                
                {/* ro-prw */}
                <div className="flex items-center gap-8">
                    {/* label */}
                    <h3 className="text-xxs font-montserrat font-bold text-white w-22">R.O-P.R.W</h3>
                    <hr className="w-2 h-0.5 border-white"/>
                    {/* value */}
                    <p className="text-xxs font-montserrat font-bold text-white">{car.RO_PRW}</p>
                </div>
            </div>

            <div className="flex justify-center items-center mt-4 w-60 h-6 rounded-45 bg-customRed border border-solid border-white">
                <p className="font-montserrat font-semibold text-white text-xxs">{`${car.work.slice(0, 31)}...`}</p>
            </div>
        </Link>
        
        </div>) : 

        (<div
            className={`flex flex-col items-center w-86 h-44 rounded-4-xl border-2 border-white border-solids ${bgColor} shadow-cardShadow ${marginTop}`}
        >

            <div className=" flex justify-between items-center mt-2.5 w-80 h-8 rounded-3xl px-8 bg-white">
                {/* car name */}
                <h2 className="text-customGrey text-xs font-extrabold font-montserrat">{car.carName}</h2>

                {/* car number */}
                <h2 className="text-customGrey text-xs font-extrabold font-montserrat">{car.carNo}</h2>
            </div>

            <div className="flex flex-col gap-2.5 w-full pl-10 mt-4">
                {/* mechanic name */}
                <div className="flex items-center gap-8">
                    {/* label */}
                    <h3 className="text-xxs font-montserrat font-bold text-white w-22">Mechanic Name</h3>
                    <hr className="w-2 h-0.5 border-white"/>
                    {/* value */}
                    <p className="text-xxs font-montserrat font-bold text-white">{car.mechanicName}</p>
                </div>

                {/* service advisor */}
                <div className="flex items-center gap-8">
                    {/* label */}
                    <h3 className="text-xxs font-montserrat font-bold text-white w-22">Service Advisor</h3>
                    <hr className="w-2 h-0.5 border-white"/>
                    {/* value */}
                    <p className="text-xxs font-montserrat font-bold text-white">{car.serviceAdvisor}</p>
                </div>
                
                {/* ro-prw */}
                <div className="flex items-center gap-8">
                    {/* label */}
                    <h3 className="text-xxs font-montserrat font-bold text-white w-22">R.O-P.R.W</h3>
                    <hr className="w-2 h-0.5 border-white"/>
                    {/* value */}
                    <p className="text-xxs font-montserrat font-bold text-white">{car.RO_PRW}</p>
                </div>
            </div>

            <div className="flex justify-center items-center mt-4 w-60 h-6 rounded-45 bg-customRed border border-solid border-white">
                <p className="font-montserrat font-semibold text-white text-xxs">{`${car.work.slice(0, 31)}...`}</p>
            </div>
        </div>

        )

    )
}

export default CarCard