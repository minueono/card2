import React from 'react';
import { Home } from 'lucide-react';

interface ClosingSectionProps {
  onHome: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onHome }) => {
  // Update image request size to ensure quality at larger display sizes
  const teamMembers = [
    { name: '김민영', img: 'kim.png' },
    { name: '이나영', img: 'leena.png' },
    { name: '이서빈', img: 'leeseo.png' }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 animate-fade-in text-center">
      
      {/* Text Section - Width increased to max-w-6xl for large photos */}
      <div className="mb-12 animate-fade-in-up delay-100 w-full max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#111] mb-6 leading-tight">
          발표 들어주셔서<br />
          <span className="text-[#0046FF]">감사합니다</span>
        </h2>
        <p className="text-gray-500 text-xl mb-16">
          지금까지 <span className="font-bold text-gray-800">A+3F0</span> 팀이었습니다.
        </p>

        {/* Team Members Section */}
        <div className="bg-gray-50 rounded-[40px] p-10 md:p-16 mb-12 animate-fade-in-up delay-200 shadow-sm border border-gray-100">
            <h3 className="text-sm md:text-base font-bold text-gray-400 mb-12 uppercase tracking-[0.2em]">Team Members</h3>
            <div className="flex justify-center items-center gap-10 md:gap-24 flex-wrap">
            {teamMembers.map((member, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                    {/* Images significantly increased: w-32(128px) mobile, w-64(256px) desktop */}
                    <div className="w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] border-white shadow-2xl mb-6 group-hover:scale-105 transition-transform duration-300 ring-4 ring-transparent group-hover:ring-[#0046FF]/20">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xl md:text-3xl font-bold text-gray-800 tracking-tight">{member.name}</span>
                </div>
            ))}
            </div>
        </div>
      </div>

      {/* Home Button */}
      <button
        onClick={onHome}
        className="
          flex items-center gap-2
          px-10 py-4
          bg-gray-100 
          hover:bg-gray-200
          text-gray-700 font-bold 
          text-lg
          rounded-2xl
          transition-all duration-300
        "
      >
        <Home className="w-6 h-6" />
        처음으로 돌아가기
      </button>

      <footer className="absolute bottom-8 text-gray-400 text-sm">
        © 2024 A+3F0 Card Corp.
      </footer>
    </div>
  );
};