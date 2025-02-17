import React, { useEffect, useState } from 'react';
import logo from '../images/logo.jpg';
import { useNavigate, useLocation } from 'react-router-dom';
import featureIcon1 from '../images/feature1.png';
import featureIcon2 from '../images/feature2.png';
import featureIcon3 from '../images/feature3.png';
import facebookIcon from '../images/facebook.png';
import twitterIcon from '../images/twitter.png';
import instagramIcon from '../images/instagram.png';
import linkedinIcon from '../images/linkedin.png';
import goal from '../images/goal.png';
import Carousel from 'react-bootstrap/Carousel';

const Homepage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (scrollTop === 0 && location.hash) {
      navigate('/');
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop, navigate, location]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <header className="bg-blue-900 shadow-md py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10">
          <img src={logo} alt="TotalFootball Logo" className="h-10 cursor-pointer" onClick={() => navigate('/')} />
          <nav>
            <ul className="flex space-x-6 text-white text-lg font-semibold">
              <li><a onClick={() => navigate('/live-match')} className="hover:text-gray-300 cursor-pointer">Live match</a></li>
              <li><a onClick={() => navigate('/#carousel')} className="hover:text-gray-300 cursor-pointer">Dashboard</a></li>
              <li><a onClick={() => navigate('/training')} className="hover:text-gray-300 cursor-pointer">Training</a></li>
              <li><a onClick={() => navigate('/nutrients')} className="hover:text-gray-300 cursor-pointer">Nutrients</a></li>
              <li><a onClick={() => navigate('/injury')} className="hover:text-gray-300 cursor-pointer">Injury</a></li>
              <li><a onClick={() => navigate('/fitness')} className="hover:text-gray-300 cursor-pointer">Fitness</a></li>
            </ul>
          </nav>
          <div className="space-x-4">
            <button onClick={() => navigate('/login')} className="px-4 py-2 border border-blue-500 text-white rounded-lg">Login</button>
            <button onClick={() => navigate('/register')} className="px-5 py-3 bg-blue-900 text-white text-lg rounded-full transition-transform transform hover:scale-105">Join now</button>
          </div>
        </div>
      </header>

      <main className="py-10">
      <section className="flex items-center justify-between px-12 py-8 mt-[-50px]">
        {/* Left Section - Text Content */}
        <div className="w-1/2">
          <h1 className="text-[300px] font-bold text-gray-900 font-serif">
            Welcome to your professional community
          </h1>
          <p className="text-4xl text-gray-700 mt-4">
            Discover new opportunities, connect with professionals, and grow your network.
          </p>
          <button 
            onClick={() => navigate('/register')} 
            className="mt-6 px-6 py-3 bg-blue-900 text-white text-lg rounded-full transition-transform transform hover:scale-105">
            Join now
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-1/2 flex justify-end">
          <img src={goal} alt="goal" className="w-4/5 max-w-lg" />
        </div>
      </section>



        <section className="bg-blue-700 text-white text-center py-10">
          <h3 className="text-2xl font-semibold">Overview</h3>
          <h1 className="text-4xl font-bold mt-2">Fueling India’s Athletic Future</h1>
          <p className="text-lg mt-4">Our vision is a future where athletes thrive through innovative fitness strategies...</p>
        </section>
      </main>

      <div id="carousel" className="py-10">
        <Carousel>
          <Carousel.Item>
            <img src={featureIcon1} alt="First slide" className="mx-auto" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={featureIcon2} alt="Second slide" className="mx-auto" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={featureIcon3} alt="Third slide" className="mx-auto" />
          </Carousel.Item>
        </Carousel>
      </div>

      <footer className="bg-gray-200 text-center py-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#"><img src={facebookIcon} alt="Facebook" className="h-8" /></a>
          <a href="#"><img src={twitterIcon} alt="Twitter" className="h-8" /></a>
          <a href="#"><img src={instagramIcon} alt="Instagram" className="h-8" /></a>
          <a href="#"><img src={linkedinIcon} alt="LinkedIn" className="h-8" /></a>
        </div>
        <p className="text-gray-600">&copy; 2024 TotalFootball. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Homepage;
