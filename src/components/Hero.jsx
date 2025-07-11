import React from 'react';
import img1 from '../assets/imgg1.png';
import img2 from '../assets/imgg2.png';
import img3 from '../assets/imgg3.png';
import img4 from '../assets/imgg4.png';

const cardData = [
  {
    title: 'Start with Clarity',
    subtitle: 'Step into a better learning path.',
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    bg: 'bg-red-400',
    image: img1,
    alt: 'Thinking student illustration',
    animation: 'animate-fade-in-left',
  },
  {
    title: 'Learn by Doing',
    subtitle: 'Practical skills, real projects.',
    description:
      'Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.',
    bg: 'bg-cyan-700',
    image: img2,
    alt: 'Student working on project illustration',
    animation: 'animate-fade-in-right',
  },
  {
    title: 'Get Mentored & Supported',
    subtitle: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
    bg: 'bg-purple-600',
    image: img3,
    alt: 'Mentor support illustration',
    animation: 'animate-fade-in-left',
  },
  {
    title: 'Achieve & Showcase',
    subtitle: 'Build your portfolio, get job-ready.',
    description:
      'Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.',
    bg: 'bg-yellow-900',
    image: img4,
    alt: 'Achievement showcase illustration',
    animation: 'animate-fade-in-right',
  },
];

const Hero = () => {
  return (
    <section className="py-12 px-2 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-gray-700 text-lg font-semibold mb-2">Your SkillShikshya Journey</h2>
        <h1 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-green-600">Step In.</span>{' '}
          <span className="text-black">Skill <span className="text-gray-800">Up.</span></span>{' '}
          <span className="text-green-600">Stand</span>{' '}
          <span className="text-black">Out.</span>
          <img
            src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/2c0eef4b-7b75-42bd-9722-4bea97a2d532"
            alt="Rocket GIF"
            width={40}
            height={40}
            className="inline-block align-middle ml-2"
            style={{ verticalAlign: 'middle' }}
          />
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cardData.map((card, idx) => {
          // Determine image alignment: start (left) for 1st/3rd, end (right) for 2nd/4th
          const isStart = idx % 2 === 0;
          return (
            <div
              key={card.title}
              className={`relative flex flex-col justify-between ${card.bg} text-white rounded-2xl p-4 md:p-6 shadow-2xl ring-4 ring-green-200/30 min-h-[50px] max-w-6xl w-full overflow-visible opacity-0 scale-95 animate-pop-in ${card.animation} transition-transform duration-500 card-hover-effect`}
              style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}
            >
              {/* Text Content */}
              <div className={`z-10 relative ${isStart ? 'md:pl-50' : 'md:pr-50'} pb-56 md:pb-0  `}> 
                <h3 className={`text-2xl md:text-3xl mt-4 font-extrabold mb-1 tracking-tight drop-shadow-sm ${isStart ? 'text-right' : 'text-left'} animate-fade-in`} style={{ animationDelay: '0.2s' }}>{card.title}</h3>
                <h4 className={`text-lg md:text-xl mt-3 font-semibold mb-5 text-white/80 italic ${isStart ? 'text-right' : 'text-left'} animate-fade-in`} style={{ animationDelay: '0.4s' }}>{card.subtitle}</h4>
                <p className={`md:text-sm mb-4 font-normal text-white/90 leading-relaxed md:leading-loose drop-shadow-sm ${isStart ? 'text-right' : 'text-left'} animate-fade-in`} style={{ animationDelay: '0.6s' }}>{card.description}</p>
              </div>
              {/* Image - positioned absolutely for dramatic overlay effect */}
              <div
                className={`absolute z-20 ${isStart ? 'left-[-90px]' : 'right-[-90px]'} bottom-[-90px] md:bottom-[-90px] pointer-events-none`}
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-100 h-100 md:w-[25rem] px-10 md:h-[28rem] object-contain drop-shadow-2xl select-none animate-float"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;