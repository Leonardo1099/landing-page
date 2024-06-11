import { useState } from "react";
import './style.css'

function Form() {
  // const name = 'Chloe';
  // const name: string;
  const [name, setName] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [age, setAge] = useState<number | string>('');
  const [cep, setCep] = useState<string>('');

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
            <label htmlFor="lastname">Sobrenome:</label>
            <input
              name="lastname"
              type="text"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
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
            <label htmlFor="age">Idade:</label>
            <input
              name="age"
              type="number"
              onChange={(e) => setAge(Number(e.target.value))}
              value={age}
            />
            {/* OU setIdade(+e.target.value) para converter string para number*/}
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="cep">CEP:</label>
            <input
              name="cep"
              type="text"
              onChange={(e) => setCep(e.target.value)}
              value={cep}
            />
          </fieldset>

          <button type="submit">Enviar</button>
        </form>

        {/* Tag usada para manter mesma a estrutura de texto digitada */}
        {/* <pre>
        {`
          Seu nome é ${name}
          Seu sobrenome é ${lastname}
          Seu CPF é ${cpf}
          Sua idade é ${age}
          Seu CEP é ${cep}
        `}
        {"Seu nome é " + nome + ", que legal"}
        </pre> */}
       
        <div></div>
      </section>
    </>
  );
}

export default Form;
