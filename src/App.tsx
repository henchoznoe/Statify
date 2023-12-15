import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Header from './components/header/Header.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import { AuthProvider } from './shared/context/AuthContext.tsx';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer/Footer.tsx';
import Stats from './pages/Stats.tsx';

const App = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header/>
        <main className="min-h-[calc(100vh-78px)] w-full">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/stats/:mode" element={<Stats/>}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
            <Route path="*" element={<Home/>}/>
          </Routes>
          <ToastContainer/>
        </main>
        <Footer/>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;