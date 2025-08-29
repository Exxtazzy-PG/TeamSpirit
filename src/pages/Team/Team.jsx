import React from 'react';
import { Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import { FaTwitch, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Team.css';

const { Meta } = Card;

const Team = () => {
  const players = [
    {
      id: 1,
      nickname: 'TORONTOTOKYO',
      name: 'Александр Хереш',
      role: 'Carry',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      socials: {
        twitch: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      nickname: 'collapse',
      name: 'Магомед Халилов',
      role: 'Midlaner',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      socials: {
        twitch: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      nickname: 'YATORO',
      name: 'Илья Мулярчук',
      role: 'Carry',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      socials: {
        twitch: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      nickname: 'Mira',
      name: 'Мирослав Колпаков',
      role: 'Support',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
      socials: {
        twitch: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 5,
      nickname: 'Miposhka',
      name: 'Ярослав Наймушин',
      role: 'Support',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      socials: {
        twitch: '#',
        instagram: '#',
        twitter: '#'
      }
    }
  ];

  const staff = [
    {
      id: 6,
      nickname: 'Silent',
      name: 'Айрат Газеев',
      role: 'Coach',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      socials: {
        twitch: '#',
        instagram: '#',
        twitter: '#'
      }
    }
  ];

  const PlayerCard = ({ player, index }) => (
    <Col key={player.id} xs={24} sm={12} lg={8} xl={6}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Card
          className="player-card"
          cover={
            <div className="player-image-container">
              <img 
                alt={player.nickname} 
                src={player.image}
                className="player-image"
              />
              <div className="player-overlay">
                <div className="social-links">
                  <a href={player.socials.twitch} className="social-link twitch">
                    <FaTwitch />
                  </a>
                  <a href={player.socials.instagram} className="social-link instagram">
                    <FaInstagram />
                  </a>
                  <a href={player.socials.twitter} className="social-link twitter">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          }
          hoverable
        >
          <Meta
            title={<span className="player-nickname">{player.nickname}</span>}
            description={
              <div className="player-info">
                <p className="player-name">{player.name}</p>
                <p className="player-role">{player.role}</p>
              </div>
            }
          />
        </Card>
      </motion.div>
    </Col>
  );

  return (
    <div className="team-page">
      <div className="team-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="team-hero-content"
          >
            <h1 className="team-hero-title">Наша команда</h1>
            <p className="team-hero-description">
              Познакомьтесь с легендарным составом Team Spirit - 
              чемпионами The International 2021
            </p>
          </motion.div>
        </div>
      </div>

      <section className="players-section section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Игроки
          </motion.h2>
          
          <Row gutter={[24, 24]}>
            {players.map((player, index) => (
              <PlayerCard key={player.id} player={player} index={index} />
            ))}
          </Row>
        </div>
      </section>

      <section className="staff-section section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Тренерский штаб
          </motion.h2>
          
          <Row gutter={[24, 24]} justify="center">
            {staff.map((member, index) => (
              <PlayerCard key={member.id} player={member} index={index} />
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Team;