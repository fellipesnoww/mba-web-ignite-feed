import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment(comment) {
        onDeleteComment(comment)
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://avatars.githubusercontent.com/u/48105194?v=4" 
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fellipe Neves</strong>
                            <time dateTime="11 de Maio às 22:11">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={() => handleDeleteComment(content)} title='Deletar comentario'>
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