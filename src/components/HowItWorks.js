import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Product Info',
      image: 'https://picsum.photos/200/200?random=13',
      description: 'Provide detailed information about your luxury item'
    },
    {
      id: 2,
      title: 'List for Approval',
      image: 'https://picsum.photos/200/200?random=14',
      description: 'Submit your listing for our expert review'
    },
    {
      id: 3,
      title: 'Upload Photos',
      image: 'https://picsum.photos/200/200?random=15',
      description: 'Add high-quality images showcasing your item'
    },
    {
      id: 4,
      title: 'We Review It',
      image: 'https://picsum.photos/200/200?random=16',
      description: 'Our team carefully reviews and approves your listing'
    },
    {
      id: 5,
      title: 'Go Live!',
      image: 'https://picsum.photos/200/200?random=17',
      description: 'Your item goes live for auction bidding'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="how-it-works-title">How It Works</h2>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.id} className="step-wrapper">
              <div className="step-card">
                <div className="step-number">{step.id}</div>
                <div className="step-image-container">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="step-image"
                  />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="step-arrow">
                  <IoArrowForward className="arrow-icon" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
