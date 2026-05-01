import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAllRolesOfManagerUser} from '../../../features/subUsersManage/subUserRolesSlice.js';
import {createNewSubUser} from '../../../features/subUsersManage/subUserManageSlice.js';
import styles from './SubUserManagePage.module.css';

export const CreateSubUserForm = () => {
    const dispacth = useDispatch();
    const isLoading = useSelector((state)=> state.subUserRoles.isLoading);
    const rolesList = useSelector((state)=> state.subUserRoles.rolesList);
    const [roleId, setRoleId] = useState(null);
    const [roleDescription, setRoleDescription] = useState("");
    const [crtSubUserName, setCrtSubUserName] = useState("");
    const [crtPassword, setCrtPassword] = useState("");

   
    useEffect(()=>
        {
            dispacth(getAllRolesOfManagerUser());

        }
        ,[]);

    const handleCreateSubmit = () => {


        dispacth(createNewSubUser({
            subUserName: crtSubUserName, 
            password: crtPassword, 
            roleId: Number(roleId)
        }));
    }


    if (isLoading) {
        return <h1>Loading......</h1>
    }


    return (
        <div className={styles.createSubUserForm} >
            <div className={styles.createinput} >
                <label htmlFor="crtName" className={styles.label}>Type Sub User name: </label>
                <input 
                    type="text" 
                    id="crtName"
                    minLength={3}
                    maxLength={50}
                    required
                    value={crtSubUserName}
                    onChange={(e) => setCrtSubUserName(e.target.value)}

                />
               
            </div>
            <div className={styles.createinput}>
                <label htmlFor="crtPass" className={styles.label}>Type Password:    </label>
                <input 
                    type="password" 
                    id="crtPass"
                    minLength={8}
                    
                    required
                    value={crtPassword}
                    onChange={(e) => setCrtPassword(e.target.value)}

                />
            </div>
            <div className={styles.createinput}>
                <label htmlFor="select_role" className={styles.label}>Select sub user role:</label>
                <select name="" 
                        id="select_role"
                        className={styles.role_select}
                        value={roleId}
                        onChange={(e) => {
                                setRoleId(e.target.value);
                                setRoleDescription(rolesList.filter((role)=>role.id === e.target.value)[0].description);
                            }}
                        required

                >
                    <option value="">---select a role---</option>
                    {rolesList.map((role)=>{
                        console.log(role.role_name);
                        return <option 
                                    value={role.id}
                                    className={styles.role_select_option}
                                >
                                        {role.role_name}
                                </option>
                    })}

                </select>
            </div>
           
            <h3>Role description: {roleDescription}</h3>
            <button
                onClick={handleCreateSubmit}
            >
                    Create Submit
            </button>
        </div>
    )
}