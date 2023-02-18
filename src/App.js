import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import WomenPage from './pages/womenPage/WomenPage';
import ChildPage from './pages/childPage/ChildPage';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path='/child' element={<ChildPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
