import {API_BASE_URL} from '../../../utils/constant.js';

export const loginAsSubUser = async (payload) => {
   const response = await fetch(`${API_BASE_URL}/auth/sub/login`, {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
        console.log(data.msg);
        throw new Error(data.msg || "Fail to login sub user") ;
    }

    return data;

}