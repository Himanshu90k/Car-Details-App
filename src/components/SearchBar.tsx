import { useState, useRef, useEffect } from "react"
import { useSearchParams, useLocation, Link } from "react-router-dom"
import axios from "axios"
import { Car } from "../context/CarContext"

const SearchBar: React.FC = () => {

    const location = useLocation()

    //add search query to the link
    const [searchParams, setSearchParams] = useSearchParams()
    const date = searchParams.get('date')

    //fetch search results
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [searchResults, setSearchResults] = useState<Car[]>([])

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
        if(location.pathname === '/') {
            setSearchParams({date: date? date: new Date().toISOString().split('T')[0], query: event.target.value}, {replace: true})
        } else {
            setSearchParams({query: event.target.value}, {replace: true})
        }
        
    }

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const result = await axios.get<Car[]>(`https://car-details-app-api.onrender.com/api/search?query=${searchQuery}`)
                if(result.status === 200) {
                    setSearchResults(result.data)
                }else {
                    setSearchResults([])
                }
            } catch(error) {
                console.error(error)
                setSearchResults([])
            }
        }

        fetchSearchResults()

    },[searchQuery])

    //toggle search results box
    const [toggle, setToggle] = useState<boolean>(false)
    const queryRef = useRef<HTMLInputElement>(null)

    useEffect(() => {

        if(!toggle) {
            // remove query params on toggle
            const params = new URLSearchParams(searchParams)
            params.delete('query')
            setSearchParams(params)
            return
        }

        //append query params on toggle
        const params = new URLSearchParams(searchParams)
        params.append('query', searchQuery)
        setSearchParams(params)

        const handleKeydown = (event: KeyboardEvent) => {
            if(event.code === 'Escape') {
                setToggle(false)
                setSearchQuery('')
            }
        }

        const handleClick = (event: MouseEvent) => {
            if(queryRef.current && !event.composedPath().includes(queryRef.current)) {
                setToggle(false)
            }
        }

        document.body.addEventListener('keydown', handleKeydown)
        document.body.addEventListener('click', handleClick)

        return () => {
            document.body.removeEventListener('keydown', handleKeydown)
            document.body.removeEventListener('click', handleClick)
        }
    }, [toggle])

    const handleQueryBoxToggle = () => setToggle(true)

    return (
        <div className="relative flex flex-col items-center">
            <div className="flex justify-center mt-8">
                <form className=" flex justify-center items-center gap-5 border-2 border-solid border-customBlue rounded-45 w-84 h-11.25">
                    {/* search box */}
                    <div className="flex flex-col items-center">
                        <input 
                            ref={queryRef} 
                            onClick={handleQueryBoxToggle} 
                            value={searchQuery}
                            onChange={handleSearch}
                            className="h-7 w-60 font-medium font-montserrat text-base text-center opacity-60" 
                            type="search"
                            placeholder="search by car no: DL01AB1"
                        />

                        {/* Underline below input box */}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="248" height="7" viewBox="0 0 248 7" 
                            fill="none">
                            <path 
                                opacity="0.8" 
                                d="M5 3L0 0.613249V6.38675L5 4V3ZM243 4L248 6.38675V0.613249L243 3V4ZM4.5 4H243.5V3H4.5V4Z" 
                                fill="black"
                            />
                        </svg>
                    </div>

                    {/* Search lens */}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="34" 
                        height="34" 
                        viewBox="0 0 34 34" 
                        fill="none"
                    >
                        <rect 
                            width="34" 
                            height="34"    
                            fill="white"
                        />
                        <path 
                            d="
                                M29.75 29.75
                                L23.5974 23.5974
                                M23.5974 23.5974
                                C24.6498 22.545 25.4847 21.2956 26.0542 19.9205
                                C26.6238 18.5455 26.917 17.0717 26.917 15.5833
                                C26.917 14.095 26.6238 12.6212 26.0542 11.2461
                                C25.4847 9.87109 24.6498 8.62168 23.5974 7.56925
                                C22.545 6.51683 21.2956 5.682 19.9205 5.11243
                                C18.5455 4.54286 17.0717 4.24971 15.5833 4.24971
                                C14.095 4.24971 12.6212 4.54286 11.2461 5.11243
                                C9.87109 5.682 8.62168 6.51683 7.56925 7.5692
                                C5.44378 9.69472 4.24971 12.5775 4.24971 15.5833
                                C4.24971 18.5892 5.44378 21.472 7.56925 23.5974
                                C9.69472 25.7229 12.5775 26.917 15.5833 26.917
                                C18.5892 26.917 21.472 25.7229 23.5974 23.5974Z
                            " 
                            stroke="#182C83" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </form>
            </div>

            {/* search query box */}
            {toggle? 
            <div className="absolute z-10 top-20 w-65 h-24 border-2 border-solid border-white bg-customBlack shadow-queryCardShadow rounded-md">
                <div className="py-2 h-full px-8 flex flex-col gap-y-1 overflow-y-scroll snap-y snap-mandatory snap-always customQueryScrollbar">
                    {Array.from(searchResults, (value, index) => {
                        return (
                            <Link to={`/single-car-details/${value._id}`} key={index} className="flex w-full justify-between snap-center items-center">
                                <p className="font-inter text-white font-medium text-xs">{index + 1}</p>
                                <p className="font-inter text-white font-medium text-xxs">{value.carNo}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>: null}

        </div>
    )
}

export default SearchBar