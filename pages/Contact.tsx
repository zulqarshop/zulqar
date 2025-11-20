import React from 'react';
import { MapPin, Phone, Facebook, Instagram, Youtube, Video, Film } from 'lucide-react';
import { Button } from '../components/Button';
import { BUSINESS_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="py-12 bg-slate-900 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-slate-400">We are here to help you</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-fit">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit Us</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">{BUSINESS_INFO.address}</p>
                  <p className="text-slate-500 text-xs mt-2 font-medium">Hours: {BUSINESS_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                   <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call or Text</h4>
                  <p className="text-slate-600 text-sm mt-1">Call: <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-primary font-medium">{BUSINESS_INFO.phone}</a></p>
                  <p className="text-slate-600 text-sm">WhatsApp: <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\s/g, '')}`} className="hover:text-primary font-medium">{BUSINESS_INFO.whatsapp}</a></p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  <a href={BUSINESS_INFO.socials.facebook} target="_blank" rel="noreferrer" className="bg-slate-100 p-3 rounded-lg hover:bg-[#1877F2] hover:text-white transition-all" title="Facebook"><Facebook className="w-5 h-5" /></a>
                  <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noreferrer" className="bg-slate-100 p-3 rounded-lg hover:bg-[#E4405F] hover:text-white transition-all" title="Instagram"><Instagram className="w-5 h-5" /></a>
                  <a href={BUSINESS_INFO.socials.tiktok} target="_blank" rel="noreferrer" className="bg-slate-100 p-3 rounded-lg hover:bg-black hover:text-white transition-all" title="TikTok"><Video className="w-5 h-5" /></a>
                  <a href={BUSINESS_INFO.socials.youtube} target="_blank" rel="noreferrer" className="bg-slate-100 p-3 rounded-lg hover:bg-[#FF0000] hover:text-white transition-all" title="YouTube"><Youtube className="w-5 h-5" /></a>
                  <a href={BUSINESS_INFO.socials.capcut} target="_blank" rel="noreferrer" className="bg-slate-100 p-3 rounded-lg hover:bg-black hover:text-white transition-all" title="CapCut Portfolio"><Film className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] bg-slate-200 rounded-2xl overflow-hidden relative shadow-inner border border-slate-300">
             <iframe 
               title="Google Map Location"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.680573173186!2d74.06284737508627!3d31.642554974158525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919193972e8e811%3A0x2385d56923c5a4a8!2sDegree%20College%20For%20Boys%2C%20Sharaqpur%20Sharif!5e0!3m2!1sen!2s!4v1709620000000!5m2!1sen!2s" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0 w-full h-full"
             ></iframe>
             
             <div className="absolute bottom-4 right-4 z-10">
                <a href={BUSINESS_INFO.mapLink} target="_blank" rel="noreferrer">
                  <Button variant="primary" className="shadow-xl">Open in Google Maps</Button>
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};