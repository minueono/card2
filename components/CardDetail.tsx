import React, { useEffect, useState } from 'react';
import { CardData } from '../types';
import { ArrowLeft, Share2, ChevronDown, Check } from 'lucide-react';
import * as Icons from 'lucide-react';

interface CardDetailProps {
  card: CardData;
  onBack: () => void;
  onApply: () => void;
}

export const CardDetail: React.FC<CardDetailProps> = ({ card, onBack, onApply }) => {
  const [activeTab, setActiveTab] = useState('major'); // 'major' | 'detail'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Icon mapping helper
  const getIcon = (iconName: string | undefined) => {
    if (!iconName) return Icons.Check;
    // @ts-ignore
    return Icons[iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())] || Icons.Check;
  };

  return (
    <div className="bg-white min-h-screen pb-24 relative font-sans text-[#111]">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 bg-white z-50 h-[56px] flex items-center justify-between px-4 border-b border-[#f0f0f0]">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center -ml-2 text-[#111]"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[17px] font-bold text-[#111] truncate max-w-[200px]">{card.name}</h1>
        <button className="w-10 h-10 flex items-center justify-center text-[#111]">
          <Share2 className="w-6 h-6" />
        </button>
      </div>

      {/* Hero Section */}
      <div className="pt-8 pb-10 px-6 flex flex-col items-center text-center bg-[#f7f8fa]">
        {/* Card Image with Realistic Shadow */}
        <div className="w-[200px] mb-8 relative z-10">
           <img 
             src={card.image} 
             alt={card.name} 
             className="w-full h-auto drop-shadow-2xl"
             style={{ filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.15))' }}
             onError={(e) => {
               (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/card/300/190';
             }}
           />
        </div>
        
        <h2 className="text-[22px] font-bold text-[#111] leading-tight mb-2">
          {card.name}
        </h2>
        <p className="text-[#666] text-[15px] leading-relaxed max-w-xs mx-auto mb-5">
          {card.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {card.tags.map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-white border border-[#e5e5e5] text-[#444] text-[13px] rounded-[4px]">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#e5e5e5] sticky top-[56px] bg-white z-40">
        <button 
          className={`flex-1 h-[48px] text-[15px] font-bold border-b-2 transition-colors ${activeTab === 'major' ? 'text-[#0046FF] border-[#0046FF]' : 'text-[#888] border-transparent'}`}
          onClick={() => setActiveTab('major')}
        >
          주요혜택
        </button>
        <button 
          className={`flex-1 h-[48px] text-[15px] font-bold border-b-2 transition-colors ${activeTab === 'detail' ? 'text-[#0046FF] border-[#0046FF]' : 'text-[#888] border-transparent'}`}
          onClick={() => setActiveTab('detail')}
        >
          상세안내
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white">
        {/* Annual Fee Row */}
        {card.annualFee && (
          <div className="flex justify-between items-center py-5 px-5 border-b border-[#f5f5f5]">
            <span className="text-[15px] font-medium text-[#333]">연회비</span>
            <div className="text-right">
              <span className="text-[14px] text-[#666]">{card.annualFee}</span>
            </div>
          </div>
        )}

        {/* Benefits List - Shinhan Style */}
        <div className="px-5 pt-8 pb-10">
           <h3 className="text-[19px] font-bold text-[#111] mb-6">
             {card.name}의<br/>특별한 혜택을 확인하세요
           </h3>

           <div className="space-y-10">
             {card.detailedBenefits ? (
               card.detailedBenefits.map((section, idx) => {
                 const IconComponent = getIcon(section.icon);
                 return (
                   <div key={idx} className="relative pl-[52px]">
                     {/* Icon positioned absolute left */}
                     <div className="absolute left-0 top-0 w-[40px] h-[40px] rounded-full bg-[#F4F8FF] flex items-center justify-center text-[#0046FF]">
                       <IconComponent strokeWidth={1.5} size={22} />
                     </div>
                     
                     <h4 className="text-[17px] font-bold text-[#111] mb-3 pt-1.5">{section.title}</h4>
                     
                     <ul className="space-y-2">
                       {section.content.map((text, i) => (
                         <li key={i} className="text-[15px] text-[#444] leading-6 flex items-start">
                           <span className="inline-block w-1 h-1 rounded-full bg-[#888] mt-2.5 mr-2 shrink-0"></span>
                           <span dangerouslySetInnerHTML={{ __html: text.replace(/(\d+%|\d+원)/g, '<b>$1</b>') }} />
                         </li>
                       ))}
                     </ul>
                   </div>
                 );
               })
             ) : (
               <div className="text-[#666]">상세 혜택 정보가 없습니다.</div>
             )}
           </div>
        </div>

        {/* Accordion / More Info style section */}
        <div className="bg-[#f7f8fa] py-4 px-5 border-t border-[#f0f0f0]">
           <button className="w-full flex justify-between items-center py-3 text-[#444] text-[14px]">
             <span>유의사항</span>
             <ChevronDown className="w-4 h-4 text-[#888]" />
           </button>
           <div className="text-[13px] text-[#888] leading-relaxed pb-4">
              <p>※ 준법감시 심의필 제2024-1234호</p>
              <p className="mt-1">※ 계약 체결 전 금융상품설명서와 약관을 확인하시기 바랍니다.</p>
           </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-[#f0f0f0] z-50 safe-area-bottom">
        <button 
          onClick={onApply}
          className="w-full h-[52px] bg-[#0046FF] text-white text-[16px] font-bold rounded-[8px] active:bg-[#0039cc] transition-colors"
        >
          카드 신청
        </button>
      </div>
      
      {/* Safe Area Spacer for iOS */}
      <div className="h-6 bg-white"></div>
    </div>
  );
};