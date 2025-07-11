import React, { useState } from 'react';
import { FaRegThumbsUp, FaRegCommentDots, FaRegHeart, FaRegStar, FaTrophy, FaHandshake } from 'react-icons/fa';
import img1 from '../assets/t1.png';
import img2 from '../assets/t2.png';
import img3 from '../assets/t3.png';
import img4 from '../assets/t4.png';
import img5 from '../assets/t5.png';
import img6 from '../assets/t6.png';
import img7 from '../assets/t7.png';
import img8 from '../assets/t8.png';
import img9 from '../assets/t9.png';

const avatars = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const icons = [
  <FaRegThumbsUp className="text-4xl text-blue-500" />,
  <FaRegCommentDots className="text-4xl text-blue-400" />,
  <FaRegHeart className="text-4xl text-pink-500" />,
  <FaRegStar className="text-4xl text-yellow-400" />,
  <FaTrophy className="text-4xl text-yellow-500" />,
  <FaRegHeart className="text-4xl text-pink-400" />,
];

const positions = [
  'top-10 left-1/2 -translate-x-1/2',
  'top-1/4 left-1/6',
  'top-1/4 right-1/6',
  'bottom-1/4 left-1/6',
  'bottom-1/4 right-1/6',
  'bottom-10 left-1/2 -translate-x-1/2',
  'top-1/2 left-0 -translate-y-1/2',
  'top-1/2 right-0 -translate-y-1/2',
];

const Testimonials = () => {
  const [isCircleHovered, setIsCircleHovered] = useState(false);
  const [setHoveredAvatar] = useState(null);
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-br from-white via-green-50 to-white overflow-hidden">
      {/* Avatars and icons in a rotating circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] animate-rotate-slower pointer-events-auto`}
          style={isCircleHovered ? { animationPlayState: 'paused' } : {}}
          onMouseEnter={() => setIsCircleHovered(true)}
          onMouseLeave={() => { setIsCircleHovered(false); setHoveredAvatar(null); }}
        >
          {/* Place avatars in a circle */}
          {avatars.map((img, i) => (
            <div
              key={i}
              className={`absolute ${positions[i]} flex flex-col items-center`}
              style={{
                // Only rotate and translate to position, do not counter-rotate here
                transform: `translate(-50%, -50%) rotate(${i * (360 / avatars.length)}deg) translateY(-28vw)`
              }}
            >
              <img
                src={img}
                alt={`avatar-${i}`}
                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-110 hover:ring-4 hover:ring-green-400 hover:shadow-2xl hover:z-20 cursor-pointer pointer-events-auto"
                style={{
                  // Counter-rotate the image to keep it upright
                  transform: `rotate(-${i * (360 / avatars.length)}deg)`
                }}
              />
            </div>
          ))}
          {/* Place icons between avatars */}
          {icons.map((icon, i) => (
            <div
              key={i}
              className={`absolute ${positions[i + 1]}`}
              style={{
                transform: `translate(-50%, -50%) rotate(${(i + 0.5) * (360 / avatars.length)}deg) translateY(-180px) rotate(-${(i + 0.5) * (360 / avatars.length)}deg)`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
      {/* Center content */}
      <div className="z-10 flex flex-col items-center justify-center mt-12">
        <p className="text-lg text-gray-700 mb-2">Hear How They Level Up Their Game!</p>
        <h2 className="text-3xl font-bold text-center mb-2">
          Skill <span className="text-green-500">Masters</span> Unite! <FaHandshake className="inline ml-2 text-yellow-500" />
        </h2>
        <button className="mt-2 px-6 py-2 bg-white border border-gray-200 rounded-full  text-black font-semibold hover:bg-green-50 transition-all text-base flex items-center gap-2">
          View all Testimonials <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials; 