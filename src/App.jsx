import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import QrCode from "./projects/QrCode/QrCode";
import BlogPage from "./projects/BlogCard/pages/BlogPage";
import RecipePage from "./projects/RecipePage/pages/RecipePage";
import SocialLinksPage from "./projects/SocialLinks/pages/SocialLinksPage";
import ProductCard from "./projects/ProductCard/pages/ProductCardPage";
import FourCardsPage from "./projects/FourCards/pages/FourCardsPage";
import TestimonialGridPage from "./projects/TestimonialsGrid/pages/TestimonialGridPage";
import MeetLandingPage from "./projects/MeetLanding/pages/MeetLandingPage";

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
            <Route path="/recipes" element={<RecipePage />} />
            <Route path="/productcard" element={<ProductCard />} />
            <Route path="/fourcards" element={<FourCardsPage />} />
            <Route path="/testimonials" element={<TestimonialGridPage />} />
            <Route path="/meetlanding" element={<MeetLandingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
