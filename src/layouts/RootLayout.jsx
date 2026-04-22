

import { Outlet} from 'react-router-dom';
import styles from './layout.module.css';

export const RootLayout = () => {
  
        return (
        <div className={styles.rootlayout} >
            <main className={styles.rootmain}>
                <Outlet />
            </main>
        </div>
    )
    
}
