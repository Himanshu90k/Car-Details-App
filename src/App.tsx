import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import SearchLayout from './layouts/SearchLayout';
import HomePage from './pages/HomePage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<SearchLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App
