export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
