import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/shared/Navbar";
import { Footer } from "./components/shared/Footer";
import { Home } from "./pages/Home";
import { Workload } from "./pages/Workload";
import { Solutions } from "./pages/Solutions";
import { Tools } from "./pages/Tools";
import { Guide } from "./pages/Guide";
import { Resources } from "./pages/Resources";
import { ScrollToTop } from "./components/shared/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workload" element={<Workload />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
