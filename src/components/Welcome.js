import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section className="welcome">
      <div className="welcome-container">
        <h2 className="welcome-title">WELCOME</h2>
        
        <div className="welcome-content">
          <p className="welcome-text">
            Club billionaire is a unique one stop Auction Platform where Buyers and Sellers will be able to view, ask questions, bid live and buy direct from the seller in a safe and transparent manner all in one platform from anywhere in the world at their own leisure and convenience. Club billionaire will eliminate the need to advertise at multiple websites, store numerous passwords, and remove the stress of tracking sales at different locations.
          </p>
          
          <p className="welcome-text">
            Club billionaire gives registered users the ability to view their selling lots, their watching lots, their bids, and all bidding history in one place within their own bidder profile—giving them control to amend and monitor auctions easily and safely.
          </p>
          
          <p className="welcome-text">
            Our goal is to cut out the middleman, eliminate dealership costs and greedy dealers. No hidden charges. No buyers' premiums. No hammer premiums.
          </p>
        </div>
        
        <div className="welcome-cta">
          <button 
            className="auction-button" 
            onClick={() => navigate('/signup')}
          >
            <span>Enter Auction Area</span>
            <IoArrowForward className="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
