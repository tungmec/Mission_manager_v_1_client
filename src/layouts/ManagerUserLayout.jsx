import {Outlet, NavLink, useNavigate} from  'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../features/auth/authSlice.js';
import styles from './layout.module.css';


export const ManagerUserLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <header className={styles.managerlayout} >
                <h1>Manager User</h1>
                <button 
                    onClick={() => {
                        dispatch(logout());
                        navigate("/", {replace:true});
                    }}
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
