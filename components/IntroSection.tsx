import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface IntroSectionProps {
  onStart: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onStart }) => {
  return (
    <div className="px-5 mt-10 mb-16 animate-fade-in-up delay-100">
      <div className="
        relative
        overflow-hidden
        bg-gradient-to-br from-[#006093] to-[#004d75] 
        rounded-3xl 
        p-8 
        text-center 
        shadow-2xl shadow-blue-900/20
        group
      ">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-black/10 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <div className="flex justify-center mb-5">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full shadow-inner ring-1 ring-white/30">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            🛍️ 당신의 '소비 DNA'를<br />
            찾아보세요!
          </h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto text-sm md:text-base font-medium leading-relaxed">
            카드 성향 테스트를 통해<br />
            나의 소비 패턴을 분석하고 딱 맞는 카드를 추천해드려요.
          </p>
          <button
            onClick={onStart}
            className="
              inline-flex items-center justify-center gap-2
              w-full sm:w-auto
              px-8 py-4 
              bg-white 
              text-[#006093] 
              text-lg font-bold 
              rounded-2xl 
              shadow-lg
              transition-all 
              duration-300
              hover:bg-blue-50
              hover:scale-105
              hover:shadow-xl
              active:scale-95
            "
          >
            테스트 시작하기
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};