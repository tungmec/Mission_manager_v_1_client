import styles from './SubUserManagePage.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createNewRole} from '../../../features/subUsersManage/subUserRolesSlice.js';

export const  CreatNewRoleForm = () => {
    const [crtRoleName, setCrtRoleName] = useState("");
    const [crtDescription, setCrtDescription] = useState("");

    const dispatch = useDispatch();


    const handleCreateRoleSubmit = () => {
        dispatch(createNewRole({
            roleName: crtRoleName, 
            description: crtDescription
        }))
    }

    return (
        <div className={styles.createRoleForm} >
            
                <div className={styles.createinput} >
                    <label htmlFor="crtName" className={styles.label}>Type Sub User name: </label>
                    <input 
                        type="text" 
                        id="crtName"
                        minLength={3}
                        maxLength={30}
                        required   
                        value={crtRoleName}                 
                        onChange={(e) => setCrtRoleName(e.target.value) }
                    />
               
                </div>
                <div className={styles.createinput}>
                    <label htmlFor="crtDes" className={styles.label}>Type Password:    </label>
                    <input 
                        type="text" 
                        id="crtDes"
                        required
                        value={crtDescription}
                        onChange={(e) => setCrtDescription(e.target.value)}
                    />
                </div>

                <button
                    onClick={handleCreateRoleSubmit}
                >
                    Creat Role
                </button>
           
        </div>
    )
}