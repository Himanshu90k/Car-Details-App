import { Link, useParams } from "react-router-dom"

const ReturnHomeButton: React.FC = () => {

    const { id } = useParams<{ id: string}>()
    if(!id) {
        throw new Error("year is not right")
    }
    const dateString = new Date().toISOString().split('T')[0]
    const year = `${id}${dateString.slice(4)}`

    return (
        <Link
            to={`/?date=${year}`}
            title="return to home"
        >
            {/* return from list view */}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="46" 
                height="46" 
                viewBox="0 0 46 46" 
                fill="none"
            >
                <path 
                    d="M7.66671 19.1667L6.31163 20.5217
                    L4.95654 19.1667L6.31163 17.8116L7.66671 19.1667
                    ZM40.25 34.5C40.25 35.0083 40.0481 35.4958 39.6887 35.8553
                    C39.3292 36.2147 38.8417 36.4167 38.3334 36.4167
                    C37.825 36.4167 37.3375 36.2147 36.9781 35.8553
                    C36.6186 35.4958 36.4167 35.0083 36.4167 34.5H40.25ZM15.895 30.1051
                    L6.31163 20.5217L9.02179 17.8116L18.6051 27.3949L15.895 30.1051ZM6.31163 17.8116
                    L15.895 8.22824L18.6051 10.9384L9.02179 20.5217L6.31163 17.8116ZM7.66671 17.25
                    H26.8334V21.0833H7.66671V17.25ZM40.25 30.6667V34.5H36.4167V30.6667H40.25ZM26.8334 17.25
                    C30.3917 17.25 33.8043 18.6635 36.3204 21.1796C38.8365 23.6958 40.25 27.1083 40.25 30.6667
                    H36.4167C36.4167 28.125 35.407 25.6874 33.6098 23.8902C31.8126 22.093 29.375 21.0833 26.8334 21.0833V17.25Z" 
                    fill="white"
                />
            </svg>
        </Link>
    )
}

export default ReturnHomeButton