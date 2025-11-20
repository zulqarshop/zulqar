import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Mail, ArrowRight, Laptop, ArrowLeft, CheckCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Button } from '../components/Button';

type AuthView = 'login' | 'register' | 'forgot';

export const Auth: React.FC = () => {
  const [view, setView] = useState<AuthView>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Forgot Password State
  const [resetSent, setResetSent] = useState(false);

  const { login } = useShop();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (view === 'forgot') {
        // Simulate sending email
        setTimeout(() => {
            setResetSent(true);
        }, 1000);
        return;
    }

    // Mock validation
    if (!email || !password) return;
    
    // For registration, name is required
    const userName = view === 'register' ? (name || email.split('@')[0]) : 'Valued Customer';
    
    login(userName, email);
    navigate('/profile'); // Redirect to profile after login
  };

  const switchView = (newView: AuthView) => {
    setView(newView);
    setResetSent(false);
    // Reset fields if needed, or keep them for convenience
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 pt-24">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden min-h-[600px] relative flex">
        
        {/* Desktop: Animated Side Panel */}
        <div className={`hidden md:flex w-1/2 bg-slate-900 text-white p-12 flex-col justify-center items-center absolute h-full transition-all duration-700 z-20 ${view === 'register' ? 'left-0 rounded-r-[100px]' : 'right-0 rounded-l-[100px]'}`}>
            <Laptop className="w-16 h-16 text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-center">
                {view === 'register' ? "Welcome Back!" : "New Here?"}
            </h2>
            <p className="text-slate-400 text-center mb-8">
                {view === 'register' 
                    ? "Sign in to access your dashboard and saved items."
                    : "Join Zulqar Computers to track orders and get exclusive tech deals."}
            </p>
            
            {view !== 'forgot' && (
                <Button 
                    variant="outline" 
                    onClick={() => switchView(view === 'login' ? 'register' : 'login')} 
                    className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                    {view === 'login' ? "Create Account" : "Sign In"}
                </Button>
            )}
        </div>

        {/* Forms Container */}
        <div className={`w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center transition-all duration-700 ${view === 'register' ? 'md:ml-auto' : 'md:mr-auto'}`}>
            
            {/* Mobile Toggle (only show if not in forgot password mode) */}
            {view !== 'forgot' && (
                <div className="md:hidden flex justify-center mb-8 bg-slate-100 p-1 rounded-full w-fit mx-auto">
                    <button 
                        onClick={() => switchView('login')}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${view === 'login' ? 'bg-white shadow text-primary' : 'text-slate-500'}`}
                    >
                        Login
                    </button>
                    <button 
                        onClick={() => switchView('register')}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${view === 'register' ? 'bg-white shadow text-primary' : 'text-slate-500'}`}
                    >
                        Sign Up
                    </button>
                </div>
            )}

            {view === 'forgot' ? (
                // FORGOT PASSWORD VIEW
                <div className="text-center">
                    <button onClick={() => switchView('login')} className="text-slate-500 hover:text-primary flex items-center gap-2 mb-6 text-sm font-bold">
                        <ArrowLeft className="w-4 h-4" /> Back to Login
                    </button>
                    
                    {resetSent ? (
                        <div className="animate-fade-in-up">
                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Check your inbox</h2>
                            <p className="text-slate-500 mb-8">
                                We have sent a password reset link to <span className="font-bold text-slate-800">{email}</span>
                            </p>
                            <Button variant="primary" fullWidth onClick={() => switchView('login')}>
                                Return to Sign In
                            </Button>
                        </div>
                    ) : (
                        <>
                            <h1 className="text-2xl font-bold text-slate-900 mb-2">Forgot Password?</h1>
                            <p className="text-slate-500 mb-8">Enter your email address and we'll send you a link to reset your password.</p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative text-left">
                                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <Button variant="primary" fullWidth type="submit">
                                    Send Reset Link
                                </Button>
                            </form>
                        </>
                    )}
                </div>
            ) : (
                // LOGIN / REGISTER VIEW
                <>
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">
                            {view === 'login' ? "Sign In" : "Create Account"}
                        </h1>
                        <p className="text-slate-500">
                            {view === 'login' ? "Use your email to access your account" : "Fill in your details to get started"}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto w-full">
                        {view === 'register' && (
                            <div className="relative">
                                <User className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                                <input 
                                    type="text" 
                                    placeholder="Full Name" 
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required={view === 'register'}
                                />
                            </div>
                        )}
                        
                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div className="relative">
                            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {view === 'login' && (
                            <div className="flex justify-end">
                                <button 
                                    type="button"
                                    onClick={() => switchView('forgot')}
                                    className="text-sm text-primary hover:underline font-medium"
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        <Button variant="primary" fullWidth type="submit" className="mt-6">
                            {view === 'login' ? "Login to Account" : "Create Account"} <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </form>
                </>
            )}
        </div>

      </div>
    </div>
  );
};