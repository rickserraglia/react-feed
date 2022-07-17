import { ThumbsUp, Trash } from 'phosphor-react';
import { ReactElement, useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

import { commentProps } from './Post';

interface CommentProps {
	comment: commentProps,
	onDeleteComment: (comment: commentProps) => void;
}

interface CommentComponent {
	(props: CommentProps): ReactElement;
}

export const Comment: CommentComponent = ({ comment, onDeleteComment}) => {

	const [likeCount, setLikeCount] = useState(0);

	const handleDeleteComment = () => {
		onDeleteComment(comment);
	}

	const handleLikeComment = () => {
		setLikeCount((state) => {
			return state + 1;
		});
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src={comment.author.avatar} />
			<div className={styles.commentBox}>
				<div className={styles.commentText}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>{comment.author.name}</strong>
							<time title="5 de julho às 07:38" dateTime="2022-07-05 07:38:16">{comment.date}</time>
						</div>
						<button title="Deletar comentário">
							<Trash size={24} onClick={handleDeleteComment} />
						</button>
					</header>
					<p>{ comment.content }</p>
				</div>
				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}