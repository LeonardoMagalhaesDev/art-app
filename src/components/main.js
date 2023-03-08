//Meu Arquivo de CSS
import main from '../assets/css/Main.css';

// mus Arquivo de IMAGEM
import G2 from '../assets/images/g_2.jpg';
import G3 from '../assets/images/g_3.jpg';
import G4 from '../assets/images/g_4.jpg';
import G5 from '../assets/images/g_5.jpg';
import G6 from '../assets/images/g_6.jpg';
import G7 from '../assets/images/g_7.jpg';
import G8 from '../assets/images/g_8.jpg';


const Main = () => {
    return(
        <main>
        <h2>Artes em Destaques</h2>
        <img src={G2} alt="Arte de Rua" />
        <img src={G3} alt="Arte de Rua" />
        <img src={G4} alt="Arte de Rua" />
        <img src={G5} alt="Arte de Rua" />
        <img src={G6} alt="Arte de Rua" />
        <img src={G7} alt="Arte de Rua" />
        <img src={G8} alt="Arte de Rua" />
      </main>
    )
};

export default Main;