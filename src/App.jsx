import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import News from './pages/News/News';
import Shop from './pages/Shop/Shop';
import Contacts from './pages/Contacts/Contacts';
import { CartProvider } from './context/CartContext';
import './App.css';

const theme = {
  token: {
    colorPrimary: '#8B5CF6',
    colorBgContainer: '#000000',
    colorText: '#ffffff',
    borderRadius: 8,
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/news" element={<News />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </ConfigProvider>
  );
}

export default App;