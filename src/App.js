import "./App.css";
import Footer from "./components/footer";
import Menu from "./components/menu";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routers />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
