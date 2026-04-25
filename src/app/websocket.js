import {io, Socket} from 'socket.io-client';
import {SOCKET_URL} from '../utils/constant.js';
import {loadAccessToken} from '../utils/sessionStorage.js';


export const socket = io(SOCKET_URL, {
    autoConnect:false,
    auth: {
        token: loadAccessToken()
    }
});