import styles from './LoginPage.module.css';
import { useState } from 'react';
export const LoginSubUserCard = ({cardClass, clickHandler}) => {
    const [loginName, setLoginName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
 
    
// Render part:
        
    return (
       <div 
            className={[styles.form, styles[cardClass]].join(" ")} 
            onClick={clickHandler}
        >
            <h1>Login Sub User</h1>
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
                
                                
            <button
                // onClick={}
                className={styles.button}
            >
                    Login
            </button> 
       </div>
        
    )

}