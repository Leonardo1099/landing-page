import "./style.css";

function Contact() {
  return (
    <section id="section-contact">
      <h2 className="h2-default">Contato</h2>
      <div>
        <p className="p-default">
          Ainda está com dúvidas sobre nossos eventos ?
        </p>
        <p className="p-default">
          Entre em contato conosco adicionando seus dados abaixo.
        </p>
      </div>
      <div>
        <form>
          <fieldset className="fieldset-form">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>
          </fieldset>

          <button className="button-default" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
