import { createBrowserRouter } from "react-router-dom";
import Home from "../../component/Page/Home/Home";
import AllServices from "../../component/Page/Home/Services/AllServices";
import ServiceDetails from "../../component/Page/Home/Services/ServiceDetails";
import Service from "../../component/Page/Home/Services/Services";
import Login from "../../component/Page/Login/Login";
import PostReview from "../../component/Page/Review/PostReview";
import SignUp from "../../component/Page/Signup/Signup";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            
        ]
    }
])
export default router;