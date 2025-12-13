import React from 'react';
import { RecommendationResult } from '../types';
import { POPULAR_CARDS } from '../constants';
import { CheckCircle2, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';

interface ResultProps {
  data: RecommendationResult;
  onRestart: () => void;
  onViewDetail: (cardId?: string) => void;
}

export const Result: React.FC<ResultProps> = ({ data, onRestart, onViewDetail }) => {
  // cardId를 기반으로 실제 카드 데이터를 찾아서 이미지를 가져옴
  const matchedCard = POPULAR_CARDS.find(card => card.id === data.cardId);
  // 매칭된 카드가 있으면 그 이미지를, 없으면(예외) 기존처럼 랜덤 이미지를 사용
  const imageUrl = matchedCard ? matchedCard.image : `https://picsum.photos/seed/${data.name.replace(/\s/g, '')}/300/190`;

  return (
    <div className="max-w-xl mx-auto pb-10 animate-fade-in">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#006093] text-sm font-bold mb-4 shadow-sm border border-blue-100">
          <Sparkles className="w-4 h-4" />
          분석 완료!
        </div>
        <h2 className="text-3xl font-extrabold text-slate-800 leading-tight">
          고객님께 딱 맞는<br/>
          <span className="text-[#006093]">최고의 카드</span>를 찾았어요
        </h2>
      </div>

      <div className="
        bg-white
        rounded-[32px] 
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] 
        border border-slate-100
        p-8 
        mb-8
        relative
        overflow-hidden
        group
        transform transition-all hover:scale-[1.01]
      ">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#006093] via-[#00a3e0] to-[#006093]"></div>
        
        {/* Card Image Area */}
        <div className="flex justify-center mb-8 pt-4">
             <div className="
               relative 
               bg-gradient-to-b from-white to-slate-50 
               p-6 
               rounded-3xl 
               shadow-inner 
               border border-slate-100
             ">
                 <img 
                   src={imageUrl} 
                   alt={data.name}
                   className="w-52 h-auto object-contain rounded-xl shadow-xl shadow-slate-300/50 transform rotate-2 group-hover:rotate-0 transition-transform duration-500"
                   onError={(e) => {
                     // 이미지 로드 실패 시 랜덤 이미지로 대체
                     (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${data.name.replace(/\s/g, '')}/300/190`;
                   }}
                 />
                 <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce">
                    BEST MATCH
                 </div>
             </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-3">
            {data.name}
          </h3>
          <p className="text-slate-500 text-base leading-relaxed px-2 break-keep">
            {data.description}
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 text-left border border-slate-100/50">
          <h4 className="text-xs font-bold text-[#006093] mb-4 uppercase tracking-widest flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            핵심 혜택 3가지
          </h4>
          <ul className="space-y-3">
            {data.benefits.map((benefit, idx) => (
              <li key={idx} className="text-slate-700 text-[15px] font-medium flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006093] mt-2 shrink-0 opacity-80"></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4">
        {data.cardId && (
          <button
            onClick={() => onViewDetail(data.cardId)}
            className="
              w-full
              px-6 py-4 
              bg-[#006093] 
              text-white 
              rounded-2xl 
              font-bold 
              text-lg
              shadow-lg shadow-blue-900/10
              hover:bg-[#004d75] 
              hover:shadow-xl hover:shadow-blue-900/20
              hover:-translate-y-1
              active:scale-98
              transition-all duration-300
              flex items-center justify-center gap-2
            "
          >
            카드 자세히 보기
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
        
        <button
          onClick={onRestart}
          className="
            w-full
            px-6 py-4 
            bg-white 
            border-2 border-slate-100 
            text-slate-500 
            rounded-2xl 
            font-bold 
            text-base
            hover:bg-slate-50 
            hover:text-slate-700
            hover:border-slate-200
            transition-all
            flex items-center justify-center gap-2
          "
        >
          <RotateCcw className="w-4 h-4" />
          다시 테스트하기
        </button>
      </div>
    </div>
  );
};