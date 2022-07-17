import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
	// true é o valor default para hasBorder, então caso não seja passado nada, ele assumirá o "true"
	return (
		<img
			className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
			{...props}
		/>
	)
}