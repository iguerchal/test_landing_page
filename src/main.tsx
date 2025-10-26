
  import { createRoot } from "react-dom/client";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import App from "./App";
  import Catalogue from "./pages/Catalogue";
  import "./index.css";
  import "./styles/globals.css";

  function Root() {
    return (
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </Router>
    );
  }

  createRoot(document.getElementById("root")!).render(<Root />);
  