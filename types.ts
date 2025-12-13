export type AppView = 'home' | 'quiz' | 'result' | 'detail' | 'closing';

export interface CardDetailSection {
  title: string;
  icon?: string;
  content: string[];
}

export interface CardData {
  id: string;
  name: string;
  image: string;
  description: string; // Short tagline
  tags: string[];
  benefits: string[]; // Summary benefits for list view
  detailedBenefits?: CardDetailSection[]; // Rich details for detail view
  annualFee?: string;
  isBest?: boolean;
}

export interface Question {
  question: string;
  options: string[];
}

export interface RecommendationResult {
  name: string;
  description: string;
  benefits: string[];
  cardId?: string; // Optional link to a specific card detail
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: number[];
}