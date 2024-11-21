import { useState, } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useCar } from "../context/CarContext"
import { Car } from "../context/CarContext"

type FormData = Car & {
    RO_PRW_SELECTION: string;
}

const AddCarDetailsPage: React.FC = () => {

    // state for toggling submit-confirmation pop up
    const [toggle, setToggle] = useState(false)
    const handleUpdateToggleAction = () => {
        if(toggle === true) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    //initial values for the state
    const dateString = new Date().toISOString().split('T')[0].split('-')
    const formattedDate = `${dateString[2]}-${dateString[1]}-${dateString[0]}`
    const initialValues: FormData = {
        _id: undefined,
        date: formattedDate,
        carName: '',
        carNo: '',
        mechanicName: '',
        serviceAdvisor: '',
        RO_PRW: '',
        RO_PRW_SELECTION: '',
        work: ''
    }

    // state for adding form data
    const [formData, setFormData] = useState<FormData>(initialValues)

    // handle change function to input data in the form
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    // function to add the car Details
    const navigate = useNavigate()
    const carsContext = useCar()
    const addCarDetails = () => {
        const dateString = formData.date.split('T')[0].split('-')
        const formattedDate = `${dateString[2]}-${dateString[1]}-${dateString[0]}`
        const newCar: Car = {
            _id: "",
            date: formattedDate,
            carName: formData.carName,
            carNo: formData.carNo,
            mechanicName: formData.mechanicName,
            serviceAdvisor: formData.serviceAdvisor,
            work: formData.work,
            RO_PRW: `${formData.RO_PRW_SELECTION}-${formData.RO_PRW}`
        }
        carsContext.AddCar(newCar)
        setToggle(false)
        return navigate('/')

    }

    return (
        <div className="flex flex-col items-center">

            {/* Add car details form */}
            <div className="w-81 h-125 rounded-2xl shadow-formBoxShadow bg-custom-blue-gradient mt-8 mb-2">
                {/* heading */}
                <div className="flex flex-col items-center mt-5">
                    <h2 className="font-inter font-semibold text-sm opacity-80">ADD CAR DETAILS</h2>
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

            {/* pop up for adding the car details */}
            <div className={`absolute top-64 z-40 ${toggle? "flex" : "hidden"} flex-col items-center w-72 h-28 rounded-2xl border-solid border-white border-2 bg-black`}>
                <p className="font-montserrat text-xs font-medium text-white w-40 text-center mt-4">Are you sure you want to Submit?</p>
                <div className="flex gap-11 mt-3">
                    <button
                        type="button"
                        title="yes"
                        onClick={addCarDetails}
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
                {/* Back button */}
                <Link
                    to={'/'}
                    className="flex justify-center items-center w-23 h-11.25 rounded-45 border-2 border-solid border-white bg-customRed hover:bg-customGreen font-montserrat font-bold text-base text-white"
                >
                    Back
                </Link>
                {/* Submit button */}
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

export default AddCarDetailsPage