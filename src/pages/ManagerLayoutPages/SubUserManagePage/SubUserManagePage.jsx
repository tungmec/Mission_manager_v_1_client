import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAllSubUser} from '../../../features/subUsersManage/subUserManageSlice.js';
import styles from './SubUserManagePage.module.css';
import {SubUserCard} from './SubUserCard.jsx';
import {CreateSubUserForm} from './CreateSubUserForm.jsx';
import {CreatNewRoleForm} from './CreateNewRoleForm.jsx';





export const SubUserManagePage = () => {
    const isSubUsersLoading = useSelector((state) => state.subUsersManage.isLoading);
    const subUsersList = useSelector((state)=> state.subUsersManage.subUsersList);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getAllSubUser());

    }
    ,[]);

    if (isSubUsersLoading) {
        return <h1>Loading......</h1>
    }

    return (
        <div className={styles.subUsersManagePage} >
            <div className={styles.subUsersShow}>
                <h3  >Sub Users List</h3>
                <div className={styles.list_container} >
                    <div className={styles.subUsersList}>
                        {
                            subUsersList.map((subUser)=> {
                                return (   
                                    <SubUserCard 
                                    
                                        user = {subUser}
                                    />

                                )
                            })
                        }

                    </div>
                </div>
                
                <div className={styles.createPart}>
                    <div className={styles.subCreate} >
                        <h3>Create Sub Users</h3>
                        <CreateSubUserForm />
                    </div>
                    <div className={styles.roleCreate} >
                        <h3>Create New Role</h3>
                        <CreatNewRoleForm />
                    </div>
                </div>
                

            </div>
            <div className={styles.profileShow}>
                <h3>Profile</h3>

            </div>

        </div>
    )

    
}