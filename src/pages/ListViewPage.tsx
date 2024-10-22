import SearchBar from "../components/SearchBar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

const ListViewPage = () => {
    return (
        <div className="flex flex-col items-center">
            <SearchBar />
            <Footer />

            {/* list of the cars */}
            <div className="relative flex flex-col my-9 bg-skyBlue rounded-2xl w-86 h-120 overflow-x-scroll">

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
                        <p className="font-inter font-normal text-xxs text-center mb-3">1</p>
                    </div>

                    {/* date */}
                    <div className="w-11.5 border-r border-solid border-black h-max pb-96">
                        <p className="font-inter font-normal text-xxs text-center mb-3">07/12</p>
                    </div>

                    {/* Vehicle Name */}
                    <div className="w-24 border-r border-solid border-black h-max pb-96">
                        <p className="font-inter font-normal text-xxs text-center mb-3">maruti suzuki</p>
                    </div>

                    {/* Vehicle Number */}
                    <div className="w-18 border-r border-solid border-black h-max pb-96">
                        <p className="font-inter font-normal text-xxs text-center mb-3">DL01AB1234</p>
                    </div>

                    {/* Mechanic Name */}
                    <div className="w-24 border-r border-solid border-black mr-4 h-max pb-96">
                        <p className="font-inter font-normal text-xxs text-center mb-3">Harish Rawat</p>
                    </div>

                    {/* Service Advisor */}
                    <div className="w-27 border-r border-solid border-black h-max pb-96">
                        <p className="font-inter font-normal text-xxs text-center mb-3">Himanshu Rawat</p>
                    </div>

                    {/* r.o - p.r.w */}
                    <div className="w-20 border-r border-solid border-black h-max pb-96">
                        <p className="font-inter font-normal text-xxs text-center mb-3">r.o</p>
                    </div>

                    {/* work */}
                    <div className="flex justify-center items-center w-45 h-max">
                        <div className="flex justify-center items-center gap-1 w-36 h-5.5 rounded-2xl bg-white shadow-workLineShadow">
                            <p className="font-inter text-xxs font-normal text-darkGrey">lorum ipsum is a...</p>
                            <Link to='/' title="view work details" className="font-inter text-xxs font-semibold text-customRed">View</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ListViewPage