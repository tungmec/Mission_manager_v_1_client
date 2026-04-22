import styles from './LoginPage.module.css';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {loginManagerUser} from '../../../features/auth/authSlice.js';
import {useNavigate} from 'react-router-dom';


export const LoginManagerCard = ({cardClass, clickHandler}) => {
    const [loginName, setLoginName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [msg, setMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loginHandler = async () => {
        setIsLoading(true);
        try {
             dispatch(loginManagerUser(
                {
                    userName:loginName, 
                    password:loginPassword
                }
            ));

             
            


        } catch (err) {
            setMsg("Fail to login");
        } finally {
            setIsLoading(false);
            navigate("/", {replace:true})
        }

    }
 
    
// Render part:
        
    return (
       <div 
            className={[styles.form, styles[cardClass]].join(" ")} 
            onClick={clickHandler}
        >
            <h1>Login Manager User</h1>
            <label htmlFor="creatname">User name:</label>                
            <input 
                value={loginName}
                id="creatname"
                type="text" 
                minLength={3} 
                maxLength={50} 
                required
                onChange={(e) => {setLoginName(e.target.value)}}
                
            />
                
            <label htmlFor="createpassword">User Password: </label>
                
            <input 
                value={loginPassword}
                type="password" 
                id="createpassword"
                minLength={8}
                maxLength={30}
                required
                onChange={(e) => setLoginPassword(e.target.value)}
                
            />
            <p>{loginPassword} </p>
                
                                
            <button
                onClick={loginHandler}
                className={styles.button}
            >
                    Login
            </button> 
            <p>{msg}</p>
       </div>
        
    )

}