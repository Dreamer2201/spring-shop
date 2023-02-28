import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import AboutCompanyPage from './pages/about/AboutPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import './App.css';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import Layout from './Layout/Layout';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutCompanyPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
