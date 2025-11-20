import React from 'react';
import { CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  const seoData = [
    { name: 'Month 1', views: 1000 },
    { name: 'Month 2', views: 2500 },
    { name: 'Month 3', views: 5000 },
    { name: 'Month 4', views: 12000 },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="py-12 bg-slate-900 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Our Services</h1>
        <p className="text-slate-400">Professional solutions for Hardware, Software & Digital Media</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4 min-h-[48px]">{service.description}</p>
              <span className="inline-block px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded font-medium uppercase tracking-wide">
                {service.category}
              </span>
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
             <h2 className="text-2xl font-bold text-slate-900 mb-6">Remote Support Solutions</h2>
             <p className="text-slate-600 mb-6">
               Can't make it to the shop? We use industry-standard tools to help you remotely.
             </p>
             <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">TeamViewer & AnyDesk</h4>
                    <p className="text-sm text-slate-500">Secure remote connection to fix software issues instantly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">WhatsApp Video Guidance</h4>
                    <p className="text-sm text-slate-500">Step-by-step hardware troubleshooting via video call.</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-6 text-white">Digital Growth & SEO</h2>
            <p className="text-slate-400 mb-6">
               See how we can transform your social media presence.
            </p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={seoData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  />
                  <Bar dataKey="views" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-center text-slate-500 mt-4">* Simulated growth metrics based on past client success.</p>
          </div>
        </div>
      </div>
    </div>
  );
};