import React from 'react';
import { X, Trash2, ShoppingBag, ExternalLink } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Button } from './Button';
import { BUSINESS_INFO } from '../constants';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, toggleCart, cart, removeFromCart, cartTotal, user } = useShop();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    const itemsList = cart.map(item => `- ${item.name} (x${item.quantity}): PKR ${item.price * item.quantity}`).join('%0A');
    const total = `*Total: PKR ${cartTotal}*`;
    const customer = user ? `Name: ${user.name}%0AEmail: ${user.email}` : 'Customer: Guest';
    
    const message = `*New Order Request*%0A${customer}%0A%0A*Items:*%0A${itemsList}%0A%0A${total}%0A%0APlease confirm availability and payment details.`;
    
    const url = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\s/g, '')}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={toggleCart}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 flex flex-col animate-slide-in-right">
        <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag className="text-primary" />
            Your Cart
          </h2>
          <button onClick={toggleCart} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400">
              <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 bg-white border border-slate-100 p-3 rounded-lg shadow-sm">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 text-sm line-clamp-2">{item.name}</h3>
                  <p className="text-primary font-bold mt-1">PKR {item.price}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Qty: {item.quantity}</span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 text-xs flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50">
            <div className="flex justify-between items-center mb-4 text-lg font-bold text-slate-900">
              <span>Total</span>
              <span>PKR {cartTotal}</span>
            </div>
            <Button variant="primary" fullWidth onClick={handleCheckout}>
              Checkout via WhatsApp <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-xs text-slate-500 text-center mt-3">
              *Order details will be sent directly to Sir Zulqar for confirmation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
