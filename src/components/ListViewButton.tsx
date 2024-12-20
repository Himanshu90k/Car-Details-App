import { Link, useSearchParams } from "react-router-dom"

const ListViewButton: React.FC = () => {

    const [searchParams] = useSearchParams()
    const year = searchParams.get("date")?.split('-')[0]

    return (
        <Link
            to={`/list-view/${year}`}
            title='list view button'
        >
            {/* list link */}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="60" 
                height="60" 
                viewBox="0 0 60 60" 
                fill="none"
            >
                <path 
                    d="M41.25 11.25H50.625V54.375H9.375V11.25H18.75V15H41.25V11.25ZM16.875 30
                    H43.125V26.25H16.875V30ZM16.875 45H43.125V41.25H16.875V45ZM22.5 11.25V5.625H37.5V11.25H22.5Z" 
                    fill="white"
                />
            </svg>
        </Link>
    )
}

export default ListViewButton