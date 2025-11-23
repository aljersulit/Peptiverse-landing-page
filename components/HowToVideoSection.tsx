import React from 'react';
import { Play, Check } from 'lucide-react';

export const HowToVideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-900 aspect-video group cursor-pointer">
              {/* Placeholder for Video Thumbnail */}
              <img 
                src="https://picsum.photos/800/450?grayscale" 
                alt="How to Administer Tirzepatide" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-current" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm p-3 rounded-lg">
                  <p className="text-white font-medium text-sm">Step-by-Step Administration Guide (03:45)</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">
              *Video for demonstration purposes only. Always follow your provider's instructions.
            </p>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Administer</h2>
            <p className="text-lg text-slate-600 mb-8">
              Correct administration is key to safety and efficacy. Our comprehensive video guide walks you through the reconstitution and injection process.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Preparation</h4>
                  <p className="text-slate-600 text-sm">Sanitize the vial and injection site. Ensure all supplies are sterile.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Reconstitution</h4>
                  <p className="text-slate-600 text-sm">Slowly add bacteriostatic water to the lyophilized powder. Do not shake.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Subcutaneous Injection</h4>
                  <p className="text-slate-600 text-sm">Pinch the skin (abdomen or thigh) and inject at a 45-90 degree angle.</p>
                </div>
              </div>
            </div>

            <button className="mt-8 px-6 py-3 bg-brand-600 text-white font-medium rounded-lg shadow-sm hover:bg-brand-700 transition-colors w-full sm:w-auto">
              Watch Full Tutorial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};