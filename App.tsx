import React, { useState } from 'react';
import { Header } from './components/Header';
import { CardList } from './components/CardList';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import { IntroSection } from './components/IntroSection';
import { CardDetail } from './components/CardDetail';
import { ClosingSection } from './components/ClosingSection';
import { RecommendationResult, AppView, CardData } from './types';
import { POPULAR_CARDS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [recommendation, setRecommendation] = useState<RecommendationResult | null>(null);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const startQuiz = () => {
    setCurrentView('quiz');
    setRecommendation(null);
  };

  const handleQuizComplete = (result: RecommendationResult) => {
    setRecommendation(result);
    setCurrentView('result');
  };

  const handleRestart = () => {
    setCurrentView('home');
    setRecommendation(null);
    setSelectedCardId(null);
  };

  const handleCardClick = (cardId: string) => {
    setSelectedCardId(cardId);
    setCurrentView('detail');
  };

  const handleDetailBack = () => {
    if (recommendation && currentView === 'detail') {
       setCurrentView('home'); 
    } else {
       setCurrentView('home');
    }
    setSelectedCardId(null);
  };

  const handleApplyClick = () => {
    setCurrentView('closing');
  };

  const getCardData = (id: string): CardData | undefined => {
    return POPULAR_CARDS.find(c => c.id === id);
  };

  if (currentView === 'closing') {
    return <ClosingSection onHome={handleRestart} />;
  }

  if (currentView === 'detail' && selectedCardId) {
    const card = getCardData(selectedCardId);
    if (card) {
      return (
        <CardDetail 
          card={card} 
          onBack={handleDetailBack} 
          onApply={handleApplyClick} 
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#111] font-sans">
      <Header />
      
      <main className="max-w-screen-xl mx-auto w-full">
        {currentView === 'home' && (
          <div className="animate-fade-in">
             <div className="px-5 pt-8 pb-2">
                <h2 className="text-[22px] font-bold text-[#111] leading-snug">
                  나에게 꼭 맞는<br />
                  <span className="text-[#0046FF]">최고의 혜택</span>을 찾아보세요
                </h2>
             </div>
            
            <IntroSection onStart={startQuiz} />
            <div className="h-4 bg-[#f7f8fa] w-full border-t border-[#eee]"></div>
            <CardList onCardClick={handleCardClick} />
          </div>
        )}

        {currentView === 'quiz' && (
          <div className="px-5 py-10 animate-fade-in">
            <Quiz onComplete={handleQuizComplete} />
          </div>
        )}

        {currentView === 'result' && recommendation && (
          <div className="px-5 py-10 animate-fade-in">
            <Result 
              data={recommendation} 
              onRestart={handleRestart} 
              onViewDetail={(id) => {
                  if (id) handleCardClick(id);
              }}
            />
          </div>
        )}
      </main>

      {currentView !== 'quiz' && (
        <footer className="py-10 border-t border-[#f0f0f0] text-center text-[12px] text-[#888] bg-[#f9f9f9]">
          <p className="font-bold mb-2 text-[#666]">A+3F0 카드 주식회사</p>
          <p>경기도 안산시 상록구 한양대학로 35</p>
          <p className="mt-4">© 2024 A+3F0 Card Corp. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
};

export default App;