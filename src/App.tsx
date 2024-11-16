import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CarDetailsPage from './pages/CarDetailsPage'
import ListViewPage from './pages/ListViewPage';
import UpdateCarPage from './pages/UpdateCarPage';
import AddCarDetailsPage from './pages/AddCarDetailsPage';
import SingleCarDetailsPage from './pages/SingleCarDetailsPage';
import SingleUpdateCarDetailsPage from './pages/SingleUpdateCarDetailsPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/car-details/:id' element={<CarDetailsPage />} />
          <Route path='/list-view/:id' element={<ListViewPage />} />
          <Route path='/update-details/:id' element={<UpdateCarPage />} />
          <Route path='/add-car-details' element={<AddCarDetailsPage />} />
          <Route path='/single-car-details/:id' element={<SingleCarDetailsPage />} />
          <Route path='/update-car-details/:id' element={<SingleUpdateCarDetailsPage />} />
        </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App
