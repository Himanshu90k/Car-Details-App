import LeftDateNavigationButton from "../components/LeftDateNavigationButton"
import RightDateNavigationButton from "../components/RightDateNavigationButton"
import CarCard from "../components/CarCard"
import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom"
import { useCar } from "../context/CarContext"
import { useEffect, useState } from "react"
import { HashLoader } from "react-spinners"
import { toast } from "react-toastify"

const CarDetailsPage = () => {

    // to change the background color of car card using index
    const { id } = useParams<{ id: string }>()
    const index: number|undefined = id? parseInt(id, 10) : undefined

    // to change the background color of the work box uing index
    if(index === undefined) {
        throw new Error("Index is not right")
    }
    const bgColor = (index % 2 === 0)? 'bg-customLightGreen' : 'bg-customLightBlue'

    // get date from the url query
    const [searchParams, setSearchParams] = useSearchParams()
    const date = searchParams.get("date")
    const dateArray = date?.split("-")
    if(!dateArray) {
        throw new Error("date is not correct")
    }

    // get the cars state and loading value
    const carsContext = useCar()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(date) {
            setSearchParams({date: date})
            carsContext.GetCars(date)
                .then(result => {
                    setLoading(result)// returns true or false
                })
        }
        
    }, [])
    const carsList = carsContext.cars
    const car = carsList[index]
    const formattedDate = car.date.split('T')[0].split('-')

    // state for toggling delete-confirmation pop up
    const [toggle, setToggle] = useState(false)
    const handleDeleteToggleAction = () => {
        if(toggle === true) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    // function to delete the car Details
    const navigate = useNavigate()
    const deleteCarDetails = () => {
        if(!car._id) {
            throw new Error("car object doesn't have id")
        }
        carsContext.DeleteCar(car._id)
        setToggle(false)
        toast.success("Car Details Deleted")
        return navigate(`/?date=${date}`)

    }
    
    // Handle loading state - do not remove this otherwise the state will not be loaded and cause crash.
    if (carsList.length === 0 && loading) {
        return <HashLoader color={(index % 2 === 0)? '#0AB057' : '#3B8CCF'} size={100} cssOverride={{display: 'block', margin: '100px auto'}}/>;
    }

    if(carsList.length === 0 && !loading) {
        return (
            <>
                <h2 className="font-montserrat text-center font-bold text-lg mt-10 text-customRed">No data to show for this Date.</h2> 
                <p className="font-montserrat text-center text-xs">Add data - <Link to='/add-car-details'><b className="hover:text-customRed">ADD</b></Link> 
                    <br />or change the Date by returning to homepage - <Link to='/'><b className="hover:text-customRed">Home</b></Link>.
                </p>
            </>
        )
    }   

    if(index < 0 || index > carsList.length - 1) {
        return (
            <div className="flex flex-col items-center">
                {/* navigation */}
                <div className="flex items-center gap-10 mt-3">
                    <LeftDateNavigationButton />

                    {/* back button */}
                    <Link 
                        title="home page"
                        to={`/?date=${date}`}
                        className="w-24 h-8 rounded-45 bg-black hover:bg-customRed text-white text-center leading-8 font-montserrat font-bold text-base"
                    >
                        Back
                    </Link>

                    <RightDateNavigationButton />
                </div>
    
                <h2 className="font-montserrat text-center font-bold text-lg mt-10 text-customRed">Index is out of range</h2>
                <p className="font-montserrat text-center text-xs">Return to <Link to='/'> <b className="hover:text-customRed">Home</b></Link></p>
            </div>
        )
    }

    return (
        <div className="relative flex flex-col items-center">

            {/* navigation */}
            <div className="flex items-center gap-10 mt-3">
                <LeftDateNavigationButton />

                {/* back button */}
                <Link 
                    title="home page"
                    to={`/?date=${date}`}
                    className="w-24 h-8 rounded-45 bg-black hover:bg-customRed text-white text-center leading-8 font-montserrat font-bold text-base"
                >
                    Back
                </Link>
                
                <RightDateNavigationButton />
            </div>

            {/* car details */}
            <CarCard car={car} index={index} />

            {/* current date */}
            <p className="font-montserrat font-semibold text-sm text-customGrey my-1.5">{formattedDate[2]}/{formattedDate[1]}/{formattedDate[0]}</p>

            {/* pop up for deleting the car details */}
            <div className={`absolute top-48 z-40 ${toggle? "flex" : "hidden"} flex-col items-center w-72 h-28 rounded-2xl border-solid border-white border-2 bg-black`}>
                <p className="font-montserrat text-xs font-medium text-white w-40 text-center mt-4">Are you sure you want to Delete?</p>
                <div className="flex gap-11 mt-3">
                    <button
                        type="button"
                        title="yes"
                        onClick={deleteCarDetails}
                        className="w-18 h-8 rounded-45 border-2 border-solid border-white bg-customRed hover:bg-customGreen font-montserrat font-bold text-xl text-white"    
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        title="no"
                        onClick={handleDeleteToggleAction}
                        className="w-18 h-8 rounded-45 border-2 border-solid border-white bg-customRed hover:bg-customGreen font-montserrat font-bold text-xl text-white"
                    >
                        No
                    </button>
                </div>
            </div>

            {/* work box */}
            <div className={`relative w-86 h-98 rounded-4-xl border-2 border-solid border-white ${bgColor} shadow-cardShadow`}>
                {/* work done icon */}
                <div 
                    className="absolute mt-4 ml-4"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="27" 
                        height="30" 
                        viewBox="0 0 27 30" 
                        fill="none"
                    >
                        <path d="M13.9189 28.125L15.7939 30H0.75
                            V3.75H8.25C8.25 3.23242 8.34766 2.74902 8.54297 2.2998
                            C8.73828 1.85059 9.00684 1.4502 9.34863 1.09863
                            C9.69043 0.74707 10.0859 0.478516 10.5352 0.292969
                            C10.9844 0.107422 11.4727 0.00976563 12 0
                            C12.5176 0 13.001 0.0976563 13.4502 0.292969
                            C13.8994 0.488281 14.2998 0.756836 14.6514 1.09863
                            C15.0029 1.44043 15.2715 1.83594 15.457 2.28516
                            C15.6426 2.73437 15.7402 3.22266 15.75 3.75H23.25
                            V18.7939L21.375 20.6689V5.625H19.5V9.375H4.5V5.625
                            H2.625V28.125H13.9189ZM6.375 5.625V7.5H17.625V5.625H13.875
                            V3.75C13.875 3.48633 13.8262 3.24219 13.7285 3.01758
                            C13.6309 2.79297 13.499 2.59766 13.333 2.43164
                            C13.167 2.26563 12.9668 2.12891 12.7324 2.02148
                            C12.498 1.91406 12.2539 1.86523 12 1.875C11.7363 1.875 11.4922 1.92383 11.2676 2.02148
                            C11.043 2.11914 10.8477 2.25098 10.6816 2.41699C10.5156 2.58301 10.3789 2.7832 10.2715 3.01758
                            C10.1641 3.25195 10.1152 3.49609 10.125 3.75V5.625H6.375ZM26.7217 21.2842L18.5625 29.458
                            L14.6221 25.5029L15.9404 24.1846L18.5625 26.792L25.4033 19.9658L26.7217 21.2842Z" 
                            fill="black"
                        />
                    </svg>
                </div>  

                {/* work details - title */}
                <div className="absolute top-6 z-10 w-full flex flex-col gap-2 items-center">
                    <h2 className="font-montserrat font-bold text-xl text-customLightBlack">WORK DONE</h2>
                    <div className="w-78 h-76 rounded-2xl bg-white shadow-workBoxShadow">
                        <p className="break-words font-montserrat font-medium text-xs p-6 w-full h-full">
                            {car.work} {/* work done on the car */}
                        </p>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="w-84 h-20 rounded-45 bg-black flex justify-center gap-18 items-center my-6">
                {/* update button */}
                <Link
                    to={`/update-details/${index}?date=${date}`}
                    className="flex justify-center items-center w-23 h-11.25 rounded-45 border-2 border-solid border-white bg-customRed hover:bg-customGreen font-montserrat font-bold text-base text-white"
                >
                    Update
                </Link>
                {/* delete button */}
                <button 
                    type="button"
                    title="Delete"
                    onClick={handleDeleteToggleAction}
                    className={`w-23 h-11.25 rounded-45 border-2 border-solid border-white ${toggle? "bg-customGreen" : "bg-customRed"} hover:bg-customGreen font-montserrat font-bold text-base text-white`}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default CarDetailsPage