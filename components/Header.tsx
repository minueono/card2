import React from 'react';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="px-5 h-[56px] flex items-center justify-between bg-white sticky top-0 z-40 border-b border-[#f0f0f0]">
      <div className="flex items-center gap-2">
        <h1 className="text-[18px] font-bold text-[#111] tracking-tight">
          <span className="text-[#0046FF]">A+</span>3F0 카드
        </h1>
      </div>
      <button className="text-[#111]">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
};