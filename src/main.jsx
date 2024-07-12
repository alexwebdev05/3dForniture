import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from './pages/Home/home.jsx'
import Shop from './pages/exhibitor/exhibitor.jsx'
import Object from './pages/object/object.jsx'
import AboutUs from './pages/aboutUs/aboutUs.jsx';

import './main.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/object" element={<Object />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);