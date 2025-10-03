import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Managed Services',
      description: 'We offer a range of managed services to help you manage your business. Our managed services include comprehensive support, monitoring, and optimization to ensure your operations run smoothly.',
      image: 'https://e-u-p.net/wp-content/uploads/2023/11/it-services.jpg'
    },
    {
      id: 2,
      title: 'Finance Services',
      description: 'We offer financial services to help you manage your business. Our financial services include invoicing, payment processing, and more to streamline your financial operations.',
      image: 'https://cdn.prod.website-files.com/67b7abfbb037e687d0a415ec/67db95411df971225cd735e7_emerging_technologies_in_finance.webp'
    },
    {
      id: 3,
      title: 'Payment Services',
      description: 'We offer secure payment gateways with advanced encryption and fraud detection. Our payment services ensure that your transactions are safe and seamless.',
      image: 'https://i0.wp.com/blogrevamp.cashfree.com/wp-content/uploads/2021/09/integrated-payment-systems.png?fit=5835%2C3001&ssl=1'
    },
    {
      id: 4,
      title: 'Shipping Services',
      description: 'We offer reliable shipping services with tracking and insurance options. Our shipping services ensure that your packages are delivered safely and on time.',
      image: 'https://www.basenton.com/wp-content/uploads/2024/02/1695866757293923.jpg'
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-img"
                />
                <div className="service-overlay"></div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
