import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'Car',
      description: 'Luxury Vehicles',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Watch',
      description: 'Timepieces',
      image: 'https://content.thewosgroup.com/productimage/408101674490/408101674490_1.png?impolicy=hero-rolex'
    },
    {
      id: 3,
      title: 'New Car',
      description: 'Latest Models',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      title: 'Whisky',
      description: 'Premium Spirits',
      image: 'https://www.suntoryglobalspirits.com/sites/default/files/styles/article_card_small/public/2024-03/Jim%20Beam%20black_whisky%20bottle.png.webp?itok=FRoBfZJ1'
    }
  ];

  return (
    <section className="categories">
      <div className="categories-container">
        <div className="categories-header">
          <h2 className="categories-title">Luxury Collections</h2>
          <p className="categories-subtitle">Discover our curated selection of premium items</p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="category-img"
                  onLoad={() => console.log('Image loaded:', category.title)}
                  onError={() => console.log('Image failed to load:', category.title)}
                />
                <div className="category-overlay"></div>
              </div>
              <div className="category-content">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
