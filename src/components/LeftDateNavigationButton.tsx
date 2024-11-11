import { useSearchParams } from "react-router-dom"

const LeftDateNavigationButton: React.FC = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const dateString = searchParams.get("date")?.split("-")
    if(!dateString) {
       throw new Error("date format is not correct") 
    }
    let date = dateString.map((dateString) => parseInt(dateString, 10))

    const handleChange = () => {
        setSearchParams({date: new Date(date[0], date[1] - 1, date[2]).toISOString().split('T')[0]})

    }

    return (
        <button
            type="button"
            onClick={handleChange}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="40" height="40" 
                viewBox="0 0 40 40" 
                fill="none"
            >
                <path 
                    d="M20 2.5
                    C16.5388 2.5 13.1554 3.52636 10.2775 5.44928
                    C7.39967 7.37221 5.15665 10.1053 3.83212 13.303
                    C2.50758 16.5007 2.16102 20.0194 2.83627 23.4141
                    C3.51151 26.8087 5.17822 29.9269 7.62564 32.3744
                    C10.0731 34.8218 13.1913 36.4885 16.5859 37.1637
                    C19.9806 37.839 23.4993 37.4924 26.697 36.1679
                    C29.8947 34.8434 32.6278 32.6003 34.5507 29.7225
                    C36.4737 26.8446 37.5 23.4612 37.5 20
                    C37.5 15.3587 35.6563 10.9075 32.3744 7.62563
                    C29.0925 4.34374 24.6413 2.5 20 2.5
                    ZM30 21.25H14.8125L21.7875 28.2162L20 30L10 20L20 10L21.7875 11.7412L14.8125 18.75H30V21.25Z" 
                    fill="black"
                />
            </svg>
        </button>
        
    )
}

export default LeftDateNavigationButton