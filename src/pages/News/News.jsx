import React, { useState } from 'react';
import { Row, Col, Card, Button, Tag, Input } from 'antd';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaEye, FaSearch } from 'react-icons/fa';
import './News.css';

const { Meta } = Card;
const { Search } = Input;

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const newsData = [
    {
      id: 1,
      title: 'Team Spirit готовится к новому сезону DPC',
      description: 'Команда начинает подготовку к предстоящему сезону Dota Pro Circuit с обновленной стратегией.',
      image: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
      category: 'dota2',
      date: '2025-01-15',
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: 'Новый состав CS2 показал отличные результаты',
      description: 'Команда по Counter-Strike 2 продемонстрировала впечатляющую игру в последних турнирах.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      category: 'cs2',
      date: '2025-01-12',
      views: 890,
      featured: false
    },
    {
      id: 3,
      title: 'Интервью с капитаном команды',
      description: 'Эксклюзивное интервью с игроком о планах команды и подготовке к турниру.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      category: 'organization',
      date: '2025-01-10',
      views: 2100,
      featured: false
    },
    {
      id: 4,
      title: 'Обновление мерча Team Spirit',
      description: 'В продажу поступила новая коллекция фирменной одежды и аксессуаров команды.',
      image: 'https://images.pexels.com/photos/9834731/pexels-photo-9834731.jpeg',
      category: 'organization',
      date: '2025-01-08',
      views: 670,
      featured: false
    },
    {
      id: 5,
      title: 'Победа на ESL Pro League',
      description: 'Team Spirit одержала убедительную победу в четвертьфинале ESL Pro League.',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
      category: 'cs2',
      date: '2025-01-05',
      views: 1560,
      featured: true
    },
    {
      id: 6,
      title: 'Анализ патча 7.35 в Dota 2',
      description: 'Как новые изменения в игре повлияют на стратегию команды в предстоящих матчах.',
      image: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
      category: 'dota2',
      date: '2025-01-03',
      views: 980,
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'Все новости' },
    { key: 'dota2', label: 'Dota 2' },
    { key: 'cs2', label: 'CS2' },
    { key: 'organization', label: 'Организация' }
  ];

  const filteredNews = newsData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const NewsCard = ({ news, index }) => (
    <Col key={news.id} xs={24} sm={12} lg={8}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.03 }}
      >
        <Card
          className={`news-card ${news.featured ? 'featured' : ''}`}
          cover={
            <div className="news-image-container">
              <img 
                alt={news.title} 
                src={news.image}
                className="news-image"
              />
              <div className="news-overlay">
                <Tag 
                  color={
                    news.category === 'dota2' ? 'purple' :
                    news.category === 'cs2' ? 'green' : 'gold'
                  }
                  className="category-tag"
                >
                  {categories.find(cat => cat.key === news.category)?.label}
                </Tag>
              </div>
            </div>
          }
          hoverable
        >
          <Meta
            title={<span className="news-title">{news.title}</span>}
            description={
              <div className="news-content">
                <p className="news-description">{news.description}</p>
                <div className="news-footer">
                  <div className="news-meta">
                    <span className="news-date">
                      <FaCalendarAlt className="icon" />
                      {news.date}
                    </span>
                    <span className="news-views">
                      <FaEye className="icon" />
                      {news.views}
                    </span>
                  </div>
                  <Button size="small" className="read-more-btn">
                    Читать далее
                  </Button>
                </div>
              </div>
            }
          />
        </Card>
      </motion.div>
    </Col>
  );

  return (
    <div className="news-page">
      <div className="news-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="news-hero-content"
          >
            <h1 className="news-hero-title">Новости</h1>
            <p className="news-hero-description">
              Будьте в курсе последних новостей Team Spirit
            </p>
          </motion.div>
        </div>
      </div>

      <section className="news-section section">
        <div className="container">
          <div className="news-filters">
            <div className="categories">
              {categories.map(category => (
                <Button
                  key={category.key}
                  className={`category-btn ${selectedCategory === category.key ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.key)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
            
            <Search
              placeholder="Поиск новостей..."
              allowClear
              size="large"
              prefix={<FaSearch />}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="news-search"
              style={{ maxWidth: 400 }}
            />
          </div>

          <Row gutter={[24, 24]}>
            {filteredNews.map((news, index) => (
              <NewsCard key={news.id} news={news} index={index} />
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default News;