import {Navigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import  {getMeThunk} from '../../features/auth/authSlice.js';
import { useEffect, useState } from 'react';

export const HomeRedirect = () => {
    const dispatch = useDispatch();
    
    

    const isAutheticated = useSelector((state) => state.auth.isAuthenticated);
    const userType = useSelector((state) => state.auth.current_user?.user_type??null);
    const accessToken = useSelector((state) => state.auth.accessToken);
    const authIsLoading = useSelector((state) => state.auth.isloading);
    const isReloadAuth = useSelector((state) => state.auth.isGettingMe);


   
   
    if (isAutheticated && !userType && !isReloadAuth) {
        dispatch(getMeThunk());
    }
    

   if (authIsLoading || isReloadAuth) {
        return <h1>Loading......</h1>
   }

    if (!isAutheticated || !accessToken) {
           return <Navigate to="/auth/login" replace />;
        }
 
    
    if (userType === "manager") {
        return <Navigate to="/manager" replace/>;
        } else {
                return <Navigate to="/sub" />
        }
        
}