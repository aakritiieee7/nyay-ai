import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FileText, Users, AlertTriangle, Scale, CheckCircle, XCircle, Info } from 'lucide-react';

const AIResponse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { query, language, category } = location.state || {};

  // Mock AI response data - this will be replaced with actual AI integration
  const mockResponse = {
    cleanedQuery: query || "User query will appear here after AI processing",
    detectedIssues: [
      "Domestic Violence",
      "Women's Rights Violation"
    ],
    suggestedLaws: [
      {
        section: "IPC Section 498A",
        description: "Husband or relative of husband of a woman subjecting her to cruelty"
      },
      {
        section: "Protection of Women from Domestic Violence Act, 2005",
        description: "Comprehensive law to protect women from domestic violence"
      }
    ],
    biasDetection: {
      detected: true,
      type: "Gender",
      confidence: "92%",
      explanation: "Potential gender bias detected in the query context"
    },
    confidence: "85%",
    recommendedActions: [
      "File a complaint with local police station",
      "Approach Protection Officer under DV Act",
      "Contact local women's helpline",
      "Seek legal counsel from women's rights organization"
    ]
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Legal Analysis Result</h1>
        <p className="text-gray-600">AI-powered analysis of your legal query</p>
      </div>

      {/* Original Query */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
          <Info className="h-5 w-5 mr-2 text-blue-600" />
          Your Query
        </h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-800">{mockResponse.cleanedQuery}</p>
          <div className="mt-2 flex space-x-4 text-sm text-gray-500">
            <span>Language: {language || 'Hindi'}</span>
            <span>Category: {category || 'Not specified'}</span>
          </div>
        </div>
      </div>

      {/* Bias Detection Alert */}
      {mockResponse.biasDetection.detected && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900">Bias Detected</h3>
              <p className="text-red-800 mt-1">
                {mockResponse.biasDetection.type} bias detected with {mockResponse.biasDetection.confidence} confidence.
              </p>
              <p className="text-red-700 text-sm mt-2">{mockResponse.biasDetection.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Legal Issues Detected */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Scale className="h-5 w-5 mr-2 text-orange-600" />
          Detected Legal Issues
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {mockResponse.detectedIssues.map((issue, index) => (
            <div key={index} className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-orange-600" />
              <span className="font-medium text-orange-900">{issue}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Laws */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Applicable Laws & Sections</h2>
        <div className="space-y-4">
          {mockResponse.suggestedLaws.map((law, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">{law.section}</h3>
              <p className="text-gray-600 mt-1">{law.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Actions */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended Actions</h2>
        <div className="space-y-3">
          {mockResponse.recommendedActions.map((action, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-green-600 text-sm font-medium">{index + 1}</span>
              </div>
              <p className="text-gray-800">{action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Confidence Score */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Analysis Confidence</h2>
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: mockResponse.confidence }}></div>
          </div>
          <span className="font-semibold text-green-600">{mockResponse.confidence}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate('/generate-draft', { state: { response: mockResponse } })}
            className="flex-1 flex items-center justify-center space-x-2 bg-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            <FileText className="h-5 w-5" />
            <span>Generate Legal Draft</span>
          </button>
          <button
            onClick={() => navigate('/connect-help')}
            className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Users className="h-5 w-5" />
            <span>Connect to Help</span>
          </button>
        </div>
      </div>

      {/* AI Model Integration Placeholder */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
          <div>
            <h4 className="font-medium text-yellow-800">Demo Mode</h4>
            <p className="text-sm text-yellow-700">
              This is mock data. Actual AI integration with GPT-4, bias detection ML model, and RAG pipeline will replace this.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIResponse;