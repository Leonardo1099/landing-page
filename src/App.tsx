import "./App.css";
import Contato from "./components/Contato";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
      <Sobre/>
      <Contato/>
      <Form />
    </div>
  );
}

export default App;