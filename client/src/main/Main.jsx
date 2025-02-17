import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg';
import profile from '../images/profile.webp';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import featureIcon1 from '../images/feature1.png';
import featureIcon2 from '../images/feature2.png';
import featureIcon3 from '../images/feature3.png';

export default function Main() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate('/');
  };

  const handleClick = () => {
    navigate('/playerdetails');
  };

  const handleResume = () => {
    navigate('/resume');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-section")) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-[#033452] shadow-md py-4 w-full">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-5">
          <img src={logo} alt="TotalFootball Logo" className="h-10 mr-5" />
          <div className="flex gap-5 flex-grow justify-center">
            <nav>
              <ul className="flex gap-5 text-white text-base">
                <li><a className="hover:text-gray-400 cursor-pointer" onClick={() => navigate('/live-match')}>Live match</a></li>
                <li><a className="hover:text-gray-400 cursor-pointer" onClick={() => navigate('/#carousel')}>Dashboard</a></li>
                <li><a className="hover:text-gray-400 cursor-pointer" onClick={() => navigate('/training')}>Training</a></li>
                <li><a className="hover:text-gray-400 cursor-pointer" onClick={() => navigate('/nutrients')}>Nutrients</a></li>
                <li><a className="hover:text-gray-400 cursor-pointer" onClick={() => navigate('/injury')}>Injury</a></li>
                <li><a className="hover:text-gray-400 cursor-pointer" onClick={() => navigate('/fitness')}>Fitness</a></li>
              </ul>
            </nav>
          </div>
          <div className="relative">
            <button 
              className="p-2 rounded-full bg-transparent border-none cursor-pointer" 
              onClick={() => setShowMenu(prevState => !prevState)}
            >
              <img src={profile} alt="Profile" className="h-10 w-10 rounded-full object-cover" />
            </button>

            {showMenu && (
              <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-md shadow-lg w-40 p-3">
                <button 
                  onClick={handleClick} 
                  className="w-full text-left py-2 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button 
                  onClick={handleLogout} 
                  className="w-full text-left py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
                <button 
                  onClick={handleResume} 
                  className="w-full text-left py-2 hover:bg-gray-100"
                >
                  Resume
                </button>
              </div>
            )}
          </div>

        </div>
      </header>

      <div className="flex h-[600px] bg-gray-100">
        <div className="w-1/6 bg-[#1f2937] text-white p-6">
          <h2 className="text-xl font-bold mb-4">Live Match</h2>
          <div className="bg-[#374151] p-4 rounded-lg shadow-md">
            <p className="text-base">Team A vs Team B</p>
            <p className="text-base">Score: <span className="font-bold">2 - 1</span></p>
            <p className="text-base">Time: <span className="font-bold">75'</span></p>
          </div>
        </div>
        <div className="w-5/6 p-6">
          <h2 className="text-2xl font-bold text-[#1f2937] mb-4">Dashboard</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <img src={featureIcon1} alt="Slide 1" className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={featureIcon2} alt="Slide 2" className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={featureIcon3} alt="Slide 3" className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
