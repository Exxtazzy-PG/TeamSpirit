import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import './Header.css';

const { Header: AntHeader } = Layout;

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: '/', label: 'Home', path: '/' },
    { key: '/team', label: 'Team', path: '/team' },
    { key: '/news', label: 'News', path: '/news' },
    { key: '/shop', label: 'Shop', path: '/shop' },
    { key: '/contacts', label: 'Contacts', path: '/contacts' },
  ];

  const renderMenuItems = () => {
    return menuItems.map(item => ({
      key: item.key,
      label: (
        <Link 
          to={item.path}
          onClick={() => setMobileMenuVisible(false)}
          className={location.pathname === item.path ? 'active-link' : ''}
        >
          {item.label}
        </Link>
      ),
    }));
  };

  return (
    <>
      <AntHeader className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/">
              <div className="logo-text">
                <span className="team">TEAM</span>
                <span className="spirit">SPIRIT</span>
              </div>
            </Link>
          </motion.div>

          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={renderMenuItems()}
            className="desktop-menu"
          />

          <Button
            className="mobile-menu-button"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuVisible(true)}
            type="text"
          />
        </div>
      </AntHeader>

      <Drawer
        title={
          <div className="mobile-logo">
            <span className="team">TEAM</span>
            <span className="spirit">SPIRIT</span>
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        className="mobile-drawer"
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          theme="dark"
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={renderMenuItems()}
          style={{ border: 'none', background: 'transparent' }}
        />
      </Drawer>
    </>
  );
};

export default Header;