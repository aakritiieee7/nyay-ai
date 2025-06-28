import React, { useState } from 'react';
import { 
  Users, 
  FileText, 
  AlertTriangle, 
  TrendingUp, 
  Map, 
  Clock,
  Download,
  Filter,
  Search,
  Eye,
  BarChart3,
  PieChart,
  Activity,
  Shield,
  Bell,
  Calendar,
  Target,
  Zap
} from 'lucide-react';

const AdminDashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('week');
  const [selectedRegion, setSelectedRegion] = useState('all');

  // Mock data - to be replaced with real API
  const stats = {
    totalQueries: 12847,
    activeUsers: 3421,
    documentsGenerated: 8932,
    biasDetections: 245,
    weeklyGrowth: 12.5,
    monthlyGrowth: 34.2
  };

  const biasData = [
    { type: 'Gender', count: 128, percentage: 52.2, color: 'bg-red-500' },
    { type: 'Caste', count: 67, percentage: 27.3, color: 'bg-orange-500' },
    { type: 'Class', count: 32, percentage: 13.1, color: 'bg-yellow-500' },
    { type: 'Religion', count: 18, percentage: 7.4, color: 'bg-purple-500' }
  ];

  const recentQueries = [
    {
      id: 1,
      query: "मेरे पति मुझे मारते हैं और दहेज मांगते हैं",
      language: 'Hindi',
      category: 'Domestic Violence',
      biasFlag: 'Gender',
      timestamp: '2 hours ago',
      status: 'Processed',
      location: 'Delhi'
    },
    {
      id: 2,
      query: "My employer is not paying wages to Dalit workers",
      language: 'English',
      category: 'Labor Rights',
      biasFlag: 'Caste',
      timestamp: '4 hours ago',
      status: 'Processed',
      location: 'Mumbai'
    },
    {
      id: 3,
      query: "Land dispute with upper caste neighbor",
      language: 'English',
      category: 'Land Dispute',
      biasFlag: 'Caste',
      timestamp: '6 hours ago',
      status: 'Under Review',
      location: 'Bihar'
    }
  ];

  const topCategories = [
    { name: 'Domestic Violence', count: 3421, percentage: 26.6 },
    { name: 'Land Disputes', count: 2876, percentage: 22.4 },
    { name: 'Labor Rights', count: 2134, percentage: 16.6 },
    { name: 'Caste Discrimination', count: 1987, percentage: 15.5 },
    { name: 'Police Issues', count: 1654, percentage: 12.9 },
    { name: 'Others', count: 775, percentage: 6.0 }
  ];

  const regionalData = [
    { state: 'Uttar Pradesh', queries: 2341, bias: 89 },
    { state: 'Bihar', queries: 1876, bias: 67 },
    { state: 'West Bengal', queries: 1543, bias: 45 },
    { state: 'Rajasthan', queries: 1234, bias: 34 },
    { state: 'Madhya Pradesh', queries: 1098, bias: 29 }
  ];

  const mlModelMetrics = {
    biasDetection: {
      accuracy: 94.2,
      precision: 91.8,
      recall: 89.6,
      f1Score: 90.7
    },
    languageProcessing: {
      accuracy: 96.5,
      translationQuality: 93.2,
      dialectSupport: 87.4
    },
    legalAnalysis: {
      relevance: 92.1,
      completeness: 88.9,
      accuracy: 91.3
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
            <p className="opacity-90">Monitor platform performance and bias detection</p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export Data</span>
            </button>
            <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
              <Bell className="h-4 w-4" />
              <span>Alerts (3)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Time Range Selector */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          {['day', 'week', 'month', 'year'].map((range) => (
            <button
              key={range}
              onClick={() => setSelectedTimeRange(range)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                selectedTimeRange === range
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
        
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">All Regions</option>
          <option value="north">North India</option>
          <option value="south">South India</option>
          <option value="east">East India</option>
          <option value="west">West India</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Queries</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalQueries.toLocaleString()}</p>
              <p className="text-sm text-green-600 mt-1">+{stats.weeklyGrowth}% this week</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeUsers.toLocaleString()}</p>
              <p className="text-sm text-green-600 mt-1">+{stats.monthlyGrowth}% this month</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Documents Generated</p>
              <p className="text-2xl font-bold text-gray-900">{stats.documentsGenerated.toLocaleString()}</p>
              <p className="text-sm text-blue-600 mt-1">87% completion rate</p>
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Download className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Bias Detections</p>
              <p className="text-2xl font-bold text-gray-900">{stats.biasDetections}</p>
              <p className="text-sm text-red-600 mt-1">Requires attention</p>
            </div>
            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bias Detection Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Bias Detection Breakdown</h2>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {biasData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="font-medium text-gray-700">{item.type}</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-gray-900">{item.count}</span>
                  <span className="text-sm text-gray-500 ml-2">({item.percentage}%)</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t">
            <p className="text-sm text-gray-600">
              Total bias incidents: <span className="font-semibold">{biasData.reduce((sum, item) => sum + item.count, 0)}</span>
            </p>
          </div>
        </div>

        {/* Top Categories */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Query Categories</h2>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {topCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                  <span className="text-sm text-gray-500">{category.count}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ML Model Performance */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">ML Model Performance</h2>
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-green-600" />
            <span className="text-sm text-green-600 font-medium">All systems operational</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900 flex items-center space-x-2">
              <Shield className="h-4 w-4 text-red-600" />
              <span>Bias Detection</span>
            </h3>
            {Object.entries(mlModelMetrics.biasDetection).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                <span className="text-sm font-medium text-gray-900">{value}%</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900 flex items-center space-x-2">
              <Zap className="h-4 w-4 text-blue-600" />
              <span>Language Processing</span>
            </h3>
            {Object.entries(mlModelMetrics.languageProcessing).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                <span className="text-sm font-medium text-gray-900">{value}%</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900 flex items-center space-x-2">
              <Target className="h-4 w-4 text-green-600" />
              <span>Legal Analysis</span>
            </h3>
            {Object.entries(mlModelMetrics.legalAnalysis).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-sm text-gray-600 capitalize">{key}:</span>
                <span className="text-sm font-medium text-gray-900">{value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Analytics */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Regional Analytics</h2>
          <Map className="h-5 w-5 text-gray-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">State</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Total Queries</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Bias Incidents</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Bias Rate</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Trend</th>
              </tr>
            </thead>
            <tbody>
              {regionalData.map((region, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{region.state}</td>
                  <td className="py-3 px-4 text-gray-600">{region.queries.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-600">{region.bias}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      (region.bias / region.queries) * 100 > 5
                        ? 'bg-red-100 text-red-700'
                        : (region.bias / region.queries) * 100 > 3
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {((region.bias / region.queries) * 100).toFixed(1)}%
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Queries */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Queries</h2>
          <div className="flex space-x-2">
            <button className="flex items-center space-x-2 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Query</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Bias Flag</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Location</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Time</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentQueries.map((query) => (
                <tr key={query.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="max-w-xs truncate text-gray-900">{query.query}</div>
                    <div className="text-xs text-gray-500">{query.language}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {query.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {query.biasFlag ? (
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                        {query.biasFlag}
                      </span>
                    ) : (
                      <span className="text-gray-400 text-xs">None</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{query.location}</td>
                  <td className="py-3 px-4 text-gray-600">{query.timestamp}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-700">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Integration Space */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <Activity className="h-6 w-6 text-purple-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-purple-900">Advanced Analytics Integration</h3>
            <p className="text-purple-800 mt-1">
              Space reserved for advanced ML analytics, predictive modeling, and automated bias pattern detection.
            </p>
            <p className="text-purple-700 text-sm mt-2">
              Future features: Real-time bias alerts, query clustering, demographic analysis, and outcome prediction models.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;