import {getAllRoles, createRole} from './subUserRolesAPI.js';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getAllRolesOfManagerUser = createAsyncThunk(
    "subUserRoles/getAllRolesOfManagerUser",
    async (_, thunkAPI) => {
        try {
            const data = await getAllRoles();
           
            if (!data.success) {
                console.log(" Fail to get all sub user roles :", data.msg);
                return thunkAPI.rejectWithValue(data.msg);
            }
            console.log(data.data);
            return data.data;

        } catch (err) {
            console.log(" Fail to get all sub user roles :", err.message);
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

// Create new role thunk:

export const createNewRole = createAsyncThunk(
    "subUserRoles/createNewRole",
    async (arg, thunkAPI) => {
        try {
            const data = createRole(arg);
             if (!data.success) {
                console.log(" Fail to create new sub user roles :", data.msg);
                return thunkAPI.rejectWithValue(data.msg);
            }
            console.log(data.data);
            return data.data;
            
        } catch (err) {
            console.log(err.message);
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)


// CREATE SLICE
const subUserRolesSlice = createSlice({
    name:"subUserRoles",
    initialState: {
        rolesList: [],
        isLoading: false,
        loadingError: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllRolesOfManagerUser.pending, (state) => {
                state.isLoading=true;
                state.loadingError=null;
                state.rolesList=[];
            })
            .addCase(getAllRolesOfManagerUser.fulfilled, (state, action) => {
                state.isLoading=false;
                state.loadingError=null;
                state.rolesList=action.payload;
            })
            .addCase(getAllRolesOfManagerUser.rejected, (state, action) => {
                state.isLoading=false;
                state.loadingError=action.payload;
                state.rolesList=[];
            })
            .addCase(createNewRole.pending, (state) => {
                state.isLoading=true;
                state.loadingError=null;
            })
            .addCase(createNewRole.fulfilled, (state, action) => {
                state.isLoading=false;
                state.loadingError=null;
                state.rolesList= [...state.rolesList, action.payload];
            })
            .addCase(createNewRole.rejected, (state, action) => {
                state.isLoading=false;
                state.loadingError=action.payload;
            })

    }
});

export default subUserRolesSlice.reducer;