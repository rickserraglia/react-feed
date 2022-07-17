// css scoped (o css funcionará apenas na página que importar esse css) (.module.css)
// diferente do import './file.css' que importa o arquivo css e aplica em todos os arquivos
import styles from './Header.module.css';
// importando imagem:
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
	return (
		<header className={styles.header}>
			<img src={igniteLogo} alt="Logotipo do Ignite" />
			<strong>Ignite Feed</strong>
		</header>
	);
}