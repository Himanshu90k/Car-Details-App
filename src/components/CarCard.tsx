import { useLocation, Link } from "react-router-dom"

interface CarCardProps {
    cars?: string
    index?: number
}

const CarCard: React.FC<CarCardProps> = ({index}) => {
    //set the color of cards alternatively
    let bgColor:string = ''
    if (index !== undefined) {
        bgColor= (index % 2 === 0) ? 'bg-customGreen' : 'bg-cardBlue'
    }

    //different margin for single view car details page
    const location = useLocation()
    const marginTop = location.pathname === '/'? 'mt-4':'mt-1'

    return (
        <Link 
            to={`car-details/${index}`}
            title='single view car details page'
            className={`flex flex-col items-center w-86 h-44 rounded-4-xl border-2 border-white border-solids ${bgColor} shadow-cardShadow ${marginTop}`}>

            <div className=" flex justify-between items-center mt-2.5 w-80 h-8 rounded-3xl px-8 bg-white">
                {/* car name */}
                <h2 className="text-customGrey text-xs font-extrabold font-montserrat">Honda</h2>

                {/* car number */}
                <h2 className="text-customGrey text-xs font-extrabold font-montserrat">DL01AB1234</h2>
            </div>

            <div className="flex flex-col gap-2.5 w-full pl-10 mt-4">
                {/* mechanic name */}
                <div className="flex items-center gap-8">
                    {/* label */}
                    <h3 className="text-xxs font-montserrat font-bold text-white w-22">Mechanic Name</h3>
                    <hr className="w-2 h-0.5 border-white"/>
                    {/* value */}
                    <p className="text-xxs font-montserrat font-bold text-white">Himanshu Rawat</p>
                </div>

                {/* service advisor */}
                <div className="flex items-center gap-8">
                    {/* label */}
                    <h3 className="text-xxs font-montserrat font-bold text-white w-22">Service Advisor</h3>
                    <hr className="w-2 h-0.5 border-white"/>
                    {/* value */}
                    <p className="text-xxs font-montserrat font-bold text-white">Harish Rawat</p>
                </div>
                
                {/* ro-prw */}
                <div className="flex items-center gap-8">
                    {/* label */}
                    <h3 className="text-xxs font-montserrat font-bold text-white w-22">R.O-P.R.W</h3>
                    <hr className="w-2 h-0.5 border-white"/>
                    {/* value */}
                    <p className="text-xxs font-montserrat font-bold text-white">R.O</p>
                </div>
            </div>

            <div className="flex justify-center items-center mt-4 w-60 h-6 rounded-45 bg-customRed border border-solid border-white">
                <p className="font-montserrat font-semibold text-white text-xxs">work: so no i am writing some lorem ipsu...</p>
            </div>
        </Link>
    )
}

export default CarCard