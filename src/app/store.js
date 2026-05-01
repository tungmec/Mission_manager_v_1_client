import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice.js';
import subUsersManageReducer from '../features/subUsersManage/subUserManageSlice.js';
import subUserRolesReducer from '../features/subUsersManage/subUserRolesSlice.js';

export const store = configureStore({
    reducer: {
       auth: authReducer,
       subUsersManage: subUsersManageReducer,
       subUserRoles: subUserRolesReducer
    }
})