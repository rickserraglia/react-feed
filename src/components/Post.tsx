import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { PostProps } from '../App';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export interface commentProps {
	id: number;
	content: string;
	author: {name: string, avatar: string};
	date: string;
}

export const Post = ({ id, author, content, publishedAt }: PostProps) => {
	const publishedDateFormatted = format(publishedAt, "d' de 'LLLL' às 'HH':'mm'h'", { locale: ptBR });
	const publishedDistanceToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

	const [comments, setComments] = useState([
		{
			id: 1,
			content: 'Pô Maikão, sensacional!',
			author: {
					name: 'Henrique Serraglia',
					avatar: 'https://github.com/rickserraglia.png'
			},
			date: 'Cerca de 2h atrás'
		}, 
		{
			id: 2,
			content: 'Muito legal, parabéns!',
			author: {
					name: 'Diego Fernandes',
					avatar: 'https://github.com/diego3g.png'
			},
			date: 'Cerca de 1h atrás'
		}, 
		{
			id: 3,
			content: 'Boa sorte meu querido!',
			author: {
					name: 'Mayk Brito',
					avatar: 'https://github.com/maykbrito.png'
			},
			date: 'Cerca de 30 minutos atrás'
		}, 
	]);
	const [newCommentText, setNewCommentText] = useState('');

	const handleCreateNewComment = (e: React.SyntheticEvent) => {
		e.preventDefault();
		setComments([...comments,
			{
				id: comments.length,
				content: newCommentText,
				author: {
					name: 'Henrique Serraglia',
					avatar: 'https://github.com/rickserraglia.png'
				},
				date: 'Cerca de 30 minutos atrás'
			}
		]);
		setNewCommentText('');
	}

	const handleNewCommentChange = (e: React.BaseSyntheticEvent) => {
		e.target.setCustomValidity('');
		setNewCommentText(e.target.value);
	}

	const handleNewCommentInvalid = (e: React.BaseSyntheticEvent) => {
		e.target.setCustomValidity('Este é um campo obrigatório!');
	}

	const deleteComment = (commentToDelete: commentProps) => {
		const commentsWithoutDeletedOne = comments.filter((comment) => {
			return (comment.id !== commentToDelete.id);
		});
		setComments(commentsWithoutDeletedOne);
	}

	const isNewCommentEmpty = newCommentText.length <= 0;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
					{publishedDistanceToNow}
				</time>
			</header>
			<div className={styles.content}>
				{content.map(line => {
					if(line.type === 'paragraph') {
						return <p key={line.content}>{line.content}</p>;
					} else if (line.type === 'link') {
						return  <p key={line.content}><a href="#">{line.content}</a></p>;
					}
				})}
			</div>
			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea
					onChange={handleNewCommentChange}
					value={newCommentText}
					name="comment"
					placeholder="Deixe um comentário"
					onInvalid={handleNewCommentInvalid}
					required
				/>
				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
				</footer>
			</form>
			<div className={styles.commentList}>
				{comments.map(comment => {
					return (
					<Comment
						key={comment.id}
						comment={comment}
						onDeleteComment={deleteComment}
					/>
					)
				})}
			</div>
		</article>
	)
}