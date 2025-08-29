import React from 'react';
import { Layout, Row, Col, Space } from 'antd';
import { 
  FaYoutube, 
  FaTwitch, 
  FaInstagram, 
  FaTwitter, 
  FaTiktok,
  FaVk
} from 'react-icons/fa';
import './Footer.css';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  const socialLinks = [
    { icon: FaYoutube, color: '#FF0000', url: '#' },
    { icon: FaTwitch, color: '#9146FF', url: '#' },
    { icon: FaInstagram, color: '#E4405F', url: '#' },
    { icon: FaTwitter, color: '#1DA1F2', url: '#' },
    { icon: FaTiktok, color: '#000000', url: '#' },
    { icon: FaVk, color: '#4C75A3', url: '#' },
  ];

  return (
    <AntFooter className="footer">
      <div className="container">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <div className="footer-logo">
              <div className="logo-text">
                <span className="team">TEAM</span>
                <span className="spirit">SPIRIT</span>
              </div>
              <p className="footer-slogan">Born to Win</p>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <h3 className="footer-title">Контакты</h3>
            <div className="contact-info">
              <p>Email: info@teamspirit.gg</p>
              <p>Тел: +7 (495) 123-45-67</p>
              <p>Адрес: Москва, Россия</p>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <h3 className="footer-title">Социальные сети</h3>
            <Space size="large" className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--hover-color': social.color }}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </Space>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>&copy; 2025 Team Spirit. Все права защищены.</p>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;