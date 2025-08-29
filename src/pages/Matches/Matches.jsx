import React, { useState } from 'react';
import { Tabs, Card, Badge, Button } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaTrophy } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Matches.css';

const Matches = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingMatches = [
    {
      id: 1,
      date: '2025-01-20',
      time: '18:00',
      tournament: 'DreamLeague',
      opponent: 'OG',
      opponentLogo: 'https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg',
      game: 'Dota 2',
      format: 'BO3'
    },
    {
      id: 2,
      date: '2025-01-25',
      time: '20:00',
      tournament: 'ESL Pro League',
      opponent: 'NAVI',
      opponentLogo: 'https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg',
      game: 'CS2',
      format: 'BO1'
    },
    {
      id: 3,
      date: '2025-01-30',
      time: '16:00',
      tournament: 'Major Championship',
      opponent: 'Vitality',
      opponentLogo: 'https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg',
      game: 'CS2',
      format: 'BO3'
    }
  ];

  const recentMatches = [
    {
      id: 4,
      date: '2025-01-15',
      time: '19:00',
      tournament: 'The International',
      opponent: 'PSG.LGD',
      opponentLogo: 'https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg',
      game: 'Dota 2',
      format: 'BO5',
      result: 'WIN',
      score: '3-2'
    },
    {
      id: 5,
      date: '2025-01-10',
      time: '21:00',
      tournament: 'ESL Pro League',
      opponent: 'FaZe',
      opponentLogo: 'https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg',
      game: 'CS2',
      format: 'BO3',
      result: 'WIN',
      score: '2-1'
    },
    {
      id: 6,
      date: '2025-01-05',
      time: '17:00',
      tournament: 'DPC League',
      opponent: 'Secret',
      opponentLogo: 'https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg',
      game: 'Dota 2',
      format: 'BO2',
      result: 'LOSS',
      score: '0-2'
    }
  ];

  const MatchCard = ({ match, index, isUpcoming = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="match-card-wrapper"
    >
      <Card className={`match-card ${isUpcoming ? 'upcoming' : 'completed'}`}>
        <div className="match-header">
          <div className="tournament-info">
            <Badge 
              text={match.game} 
              color={match.game === 'Dota 2' ? '#8B5CF6' : '#10B981'} 
            />
            <span className="tournament-name">{match.tournament}</span>
          </div>
          <div className="match-format">{match.format}</div>
        </div>

        <div className="match-content">
          <div className="teams">
            <div className="team team-spirit">
              <div className="team-logo">TS</div>
              <span className="team-name">Team Spirit</span>
            </div>
            
            <div className="vs-section">
              <span className="vs">VS</span>
              {!isUpcoming && match.result && (
                <div className={`result ${match.result.toLowerCase()}`}>
                  <span className="score">{match.score}</span>
                  <span className="result-text">{match.result}</span>
                </div>
              )}
            </div>
            
            <div className="team opponent">
              <div 
                className="team-logo opponent-logo"
                style={{ backgroundImage: `url(${match.opponentLogo})` }}
              ></div>
              <span className="team-name">{match.opponent}</span>
            </div>
          </div>

          <div className="match-footer">
            <div className="match-time">
              <FaCalendarAlt className="icon" />
              <span>{match.date}</span>
              <FaClock className="icon" />
              <span>{match.time}</span>
            </div>
            {isUpcoming && (
              <Button className="watch-button btn-primary" size="small">
                Смотреть
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );

  const tabItems = [
    {
      key: 'upcoming',
      label: (
        <span>
          <FaCalendarAlt style={{ marginRight: '8px' }} />
          Предстоящие
        </span>
      ),
      children: (
        <div className="matches-grid">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="matches-swiper"
          >
            {upcomingMatches.map((match, index) => (
              <SwiperSlide key={match.id}>
                <MatchCard match={match} index={index} isUpcoming={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )
    },
    {
      key: 'recent',
      label: (
        <span>
          <FaTrophy style={{ marginRight: '8px' }} />
          Недавние
        </span>
      ),
      children: (
        <div className="matches-grid">
          {recentMatches.map((match, index) => (
            <MatchCard key={match.id} match={match} index={index} />
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="matches-page">
      <div className="matches-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="matches-hero-content"
          >
            <h1 className="matches-hero-title">Матчи</h1>
            <p className="matches-hero-description">
              Следите за расписанием и результатами матчей Team Spirit
            </p>
          </motion.div>
        </div>
      </div>

      <section className="matches-section section">
        <div className="container">
          <Tabs
            defaultActiveKey="upcoming"
            items={tabItems}
            onChange={setActiveTab}
            className="matches-tabs"
            size="large"
            centered
          />
        </div>
      </section>
    </div>
  );
};

export default Matches;