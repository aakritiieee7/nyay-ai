import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('general');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - redirect to home
    navigate('/home');
  };

  const handleGuestAccess = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Scale className="h-12 w-12 text-orange-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">न्याय सहायक</h1>
            <p className="text-gray-600">Legal Help Platform for India</p>
          </div>

          {/* Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                !isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User Type
            </label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="general">General User</option>
              <option value="lawyer">Lawyer/NGO</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Guest Access */}
          <div className="mt-6 text-center">
            <button
              onClick={handleGuestAccess}
              className="text-orange-600 hover:text-orange-700 text-sm font-medium"
            >
              Continue as Guest
            </button>
          </div>

          {/* Forgot Password */}
          {isLogin && (
            <div className="mt-4 text-center">
              <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">
                Forgot your password?
              </Link>
            </div>
          )}
        </div>

        {/* Language Support Notice */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Supporting Hindi, English, and regional dialects</p>
          <p className="text-xs mt-1">हिंदी, अंग्रेजी और क्षेत्रीय बोलियों का समर्थन</p>
        </div>
      </div>
    </div>
  );
};

export default Login;