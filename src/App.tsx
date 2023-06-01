import React, { useEffect } from 'react';
import './App.css';
import MainComponent from './main-component/mainComponent';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Admin/Dashboard/Dshboard';
import DoctorList from './components/Admin/DoctorsList/DoctorsList';
import PatientsList from './components/Admin/PatientsList/PatientsList';
import { useSelector } from 'react-redux/es/exports';

function App() {

  const {userData} = useSelector((state: any) => state.user);

  console.log ('userData',userData)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainComponent />,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: '/doctor',
          element: <DoctorList />
        },
        {
          path: '/patient',
          element: <PatientsList />
        },
      ]
    }
    
  ]);

  const loginUser = async(userDetails: any) => {
     const userData = JSON.stringify(userDetails)
     const userRes = await fetch( 'http:localhost:3001/Login',{ 
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: userData
     });
     console.log(await userRes.json())
  }

  useEffect( () => {
          loginUser({
            "email": "user2@h.com",
           "password" : "Pass@123"
          })
        

  },[]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
