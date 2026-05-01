import styles from './Message.module.css';

export const Message = ({children, msgPosition, msgAlign}) => {
    const possition = (['center_position', 'left_position', 'right_position'].includes(msgPosition))? msgPosition : 'center_position';
    const align = (['center_alg', 'left', 'right'].includes(msgAlign))? msgAlign : 'center';

   

  

    return (
        <div className ={[styles.message, styles[possition]].join(" ")}
        >
            <div className={styles.chat_container}>
                <div className={[styles.msg_show, styles[align]].join(" ")}  >
                {children}
                </div>
            </div>
           
            
        </div>
    )
}