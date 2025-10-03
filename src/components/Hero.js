import React from 'react';
import './Hero.css';

const Hero = () => {
  const luxuryCars = [
    {
      id: 1,
      name: 'Ferrari SF90',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Lamborghini Huracán',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Porsche 911',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'McLaren 720S',
      image: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop&crop=center'
    },
    {
      id: 5,
      name: 'Aston Martin DB11',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop&crop=center'
    },
    {
      id: 6,
      name: 'Bentley Continental',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&crop=center'
    }
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Club Billionaire</span>
          </h1>
          <p className="hero-subtitle">
            Experience the pinnacle of luxury, where exclusivity meets excellence
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary">
              Explore Collection
            </button>
            <button className="cta-button secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-cars-container">
          <div className="hero-cars-grid">
            {luxuryCars.map((car, index) => (
              <div key={car.id} className={`hero-car-item car-${index + 1}`}>
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="hero-car-image"
                />
                <div className="hero-car-overlay">
                  <span className="hero-car-name">{car.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
