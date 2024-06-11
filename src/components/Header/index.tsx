import './style.css'

function Header() {
  return (
    <header>
        <img src="src\assets\logo.jpg" alt="logo do evento AnimeConnect"/>

        <nav>
            <ul>
                <li><a href="">Sobre</a></li>
                <li><a href="">Cronograma</a></li>
                <li><a href="">Ingressos</a></li>
                <li><a href="">Localização</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header