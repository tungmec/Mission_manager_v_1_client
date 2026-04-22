import {Outlet, useNavigate} from  'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import styles  from './layout.module.css';
import { useEffect } from 'react';

export const AuthLayout = () => {
    const navigate = useNavigate();
    
    useEffect(() => {navigate("/auth/login",{replace:true});}, []);
    

    return (
       
        <div className={styles.authlayout}>
            
              <h1>Create or Login</h1>
            
            <main className={styles.authmain} >
                <Outlet/>
            </main>
        </div>
        
    )
}
