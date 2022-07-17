import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

export interface PostProps {
	id: number;
	author: {avatarUrl: string, name: string, role: string };
	content: {type: string, content: string}[];
	publishedAt: Date;
}

const posts: PostProps[] = [
	{
		id: 3,
		author: {avatarUrl: 'https://github.com/rickserraglia.png', name: 'Henrique Serraglia', role: 'Web Developer'},
		content: [
			{type: 'paragraph', content: 'Fala galeraa 👋'},
			{type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
			{type: 'link', content: 'jane.design/doctorcare'}
		],
		publishedAt: new Date('2022-07-05T06:36:18'),
	},
	{
		id: 2,
		author: {avatarUrl: 'https://github.com/diego3g.png', name: 'Diego Fernandes', role: 'CTO @Rocketseat'},
		content: [
			{type: 'paragraph', content: 'Fala galeraa 👋'},
			{type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
			{type: 'link', content: 'jane.design/doctorcare'}
		],
		publishedAt: new Date('2022-07-04T22:08:32'),
	},
	{
		id: 1,
		author: {avatarUrl: 'https://github.com/maykbrito.png', name: 'Mayk Brito', role: 'Educator @Rocketseat'},
		content: [
			{type: 'paragraph', content: 'Fala galeraa 👋'},
			{type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
			{type: 'link', content: 'jane.design/doctorcare'}
		],
		publishedAt: new Date('2022-07-04T20:49:03'),
	},
];

export const App = () => {
  return (
	<div>
		<Header />
		<div className={styles.wrapper}>
			<Sidebar />
			<main>
				{posts.map(post => {
					return (
						<Post
							key={post.id}
							id={post.id}
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
						/>
					);
				})}
			</main>
		</div>
	</div>
  );
}
