import CarCard from "../components/CarCard"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useCar } from "../context/CarContext"
import { useEffect, useState } from "react"
import { HashLoader } from "react-spinners"
import { toast } from "react-toastify"


const SingleCarDetailsPage = () => {

    const navigate = useNavigate()

    // to get the car details
    const { id } = useParams<{ id: string }>()
    if(id === undefined) {
        throw new Error("Index is not right")
    }

    // get the car data and Set Loading value
    const [loading, setLoading] = useState(true)
    const carsContext = useCar()
    useEffect(() => {
        carsContext.GetCar(id)
            .then((result) => {
                setLoading(result)
            })
    }, [])
    const car = carsContext.car

    // function to delete the car Details
    const deleteCarDetails = () => {
        if(car && car._id) {
            carsContext.DeleteCar(car._id)
            setToggle(false)
            toast.success("Car Details Deleted")
            return navigate(`/list-view/${car.date.split('-')[0]}`)
        } else {
            toast.error("car details are invalid or undefined")
        }
    }

    // state for toggling delete-confirmation pop up
    const [toggle, setToggle] = useState(false)
    const handleDeleteToggleAction = () => {
        if(toggle === true) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    // Handle loading state - do not remove this otherwise the state will not be loaded and cause crash.
    if (car._id === "" && loading) {
        return <HashLoader color={'#3B8CCF'} size={100} cssOverride={{display: 'block', margin: '100px auto'}}/>;
    }

    if(car._id === "" && !loading) {
        return (
            <div className="flex flex-col items-center">
                <h2 className="font-montserrat text-center font-bold text-lg mt-10 text-customRed">No data to show for this Car ID.</h2> 
                <p className="font-montserrat text-center text-xs">Add data - <Link to='/add-car-details'><b className="hover:text-customRed">ADD</b></Link> 
                    <br />or change the Date by returning to homepage - <Link to='/'><b className="hover:text-customRed">Home</b></Link>.
                </p>
                {/* back button */}
                <Link 
                    title="home page"
                    to={`/list-view/${new Date().toISOString().split('T')[0].slice(0, 4)}`}
                    className="w-24 h-8 mt-2 rounded-45 bg-black hover:bg-customRed text-white text-center leading-8 font-montserrat font-bold text-base"
                >
                    Back
                </Link>
            </div>
        )
    }   

    //date array
    const dateString = car.date.split('T')[0]
    const dateArray = dateString.split('-')

    return (
        <div className="relative flex flex-col items-center">

            {/* navigation */}
            <div className="flex items-center gap-10 mt-3">
                {/* back button */}
                <button 
                    title="home page"
                    onClick={() => navigate(-1)}
                    className="w-24 h-8 rounded-45 bg-black hover:bg-customRed text-white text-center leading-8 font-montserrat font-bold text-base"
                >
                    Back
                </button>
            </div>

            {/* car details */}
            <CarCard car={car} index={3} />

            {/* current date */}
            <p className="font-montserrat font-semibold text-sm text-customGrey my-1.5">{dateArray[2]}/{dateArray[1]}/{dateArray[0]}</p>

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
            <div className={`relative w-86 h-98 rounded-4-xl border-2 border-solid border-white bg-customLightBlue shadow-cardShadow`}>
                {/* mic button */}
                <button 
                    type="button"
                    title="mic"
                    className="absolute mt-4 ml-4"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="30" 
                        height="30" 
                        viewBox="0 0 30 30" 
                        fill="none"
                    >
                        <path 
                            d="M15 17.5
                            C13.9583 17.5 13.0729 17.1354 12.3438 16.4062
                            C11.6146 15.6771 11.25 14.7917 11.25 13.75
                            V6.25C11.25 5.20833 11.6146 4.32292 12.3438 3.59375
                            C13.0729 2.86458 13.9583 2.5 15 2.5C16.0417 2.5 16.9271 2.86458 17.6562 3.59375
                            C18.3854 4.32292 18.75 5.20833 18.75 6.25V13.75C18.75 14.7917 18.3854 15.6771 17.6562 16.4062
                            C16.9271 17.1354 16.0417 17.5 15 17.5ZM13.75 26.25V22.4062C11.5833 22.1146 9.79167 21.1458 8.375 19.5
                            C6.95833 17.8542 6.25 15.9375 6.25 13.75H8.75C8.75 15.4792 9.35958 16.9533 10.5788 18.1725
                            C11.7979 19.3917 13.2717 20.0008 15 20C16.7283 19.9992 18.2025 19.3896 19.4225 18.1712
                            C20.6425 16.9529 21.2517 15.4792 21.25 13.75H23.75C23.75 15.9375 23.0417 17.8542 21.625 19.5
                            C20.2083 21.1458 18.4167 22.1146 16.25 22.4062V26.25H13.75Z" 
                            fill="#1E1E1E"
                        />
                    </svg>
                </button>  

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
                    to={`/update-car-details/${car._id}`}
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

export default SingleCarDetailsPage