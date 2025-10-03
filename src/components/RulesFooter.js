import React from 'react';
import { FaCheck, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './RulesFooter.css';

const RulesFooter = () => {
  const sellerBenefits = [
    'No Commission charges',
    'Eliminate time wasters',
    'No more Brokers fees',
    'No middlemen',
    'No more need to sell on Sale of return basis',
    'Facility to Speak direct with Buyers via the platform',
    'Reach a global audience to achieve best prices',
    'Fast payment turnaround 7-10 days',
    'List more than 1 item',
    'Genuine Buyers'
  ];

  const buyerBenefits = [
    'Clear Set Fees to use the platform to BID',
    'Safe & Secure platform to Bid',
    'Deliverable Items',
    'A one stop Shop to Buy',
    'Tax / Vat free purchase opportunities',
    'Rare and Unique products',
    'More Choices',
    'New & Used Cars',
    'Verified items listed for sale',
    'Strict and Select items only for sale',
    'Seller verification and ownerships checks'
  ];

  return (
    <footer className="rules-footer">
      <div className="rules-footer-container">
        <h2 className="rules-title">Rules For Auction</h2>
        
        <div className="rules-content">
          <div className="rules-logo">
            <div className="logo">
              <div className="logo-monogram">
                <span className="c-letter">C</span>
          
                <span className="b-letter">B</span>
              </div>
              <div className="logo-text">
                <span className="club-text">CLUB</span>
                <span className="billionaire-text">BILLIONAIRE</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="footer-social-icons">
              <a href="#" className="footer-social-link">
                <FaLinkedin className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <FaFacebook className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <FaInstagram className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <FaXTwitter className="footer-social-icon" />
              </a>
            </div>
          </div>
          
          <div className="rules-columns">
            <div className="rules-column">
              <h3 className="column-title">For the Sellers</h3>
              <ul className="benefits-list">
                {sellerBenefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <FaCheck className="check-icon" />
                    <span className="benefit-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rules-column">
              <h3 className="column-title">For the Buyers</h3>
              <ul className="benefits-list">
                {buyerBenefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <FaCheck className="check-icon" />
                    <span className="benefit-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RulesFooter;
