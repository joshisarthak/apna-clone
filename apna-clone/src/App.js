import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JobListingPage from "./pages/JobListingPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<JobListingPage />} />
          <Route path="/job/:id" element={<JobDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
