import LeftDateNavigationButton from "../components/LeftDateNavigationButton"
import RightDateNavigationButton from "../components/RightDateNavigationButton"
import CarCard from "../components/CarCard"
import { Link, useParams } from "react-router-dom"

const CarDetailsPage = () => {

    // to change the background color of car card using index
    const { id } = useParams<{ id: string }>()
    const index: number|undefined = id? parseInt(id, 10) : undefined

    // to change the background color of the work box uing index
    let bgColor: string = ''
    if(index !== undefined) {
        bgColor = (index % 2 === 0)? 'bg-customLightGreen' : 'bg-customLightBlue'
    }


    return (
        <div className="flex flex-col items-center">

            {/* navigation */}
            <div className="flex items-center gap-10 mt-3">
                <LeftDateNavigationButton />

                {/* back button */}
                <Link 
                    title="home page"
                    to='/'
                    className="w-24 h-8 rounded-45 bg-black text-white text-center leading-8 font-montserrat font-bold text-base"
                >
                    Back
                </Link>
                
                <RightDateNavigationButton />
            </div>

            {/* car details */}
            <CarCard index={index} />

            {/* current date */}
            <p className="font-montserrat font-semibold text-sm text-customGrey my-1.5">10/10/2024</p>

            {/* work box */}
            <div className={`relative w-86 h-98 rounded-4-xl border-2 border-solid border-white ${bgColor} shadow-cardShadow`}>
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
                        <p className="font-montserrat font-medium text-xs p-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim explicabo, 
                            cumque sequi minus, sit nesciunt ea harum, dolorum possimus velit commodi laborum rem nisi! 
                            Eum molestiae nesciunt vel cumque.
                        </p>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="w-84 h-20 rounded-45 bg-black flex justify-center gap-18 items-center my-6">
                {/* update button */}
                <button className="w-23 h-11.25 rounded-45 border-2 border-solid border-white bg-customRed font-montserrat font-bold text-base text-white">
                    Update
                </button>
                {/* delete button */}
                <button className="w-23 h-11.25 rounded-45 border-2 border-solid border-white bg-customRed font-montserrat font-bold text-base text-white">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default CarDetailsPage