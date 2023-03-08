//Meu Arquivo de CSS
import style from '../assets/css/Contact.module.css';

//Meus import
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value)
    };

    console.log(name);
  return (
    <form>
        <div>
            <label htmlFor="name">Nome: </label>
            <input type="text" name="name" placeholder="Seu nome aqui" onChange={handleName} />
        </div>
        <div>
            <label>
                <span>E-mail</span>
                <input type="email" name="email" placeholder="Seu E-mail aqui"  />
            </label>
        </div>
        <input type="submit" value="Enviar" />
    </form>
  )
};

export default Contact;
