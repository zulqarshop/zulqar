import React from 'react';
import { CheckCircle, CreditCard, Copy, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { PACKAGES, BANK_ACCOUNTS, BUSINESS_INFO } from '../constants';

export const Pricing: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Using alert for simplicity, in a real app a toast is better
    alert(`Copied Account Number: ${text}`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="py-12 bg-slate-900 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Pricing & Payment</h1>
        <p className="text-slate-400">Simple, transparent pricing and secure payment options</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {PACKAGES.map((pkg, idx) => (
            <div key={idx} className={`relative bg-white p-8 rounded-2xl shadow-lg border flex flex-col ${pkg.isPopular ? 'border-primary ring-4 ring-primary/10' : 'border-slate-100'}`}>
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-slate-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\s/g, '')}?text=I am interested in the ${pkg.name} package.`} target="_blank" rel="noreferrer">
                <Button variant={pkg.isPopular ? 'primary' : 'outline'} fullWidth>
                  Order Now
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2 pb-4 border-b border-slate-100">
            <CreditCard className="text-primary" />
            Payment Methods
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Manual Transfer */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-slate-800">Direct Bank Transfer</h3>
              <div className="space-y-4">
                {BANK_ACCOUNTS.map((bank, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-primary/50 transition-colors group">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-slate-800">{bank.bankName}</p>
                        <p className="text-sm text-slate-500">{bank.accountName}</p>
                        <p className="font-mono text-slate-700 mt-1 font-semibold tracking-wide">{bank.accountNo}</p>
                        {bank.iban && <p className="text-xs text-slate-400 break-all mt-1">{bank.iban}</p>}
                      </div>
                      <button 
                        onClick={() => copyToClipboard(bank.accountNo)} 
                        className="p-2 text-slate-400 hover:text-primary hover:bg-white rounded-full transition-all"
                        title="Copy Account Number"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Online / Wallet */}
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-4 text-slate-800">PayFast / Mobile Wallets</h3>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center h-full flex flex-col">
                <div className="flex justify-center gap-4 mb-6">
                   <div className="h-10 px-4 bg-white flex items-center justify-center text-red-600 font-bold text-xs rounded border border-red-200 shadow-sm">JazzCash</div>
                   <div className="h-10 px-4 bg-white flex items-center justify-center text-green-600 font-bold text-xs rounded border border-green-200 shadow-sm">Easypaisa</div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center items-center mb-6">
                  <Smartphone className="w-16 h-16 text-slate-300 mb-4" />
                  <p className="text-sm text-slate-600 font-medium mb-2">
                    We accept payments via PayFast, JazzCash, and Easypaisa.
                  </p>
                  <p className="text-xs text-slate-500">
                    Click below to request a secure payment link or QR code via WhatsApp.
                  </p>
                </div>

                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\s/g, '')}?text=Hi Sir Zulqar, I would like to make a payment via JazzCash/Easypaisa.`} target="_blank" rel="noreferrer">
                  <Button variant="primary" fullWidth className="text-sm">
                    Request Payment Link <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};