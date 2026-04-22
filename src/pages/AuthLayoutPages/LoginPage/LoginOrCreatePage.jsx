import styles from './LoginPage.module.css';
import { useState } from 'react';
import {CreateCard} from './CreateCard.jsx';
import {LoginManagerCard} from './LoginManagerCard.jsx';
import {LoginSubUserCard} from './LoginSubUserCard.jsx';



export const LoginOrCreatePage = () => {
    

    const [createClass, setCreateClass] =useState("hide");
    const [loginManagerClass, setLoginManagerClass] = useState("show");
    const [loginSubClass, setLoginSubClass] = useState("hide");
   
    
   
// -----------------------
    return (

        <div className={styles.container} >


           
            <LoginManagerCard 
                cardClass = {loginManagerClass}
                clickHandler = {() =>{
                    
                    setCreateClass("hide");
                    setLoginManagerClass("show");
                    setLoginSubClass("hide");
                }}
            />
            
            <LoginSubUserCard
                cardClass = {loginSubClass}
                clickHandler = {() =>{
                    
                    setCreateClass("hide");
                    setLoginManagerClass("hide");
                    setLoginSubClass("show");
                }}
            />

            <CreateCard 
                cardClass = {createClass}
                clickHandler = {() =>{
                    
                    setCreateClass("show");
                    setLoginManagerClass("hide");
                    setLoginSubClass("hide");
                }}
            />
          
        </div>
    )
}