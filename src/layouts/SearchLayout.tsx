import Heading from "../components/Heading"
import SearchBar from "../components/SearchBar"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const SearchLayout = () => {
    return (
        <>
            <Heading />
            <SearchBar />
            <Outlet />
            <ToastContainer />
        </>
    )
}

export default SearchLayout