import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import AboutCompanyPage from './pages/about/AboutPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import HousesPage from './pages/houses/HousesPage';
import DuplexesPage from './pages/duplexes/DuplexesPage';
import './App.css';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import Layout from './Layout/Layout';
import SingleHousePage from './pages/singleHousePage/SingleHousePage';
import News from './components/news/News';
import NewsPage from './pages/newsPage/NewsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutCompanyPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/houses' element={<HousesPage />} />
        <Route path='/houses/:id' element={<SingleHousePage />} />
        <Route path='/duplexes' element={<DuplexesPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
