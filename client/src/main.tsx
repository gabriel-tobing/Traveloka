import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import Layouts from "./common/components/layouts";

import HomePage from "./pages/home/page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Layouts>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layouts>
  </Router>
);
