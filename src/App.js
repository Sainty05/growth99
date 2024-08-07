import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Card from "./Pages/Card/Card";
import Home from "./Pages/Home/Home";
import OwnerMessage from "./Pages/OwnerMessage/OwnerMessage";
import PatientComponent from "./Pages/PatientComponent/PatientComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <PatientComponent />
      <OwnerMessage />
      <Footer />
    </div>
  );
}

export default App;
