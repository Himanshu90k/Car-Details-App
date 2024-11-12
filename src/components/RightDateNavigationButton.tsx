import { useSearchParams, useLocation } from "react-router-dom"

const RightDateNavigationButton: React.FC = () => {

    const location = useLocation()
    if(location.pathname !== '/') {
        return (
            <button
                type="button"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40" 
                    height="40" 
                    viewBox="0 0 40 40" 
                    fill="none"
                    className="hover: fill"
                >
                    <path 
                        d="M2.5 20
                        C2.5 23.4612 3.52636 26.8446 5.44928 29.7225
                        C7.37221 32.6003 10.1053 34.8434 13.303 36.1679
                        C16.5007 37.4924 20.0194 37.839 23.4141 37.1637
                        C26.8087 36.4885 29.9269 34.8218 32.3744 32.3744
                        C34.8218 29.9269 36.4885 26.8087 37.1637 23.4141
                        C37.839 20.0194 37.4924 16.5007 36.1679 13.303
                        C34.8434 10.1053 32.6003 7.37221 29.7225 5.44928
                        C26.8446 3.52636 23.4612 2.5 20 2.5
                        C15.3587 2.5 10.9075 4.34374 7.62563 7.62563
                        C4.34374 10.9075 2.5 15.3587 2.5 20
                        ZM10 18.75H25.1875L18.2125 11.7412L20 10L30 20L20 30L18.2125 28.2162L25.1875 21.25H10V18.75Z" 
                        fill="black"
                    />
                </svg>
            </button>
        )
    }

    const [searchParams, setSearchParams] = useSearchParams()
    const dateString = searchParams.get("date")?.split("-")
    if(!dateString) {
       throw new Error("date format is not correct") 
    }
    let date = dateString.map((dateString) => parseInt(dateString, 10))

    const handleChange = () => {
        setSearchParams({date: new Date(date[0], date[1] - 1, date[2] + 2).toISOString().split('T')[0]})

    }

    return (
        <button
            type="button"
            onClick={handleChange}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                fill="none"
                className="hover: fill"
            >
                <path 
                    d="M2.5 20
                    C2.5 23.4612 3.52636 26.8446 5.44928 29.7225
                    C7.37221 32.6003 10.1053 34.8434 13.303 36.1679
                    C16.5007 37.4924 20.0194 37.839 23.4141 37.1637
                    C26.8087 36.4885 29.9269 34.8218 32.3744 32.3744
                    C34.8218 29.9269 36.4885 26.8087 37.1637 23.4141
                    C37.839 20.0194 37.4924 16.5007 36.1679 13.303
                    C34.8434 10.1053 32.6003 7.37221 29.7225 5.44928
                    C26.8446 3.52636 23.4612 2.5 20 2.5
                    C15.3587 2.5 10.9075 4.34374 7.62563 7.62563
                    C4.34374 10.9075 2.5 15.3587 2.5 20
                    ZM10 18.75H25.1875L18.2125 11.7412L20 10L30 20L20 30L18.2125 28.2162L25.1875 21.25H10V18.75Z" 
                    fill="black"
                />
            </svg>
        </button>
    )
}

export default RightDateNavigationButton