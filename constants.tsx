import React from 'react';
import { Wrench, Monitor, Smartphone, Palette, Youtube, Globe, Shield, Wifi } from 'lucide-react';
import { ServiceItem, PricingPackage, BankDetails, PortfolioItem, Product } from './types';

export const BUSINESS_INFO = {
  name: "ZULQAR COMPUTERS",
  owner: "ZULQARNAIN AHMAD (Sir ZULQAR)",
  phone: "03191500935",
  whatsapp: "03044983835",
  address: "F4F3+32F, Nai Bhaini, Near Degree College For Boys, Opposite Jamiya Masjid, Sheikhupura Road, Sharaqpur Sharif, District Sheikhupura, Punjab, Pakistan - 39460",
  hours: "Mon-Sat, 9:00 AM – 8:00 PM",
  mapLink: "https://maps.app.goo.gl/FJ6NeoYgWRb8hYqq9",
  socials: {
    facebook: "https://www.facebook.com/zulqar935?mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/zulqarsolutions",
    tiktok: "https://www.tiktok.com/@zulqar935",
    youtube: "https://youtube.com/@zulqarcomputers",
    capcut: "https://mobile.capcutshare.com/s/Zs85wCXDQ"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Computer & Laptop Repair",
    description: "Hardware troubleshooting, screen replacement, keyboard repair, battery replacement, and virus removal.",
    icon: <Wrench className="w-6 h-6" />,
    category: "Repair"
  },
  {
    title: "Software Installation",
    description: "Windows installation, activation, office setups, and system speed optimization for business & personal use.",
    icon: <Monitor className="w-6 h-6" />,
    category: "Software"
  },
  {
    title: "Device Unlocking",
    description: "Secure password recovery, account access solutions, and mobile/laptop unlocking services.",
    icon: <Shield className="w-6 h-6" />,
    category: "Software"
  },
  {
    title: "Graphics Designing",
    description: "Professional logo design, banners, social media posts, and promotional graphics.",
    icon: <Palette className="w-6 h-6" />,
    category: "Design"
  },
  {
    title: "YouTube & SEO",
    description: "Channel growth strategies, SEO optimization for videos, and engagement tips.",
    icon: <Youtube className="w-6 h-6" />,
    category: "SEO"
  },
  {
    title: "Remote Support",
    description: "Step-by-step guidance via WhatsApp, TeamViewer, or AnyDesk for online issues.",
    icon: <Wifi className="w-6 h-6" />,
    category: "Software"
  }
];

export const PACKAGES: PricingPackage[] = [
  {
    name: "Essential Setup",
    price: "Please Call",
    features: ["Windows Installation", "Driver Updates", "Basic Software (Office/PDF)", "Antivirus Setup"],
  },
  {
    name: "Device Unlock",
    price: "From PKR 500",
    features: ["Password Recovery", "Pattern Unlock", "Account Restoration", "Data Backup (if possible)"],
    isPopular: true
  },
  {
    name: "Business Branding",
    price: "Custom Quote",
    features: ["Logo Design", "Social Media Kit", "Banner Design", "Digital Flyer"],
  }
];

export const BANK_ACCOUNTS: BankDetails[] = [
  {
    bankName: "Meezan Bank",
    accountName: "ZULQARNAIN AHMAD",
    accountNo: "00300110924527",
    iban: "PK07MEZN0000300110924527"
  },
  {
    bankName: "MCB Bank",
    accountName: "ZULQARNAIN AHMAD",
    accountNo: "1597588311004069",
    iban: "PK28MUCB1597588311004069"
  },
  {
    bankName: "Allied Bank",
    accountName: "ZULQARNAIN AHMAD",
    accountNo: "05200010120504820013",
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { 
    id: 1, 
    title: "Motherboard Circuit Repair", 
    category: "Repair", 
    imageUrl: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=800&auto=format&fit=crop", 
    description: "Complex soldering and circuit tracing to revive a dead laptop." 
  },
  { 
    id: 2, 
    title: "Custom Gaming Build", 
    category: "Repair", 
    imageUrl: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop", 
    description: "High-performance gaming PC assembly with custom cable management." 
  },
  { 
    id: 3, 
    title: "Brand Identity Logo", 
    category: "Design", 
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=800&auto=format&fit=crop", 
    description: "Modern, minimalist logo design for a local tech startup." 
  },
  { 
    id: 4, 
    title: "Channel Analytics Growth", 
    category: "SEO", 
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", 
    description: "Achieved 300% subscriber growth through targeted SEO strategies." 
  },
  { 
    id: 5, 
    title: "Social Media Campaign", 
    category: "Design", 
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop", 
    description: "Viral promotional banners designed for Instagram and Facebook." 
  },
  { 
    id: 6, 
    title: "Laptop Screen Replacement", 
    category: "Repair", 
    imageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800&auto=format&fit=crop", 
    description: "Cracked screen replacement service with OEM quality parts." 
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 101,
    name: "Refurbished HP EliteBook 840 G3",
    price: 35000,
    category: "Laptop",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop",
    description: "Core i5 6th Gen, 8GB RAM, 256GB SSD. Excellent condition business laptop."
  },
  {
    id: 102,
    name: "Mechanical Gaming Keyboard",
    price: 4500,
    category: "Accessory",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop",
    description: "RGB Backlit, Blue Switches, perfect for gaming and typing."
  },
  {
    id: 103,
    name: "Wireless Gaming Mouse",
    price: 2500,
    category: "Accessory",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=800&auto=format&fit=crop",
    description: "High precision optical sensor, rechargeable battery, ergonomic design."
  },
  {
    id: 104,
    name: "Windows 10 Pro License Key",
    price: 1500,
    category: "Software",
    image: "https://images.unsplash.com/photo-1626218174358-77b797b66000?q=80&w=800&auto=format&fit=crop",
    description: "Genuine digital activation key for Windows 10 Professional. Lifetime validity."
  },
  {
    id: 105,
    name: "Antivirus 1 Year Subscription",
    price: 2000,
    category: "Software",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop",
    description: "Protect your PC from malware and viruses. Official 1-year license."
  },
  {
    id: 106,
    name: "Custom PC Assembly Fee",
    price: 3000,
    category: "Service",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop",
    description: "Professional assembly of your components with cable management and testing."
  }
];
