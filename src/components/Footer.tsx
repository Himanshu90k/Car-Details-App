import { useLocation, Link } from "react-router-dom"
import ListViewButton from "./ListViewButton"
import ReturnHomeButton from "./ReturnHomeButton"

const Footer: React.FC = () => {
    // to get the current path
    const location = useLocation()

    return (
        <div className="flex justify-center gap-9 items-center bg-black rounded-45 h-20 w-84 z-10 fixed bottom-2">
            
            {/* list view button / return to home button */}
            {location.pathname === '/'? <ListViewButton /> : <ReturnHomeButton />}

            {/* add new car details - link */}
            <Link to='/add-car-details'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="38" 
                    height="38" 
                    viewBox="0 0 38 38" 
                    fill="none"
                >
                    <path 
                        d="M28.5 15.8333H22.1667V9.50001C22.1667 8.66016 21.833 7.8547 21.2392 7.26084
                        C20.6453 6.66697 19.8399 6.33334 19 6.33334C18.1602 6.33334 17.3547 6.66697 16.7608 7.26084
                        C16.167 7.8547 15.8333 8.66016 15.8333 9.50001L15.9458 15.8333H9.50001
                        C8.66016 15.8333 7.8547 16.167 7.26084 16.7608C6.66697 17.3547 6.33334 18.1602 6.33334 19
                        C6.33334 19.8399 6.66697 20.6453 7.26084 21.2392C7.8547 21.833 8.66016 22.1667 9.50001 22.1667
                        L15.9458 22.0543L15.8333 28.5C15.8333 29.3399 16.167 30.1453 16.7608 30.7392
                        C17.3547 31.333 18.1602 31.6667 19 31.6667C19.8399 31.6667 20.6453 31.333 21.2392 30.7392
                        C21.833 30.1453 22.1667 29.3399 22.1667 28.5V22.0543L28.5 22.1667
                        C29.3399 22.1667 30.1453 21.833 30.7392 21.2392C31.333 20.6453 31.6667 19.8399 31.6667 19
                        C31.6667 18.1602 31.333 17.3547 30.7392 16.7608C30.1453 16.167 29.3399 15.8333 28.5 15.8333Z" 
                        fill="white"
                    />
                </svg>
            </Link>

            {/* change year - button */}
            <button 
                type="button"
            >
                <hr className="w-20 h-0.5 border-white"/>
                <h2 className="text-white font-inter font-normal text-2xl">2024</h2>
                <hr className="w-20 h-0.5 border-white"/>
            </button>
        </div>
    )
}

export default Footer