import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, MicOff, Send, Globe, AlertTriangle } from 'lucide-react';

const Home = () => {
  const [query, setQuery] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const categories = [
    { value: 'domestic', label: 'Domestic Violence', emoji: '🏠' },
    { value: 'land', label: 'Land Disputes', emoji: '🏞️' },
    { value: 'police', label: 'Police Issues', emoji: '👮' },
    { value: 'caste', label: 'Caste Discrimination', emoji: '⚖️' },
    { value: 'labor', label: 'Labor Rights', emoji: '👷' },
    { value: 'women', label: 'Women Rights', emoji: '👩' },
  ];

  const languages = [
    { value: 'hindi', label: 'हिंदी' },
    { value: 'english', label: 'English' },
    { value: 'hinglish', label: 'Hinglish' },
    { value: 'bengali', label: 'বাংলা' },
    { value: 'tamil', label: 'தமிழ்' },
    { value: 'gujarati', label: 'ગુજરાતી' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to AI response page with query data
      navigate('/ai-response', { state: { query, language: selectedLanguage, category: selectedCategory } });
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // TODO: Implement actual voice recording
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Ask Your Legal Question
        </h1>
        <p className="text-gray-600 mb-4">
          Get AI-powered legal guidance tailored for Indian law
        </p>
        <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          <Globe className="h-4 w-4 mr-1" />
          <span>Supporting 6+ Indian languages</span>
        </div>
      </div>

      {/* Language Selection */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Language</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {languages.map((lang) => (
            <button
              key={lang.value}
              onClick={() => setSelectedLanguage(lang.value)}
              className={`p-3 rounded-lg border-2 transition-colors ${
                selectedLanguage === lang.value
                  ? 'border-orange-500 bg-orange-50 text-orange-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Selection */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal Category (Optional)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value === selectedCategory ? '' : category.value)}
              className={`p-4 rounded-lg border-2 transition-colors text-left ${
                selectedCategory === category.value
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{category.emoji}</span>
                <span className="font-medium">{category.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Query Input */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Describe your legal issue
              </label>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                placeholder="Type your legal question here... You can write in Hindi, English, or any supported language."
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={toggleRecording}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isRecording
                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isRecording ? (
                  <>
                    <MicOff className="h-5 w-5" />
                    <span>Stop Recording</span>
                  </>
                ) : (
                  <>
                    <Mic className="h-5 w-5" />
                    <span>Voice Input</span>
                  </>
                )}
              </button>

              <button
                type="submit"
                disabled={!query.trim()}
                className="flex items-center space-x-2 px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-5 w-5" />
                <span>Get Legal Advice</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* AI Model Status Placeholder */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
          <div>
            <h4 className="font-medium text-yellow-800">AI Model Integration Pending</h4>
            <p className="text-sm text-yellow-700">
              Space reserved for ML model integration - bias detection, language processing, and legal analysis will be added here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;