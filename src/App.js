import Table from './components/Table/Table';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Table />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
