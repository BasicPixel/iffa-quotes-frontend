import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddQuote from "./components/AddQuote";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="container px-2 md:p-0 md:w-2/3 lg:w-1/2 bg-slate-100">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddQuote />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
