import React, { useState } from 'react';
import { QUESTIONS, calculateRecommendation } from '../constants';
import { RecommendationResult } from '../types';
import { ChevronRight } from 'lucide-react';

interface QuizProps {
  onComplete: (result: RecommendationResult) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleOptionSelect = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 300); 
    } else {
      setTimeout(() => {
        const result = calculateRecommendation(newAnswers);
        onComplete(result);
      }, 300);
    }
  };

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="max-w-xl mx-auto pt-6 animate-scale-in">
      {/* Header & Progress */}
      <div className="mb-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#006093] text-xs font-bold tracking-wider mb-4 border border-blue-100">
          STEP {currentQuestionIndex + 1} / {QUESTIONS.length}
        </span>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-[#006093] to-[#00a3e0] transition-all duration-700 ease-out rounded-full shadow-[0_0_10px_rgba(0,96,147,0.3)]" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-snug text-center break-keep">
          {currentQuestion.question}
        </h2>

        <div className="space-y-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={`${currentQuestionIndex}-${idx}`}
              onClick={() => handleOptionSelect(idx)}
              className="
                group
                w-full
                p-5 
                bg-white 
                border-2 border-slate-100 
                rounded-2xl
                text-base md:text-lg font-bold text-slate-700
                hover:border-[#006093] 
                hover:bg-blue-50/30 
                hover:text-[#006093]
                hover:shadow-lg hover:shadow-blue-500/10
                hover:-translate-y-1
                transition-all 
                duration-200
                text-left
                flex justify-between items-center
                relative
                overflow-hidden
                animate-fade-in-up
              "
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <span className="relative z-10 pl-2 break-keep">{option}</span>
              <div className="
                w-10 h-10 
                shrink-0
                rounded-full 
                bg-white border border-slate-200 
                text-slate-300 
                flex items-center justify-center 
                transition-all duration-300
                group-hover:border-[#006093] group-hover:bg-[#006093] group-hover:text-white group-hover:scale-110
                shadow-sm
                ml-4
              ">
                  <ChevronRight className="w-6 h-6" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};