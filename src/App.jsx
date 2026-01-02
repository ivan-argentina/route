import { Route, Routes } from "react-router"
import { useUser } from "reactfire"
import PublicLayouts from "./layouts/Public.Layouts"
import AdminLayout from './layouts/Admin.Layout'
import RootLayout from "./layouts/Root.Layout"
import NotFoundPage from "./publica/NotFound.page"
import HomePage from "./publica/home.page"
import DashboardPages from './pages/Dashboard.Pages'
import  ProfilePages from './pages/Profile.Pages'
import ChatPages from "./pages/Chat.Pages"
import AuthLayout from './layouts/Auth.Layout'
import LoginPages from "./pages/Login.Pages"
import RegisterPages from "./pages/Register.Pages"


function App() {

return(
 <Routes>
    <Route element={<RootLayout/>}>
       
        {/* public */}
        <Route element={<PublicLayouts />}>
            <Route index element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Route>

        {/* private */}
        <Route element={<AdminLayout />} >
            <Route index element={<DashboardPages />} />
            <Route path='profile' element={< ProfilePages />} />
            <Route path='chat' element={<ChatPages />} />
        </Route>

        {/* auth */}
        <Route path='auth' element={<AuthLayout />}>
            <Route path='login' element={<LoginPages />} />
            <Route path='register' element={<RegisterPages />} />
        </Route>
    </Route>
 </Routes>
)
}

export default App
