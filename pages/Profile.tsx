import React, { useState } from 'react';
import { User, Package, CreditCard, Settings, MapPin, Phone, Mail, Save, LogOut } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Button } from '../components/Button';
import { Navigate } from 'react-router-dom';

export const Profile: React.FC = () => {
  const { user, logout, updateUserProfile, orders } = useShop();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'payment'>('profile');
  const [isEditing, setIsEditing] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: user?.city || ''
  });

  if (!user) {
    return <Navigate to="/auth" />;
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="bg-slate-900 rounded-2xl p-8 text-white mb-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <User className="w-64 h-64 -mr-12 -mt-12" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-3xl font-bold border-4 border-white/20">
                {user.name.charAt(0)}
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <p className="text-slate-300 flex items-center justify-center md:justify-start gap-2 mt-1">
                  <Mail className="w-4 h-4" /> {user.email}
                </p>
                <div className="mt-4 flex gap-3 justify-center md:justify-start">
                   <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium">Member since 2023</span>
                   <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">Active Customer</span>
                </div>
              </div>
              <button 
                onClick={logout}
                className="bg-red-500/20 hover:bg-red-500 text-red-100 px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-bold"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Sidebar Navigation */}
            <div className="md:col-span-3 space-y-2">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === 'profile' ? 'bg-white shadow-md text-primary' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}
              >
                <Settings className="w-5 h-5" /> Profile Settings
              </button>
              <button 
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === 'orders' ? 'bg-white shadow-md text-primary' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}
              >
                <Package className="w-5 h-5" /> Order History
              </button>
              <button 
                onClick={() => setActiveTab('payment')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === 'payment' ? 'bg-white shadow-md text-primary' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}
              >
                <CreditCard className="w-5 h-5" /> Payment Methods
              </button>
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-9">
              
              {/* PROFILE SETTINGS TAB */}
              {activeTab === 'profile' && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-slate-900">Personal Information</h2>
                    {!isEditing && (
                      <button onClick={() => setIsEditing(true)} className="text-primary text-sm font-bold hover:underline">
                        Edit Details
                      </button>
                    )}
                  </div>

                  <form onSubmit={handleSave}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                          <input 
                            type="text" 
                            disabled={!isEditing}
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed focus:ring-2 focus:ring-primary focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                          <input 
                            type="email" 
                            disabled={true} // Email usually shouldn't change
                            value={formData.email}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg opacity-70 cursor-not-allowed"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                          <input 
                            type="text" 
                            disabled={!isEditing}
                            value={formData.phone}
                            onChange={e => setFormData({...formData, phone: e.target.value})}
                            placeholder="0300-0000000"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg disabled:opacity-70 focus:ring-2 focus:ring-primary focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">City</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                          <input 
                            type="text" 
                            disabled={!isEditing}
                            value={formData.city}
                            onChange={e => setFormData({...formData, city: e.target.value})}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg disabled:opacity-70 focus:ring-2 focus:ring-primary focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Shipping Address</label>
                        <textarea 
                          disabled={!isEditing}
                          value={formData.address}
                          onChange={e => setFormData({...formData, address: e.target.value})}
                          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg disabled:opacity-70 focus:ring-2 focus:ring-primary focus:outline-none h-24 resize-none"
                        ></textarea>
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex justify-end gap-3">
                        <Button type="button" variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
                        <Button type="submit" variant="primary">
                          <Save className="w-4 h-4 mr-2" /> Save Changes
                        </Button>
                      </div>
                    )}
                  </form>
                </div>
              )}

              {/* ORDERS TAB */}
              {activeTab === 'orders' && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 mb-4">Order History</h2>
                  {orders.length > 0 ? (
                    orders.map(order => (
                      <div key={order.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-lg font-bold text-slate-900">{order.id}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-600' :
                              order.status === 'Processing' ? 'bg-blue-100 text-blue-600' :
                              'bg-slate-100 text-slate-600'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                          <p className="text-sm text-slate-500">Placed on {order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">PKR {order.total.toLocaleString()}</p>
                          <button className="text-sm text-slate-500 hover:text-primary underline mt-1">View Invoice</button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="bg-white p-12 rounded-xl shadow-sm border border-slate-100 text-center">
                      <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-slate-900">No orders yet</h3>
                      <p className="text-slate-500 mb-6">Visit the store to find great deals!</p>
                    </div>
                  )}
                </div>
              )}

              {/* PAYMENT TAB */}
              {activeTab === 'payment' && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Payment Methods</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="p-5 border-2 border-primary bg-primary/5 rounded-xl relative overflow-hidden">
                      <div className="flex justify-between items-start mb-4">
                        <CreditCard className="w-8 h-8 text-primary" />
                        <span className="bg-white text-primary text-xs font-bold px-2 py-1 rounded">PRIMARY</span>
                      </div>
                      <p className="text-slate-500 text-sm mb-1">JazzCash Mobile Account</p>
                      <p className="text-xl font-bold text-slate-900 tracking-widest">0304 **** 835</p>
                      <p className="text-xs text-slate-400 mt-4">Verified • ZULQARNAIN AHMAD</p>
                    </div>

                    <button className="p-5 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all h-full min-h-[160px]">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-primary/10">
                        <span className="text-2xl font-light">+</span>
                      </div>
                      <span className="font-medium">Add New Method</span>
                    </button>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex gap-3">
                    <div className="w-1.5 h-full bg-yellow-400 rounded-full shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-yellow-800">Secure Payment Info</h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        We do not store your actual Credit Card numbers. All payments are processed securely via JazzCash, Easypaisa or Bank Transfer.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};