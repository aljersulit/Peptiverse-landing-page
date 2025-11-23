import React from 'react';
import { Microscope, Activity, TrendingUp, Dna } from 'lucide-react';

export const ProductDeepDive: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-brand-50 rounded-xl mb-4">
            <Microscope className="w-6 h-6 text-brand-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">The Science Behind Tirzepatide</h2>
          <p className="mt-4 text-lg text-slate-600">
            A dual-action approach to metabolic health. Understanding how our peptide works at a cellular level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                  <Dna className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Dual Agonist Mechanism</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Tirzepatide is a unique molecule that mimics two natural hormones: Glucagon-like peptide-1 (GLP-1) and Glucose-dependent insulinotropic polypeptide (GIP). By activating both receptors, it creates a synergistic effect that regulates appetite and improves metabolic function more effectively than single-agonist therapies.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                  <Activity className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Clinical Benefits</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Studies have shown significant improvements in glycemic control and body composition. Users often report reduced food noise, improved satiety after meals, and sustained energy levels throughout the day without the jittery side effects of traditional stimulants.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Research Overview</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Recent clinical trials involving thousands of participants demonstrated that the combination of GIP and GLP-1 receptor agonism leads to superior weight management outcomes compared to placebo. 
                  <span className="block mt-2 text-sm text-slate-500 italic">*Scientific data is for educational purposes only.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-100 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl p-8 text-white">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-500 rounded-full opacity-20 blur-3xl"></div>
              <h4 className="text-2xl font-bold mb-6">Molecule Profile</h4>
              
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                  <span className="text-slate-400">Class</span>
                  <span className="font-medium">Dual GIP/GLP-1 Agonist</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                  <span className="text-slate-400">Sequence Length</span>
                  <span className="font-medium">39 Amino Acids</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                  <span className="text-slate-400">Half-Life</span>
                  <span className="font-medium">~5 Days (Human)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Administration</span>
                  <span className="font-medium">Subcutaneous Injection</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-sm text-slate-400">
                  Peptiverse ensures every batch meets rigorous purity standards (&gt;99%) confirmed by HPLC analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};