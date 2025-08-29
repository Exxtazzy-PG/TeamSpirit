import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: 'Чемпионы',
      description: 'The International 2021',
      color: '#FFD700'
    },
    {
      icon: <FaUsers />,
      title: '5 игроков',
      description: 'Профессиональная команда',
      color: '#8B5CF6'
    },
    {
      icon: <FaCalendarAlt />,
      title: '10+ лет',
      description: 'Опыта в киберспорте',
      color: '#10B981'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <img 
            src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg" 
            alt="Gaming Background"
            className="hero-bg-image"
          />
        </div>
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <div className="hero-logo">
              <span className="team-large">TEAM</span>
              <span className="spirit-large">SPIRIT</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-title"
            >
              BORN TO WIN
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-description"
            >
              Легендарная киберспортивная команда, покорившая вершины мирового киберспорта
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="hero-buttons"
            >
              <Link to="/team">
                <Button size="large" className="btn-primary">
                  О команде
                </Button>
              </Link>
              <Link to="/matches">
                <Button size="large" className="btn-gold">
                  Смотреть матчи
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Наши достижения
          </motion.h2>
          
          <Row gutter={[32, 32]}>
            {achievements.map((achievement, index) => (
              <Col key={index} xs={24} md={8}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="achievement-card">
                    <div 
                      className="achievement-icon"
                      style={{ color: achievement.color }}
                    >
                      {achievement.icon}
                    </div>
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Featured Content */}
      <section className="featured section">
        <div className="container">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="featured-content"
              >
                <h2 className="featured-title">
                  Чемпионы The International 2021
                </h2>
                <p className="featured-description">
                  Team Spirit стала чемпионом The International 2021 по Dota 2, 
                  обыграв PSG.LGD в грандфинале и завоевав призовой фонд в размере 
                  $10,130,623. Это была историческая победа для российского киберспорта.
                </p>
                <Link to="/team">
                  <Button size="large" className="btn-primary">
                    Узнать больше
                  </Button>
                </Link>
              </motion.div>
            </Col>
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="featured-image"
              >
                <img
                  src="https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg"
                  alt="Team Spirit Champions"
                  className="featured-img"
                />
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Home;