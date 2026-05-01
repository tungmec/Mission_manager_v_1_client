import {Outlet, NavLink, useNavigate, Navigate} from  'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../features/auth/authSlice.js';
import styles from './layout.module.css';
import {socket} from '../app/websocket.js';


export const ManagerUserLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthticated = useSelector((state) => state.auth.isAuthenticated);
    const accessToken = useSelector((state) => state.auth.accessToken);
    const userType =useSelector ((state) => state.auth.current_user?.user_type??null);
    
    if (!isAuthticated || !userType || userType !=="manager") {
        return <Navigate to="/" replace />
    }

    

    return (
        <div className={styles.managerlayout}>
            <h1>Manager User page</h1>
            <header  className={styles.managerheader}>
                

                <NavLink to="/manager/subuser" >Sub User Manage</NavLink>
                <NavLink to="/manager/mision" >Mission Manage</NavLink>
                <NavLink to="/manager/publicchat" >Public Chat</NavLink>



                <button 
                    onClick={() => {
                        dispatch(logout());
                        socket.disconnect();
                        navigate("/", {replace:true});
                    }}
                    className={styles.logout_button}
                >
                    Logout
                </button>
                
            </header>
            <main className={styles.managermain}>
                <Outlet/>
            </main>
        </div>
        
    )
}
