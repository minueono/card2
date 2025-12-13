import React from 'react';
import { Home, Heart } from 'lucide-react';

interface ClosingSectionProps {
  onHome: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onHome }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 animate-fade-in text-center">
      
      {/* Image Section */}
      <div className="w-full max-w-md mb-8 relative group">
        <div className="absolute inset-0 bg-blue-500 rounded-3xl rotate-6 opacity-10 group-hover:rotate-3 transition-transform duration-500"></div>
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
          alt="Thank You" 
          className="relative rounded-3xl shadow-2xl w-full h-64 object-cover transform transition-transform duration-500 hover:scale-[1.02]"
        />
        <div className="absolute -bottom-6 -right-4 bg-white p-3 rounded-full shadow-lg animate-bounce">
          <Heart className="w-8 h-8 text-red-500 fill-current" />
        </div>
      </div>

      {/* Text Section */}
      <div className="mb-12 animate-fade-in-up delay-100">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-4 leading-tight">
          발표 들어주셔서<br />
          <span className="text-[#0046FF]">감사합니다</span>
        </h2>
        <p className="text-gray-500 text-lg">
          지금까지 <span className="font-bold text-gray-800">A+3F0</span> 팀이었습니다.
        </p>
      </div>

      {/* Home Button */}
      <button
        onClick={onHome}
        className="
          flex items-center gap-2
          px-8 py-3.5
          bg-gray-100 
          hover:bg-gray-200
          text-gray-700 font-bold 
          rounded-2xl
          transition-all duration-300
        "
      >
        <Home className="w-5 h-5" />
        처음으로 돌아가기
      </button>

      <footer className="absolute bottom-6 text-gray-400 text-xs">
        © 2024 A+3F0 Card Corp.
      </footer>
    </div>
  );
};