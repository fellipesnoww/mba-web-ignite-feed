import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({author, content, publishedAt}) {
    const [comments, setComments] = useState(['Post muito bacana hein!']);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
    const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(){
       event.preventDefault(); 

       setComments([...comments, newCommentText]);

       setNewCommentText('');
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value);
    }

    function deleteComment(comment){
        const filteredComments = comments.filter(c => c !== comment);
        setComments(filteredComments);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormated} 
                    dateTime={publishedAt.toISOString()}
                >
                        {publishDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">{' '}jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto{' '}</a>
                    <a href="">#nlw{' '}</a>
                    <a href="">#rocketseat</a>
                </p>

                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    }

                    return <p key={line.content}><a href='#'>{line.content}</a></p>
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment'
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return (
                        <Comment
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    );
}