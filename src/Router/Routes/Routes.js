import { createBrowserRouter } from "react-router-dom";
import Blog from "../../component/Page/Blog/Blog";
import Home from "../../component/Page/Home/Home";
import AddService from "../../component/Page/Home/Services/AddService/AddService";
import AllServices from "../../component/Page/Home/Services/AllServices";
import ServiceDetails from "../../component/Page/Home/Services/ServiceDetails";
import Login from "../../component/Page/Login/Login";
import MyReview from "../../component/Page/Review/MyReview";
import UpdateReview from "../../component/Page/Review/UpdateReview";
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
                loader: ({ params }) => fetch(`https://chef-steps-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/updatereviews/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://chef-steps-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
            
        ]
    }
])
export default router;