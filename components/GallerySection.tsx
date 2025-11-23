import React from 'react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  title: string;
  subtitle: string;
  items: GalleryItem[];
  id: string;
  bgColor?: 'white' | 'slate';
}

export const GallerySection: React.FC<GallerySectionProps> = ({ title, subtitle, items, id, bgColor = 'white' }) => {
  return (
    <section id={id} className={`py-20 ${bgColor === 'slate' ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
          <p className="mt-2 text-lg text-slate-600">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-sm border border-slate-200 bg-white aspect-[4/5] cursor-pointer">
              <img 
                src={item.url} 
                alt={item.caption || title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{item.caption || 'Verified Entry'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
