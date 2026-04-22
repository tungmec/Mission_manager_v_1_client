import styles from './LoginPage.module.css';
import { useState } from 'react';
import {createManagerUserAPI} from '../../../features/auth/managerUser/managerUserAPI.js';

export const CreateCard = ({cardClass, clickHandler}) => {
    const [createName, setCreateName] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [msg, setMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const createMainUserHandler = async () =>  {
        setIsLoading(true);
        try {
            const payload = {
                    userName:createName,
                    password: createPassword
                };
            await createManagerUserAPI(payload);
            
                setMsg("create new manager user OK");
                setCreateName("");
                setCreatePassword("");
        } catch (err) {
            setMsg(err.message);
        } finally {
            setIsLoading(false);
        }
       
        };
    
// Render part:
        
    return (
       <div 
            className={[styles.form, styles[cardClass]].join(" ")} 
            onClick={clickHandler}
        >
            <h1>Create Manager User</h1>
            <label htmlFor="creatname">User name:</label>                
            <input 
                className={styles.input}
                value={createName}
                id="creatname"
                type="text" 
                minLength={3} 
                maxLength={50} 
                required
                                onChange={(e) => {
                    setCreateName(e.target.value);
                    setMsg("");
                }}
                
            />
                
            <label htmlFor="createpassword">User Password: </label>
                
            <input 
                className={styles.input}
                value={createPassword}
                type="password" 
                id="createpassword"
                minLength={8}
                maxLength={30}
                required
                onChange={(e) => {
                    setCreatePassword(e.target.value);
                    setMsg("");
                }}
                
            />
                
                                
            <button
                onClick={createMainUserHandler}
                className={styles.button}
                disabled = {isLoading}
            >
                    {isLoading?"Loading":"Create Manager User"}
            </button> 

            <h3 className={styles.msg} >{msg}</h3>
       </div>
        
    )

}