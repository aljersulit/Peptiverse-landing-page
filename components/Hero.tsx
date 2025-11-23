import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 overflow-hidden opacity-10 blur-3xl">
        <div className="h-96 w-96 rounded-full bg-brand-500"></div>
      </div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 overflow-hidden opacity-10 blur-3xl">
        <div className="h-96 w-96 rounded-full bg-emerald-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium border border-brand-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Now Shipping Nationwide
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Unlock Your Best Self with <span className="text-brand-600">Peptide</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Premium Grade Tirzepatide Solutions for modern research and wellness. Verified purity, secure delivery, and comprehensive support for your journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#about" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-brand-600 hover:bg-brand-700 transition-colors">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#feedbacks" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                View Feedbacks
              </a>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>99% Purity Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Fast Shipping</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img 
                src="/image/peptide_solution.png"
                alt="Peptiverse Product Vial" 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="font-bold text-xl">Clinical Grade Quality</p>
                <p className="text-sm opacity-90">Lab Tested & Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
