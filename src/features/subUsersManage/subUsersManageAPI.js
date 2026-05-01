import {API_BASE_URL} from '../../utils/constant.js';
import {loadAccessToken} from '../../utils/sessionStorage.js';

export const getAllSubUsersOfCurrentManagerUser = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/manageruser/getallsub`, {
            method: 'GET',
            headers: {
                "authorization": `Bearer ${loadAccessToken()}`
            }
        })

        const data = await response.json();
        if (!response.ok) {
            console.log("Fault",data.msg);

        }
        return data;

    } catch (err) {
        console.log("Fail to get all sub user :")
        console.log(err.message);
        return null;
        
    }
    
}

export const createSubUser = async (payload) => {
    try {
        console.log(JSON.stringify(payload));
        const response = await fetch(`${API_BASE_URL}/manageruser/createsub`, {
            method:'POST',
            headers: {
                "authorization": `Bearer ${loadAccessToken()}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload) 
        });

        const data = await response.json();
        if (!response.ok) {
            console.log("Fail to create new sub user");
            console.log(data.msg);
           
        }

         return data;

    } catch (err) {
        console.log("Fail to create new sub user");
        console.log(err.message);
        return null;
    }
}