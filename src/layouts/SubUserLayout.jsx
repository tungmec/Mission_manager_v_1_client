import {Outlet, NavLink, useNavigate} from  'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../features/auth/authSlice.js';
import styles from './layout.module.css';

export const SubUserLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className={styles.sublayout} >
            <header>
                <h1>Sub User</h1>
                <button 
                    onClick={() => {
                        dispatch(logout());
                        navigate("/", {replace:true});
                    }}
                >
                    Logout
                </button>
            </header>
            <main className={styles.submain} >
                <Outlet/>
            </main>
        </div>
        
    )
}