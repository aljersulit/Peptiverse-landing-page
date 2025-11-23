import React from 'react';
import { Mail, Shield, Smartphone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img 
                src="/image/peptiverse.jpg" 
                alt="Peptiverse" 
                className="h-10 w-auto invert opacity-90"
              />
            </div>
            <p className="max-w-xs text-slate-400 mb-6">
              Your trusted partner in premium peptide research solutions. Committed to quality, transparency, and customer satisfaction.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">
                 <Shield className="w-5 h-5" />
               </div>
               <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">
                 <Mail className="w-5 h-5" />
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About Product</a></li>
              <li><a href="#faq" className="hover:text-brand-400 transition-colors">FAQs</a></li>
              <li><a href="#feedbacks" className="hover:text-brand-400 transition-colors">Client Feedbacks</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@peptiverse.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="text-sm text-slate-500 mt-4">
                Mon-Fri: 9AM - 6PM EST
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p className="mb-2">
            Disclaimer: Please do your own research and seek medical guidance before starting anything new. These materials are sourced from grey suppliers and are for research purposes only.
          </p>
          <p>&copy; {new Date().getFullYear()} Peptiverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};