import { PencilLine } from "@phosphor-icons/react";
import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://i.pinimg.com/originals/bd/a5/be/bda5be61177acdb5fd46c3219f8b81a0.jpg"
                />
            
            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/26611668?v=4" 
                    alt="profile_img"
                />

                <strong>Rodrigo Baggio</strong>
                <span>DEV Fullstack</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}