import {API_BASE_URL} from '../../utils/constant.js';
import {loadAccessToken} from '../../utils/sessionStorage.js';

export const getAllRoles = async () => {
    try {
            const response = await fetch(`${API_BASE_URL}/manageruser/getallroles`, {
                method: 'GET',
                headers: {
                    "authorization": `Bearer ${loadAccessToken()}`
                }
            });

            const data = await response.json();
            console.log(data);
            return data;
    } catch (err) {
        console.log(err.message);
        return null;
    }
}

// create role function :

export const createRole = async (payload) => {
    try {
        const response = await fetch(`${API_BASE_URL}/manageruser/createrole`, {
            method: 'POST',
            headers: {
                "authorization": `Bearer ${loadAccessToken()}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        console.log(data);
        return data;

    } catch (err) {
        console.log(err.message);
        return null;
    }
}
