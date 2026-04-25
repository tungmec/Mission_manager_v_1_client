import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {socket} from '../../../app/websocket.js';
import styles from './ManagerPublicChatPage.module.css';


export const ManagerPublicChatPage = () => {

    const [isConnected, setIsConnected] = useState(false);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");

    const token = useSelector((state) => state.auth?.accessToken??null);

    useEffect(()=>{
            socket.auth = {
                token:token
            }

            socket.connect();

            return () => {
                socket.disconnect();
            }

        }
        ,[]
    );


    return (
        <div className={styles.public_chatpage} >
            <h1>Chat</h1>
            <div className={styles.public_chatshow} >

            </div>
            <label htmlFor="Chat_input">Type message here:</label>
            <textarea 
                className={styles.message_input}
                name="" 
                id="Chat_input" 
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                
            ></textarea>
            <h3>{messageInput} </h3>

            <button
                className={styles.send_button}
            >
                Send message
            </button>

        </div>
    )
}