import SearchBar from "../components/SearchBar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { useCar } from "../context/CarContext"
import { useEffect, useState } from "react"
import { HashLoader } from "react-spinners"
import { useParams } from "react-router-dom"
import FooterCredits from "../components/FooterCredits"

const ListViewPage = () => {

    const { id } = useParams<{ id: string }>()
    if(!id) {
        throw new Error("id is not defined")
    }

    const carsContext = useCar()
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(()=> {
        carsContext.AllCars(id)
            .then((result) => {
                setLoading(result)
            })
    },[])
    const carsList = carsContext.cars
    if(!carsList && loading) {
        return <HashLoader color={'#3B8CCF'} size={100} cssOverride={{display: 'block', margin: '100px auto'}}/>;
    }

    if(!carsList && !loading) {
        return (
            <>
                <h2 className="font-montserrat text-center font-bold text-lg mt-10 text-customRed">No data to show</h2> 
                <p className="font-montserrat text-center text-xs">Add data - <Link to='/add-car-details'><b className="hover:text-customRed">ADD</b></Link> 
                    <br />or return to homepage - <Link to='/'><b className="hover:text-customRed">Home</b></Link>.
                </p>
            </>
        )
    }

    return (
        <div className="flex flex-col items-center">
            <SearchBar />
            <Footer />

            {/* list of the cars */}
            <div className="relative flex flex-col mt-9 bg-skyBlue rounded-2xl w-86 h-120 overflow-x-scroll">

                {/* heading */}
                <div className="absolute flex items-center gap-0 w-160 my-4 text-center">
                    <h2 className="font-inter text-xs font-normal w-12">s.no</h2>
                    <h2 className="font-inter text-xs font-normal w-11.5">Date</h2>
                    <h2 className="font-inter text-xs font-normal w-24">V.Name</h2>
                    <h2 className="font-inter text-xs font-normal w-18">V.Number</h2>
                    <h2 className="font-inter text-xs font-normal w-24 mr-4 box-content">M.Name</h2>
                    <h2 className="font-inter text-xs font-normal w-27">S.Advisor</h2>
                    <h2 className="font-inter text-xs font-normal w-20">r.o - p.r.w</h2>
                    <h2 className="font-inter text-xs font-normal w-45">Work</h2>
                </div>

                {/* body */}
                <div className="flex gap-0 w-160 mt-11 overflow-x-scroll overflow-y-scroll">
                    {/* s.no */}
                    <div className="w-12 border-r border-solid border-black h-max pb-96">
                        {carsList.map((_, index) => <p key={index} className="font-inter font-normal text-xxs text-center mb-3">{index + 1}</p>)}
                    </div>

                    {/* date */}
                    <div className="w-11.5 border-r border-solid border-black h-max pb-96">
                        {carsList.map((car, index) => <p key={index} className="font-inter font-normal text-xxs text-center mb-3">{`${car.date.split('T')[0].slice(8)}/${car.date.split('T')[0].slice(5, 7)}`}</p>)}
                    </div>

                    {/* Vehicle Name */}
                    <div className="w-24 border-r border-solid border-black h-max pb-96">
                        {carsList.map((car, index) => <p key={index} className="font-inter font-normal text-xxs text-center mb-3">{car.carName? car.carName : '-'}</p>)}
                    </div>

                    {/* Vehicle Number */}
                    <div className="w-18 border-r border-solid border-black h-max pb-96">
                        {carsList.map((car, index) => <p key={index} className="font-inter font-normal text-xxs text-center mb-3">{car.carNo? car.carNo : '-'}</p>)}
                    </div>

                    {/* Mechanic Name */}
                    <div className="w-24 border-r border-solid border-black mr-4 h-max pb-96">
                        {carsList.map((car, index) => <p key={index} className="font-inter font-normal text-xxs text-center mb-3">{car.mechanicName? car.mechanicName : '-'}</p>)}
                    </div>

                    {/* Service Advisor */}
                    <div className="w-27 border-r border-solid border-black h-max pb-96">
                        {carsList.map((car, index) => <p key={index} className="font-inter font-normal text-xxs text-center mb-3">{car.serviceAdvisor? car.serviceAdvisor : `-`}</p>)}
                    </div>

                    {/* r.o - p.r.w */}
                    <div className="w-20 border-r border-solid border-black h-max pb-96">
                        {carsList.map((car, index) => <p key={index} className="font-inter font-normal text-xxs text-center mb-3">{car.RO_PRW}</p>)}
                    </div>

                    {/* work */}
                    <div className="flex flex-col items-center w-45 h-max">
                        <Link to={'/'}>{carsList.map((car, index) => <p key={index} className="font-inter font-normal hover:text-customRed text-xxs text-center mb-3">{`${car.work? car.work.slice(0, 35): ''}...`}</p>)}</Link>
                    </div>
                </div>

            </div>

            <FooterCredits />
        </div>
    )
}

export default ListViewPage