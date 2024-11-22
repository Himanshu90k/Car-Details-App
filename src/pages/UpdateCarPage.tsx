import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useCar } from "../context/CarContext"
import { Car } from "../context/CarContext"
import { HashLoader } from "react-spinners"

type FormData = Car & {
    RO_PRW_SELECTION: string;
}

const UpdateCarPage: React.FC = () => {

    const navigate = useNavigate()

    //speech to text
    const handleSpeechToText = () => {
        if('SpeechRecognitionAlternative' in Window || 'webkitSpeechRecognition' in Window) {
            console.log("Speech Recognition is supported")
        } else {
            console.log(window.SpeechRecognitionAlternative)
        }
    }

    // to get the _id of car card using index
    const { id } = useParams<{ id: string }>()
    const index: number|undefined = id? parseInt(id, 10) : undefined
    if(index === undefined) {
        return <p>Invalid Car ID</p>;
    }

    // state for toggling submit-confirmation pop up
    const [toggle, setToggle] = useState<boolean>(false)
    const handleUpdateToggleAction = () => setToggle(!toggle)

    // state for adding form data
    const [formData, setFormData] = useState<FormData>({
        _id: "", 
        date: "", 
        carName: "", 
        carNo: "", 
        mechanicName: "", 
        serviceAdvisor: "", 
        RO_PRW: "", 
        RO_PRW_SELECTION: "", 
        work: "",
    })

    // car state
    const [car, setCar] = useState<Car | undefined>(undefined)

    // get date from the url query
    const [searchParams, setSearchParams] = useSearchParams()
    const date = searchParams.get("date")

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
    
    useEffect(() => {
        const carsList = carsContext.cars
        setCar(carsList[index])
        //default values for the state
        if(car) {
            const result = car.RO_PRW.split("-")
            const dateString = car.date.split('T')[0].split('-')
            const formattedDate = `${dateString[2]}-${dateString[1]}-${dateString[0]}`

            const defaultValues: FormData = {
                _id: car._id,
                date: formattedDate,
                carName: car.carName,
                carNo: car.carNo,
                mechanicName: car.mechanicName,
                serviceAdvisor: car.serviceAdvisor,
                RO_PRW: result[1],
                RO_PRW_SELECTION: result[0],
                work: car.work,
            }
            setFormData(defaultValues)
        }
    }, [carsContext, car])

    // Handle loading state.
    if (!car && loading) {
        return <HashLoader color={(index % 2 === 0)? '#0AB057' : '#3B8CCF'} size={100} cssOverride={{display: 'block', margin: '100px auto'}}/>;
    } 

    if(!car && !loading) {
        return (
            <>
                <h2 className="font-montserrat text-center font-bold text-lg mt-10 text-customRed">No data to show for this Date.</h2> 
                <p className="font-montserrat text-center text-xs">Add data - <Link to='/add-car-details'><b className="hover:text-customRed">ADD</b></Link> 
                    <br />or change the Date by returning to homepage - <Link to='/'><b className="hover:text-customRed">Home</b></Link>.
                </p>
            </>
        )
    }

    // handle change function to input data in the form
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    // function to update the car Details
    const updateCarDetails = () => {
        if(!car) {
            return new Error("car object is not defined")
        }
        const dateString = formData.date.split('T')[0].split('-')
        const formattedDate = `${dateString[2]}-${dateString[1]}-${dateString[0]}`
        const newCar: Car = {
            _id: car._id,
            date: formattedDate,
            carName: formData.carName,
            carNo: formData.carNo,
            mechanicName: formData.mechanicName,
            serviceAdvisor: formData.serviceAdvisor,
            work: formData.work,
            RO_PRW: `${formData.RO_PRW_SELECTION}-${formData.RO_PRW}`
        }
        carsContext.UpdateCar(newCar)
        return navigate(`/car-details/${id}/?date=${date}`)

    }

    return (
        <div className="flex flex-col items-center">

            {/* car details update form */}
            <div className="w-81 h-125 rounded-2xl shadow-formBoxShadow bg-custom-blue-gradient mt-8 mb-2">
                {/* heading */}
                <div className="flex flex-col items-center mt-5">
                    <h2 className="font-inter font-semibold text-sm opacity-80">UPDATE CAR DETAILS</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="2" viewBox="0 0 100 2" fill="none">
                        <path d="M1 1H99" stroke="black" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round"/>
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
                        value={formData.carName}
                        onChange={handleChange}
                        required
                        className="rounded-md h-6 w-56 pl-2 mb-4 font-inter text-xs opacity-90 font-normal"
                    />

                    {/* car no */}
                    <label htmlFor="carNo" className="font-inter text-xs font-normal">Car Number:</label>
                    <input 
                        type="text"
                        name="carNo"
                        id="carNo"
                        value={formData.carNo}
                        onChange={handleChange}
                        required
                        className="rounded-md h-6 w-56 pl-2 mb-4 font-inter text-xs opacity-90 font-normal"
                    />

                    {/* Mechanic Name */}
                    <label htmlFor="mechanicName" className="font-inter text-xs font-normal">Mechanic Name:</label>
                    <input 
                        type="text"
                        name="mechanicName"
                        id="mechanicName"
                        value={formData.mechanicName}
                        onChange={handleChange}
                        required
                        className="rounded-md h-6 w-56 pl-2 mb-4 font-inter text-xs opacity-90 font-normal"
                    />

                    {/* Service Advisor */}
                    <label htmlFor="serviceAdvisor" className="font-inter text-xs font-normal">Service Advisor:</label>
                    <input 
                        type="text"
                        name="serviceAdvisor"
                        id="serviceAdvisor"
                        value={formData.serviceAdvisor}
                        onChange={handleChange}
                        required
                        className="rounded-md h-6 w-56 pl-2 mb-4 font-inter text-xs opacity-90 font-normal"
                    />

                    {/* RO - PRW */}
                    <h3 className="font-inter text-xs font-normal pb-1">Ro - Prw:</h3>
                    <div className="flex items-center">
                        <input 
                            type="radio"
                            name="RO_PRW_SELECTION"
                            id="RO"
                            value={"RO"}
                            onChange={handleChange}
                            checked={formData.RO_PRW_SELECTION === 'RO'}
                            required
                            className="w-2.5 h-2.5 checked:bg-black checked:opacity-80 checked:border-2 checked:border-solid 
                            checked:border-white appearance-none bg-white rounded-45"
                        />
                        <label htmlFor="RO" className="font-inter font-normal text-xxs ml-2 mr-4">R.O</label>


                        <input 
                            type="radio"
                            name="RO_PRW_SELECTION"
                            id="PRW"
                            value={"PRW"}
                            onChange={handleChange}
                            checked={formData.RO_PRW_SELECTION === 'PRW'}
                            required
                            className="w-2.5 h-2.5 checked:bg-black checked:opacity-80 checked:border-2 checked:border-solid 
                            checked:border-white appearance-none bg-white rounded-45"
                        />
                        <label htmlFor="PRW" className="font-inter font-normal text-xxs ml-2 mr-4">P.R.W</label>

                        <input 
                            title="RO_PRW"
                            type="text"
                            name="RO_PRW"
                            id="RO_PRW"
                            value={formData.RO_PRW}
                            onChange={handleChange}
                            required
                            className="w-20 h-5 pl-1 rounded-md font-inter text-xs opacity-90 font-normal"
                        />
                    </div>

                    {/* Work Done */}
                    <div className="relative">
                        <label htmlFor="work" className="font-inter text-xs font-normal my-3"> Work Done:</label>
                        <textarea
                            name="work"
                            id="work"
                            value={formData.work}
                            onChange={handleChange}
                            required
                            className="w-64 h-28 pl-3 pt-7 rounded-md font-inter text-xs font-normal"
                        >
                        </textarea>

                        {/* Microphone Button */}
                        <button
                            type="button"
                            onClick={handleSpeechToText}
                            className="absolute top-8 left-1.5 z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path 
                                    d="M7.5 8.75C6.97917 8.75 6.53646 8.56771 6.17188 8.20312C5.80729 7.83854 5.625 7.39583 5.625 6.875
                                    V3.125C5.625 2.60417 5.80729 2.16146 6.17188 1.79688C6.53646 1.43229 6.97917 1.25 7.5 1.25
                                    C8.02083 1.25 8.46354 1.43229 8.82812 1.79688C9.19271 2.16146 9.375 2.60417 9.375 3.125
                                    V6.875C9.375 7.39583 9.19271 7.83854 8.82812 8.20312C8.46354 8.56771 8.02083 8.75 7.5 8.75Z
                                    M6.875 13.125V11.2031C5.79167 11.0573 4.89583 10.5729 4.1875 9.75C3.47917 8.92708 3.125 7.96875 3.125 6.875
                                    H4.375C4.375 7.73958 4.67979 8.47667 5.28938 9.08625C5.89896 9.69583 6.63583 10.0004 7.5 10
                                    C8.36417 9.99958 9.10125 9.69479 9.71125 9.08562C10.3212 8.47646 10.6258 7.73958 10.625 6.875
                                    H11.875C11.875 7.96875 11.5208 8.92708 10.8125 9.75C10.1042 10.5729 9.20833 11.0573 8.125 11.2031V13.125H6.875Z" 
                                    fill="#1E1E1E"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* date */}
                    <div className="flex items-center mt-2 gap-3">
                        <label htmlFor="date" className="font-inter text-xs font-normal">Date:</label>
                        <input
                            type="text"
                            name="date"
                            id="date"
                            value={formData.date}
                            placeholder="dd-mm-yyyy"
                            onChange={handleChange}
                            required
                            className="rounded-md h-6 w-28 pl-2 font-inter text-xs opacity-90 font-normal"
                        >
                        </input>
                    </div>

                </form>

            </div>

            {/* pop up for updating the car details */}
            <div className={`absolute top-64 z-40 ${toggle? "flex" : "hidden"} flex-col items-center w-72 h-28 rounded-2xl border-solid border-white border-2 bg-black`}>
                <p className="font-montserrat text-xs font-medium text-white w-40 text-center mt-4">Are you sure you want to Submit?</p>
                <div className="flex gap-11 mt-3">
                    <button
                        type="button"
                        title="yes"
                        onClick={updateCarDetails}
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
                {/* back button */}
                <Link
                    to={`/car-details/${index}?date=${date}`}
                    className="flex justify-center items-center w-23 h-11.25 rounded-45 border-2 border-solid border-white bg-customRed hover:bg-customGreen font-montserrat font-bold text-base text-white"
                >
                    Back
                </Link>
                {/* submit button */}
                <button 
                    type="button"
                    title="Submit"
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