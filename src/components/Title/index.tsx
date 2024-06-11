import { useState } from "react";
import './style.css'

function Form() {
  //const name: string;
  const [name, setName] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [adress, setAdress] = useState<string>('');
  const [tel, setTel] = useState<number | string>('');
  const [email, setEmail] = useState<string>('');

  return (
    <>
      <section id="section-form">
        <form action="submit">
          <fieldset className="fieldset-form">
            <label htmlFor="name">Nome:</label>
            <input
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="cpf">CPF:</label>
            <input
              name="cpf"
              type="text"
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="tel">Telefone:</label>
            <input
              name="tel"
              type="number"
              onChange={(e) => setTel(Number(e.target.value))}
              value={tel}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="adress">Endereço:</label>
            <input
              name="adress"
              type="text"
              onChange={(e) => setAdress(e.target.value)}
              value={adress}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </fieldset>

          <button type="submit">Enviar</button>
        </form>

        {/* Tag usada para manter a mesma estrutura de texto digitada   */}
        {/* <pre>
          {`
          Seu nome é ${name}

          Seu cpf é ${cpf}

          Seu telefone é ${tel}

          Seu endereço é ${adress}

          Seu email é ${email}`}
        </pre> */}

        <div></div>
      </section>
    </>
  );
}

export default Form;
