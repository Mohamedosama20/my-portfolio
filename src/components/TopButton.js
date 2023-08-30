import React, { useState, useEffect } from 'react';
import '../styles/BackToTopButton.css'; 
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    // Function to handle the scroll event
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const shouldShowButton = scrollTop > 100; // Show the button after scrolling 100 pixels
      setIsVisible(shouldShowButton);
    };
  
    // Add event listener to handle scroll
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Function to scroll back to top
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Add smooth scrolling effect
      });
    };
  
    return (
      <button
        className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <FaArrowUp/>
      </button>
    );
  };
  
  export default BackToTopButton;