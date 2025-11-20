import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, User, Order } from '../types';

interface ShopContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  cartTotal: number;
  cartCount: number;
  
  // Auth
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  updateUserProfile: (data: Partial<User>) => void;
  orders: Order[];
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  // Load user from local storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('zulqar_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      // Load mock orders for demo
      setOrders([
        {
          id: 'ORD-7782',
          date: '2023-10-15',
          total: 4500,
          status: 'Delivered',
          items: []
        },
        {
          id: 'ORD-9921',
          date: '2023-11-02',
          total: 35000,
          status: 'Processing',
          items: []
        }
      ]);
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const login = (name: string, email: string) => {
    const newUser = { 
      name, 
      email, 
      phone: '0300-1234567', 
      address: 'Near Degree College, Sharaqpur',
      city: 'Sheikhupura' 
    };
    setUser(newUser);
    localStorage.setItem('zulqar_user', JSON.stringify(newUser));
    
    // Mock orders
    setOrders([
        { id: 'ORD-7782', date: '2023-10-15', total: 4500, status: 'Delivered', items: [] },
        { id: 'ORD-9921', date: '2023-11-02', total: 35000, status: 'Processing', items: [] }
    ]);
  };

  const logout = () => {
    setUser(null);
    setOrders([]);
    localStorage.removeItem('zulqar_user');
  };

  const updateUserProfile = (data: Partial<User>) => {
    if (!user) return;
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem('zulqar_user', JSON.stringify(updatedUser));
  };

  return (
    <ShopContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      isCartOpen,
      toggleCart,
      cartTotal,
      cartCount,
      user,
      login,
      logout,
      updateUserProfile,
      orders
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};