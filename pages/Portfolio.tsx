import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';

export const Portfolio: React.FC = () => {
  const [portfolioFilter, setPortfolioFilter] = useState<'All' | 'Repair' | 'Design' | 'SEO'>('All');

  const filteredPortfolio = portfolioFilter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === portfolioFilter);

  return (
    <div className="min-h-screen bg-white">
      <div className="py-12 bg-slate-900 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Our Portfolio</h1>
        <p className="text-slate-400">A showcase of our repairs, designs, and success stories</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['All', 'Repair', 'Design', 'SEO'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setPortfolioFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                portfolioFilter === filter 
                ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-slate-900">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-sm font-bold uppercase mb-1 tracking-wider">{item.category}</span>
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
                <p className="text-slate-300 text-sm mt-2">{item.description}</p>
              </div>
              
              {/* Mobile Friendly Label (Visible if not hovering on mobile, essentially always visible on touch if needed, 
                  but kept cleaner here for desktop focus. Adding a persistent label at bottom for mobile) */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent md:hidden">
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};