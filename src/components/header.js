//Meu Arquivo de CSS
import styles from '../assets/css/Header.module.css';

const Header = () =>{
    return(
        <header>
            <div className={styles.container}>
                <img className={styles.whidth__img} src="./art_logo.svg" alt="Logo Arte de rua" />
                <h1 className={styles.h1__style}>Art</h1>
            </div>
            <p>Exibições de arte urbana</p>
            <hr />
            <ul className={styles.ul__style}>
                <li>Home</li>
                <li>Projetos</li>
                <li>Artistas</li>
                <li>Contato</li>
            </ul>
            <div className={styles.main__bg}>
            
            </div>
        </header>
    )
};

export default Header;