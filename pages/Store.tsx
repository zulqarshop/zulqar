import React, { useState } from 'react';
import { ShoppingCart, Filter } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { useShop } from '../context/ShopContext';

export const Store: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Laptop' | 'Accessory' | 'Software'>('All');
  const { addToCart } = useShop();

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="py-12 bg-slate-900 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Zulqar Store</h1>
        <p className="text-slate-400">Quality tech products and digital licenses</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 mr-4 text-slate-500 font-medium">
            <Filter className="w-4 h-4" /> Filter:
          </div>
          {(['All', 'Laptop', 'Accessory', 'Software'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-2 py-1 rounded shadow-sm">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2 h-10">{product.description}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-primary">PKR {product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-slate-900 hover:bg-primary text-white p-3 rounded-xl transition-colors shadow-lg hover:shadow-primary/40 flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" /> 
                    <span className="text-sm font-semibold">Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
