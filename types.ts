export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'Repair' | 'Software' | 'Design' | 'SEO';
}

export interface PricingPackage {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Repair' | 'Design' | 'SEO';
  imageUrl: string;
  description: string;
}

export interface BankDetails {
  bankName: string;
  accountName: string;
  accountNo: string;
  iban?: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}

// --- E-COMMERCE TYPES ---

export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'Laptop' | 'Accessory' | 'Software' | 'Service';
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Pending' | 'Processing' | 'Delivered' | 'Cancelled';
  items: CartItem[];
}