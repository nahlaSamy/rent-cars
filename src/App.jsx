import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AllCars from './components/AllCars/AllCars';
import CarDetails from './components/CarDetails/CarDetails';
import Home from './components/Home/Home';
import MasterLayout from './components/MasterLayout/MasterLayout';

function App() {

  let routes = createBrowserRouter([{
    path: '/', element: <MasterLayout />, errorElement: <h2>not found</h2>
    , children: [
      {
        index: true, element: <Home />
      },
      {
        path: 'home', element: <Home />
      },
      {
        path: 'allCars', element: <AllCars />
      },
      {
        path: '/car/:id', element: <CarDetails/>
      },
  
  ]
  }])
return (
  <>
    <RouterProvider router={routes} />


  </>
)
}

export default App
