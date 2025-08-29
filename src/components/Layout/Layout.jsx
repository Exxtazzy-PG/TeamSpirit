import React from 'react';
import { Layout as AntLayout } from 'antd';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

const { Content } = AntLayout;

const Layout = ({ children }) => {
  return (
    <AntLayout className="layout">
      <Header />
      <Content className="layout-content">
        {children}
      </Content>
      <Footer />
    </AntLayout>
  );
};

export default Layout;