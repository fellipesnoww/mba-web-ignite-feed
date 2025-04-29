import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: "paragraph" | "link";
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    content: Content[];
    publishedAt: Date;
}

interface PostProps {
    post: PostType;
}

export function Post({post}: PostProps) {
    const [comments, setComments] = useState(['Post muito bacana hein!']);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
    const publishDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event: FormEvent){
       event.preventDefault(); 

       setComments([...comments, newCommentText]);

       setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(comment: string){
        const filteredComments = comments.filter(c => c !== comment);
        setComments(filteredComments);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormated} 
                    dateTime={post.publishedAt.toISOString()}
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

                {post.content.map(line => {
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
                    required
                    onInvalid={handleNewCommentInvalid}
                />

                <footer>
                    <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
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