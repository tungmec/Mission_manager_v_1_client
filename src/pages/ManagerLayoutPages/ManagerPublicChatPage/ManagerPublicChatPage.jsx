import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {socket} from '../../../app/websocket.js';
import styles from './ManagerPublicChatPage.module.css';
import {Message} from '../../../component/common/chatElement/Message/Message.jsx';


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
        // Functions for socket listener  
            const handleConneted = () => {
                setIsConnected(true);
            }

            const hanldeConnectError = (error) => {
                console.log(error.mesage);

            }

            const hanleDisconnect = () => {
                setIsConnected(false);
            }
            
            const handleMessageReceive = (data) => {
                setMessages((prev) => {
                    return [...prev, data];
                })

            }
        //  Asign socket even listener:
            socket.on("connect", handleConneted);
            socket.on("connect-error", hanldeConnectError);
            socket.on("disconnect", hanleDisconnect);
           
            socket.on("publicchat:received", handleMessageReceive);


            return () => {

                socket.off("publicchat:received", handleMessageReceive);
                socket.off("connect-error", hanldeConnectError);
                socket.off("disconnect", hanleDisconnect);

                socket.off("publicchat:received", handleMessageReceive);

                socket.disconnect();
            }

        }
        ,[]
    );


    const sendMessageHandler =  () => {
        socket.emit("publicchat:send", {
            message: messageInput
        });
        // setMessageInput("");

    }

    return (
        <div className={styles.public_chatpage} >
            <h1>Chat</h1>
            <div className={styles.public_chatshow} >
                {messages.map((message) => {
                    return (
                        <div>
                            <p> {message.sender} send message:  </p>
                             <Message
                                msgPosition = "left_position"
                            >
                                
                                <h5>{message.message}</h5>
                            </Message>
                        </div>
                       
                    )
                })}
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
                onClick={async() => {
                    await sendMessageHandler();
                    setMessageInput("");
                
                }}
            >
                Send message
            </button>

        </div>
    )
}