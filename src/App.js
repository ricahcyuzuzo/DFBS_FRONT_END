import "./App.css";
import Body from "./components/exchangeTarif/body/Body";
import ExchangeTarif from "./components/exchangeTarif/ExchangeTarif";
import Header from "./components/header/Header";
import NavbarHome from "./components/Navbar/NavbarHome";

function App() {
  return (
    <div className="App">
      <NavbarHome />
      <Header />
      <ExchangeTarif />
      <Body />
    </div>
  );
}

export default App;
