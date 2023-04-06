import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./css/App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Ratings from "./Components/Ratings";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BookingManager from "./Components/BookingMenager";
import AddBooking from "./Components/AddBooking";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<BookingManager />} />
          <Route path="/addbooking" element={<AddBooking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
