import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import {RootLayout} from '../../layouts/RootLayout.jsx';
import {AuthLayout} from '../../layouts/AuthLayout.jsx';
import {ManagerUserLayout} from '../../layouts/ManagerUserLayout.jsx';
import {SubUserLayout} from '../../layouts/SubUserLayout.jsx';
import {LoginOrCreatePage} from '../../pages/AuthLayoutPages/LoginPage/LoginOrCreatePage.jsx';
import {HomeRedirect} from './HomeRedirect.jsx';
import {NoPage} from '../../pages/NoPage.jsx';






export const routers = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element= {<RootLayout/>} >
                <Route index element={<HomeRedirect/>}/>

                <Route path="auth" element = {<AuthLayout/>}>
                    <Route path="login" element={<LoginOrCreatePage/>} />                   

                </Route>

                <Route path="manager" element = {<ManagerUserLayout/>}>

                </Route>

                <Route path="sub" element = {<SubUserLayout/>}>
                

                </Route>

                <Route path="*" element={<NoPage/>} />
            </Route>
        </>
    )
)

