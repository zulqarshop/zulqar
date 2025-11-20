import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Video } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-2 tracking-tighter">
              ZULQAR<span className="text-primary">COMPUTERS</span>
            </h3>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Designed for tech excellence in Sharaqpur Sharif.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href={BUSINESS_INFO.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={BUSINESS_INFO.socials.tiktok} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="TikTok">
              <Video className="w-5 h-5" />
            </a>
            <a href={BUSINESS_INFO.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Legal/Nav Links */}
          <div className="flex gap-6 text-sm">
            <Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};