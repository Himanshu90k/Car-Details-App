import { useLocation, Link, useSearchParams, useNavigate, useParams } from "react-router-dom"
import ListViewButton from "./ListViewButton"
import ReturnHomeButton from "./ReturnHomeButton"
import { useEffect, useState, useRef } from "react"

const Footer: React.FC = () => {
    // to get the current path
    const location = useLocation()
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    //toggle year card
    const [toggleYearCard, setToggleYearCard] = useState<Boolean>(false)
    const yearCardRef = useRef<HTMLButtonElement>(null)

    const years = Array.from({length: 101}, (_, index) => 2000 + index)
    const handleToggleYearCard = () => setToggleYearCard(!toggleYearCard)
    
    const [searchParams, setSearchParams] = useSearchParams()
    const date = searchParams.get('date')

    //year state
    const initialValue  = id? id : date
    const [year, setYear] = useState(initialValue? parseInt(initialValue.slice(0,4)) : new Date().getFullYear())

    //handle year change
    const changeYear = (year: string) => {
        if(date) {
            setYear(parseInt(year))
            setSearchParams({date: `${year}${date.slice(4)}`})
        }

        if(location.pathname !== '/') {
            setYear(parseInt(year))
            navigate(`/list-view/${year}`)
        }
    }

    //scroll list into view
    const scrollListRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if(toggleYearCard === false) {
            return
        }
        const index = years.indexOf(year)
        
        if(scrollListRef.current){
            const yearElement = scrollListRef.current.children[0].children[index]
            yearElement.scrollIntoView({block: 'center', behavior: 'smooth'})
        }

    },[toggleYearCard])

    useEffect(() => {
        if(toggleYearCard === false) {
            return
        }
        const handleClick = (event: MouseEvent ) => {
            if(yearCardRef.current && !event.composedPath().includes(yearCardRef.current)) {
                setToggleYearCard(false)
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if(event.code === 'Escape') {
                setToggleYearCard(false)
            }
        }

        document.body.addEventListener('click', handleClick)
        document.body.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.removeEventListener('click', handleClick)
            document.body.removeEventListener('keydown', handleKeyDown)
        }
    },[toggleYearCard])

    // highlight middle year button on scroll
    const highlightButton = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.className = 'font-inter text-2xl font-semibold text-customRed snap-center p-2'
            } else {
                entry.target.className = 'font-inter text-xl font-normal text-black snap-center opacity-50 p-2'
            }

        })
    }
    useEffect(() => {
        if (toggleYearCard === false || scrollListRef.current === null) {
            return
        }
        const observer = new IntersectionObserver(highlightButton, {
            root: scrollListRef.current.children[0],
            rootMargin: '-25px 0px',
            threshold: 1.0
        })
        const buttons = scrollListRef.current?.children[0].querySelectorAll('button')
        if(buttons) {
            buttons.forEach((button) => observer.observe(button))
        }

        return () => {
            buttons.forEach((button) => observer.unobserve(button))
        }

    },[toggleYearCard])

    return (
        <div className='flex justify-center gap-9 items-center bg-black rounded-45 h-20 w-84 z-10 fixed bottom-2'>
            
            {/* list view button / return to home button */}
            {location.pathname === '/'? <ListViewButton /> : <ReturnHomeButton />}

            {/* add new car details - link */}
            <Link title="add-car-details-page" to='/add-car-details'>
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
                onClick={handleToggleYearCard}
                ref={yearCardRef}
            >
                <hr className="w-20 h-0.5 border-white"/>
                <h2 className="text-white font-inter font-normal text-2xl">{year}</h2>
                <hr className="w-20 h-0.5 border-white"/>
            </button>

            {/* car list card */}
            {toggleYearCard? 
            <div ref={scrollListRef} className="flex flex-col items-center absolute z-30 bottom-4 right-10 w-29 h-32 bg-white 
            shadow-yearCardShadow border-3 border-solid border-customRed rounded-2xl">
                <div className="z-20 flex flex-col items-center h-29 w-29 overflow-y-scroll snap-y snap-mandatory snap-always scrollbar">
                {years.map(
                    (year, index) => {
                        return <button
                                className="font-inter text-xl font-normal text-black snap-center opacity-50 p-2"
                                key={index}
                                type="button"
                                value={year}
                                onClick={(e:React.MouseEvent<HTMLButtonElement>) => changeYear(e.currentTarget.value)}
                            >
                            {year}
                    </button>})}
                </div>
                <div className="absolute top-10 flex flex-col items-center gap-10 h-10 z-10">
                    <hr className="w-24 border-customRed border-2" />
                    <hr className="w-24 border-customRed border-2" />
                </div>
            </div> : null}
        </div>
    )
}

export default Footer