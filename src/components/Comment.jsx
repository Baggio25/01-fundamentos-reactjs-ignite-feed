
import { ThumbsUp, Trash } from '@phosphor-icons/react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/26611668?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rodrigo Baggio</strong>
                            <time title='11 de maio as 11:13'  dateTime='2023-06-14 15:49:20'>
                                Cerca de 1h atrás
                            </time>        
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}