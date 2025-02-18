import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Events from "./pages/Events";

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/events">Đi đến Events</Link>
      </nav> */}
      <Routes>
        {/* Thay đổi element để sử dụng component Events */}
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
