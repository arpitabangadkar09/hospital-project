import { createBrowserRouter } from "react-router-dom";
import DoctorList from "../components/Admin/DoctorsList/DoctorsList";
import Login from "../components/Auth/Login";
import MyAppointment from "../components/Patient/MyAppointment/MyAppointment";
import BookAppointment from "../components/Patient/BookAppointment/BookAppointment";
import PatientList from "../components/Admin/PatientsList/PatientsList";
import DoctorAppointment from "../components/Doctor/MyAppointment/DoctorAppointment";
import SetAppointment from "../components/Doctor/SetAppointment/SetAppointment";
import DoctorProfile from "../components/Doctor/Profile/DoctorAppoinment";
import MainComponent from "../main-component/mainComponent";
import Dashboard from "../components/Admin/Dashboard/Dshboard";
import Profile from "../components/Patient/Profile";

 const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: '/admin',
      element: <MainComponent />,
      children: [
        {
          path: "/admin",
          element: <Dashboard />,
        },
        {
          path: "/admin/doctor",
          element: <DoctorList />,
        },
        {
          path: "/admin/patient",
          element: <PatientList />,
        },
      ],
    },
    {
      path: '/user',
      element: <MainComponent />,
      children: [
        {
          path: "/user",
          element: <Profile />,
        },
        {
          path: "/user/myappointment",
          element: <MyAppointment />,
        },
        {
          path: "/user/bookAppointment",
          element: <BookAppointment />,
        },
      ],
    },
    {
      path: '/doctor',
      element: <MainComponent />,
      children: [
        {
          path: "/doctor",
          element: <DoctorProfile />,
        },
        {
          path: "/doctor/myappointment",
          element: <DoctorAppointment />,
        },
        {
          path: "/doctor/setappointment",
          element: <SetAppointment />,
        },
      ],
    }
  ]);

  export default mainRouter;