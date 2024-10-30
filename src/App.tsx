import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CarDetailsPage from './pages/CarDetailsPage'
import ListViewPage from './pages/ListViewPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/car-details/:id' element={<CarDetailsPage />} />
          <Route path='list-view' element={<ListViewPage />} />
        </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App
