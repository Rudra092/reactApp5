import './App.css';
/*router*/
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './components/header';
import AppFooter from './components/footer';
import AppServicesInner from './components/services-inner';
import AppAboutInner from './components/about-inner';
import Home from './components/home';
function App() {
  return (
    <div className="App">
    <Router>
    <AppHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-inner" element={<AppAboutInner/>} />
        <Route path="/services-inner" element={<AppServicesInner/>} />
      </Routes>
      <AppFooter/>
    </Router>  
    </div>
  );
}

export default App;
