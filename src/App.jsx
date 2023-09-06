import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
// import Navbar from "./components/Navbar";
import Horoscope from "./pages/horoscope/Horoscope";
import ZodiacSign from "./pages/horoscope/components/ZodiacSign";
import NotFound from "./pages/notFound/NotFound";
import Services from "./pages/services/Services";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horoscope" element={<Horoscope />}>
          <Route path=":zodiacSign" element={<ZodiacSign />} />
        </Route>
        <Route path="/our-services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
