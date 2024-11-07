import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useCar } from "../context/CarContext"
import { toast } from "react-toastify"

const UpdateCarPage: React.FC = () => {

    // to get the _id of car card using index
    const { id } = useParams<{ id: string }>()
    const index: number|undefined = id? parseInt(id, 10) : undefined
    if(index === undefined) {
        throw new Error("Index is not right")
    }

    // state for toggling delete-confirmation pop up
    const [toggle, setToggle] = useState(false)
    const handleUpdateToggleAction = () => {
        if(toggle === true) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    // get the car data from the context
    const carsContext = useCar()
    useEffect(() => {
        carsContext.GetCars();
    }, []);
    const carsList = carsContext.cars
    const car = carsList[index]

    // function to delete the car Details
    const navigate = useNavigate()
    const deleteCarDetails = () => {
        if(!car) {
            throw new Error("car object doesn't have id")
        }
        carsContext.UpdateCar(car)
        setToggle(false)
        toast.success("Car Details Updated")
        return navigate('/')

    }

    return (
        <div className="flex flex-col items-center">

            {/* car details update form */}
            <div className="w-81 h-125 rounded-2xl shadow-formBoxShadow bg-custom-blue-gradient mt-8">
                {/* heading */}
                <div className="flex flex-col items-center mt-5">
                    <h2 className="font-inter font-semibold text-sm opacity-80">UPDATE CAR DETAILS</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="2" viewBox="0 0 100 2" fill="none">
                        <path d="M1 1H99" stroke="black" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>

                {/* form labels and fields */}
                <form className="flex flex-col ml-7 pb-2 mt-12">
                    {/* car name */}
                    <label htmlFor="carName" className="font-inter text-xs font-normal">Car Name:</label>
                    <input 
                        type="text"
                        name="carName"
                        id="carName"
                        value="Honda"
                        required
                        className="rounded-md h-6 w-56 pl-2 mb-4 font-inter text-sm opacity-90 font-normal"
                    />

                    {/* car no */}
                    <label htmlFor="carNo" className="font-inter text-xs font-normal">Car Number:</label>
                    <input 
                        type="text"
                        name="carNo"
                        id="carNo"
                        value="DLTYY67H"
                        required
                        className="rounded-md h-6 w-56 pl-2 mb-4 font-inter text-sm opacity-90 font-normal"
                    />

                </form>

            </div>

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
                        onClick={handleUpdateToggleAction}
                        className="w-18 h-8 rounded-45 border-2 border-solid border-white bg-customRed hover:bg-customGreen font-montserrat font-bold text-xl text-white"
                    >
                        No
                    </button>
                </div>
            </div>

            {/* footer */}
            <div className="w-84 h-20 rounded-45 bg-black flex justify-center gap-18 items-center my-6">
                {/* update button */}
                <Link
                    to={`/car-details/${index}`}
                    className="flex justify-center items-center w-23 h-11.25 rounded-45 border-2 border-solid border-white bg-customRed hover:bg-customGreen font-montserrat font-bold text-base text-white"
                >
                    Back
                </Link>
                {/* delete button */}
                <button 
                    type="button"
                    title="Delete"
                    onClick={handleUpdateToggleAction}
                    className={`w-23 h-11.25 rounded-45 border-2 border-solid border-white ${toggle? "bg-customGreen" : "bg-customRed"} hover:bg-customGreen font-montserrat font-bold text-base text-white`}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default UpdateCarPage