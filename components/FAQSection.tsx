import React, { useState } from 'react';
import { FAQItem } from '../types';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqData: FAQItem[] = [
  {
    question: "How do I reconstitute the peptide?",
    answer: "Our peptides come lyophilized (powder). You need to mix them with Bacteriostatic Water carefully. Detailed instructions are included with every order."
  },
  {
    question: "What is the recommended storage?",
    answer: "Unmixed vials should be stored in the freezer (-20°C). Once reconstituted, keep it in the refrigerator (4°C) and use within 30 days."
  },
  {
    question: "How long does shipping take?",
    answer: "We process orders within 24 hours. Domestic shipping usually takes 2-4 business days. International shipping varies by location."
  },
  {
    question: "Is this product for human consumption?",
    answer: "Peptiverse products are sold for research and laboratory use only. Please consult our Terms and Conditions for full legal disclaimers."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, bank transfers, and select cryptocurrencies for secure and discreet transactions."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-brand-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800 text-brand-200 text-sm font-medium border border-brand-700 mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>Support Center</span>
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-100 text-lg leading-relaxed">
              Find answers to common questions about our products, shipping, and usage policies.
              <br /><br />
              Need more help? Use our AI Assistant in the bottom right corner!
            </p>
          </div>

          <div className="md:w-2/3 w-full space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-brand-800/50 backdrop-blur-sm border border-brand-700 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-brand-300 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-300 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-brand-100 leading-relaxed border-t border-brand-700/50 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
