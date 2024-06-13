import "./App.css";
import "./animation.css"
import Contato from "./components/Contact";
import Cronograma from "./components/Cronograma";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Localization from "./components/Localization";
import Sobre from "./components/Sobre";
import Tickets from "./components/Tickets";


function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        gap: "2rem",
        backgroundColor: "#00bfff",
      }}
    >
      <Header />
      <Hero />
      <Tickets />
      <Cronograma/>
      <Localization/>
      <Contato/>
      <Sobre/>
      <Form />
    </div>
  );
}

export default App;