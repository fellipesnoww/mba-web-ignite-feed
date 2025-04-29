import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(comment: string) {
        onDeleteComment(comment)
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://avatars.githubusercontent.com/u/48105194?v=4" 
                alt=''
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
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}