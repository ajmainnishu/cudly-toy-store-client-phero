import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Contact/Login/Login";
import Registration from "../pages/Contact/Registration/Registration";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'registration',
                element: <Registration />
            },
            {
                path: 'blogs',
                element: <Blogs />
            }
        ]
    }
])

export default router;