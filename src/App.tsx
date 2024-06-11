import "./App.css";
import Form from "./components/Title";

function App() {
  return (
    <div
      style={{
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        width : "100vw",
      }}
    >
      <Form />
    </div>
  );
}

export default App;

import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {

  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}>

      <Header/>

      <Hero/>

      <Form/>

    </div>
  );

}

export default App;
