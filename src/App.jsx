import { HashRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import QrCode from "./projects/QrCode/QrCode";
import "./index.css";

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/qrcode" element={<QrCode />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
