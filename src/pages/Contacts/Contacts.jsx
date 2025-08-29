import React from 'react';
import { Row, Col, Card, Form, Input, Button, Space } from 'antd';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaYoutube, 
  FaTwitch, 
  FaInstagram, 
  FaTwitter,
  FaTiktok,
  FaVk
} from 'react-icons/fa';
import './Contacts.css';

const { TextArea } = Input;

const Contacts = () => {
  const [form] = Form.useForm();

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Адрес',
      content: 'Москва, Россия',
      color: '#8B5CF6'
    },
    {
      icon: <FaPhone />,
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      color: '#10B981'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@teamspirit.gg',
      color: '#FFD700'
    }
  ];

  const socialLinks = [
    { icon: FaYoutube, name: 'YouTube', color: '#FF0000', url: '#', followers: '1.2M' },
    { icon: FaTwitch, name: 'Twitch', color: '#9146FF', url: '#', followers: '800K' },
    { icon: FaInstagram, name: 'Instagram', color: '#E4405F', url: '#', followers: '650K' },
    { icon: FaTwitter, name: 'Twitter', color: '#1DA1F2', url: '#', followers: '900K' },
    { icon: FaTiktok, name: 'TikTok', color: '#000000', url: '#', followers: '2.1M' },
    { icon: FaVk, name: 'VKontakte', color: '#4C75A3', url: '#', followers: '1.5M' },
  ];

  const onFinish = (values) => {
    console.log('Form submitted:', values);
    // Here you would typically send the data to your backend
    form.resetFields();
  };

  return (
    <div className="contacts-page">
      <div className="contacts-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="contacts-hero-content"
          >
            <h1 className="contacts-hero-title">Контакты</h1>
            <p className="contacts-hero-description">
              Свяжитесь с Team Spirit для сотрудничества и партнерства
            </p>
          </motion.div>
        </div>
      </div>

      <section className="contacts-section section">
        <div className="container">
          <Row gutter={[40, 40]}>
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="section-subtitle">Свяжитесь с нами</h2>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  className="contact-form"
                  size="large"
                >
                  <Form.Item
                    name="name"
                    label="Имя"
                    rules={[{ required: true, message: 'Введите ваше имя' }]}
                  >
                    <Input placeholder="Ваше имя" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: 'Введите email' },
                      { type: 'email', message: 'Введите корректный email' }
                    ]}
                  >
                    <Input placeholder="your@email.com" />
                  </Form.Item>

                  <Form.Item
                    name="subject"
                    label="Тема"
                    rules={[{ required: true, message: 'Введите тему сообщения' }]}
                  >
                    <Input placeholder="Тема сообщения" />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label="Сообщение"
                    rules={[{ required: true, message: 'Введите сообщение' }]}
                  >
                    <TextArea 
                      placeholder="Ваше сообщение..." 
                      rows={6}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      className="submit-btn"
                      size="large"
                      block
                    >
                      Отправить сообщение
                    </Button>
                  </Form.Item>
                </Form>
              </motion.div>
            </Col>

            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="section-subtitle">Контактная информация</h2>
                <Space direction="vertical" size="large" className="contact-info-list">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="contact-info-item"
                    >
                      <Card className="contact-info-card">
                        <div className="contact-info-content">
                          <div 
                            className="contact-icon"
                            style={{ color: info.color }}
                          >
                            {info.icon}
                          </div>
                          <div className="contact-details">
                            <h3 className="contact-title">{info.title}</h3>
                            <p className="contact-content">{info.content}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </Space>

                <div className="social-section">
                  <h2 className="section-subtitle">Социальные сети</h2>
                  <div className="social-grid">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href={social.url}
                          className="social-card"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          style={{ '--hover-color': social.color }}
                        >
                          <div className="social-icon">
                            <Icon />
                          </div>
                          <div className="social-info">
                            <span className="social-name">{social.name}</span>
                            <span className="social-followers">{social.followers}</span>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Contacts;