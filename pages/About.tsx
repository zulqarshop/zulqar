import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About Us</h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
              alt="Computer Repair Workshop" 
              className="rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Who We Are</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              <span className="font-bold text-slate-900">{BUSINESS_INFO.name}</span> is a premier technical service provider run by 
              <span className="font-bold text-primary"> {BUSINESS_INFO.owner}</span>. 
              With over 4 years of hands-on experience in the tech industry, we have built a reputation for honesty, speed, and technical excellence in Sharaqpur Sharif.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We don't just fix computers; we provide complete digital solutions including graphic design, video editing support, and YouTube channel growth strategies.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary text-white rounded flex items-center justify-center text-sm">M</span>
              Our Mission
            </h3>
            <p className="text-slate-600">To provide professional, trustworthy, and fast technical solutions to all our clients, ensuring minimal downtime and maximum productivity.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-900 text-white rounded flex items-center justify-center text-sm">V</span>
              Our Vision
            </h3>
            <p className="text-slate-600">Empower individuals and businesses with smooth, problem-free computing and digital services that help them succeed in a digital world.</p>
          </div>
        </div>
      </div>
    </div>
  );
};