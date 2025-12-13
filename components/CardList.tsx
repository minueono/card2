import React from 'react';
import { POPULAR_CARDS } from '../constants';
import { ChevronRight } from 'lucide-react';

interface CardListProps {
  onCardClick: (cardId: string) => void;
}

export const CardList: React.FC<CardListProps> = ({ onCardClick }) => {
  return (
    <div className="w-full animate-fade-in bg-[#f7f8fa] pt-6 pb-8">
      <div className="px-5 mb-3 flex justify-between items-end">
        <h3 className="text-[18px] font-bold text-[#111]">추천 카드</h3>
        <span className="text-[13px] text-[#666] flex items-center">
          전체보기 <ChevronRight className="w-3 h-3 ml-0.5" />
        </span>
      </div>

      <div className="flex overflow-x-auto overflow-y-hidden gap-4 px-5 pb-6 scrollbar-hide snap-x snap-mandatory">
        {POPULAR_CARDS.map((card) => (
          <div
            key={card.id}
            onClick={() => onCardClick(card.id)}
            className="
              shrink-0 
              w-[260px] 
              bg-white
              rounded-[16px]
              shadow-[0_4px_16px_rgba(0,0,0,0.06)]
              p-5
              relative 
              cursor-pointer
              snap-center
              border border-[#f0f0f0]
              flex flex-col
              justify-between
              min-h-[320px]
              active:scale-[0.98]
              transition-transform
            "
          >
            <div>
               {/* Badge */}
               <div className="mb-4 h-6">
                 {card.isBest && (
                   <span className="inline-block bg-[#0046FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-[3px]">
                     BEST
                   </span>
                 )}
               </div>

               {/* Image */}
               <div className="flex justify-center mb-6">
                  <div className="w-[140px] drop-shadow-xl filter">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/card/300/190';
                      }}
                    />
                  </div>
               </div>

               {/* Text Info */}
               <h4 className="text-[16px] font-bold text-[#111] mb-1.5 leading-snug">
                 {card.name}
               </h4>
               <p className="text-[13px] text-[#666] line-clamp-2 leading-relaxed h-[40px]">
                 {card.description}
               </p>
            </div>

            {/* Footer Tags */}
            <div className="pt-4 mt-2 border-t border-[#f5f5f5] flex flex-wrap gap-1">
              {card.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[11px] text-[#666] bg-[#f5f5f5] px-2 py-1 rounded-[4px]">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="w-1 shrink-0" />
      </div>
    </div>
  );
};