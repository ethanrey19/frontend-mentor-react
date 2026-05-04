import { HashRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import QrCode from "./projects/QrCode/QrCode";
import BlogPage from "./projects/BlogCard/pages/BlogPage";
import SocialLinksPage from "./projects/SocialLinks/pages/SocialLinksPage";
import "./index.css";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qrcode" element={<QrCode />} />
            <Route path="/blogcard" element={<BlogPage />} />
            <Route path="/sociallinks" element={<SocialLinksPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
