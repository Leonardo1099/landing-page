import "./App.css";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Header from "./components/Header";


function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Form /> 
      <Hero/>
      <Header />
    </div>
  );
}

export default App;
