import SearchBar from "../components/SearchBar"
import Footer from "../components/Footer"

const ListViewPage = () => {
    return (
        <div className="flex flex-col items-center">
            <SearchBar />
            <Footer />

            {/* list of the cars */}
            <div className="flex flex-col my-9 bg-skyBlue rounded-2xl w-86 h-120 overflow-x-scroll">

                {/* heading */}
                <div className="flex items-center gap-0 w-160 my-4 text-center">
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
                <div className="flex gap-0 w-160">
                    {/* s.no */}
                    <div className="w-12 border-r border-solid border-black">
                        <p className="font-inter font-normal text-xxs text-center">1</p>
                    </div>

                    {/* date */}
                    <div className="w-11.5 border-r border-solid border-black">
                        <p className="font-inter font-normal text-xxs text-center">07/12</p>
                    </div>

                    {/* Vehicle Name */}
                    <div className="w-24 border-r border-solid border-black">
                        <p className="font-inter font-normal text-xxs text-center">maruti suzuki</p>
                    </div>

                    {/* Vehicle Number */}
                    <div className="w-18 border-r border-solid border-black">
                        <p className="font-inter font-normal text-xxs text-center">DL01AB1234</p>
                    </div>

                    {/* Mechanic Name */}
                    <div className="w-24 border-r border-solid border-black mr-4">
                        <p className="font-inter font-normal text-xxs text-center">Harish Rawat</p>
                    </div>

                    {/* Service Advisor */}
                    <div className="w-27 border-r border-solid border-black">
                        <p className="font-inter font-normal text-xxs text-center">Himanshu Rawat</p>
                    </div>

                    {/* r.o - p.r.w */}
                    <div className="w-20 border-r border-solid border-black">
                        <p className="font-inter font-normal text-xxs text-center">r.o</p>
                    </div>

                    {/* work */}
                    <div className="w-45 border-solid border-black">

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ListViewPage