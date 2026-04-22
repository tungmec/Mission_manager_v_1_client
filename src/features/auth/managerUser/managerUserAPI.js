import {API_BASE_URL} from '../../../utils/constant.js';


export const createManagerUserAPI = async (payload) => {
    const response = await fetch(`${API_BASE_URL}/auth/manager/create`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
        console.log(data.msg);
        throw new Error(data.msg || "Fail to create manager user") ;
    }

    return data.data;

}

export const loginAsManagerUser = async (payload) => {
    const response = await fetch(`${API_BASE_URL}/auth/manager/login`, {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
        console.log(data.msg);
        throw new Error(data.msg || "Fail to login manager user") ;
    }

    return data;

}