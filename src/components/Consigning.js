import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import './Consigning.css';

const Consigning = () => {
  const auctionItems = [
    {
      id: 1,
      title: 'Ferrari SF90',
      description: 'Ferrari\'s plug-in hybrid supercar offering 986 horsepower with cutting-edge performance and futuristic styling.',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Supercar'
    },
    {
      id: 2,
      title: 'Rolex Submariner',
      description: 'Iconic dive watch known for its durability, water resistance, and timeless design. A favorite among collectors and enthusiasts.',
      image: 'https://www.londonjewelers.com/pub/media/catalog/product/r/_/r_3120.pa0000346138_soldier_black_01.jpg',
      category: 'Timepiece'
    },
    {
      id: 3,
      title: 'Scotch Whisky | Ballantine\'s',
      description: 'A refined blend of aged malt and grain whiskies, known for its smooth flavor profile and rich heritage in Scotch whisky tradition.',
      image: 'https://mansionz.in/cdn/shop/files/BALLANTINEFINESCOTCH.jpg?v=1709104885',
      category: 'Spirits'
    }
  
  ];

  return (
    <section className="consigning">
      <div className="consigning-container">
        <h2 className="consigning-title">Consigning Now</h2>
        
        <div className="auction-grid">
          {auctionItems.map((item) => (
            <div key={item.id} className="auction-card">
              <div className="auction-image">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="auction-img"
                  onLoad={() => console.log('Auction image loaded:', item.title)}
                  onError={() => console.log('Auction image failed to load:', item.title)}
                />
                <div className="auction-overlay">
                  <span className="auction-category">{item.category}</span>
                </div>
              </div>
              
              <div className="auction-content">
                <h3 className="auction-title">{item.title}</h3>
                <p className="auction-description">{item.description}</p>
                
                <button className="bid-button">
                  <span>Bid Now</span>
                  <IoArrowForward className="bid-arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consigning;
