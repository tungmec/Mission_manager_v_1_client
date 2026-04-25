import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
// All app layout:
import {RootLayout} from '../../layouts/RootLayout.jsx';
import {AuthLayout} from '../../layouts/AuthLayout.jsx';
import {ManagerUserLayout} from '../../layouts/ManagerUserLayout.jsx';
import {SubUserLayout} from '../../layouts/SubUserLayout.jsx';
// Utility
import {HomeRedirect} from './HomeRedirect.jsx';
import {NoPage} from '../../pages/NoPage.jsx';
// Auth pages :
import {LoginOrCreatePage} from '../../pages/AuthLayoutPages/LoginPage/LoginOrCreatePage.jsx';
// Manager user pages:
import {MissionManagePage} from '../../pages/ManagerLayoutPages/MissionManagePage/MissionManagePage.jsx';
import {SubUserManagePage} from '../../pages/ManagerLayoutPages/SubUserManagePage/SubUserManagePage.jsx';
import {ManagerPublicChatPage} from '../../pages/ManagerLayoutPages/ManagerPublicChatPage/ManagerPublicChatPage.jsx';





export const routers = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element= {<RootLayout/>} >
                <Route index element={<HomeRedirect/>}/>

                <Route path="auth" element = {<AuthLayout/>}>
                    <Route path="login" element={<LoginOrCreatePage/>} />                   

                </Route>

                <Route path="manager" element = {<ManagerUserLayout/>}>
                    <Route path="subuser" element={<SubUserManagePage/>} />
                    <Route path="mision" element={<MissionManagePage/>} />
                    <Route path="publicchat" element={<ManagerPublicChatPage />}  />

                </Route>

                <Route path="sub" element = {<SubUserLayout/>}>
                

                </Route>

                <Route path="*" element={<NoPage/>} />
            </Route>
        </>
    )
)

