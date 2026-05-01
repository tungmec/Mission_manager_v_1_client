import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getAllSubUsersOfCurrentManagerUser, createSubUser} from './subUsersManageAPI.js';

export const getAllSubUser = createAsyncThunk(
    "subUsersManage/getAllSubUser",
    async (_, thunkAPI) => {
        try {
            const data = await getAllSubUsersOfCurrentManagerUser();
            if (!data.success) {
                return thunkAPI.rejectWithValue(data.msg);
            }
            console.log(data.data);
            return data.data;

        } catch (err) {
            return thunkAPI.rejectWithValue(err.msg);
        }

    }
);
// ----
export const createNewSubUser = createAsyncThunk(
    "subUsersManage/createNewSubUser",
    async (arg, thunkAPI) => {
        try {
            const data = await createSubUser(arg);
            if (!data.success) {
                console.log("Fail to create newsub user:", data.msg);
                return thunkAPI.rejectWithValue(data.msg);
            }

            return data.data;

        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)


// ---------

const subUsersManageSlice = createSlice(
  {
    name:"subUsersManage",
    initialState: {
       
        subUsersList: [],
        isLoading:false,
        loadingError:null

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllSubUser.pending, (state) => {
            state.isLoading = true;
            state.loadingError=null;
           
        })
        .addCase(getAllSubUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.loadingError=null;
            state.subUsersList=action.payload;
        })
        .addCase(getAllSubUser.rejected, (state, action) => {
            state.isLoading = false;
            state.loadingError=action.payload;
            state.subUsersList=[];
        })
        .addCase(createNewSubUser.pending, (state) => {
            state.isLoading = true;
            state.loadingError=null;
           
        })
        .addCase(createNewSubUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.loadingError=null;
            state.subUsersList= [...state.subUsersList, action.payload]
        })
        .addCase(createNewSubUser.rejected, (state, action) => {
            state.isLoading = false;
            state.loadingError=action.payload;
        })
    }

  }
);

export default subUsersManageSlice.reducer;