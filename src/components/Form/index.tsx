import { useState } from "react";
import './style.css'



function Form() {
  // const name: string;
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [tel, setTel] = useState<number | string>("");
  const [country, setCountry] = useState<string>("");

  return (
    <>
      <section id="section-form">
      <h2 className="h2-default">Inscreva-se na nossa Newsletter!</h2>
      <p className="p-default">Receba atualizações exclusivas sobre o evento, descontos especiais e notícias em primeira mão.</p>
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
            <label htmlFor="Adress">Endereço:</label>
            <input
              name="Adress"
              type="text"
              onChange={(e) => setAdress(e.target.value)}
              value={adress}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="country">Cidade:</label>
            <input
              name="country"
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
          </fieldset>

          <button className="button-default" type="submit">Enviar</button>
        </form>

        {/* Tag usada para manter a mesma estrutura de texto digitada */}
        {/* <pre>
          {`
            Seu nome é ${name}
            Seu cpf é ${cpf}
            Você mora no endereço ${adress}
            Sua cidade é ${country}
            Seu telefone é ${tel}`}
        </pre> */}

        <div></div>
      </section>
    </>
  );
}

export default Form;