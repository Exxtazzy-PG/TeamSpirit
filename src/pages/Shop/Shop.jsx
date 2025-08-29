import React, { useState } from 'react';
import { Row, Col, Card, Button, Badge, Drawer, List, InputNumber } from 'antd';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaTrash, FaStar } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import './Shop.css';

const { Meta } = Card;

const Shop = () => {
  const {
    cartItems,
    cartVisible,
    setCartVisible,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemsCount,
    clearCart
  } = useCart();

  const products = [
    {
      id: 1,
      name: 'Футболка Team Spirit',
      price: 2500,
      image: 'https://images.pexels.com/photos/9834731/pexels-photo-9834731.jpeg',
      category: 'clothing',
      rating: 5,
      description: 'Официальная футболка команды Team Spirit'
    },
    {
      id: 2,
      name: 'Худи с логотипом',
      price: 4500,
      image: 'https://images.pexels.com/photos/9834731/pexels-photo-9834731.jpeg',
      category: 'clothing',
      rating: 5,
      description: 'Теплое худи с фирменным логотипом'
    },
    {
      id: 3,
      name: 'Игровая мышь',
      price: 7500,
      image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
      category: 'gear',
      rating: 4,
      description: 'Профессиональная игровая мышь'
    },
    {
      id: 4,
      name: 'Механическая клавиатура',
      price: 12000,
      image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg',
      category: 'gear',
      rating: 5,
      description: 'Механическая клавиатура для профессиональной игры'
    },
    {
      id: 5,
      name: 'Кепка Team Spirit',
      price: 1800,
      image: 'https://images.pexels.com/photos/9834731/pexels-photo-9834731.jpeg',
      category: 'accessories',
      rating: 4,
      description: 'Стильная кепка с вышивкой'
    },
    {
      id: 6,
      name: 'Игровые наушники',
      price: 8900,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      category: 'gear',
      rating: 5,
      description: 'Профессиональные наушники для киберспорта'
    }
  ];

  const ProductCard = ({ product, index }) => (
    <Col key={product.id} xs={24} sm={12} lg={8} xl={6}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.03 }}
      >
        <Card
          className="product-card"
          cover={
            <div className="product-image-container">
              <img 
                alt={product.name} 
                src={product.image}
                className="product-image"
              />
              <div className="product-overlay">
                <Button 
                  className="quick-buy-btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Добавить в корзину
                </Button>
              </div>
            </div>
          }
          hoverable
        >
          <Meta
            title={<span className="product-name">{product.name}</span>}
            description={
              <div className="product-info">
                <p className="product-description">{product.description}</p>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`star ${i < product.rating ? 'filled' : ''}`}
                    />
                  ))}
                </div>
                <div className="product-footer">
                  <span className="product-price">{product.price.toLocaleString()} ₽</span>
                  <Button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    В корзину
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
    <div className="shop-page">
      <div className="shop-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="shop-hero-content"
          >
            <h1 className="shop-hero-title">Магазин</h1>
            <p className="shop-hero-description">
              Официальная продукция Team Spirit
            </p>
            <Button
              className="cart-toggle-btn"
              icon={<FaShoppingCart />}
              onClick={() => setCartVisible(true)}
              size="large"
            >
              <Badge count={getCartItemsCount()} offset={[10, 0]}>
                Корзина
              </Badge>
            </Button>
          </motion.div>
        </div>
      </div>

      <section className="products-section section">
        <div className="container">
          <Row gutter={[24, 24]}>
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </Row>
        </div>
      </section>

      <Drawer
        title="Корзина"
        placement="right"
        size="large"
        onClose={() => setCartVisible(false)}
        open={cartVisible}
        className="cart-drawer"
        footer={
          <div className="cart-footer">
            <div className="cart-total">
              Итого: {getCartTotal().toLocaleString()} ₽
            </div>
            <div className="cart-actions">
              <Button onClick={clearCart} danger>
                Очистить корзину
              </Button>
              <Button className="btn-gold" size="large">
                Оформить заказ
              </Button>
            </div>
          </div>
        }
      >
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <FaShoppingCart size={64} className="empty-cart-icon" />
            <p>Корзина пуста</p>
          </div>
        ) : (
          <List
            dataSource={cartItems}
            renderItem={(item) => (
              <List.Item className="cart-item">
                <div className="cart-item-content">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-price">{item.price.toLocaleString()} ₽</p>
                    <div className="cart-item-quantity">
                      <InputNumber
                        min={1}
                        max={99}
                        value={item.quantity}
                        onChange={(value) => updateQuantity(item.id, value)}
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <div className="cart-item-total">
                      {(item.price * item.quantity).toLocaleString()} ₽
                    </div>
                    <Button
                      danger
                      type="text"
                      icon={<FaTrash />}
                      onClick={() => removeFromCart(item.id)}
                      size="small"
                    />
                  </div>
                </div>
              </List.Item>
            )}
          />
        )}
      </Drawer>
    </div>
  );
};

export default Shop;