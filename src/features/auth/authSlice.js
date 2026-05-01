import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {loginAsManagerUser} from './managerUser/managerUserAPI.js';
import {loadAccessToken, saveAccessToken, clearAccessToken} from '../../utils/sessionStorage.js';
import {loginAsSubUser} from '../auth/subUser/subUserAPI.js';
import {API_BASE_URL} from '../../utils/constant.js';


// Login thunk for manager users:
export const loginManagerUser = createAsyncThunk(
    "auth/managerlogin",
    async (arg, thunkAPI) => {
        try {
            const data = await loginAsManagerUser(arg);
            
            saveAccessToken(data.token);
            
            return data;

  
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
}
);
// Login thunk for sub user:
export const loginSubUser = createAsyncThunk(
    "auth/sublogin",
    async (arg, thunkAPI) => {
        try {

            const data = await loginAsSubUser(arg);
            
            saveAccessToken(data.token);
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
)
// get Me thunk for all type of user:
export const getMeThunk = createAsyncThunk(
    "auth/getMe",
    async(_,thunkAPI) => {
        const token = loadAccessToken();
        try {
            const response = await fetch(`${API_BASE_URL}/auth/me`, {
                    method: 'GET',
                    headers:  {
                        authorization: `bearer ${token}`
                        }
            });
            const data = await response.json();
            if (!response.ok) {
                console.log(data.msg);
                return thunkAPI.rejectWithValue(data.msg);
            }

            
            console.log(data.data);
            return data.data;
            
        } catch(err) {
            clearAccessToken();
            return thunkAPI.rejectWithValue(err)

        }
    }
);



//  Create authSlice:
const initialState = {
    accessToken:loadAccessToken()??null,
    current_user:null,   
    isloading: false,
    isGettingMe:false,
    isAuthenticated:!!loadAccessToken(),
    error:null
    
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout(state) {
            clearAccessToken();
            state.accessToken = null;
            state.current_user = null;
            state.isloading = false;
            state.isGettingMe = false;
            state.isAuthenticated = false;
            state.error = null;

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginManagerUser.pending, (state) => {  
                state.isloading = true;             
                state.error = null;
                state.isGettingMe = false;
            })

            .addCase(loginManagerUser.fulfilled, (state,action) => {
                state.accessToken = loadAccessToken();
                state.current_user = action.payload.data;
                state.isloading = false;
                state.isGettingMe = false;
                state.isAuthenticated = true;
                state.error = null;
            })

            .addCase(loginManagerUser.rejected, (state, action) => {
                state.accessToken = null;
                state.current_user = null;
                state.isloading = false;
                state.isGettingMe = false;
                state.isAuthenticated = false;
                state.error = action.payload;
            })
            .addCase(loginSubUser.pending, (state) => {
                state.isloading = true;             
                state.error = null;
                state.isGettingMe = false;
            })
            .addCase(loginSubUser.fulfilled, (state, action) => {
                state.accessToken = loadAccessToken();
                state.current_user = action.payload.data;
                state.isloading = false;
                state.isGettingMe = false;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(loginSubUser.rejected, (state, action) => {
                state.accessToken = null;
                state.current_user = null;
                state.isloading = false;
                state.isGettingMe = false;
                state.isAuthenticated = false;
                state.error = action.payload;
            })
            .addCase(getMeThunk.pending, (state) => {
                state.isloading = false;  
                state.isGettingMe = true;           
                state.error = null;
            })
            .addCase(getMeThunk.fulfilled, (state, action) => {
                state.accessToken = loadAccessToken();
                state.current_user = action.payload;
                state.isloading = false;
                state.isGettingMe = false; 
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(getMeThunk.rejected, (state, action) => {
                state.accessToken = null;
                state.current_user = null;
                state.isloading = false;
                state.isGettingMe = false; 
                state.isAuthenticated = false;
                state.error = action.payload;
            })

    }
   
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
