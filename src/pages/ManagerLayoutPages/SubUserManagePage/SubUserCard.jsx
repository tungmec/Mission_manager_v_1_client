import styles  from './SubUserManagePage.module.css';
export const SubUserCard = (props) => {
    const {user} = props;

    return (
        <div className={styles.subUserCard}>
           <h3><strong>User name: {user.user_name}</strong></h3>
           <p>Type: {user.user_type}</p>
           <p>Role: {user.role}</p>
          

        </div>
    )

}