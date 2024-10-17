import Heading from "../components/Heading"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
    return (
        <>
            <Heading />
            <Outlet />
            <ToastContainer />
        </>
    )
}

export default MainLayout