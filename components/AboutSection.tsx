import React from 'react';
import { Utensils, Ban, Info, AlertTriangle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Understanding Tirzepatide</h2>
          <p className="mt-4 text-lg text-slate-600">
            A revolutionary peptide designed to help you achieve your goals. Success requires a holistic approach including diet and lifestyle changes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: What is it */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-brand-600">
              <Info className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">What is Peptiverse?</h3>
            <p className="text-slate-600 leading-relaxed">
              Our Tirzepatide is a dual GIP/GLP-1 receptor agonist. It mimics natural hormones to regulate appetite and blood sugar levels. We provide research-grade purity to ensure consistent results for your regimen.
            </p>
          </div>

          {/* Card 2: Diet Guide */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Optimal Diet</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                <span><strong>High Protein:</strong> Lean meats, fish, eggs, and tofu to maintain muscle mass.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                <span><strong>Hydration:</strong> Aim for 3-4 liters of water daily to aid metabolism.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                <span><strong>Fiber:</strong> Leafy greens and whole grains to support digestion.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Things to Avoid */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full -mr-8 -mt-8"></div>
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
              <Ban className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">What to Avoid</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                <span><strong>Fried & Greasy Foods:</strong> Can cause severe nausea and indigestion.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                <span><strong>Sugary Drinks:</strong> Spikes insulin and counteracts the peptide's effects.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                <span><strong>Alcohol:</strong> Limit intake as tolerance may decrease significantly.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
