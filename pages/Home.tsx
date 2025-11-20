import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle, Shield, Wrench, Palette } from 'lucide-react';
import { Button } from '../components/Button';
import { BUSINESS_INFO } from '../constants';

export const Home: React.FC = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-slate-900 text-white overflow-hidden -mt-[72px] md:-mt-[88px]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4 border border-primary/30">
              Professional Tech Solutions in Sharaqpur Sharif
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Reliable Computer Repair & <span className="text-primary">Digital Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Run by Sir ZULQAR. Over 4 years of experience in Hardware Repair, Software Solutions, and Digital Media strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\s/g, '')}`} target="_blank" rel="noreferrer">
                <Button variant="primary" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4" />
                  WhatsApp Now
                </Button>
              </a>
              <Link to="/services">
                <Button variant="outline" className="w-full sm:w-auto">
                  View Services <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FEATURES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
                <Wrench className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Hardware Repair</h3>
                <p className="text-slate-600 mb-4">Expert laptop and PC repairs, from screen replacements to motherboard fixes.</p>
                <Link to="/services" className="text-primary font-semibold text-sm hover:underline flex items-center">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
             </div>
             <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Software Solutions</h3>
                <p className="text-slate-600 mb-4">Windows installation, device unlocking, and system optimization.</p>
                <Link to="/services" className="text-primary font-semibold text-sm hover:underline flex items-center">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
             </div>
             <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
                <Palette className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Digital Design</h3>
                <p className="text-slate-600 mb-4">Creative graphics and SEO strategies to boost your digital presence.</p>
                <Link to="/services" className="text-primary font-semibold text-sm hover:underline flex items-center">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to fix your device?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Contact us today for a quick consultation or visit our shop in Sharaqpur Sharif.</p>
          <Link to="/contact">
             <Button variant="primary" className="mx-auto">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};