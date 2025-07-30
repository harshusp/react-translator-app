import { Routes, Route, Link } from "react-router-dom";
import Translator from "./pages/Translator";
import RandomString from "./pages/RandomString";

export default function App() {
  return (
    <div className="p-4">
      <nav className="flex gap-4 mb-6 text-blue-500">
        <Link to="/">Translator</Link>
        <Link to="/random">Random String</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Translator />} />
        <Route path="/random" element={<RandomString />} />
      </Routes>
    </div>
  );
}
