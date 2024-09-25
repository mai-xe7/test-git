import React from 'react';
import {FaChartLine, FaBookOpen, FaRegClock, FaUserGraduate } from 'react-icons/fa'; 
import '../Services.css'; 
const servicesData = [
  {
    icon: <FaChartLine size={40} />, 
    title: 'Personalized Learning Paths',
    description: 'Tailor your educational journey with personalized learning paths that align with your career goals and interests. Our platform assesses your skills and preferences to recommend a curated selection of courses, ensuring an engaging and efficient learning experience.',
  },
  {
    icon: <FaBookOpen size={40} />, 
    title: 'On-Demand Course Library',
    description: 'Access a vast library of on-demand courses at any time, from anywhere. Whether you’re looking to learn a new skill or deepen your knowledge, our extensive collection of video lectures, reading materials, and quizzes is available 24/7.',
  },
  {
    icon: <FaRegClock size={40} />, 
    title: 'Flexible Learning Options',
    description: 'Enjoy the flexibility of self-paced learning with options to fit your schedule. Choose from various formats such as video lectures, written materials, and interactive exercises to customize your learning experience.',
  },
  {
    icon: <FaUserGraduate size={40} />, 
    title: 'Progress Tracking and Analytics',
    description: 'Monitor your progress with comprehensive tracking tools and analytics. Stay motivated with detailed insights into your learning achievements, areas for improvement, and overall progress.',
  },
];

const Services = () => {
  return (
    <section className="services" id="Services" data-aos="fade-up"
    data-aos-duration="3000">
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
