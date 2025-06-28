import React, { useState } from 'react';
import { 
  Users, 
  FileText, 
  Clock, 
  TrendingUp,
  MessageSquare,
  Star,
  Calendar,
  Phone,
  Mail,
  Award,
  CheckCircle,
  AlertCircle,
  Eye,
  Download,
  Edit,
  Plus,
  Filter,
  Search,
  BarChart3,
  Target,
  Heart,
  BookOpen
} from 'lucide-react';

const PartnerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeRange, setSelectedTimeRange] = useState('month');

  // Mock partner data
  const partnerInfo = {
    name: 'Priya Sharma',
    organization: 'Women\'s Legal Aid Society',
    type: 'Lawyer',
    verified: true,
    rating: 4.9,
    reviews: 127,
    casesHandled: 340,
    successRate: 94,
    experience: '8 years',
    specialties: ['Women Rights', 'Domestic Violence', 'Family Law'],
    languages: ['Hindi', 'English', 'Punjabi'],
    location: 'Delhi',
    joinedDate: '2021-03-15'
  };

  const stats = {
    newRequests: 23,
    activeCases: 12,
    completedCases: 89,
    monthlyGrowth: 15.2,
    responseTime: '2.3 hours',
    satisfactionRate: 96
  };

  const recentRequests = [
    {
      id: 1,
      name: 'Asha Kumari',
      issue: 'Domestic Violence',
      priority: 'High',
      language: 'Hindi',
      location: 'Delhi',
      timestamp: '2 hours ago',
      status: 'New',
      description: 'मेरे पति मुझे मारते हैं और घर से निकालने की धमकी देते हैं'
    },
    {
      id: 2,
      name: 'Sunita Devi',
      issue: 'Property Rights',
      priority: 'Medium',
      language: 'Hindi',
      location: 'Gurgaon',
      timestamp: '4 hours ago',
      status: 'In Progress',
      description: 'Property inheritance issues after husband\'s death'
    },
    {
      id: 3,
      name: 'Rajni Singh',
      issue: 'Workplace Harassment',
      priority: 'High',
      language: 'English',
      location: 'Noida',
      timestamp: '6 hours ago',
      status: 'Review',
      description: 'Sexual harassment at workplace by supervisor'
    }
  ];

  const completedCases = [
    {
      id: 1,
      name: 'Kamala Devi',
      issue: 'Domestic Violence',
      outcome: 'FIR Filed',
      rating: 5,
      feedback: 'Excellent support and guidance throughout the process',
      completedDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Meera Sharma',
      issue: 'Property Dispute',
      outcome: 'Case Settled',
      rating: 5,
      feedback: 'Professional and compassionate approach',
      completedDate: '2024-01-12'
    }
  ];

  const monthlyStats = [
    { month: 'Jan', cases: 23, success: 22 },
    { month: 'Feb', cases: 28, success: 26 },
    { month: 'Mar', cases: 31, success: 29 },
    { month: 'Apr', cases: 26, success: 25 },
    { month: 'May', cases: 34, success: 32 },
    { month: 'Jun', cases: 29, success: 28 }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new':
        return 'bg-blue-100 text-blue-700';
      case 'in progress':
        return 'bg-orange-100 text-orange-700';
      case 'review':
        return 'bg-purple-100 text-purple-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">New Requests</p>
              <p className="text-2xl font-bold text-gray-900">{stats.newRequests}</p>
              <p className="text-sm text-blue-600 mt-1">Awaiting response</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Cases</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeCases}</p>
              <p className="text-sm text-orange-600 mt-1">In progress</p>
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed Cases</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completedCases}</p>
              <p className="text-sm text-green-600 mt-1">+{stats.monthlyGrowth}% this month</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Satisfaction Rate</p>
              <p className="text-2xl font-bold text-gray-900">{stats.satisfactionRate}%</p>
              <p className="text-sm text-purple-600 mt-1">Avg response: {stats.responseTime}</p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Monthly Performance</h2>
          <BarChart3 className="h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {monthlyStats.map((stat, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-gray-600">{stat.month}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm text-gray-700">Cases: {stat.cases}</span>
                  <span className="text-sm text-green-600">Success: {stat.success}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${(stat.success / stat.cases) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-900">
                {Math.round((stat.success / stat.cases) * 100)}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRequests = () => (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search requests..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
            <option>All Status</option>
            <option>New</option>
            <option>In Progress</option>
            <option>Review</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
            <option>All Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {recentRequests.map((request) => (
          <div key={request.id} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-medium">{request.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{request.name}</h3>
                  <p className="text-sm text-gray-600">{request.location} • {request.timestamp}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityColor(request.priority)}`}>
                  {request.priority}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(request.status)}`}>
                  {request.status}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-sm font-medium text-gray-700">Issue: {request.issue}</span>
                <span className="text-sm text-gray-500">Language: {request.language}</span>
              </div>
              <p className="text-gray-700 text-sm bg-gray-50 rounded-lg p-3">
                {request.description}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 px-3 py-1 text-sm bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  <MessageSquare className="h-4 w-4" />
                  <span>Respond</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </button>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <Eye className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCases = () => (
    <div className="space-y-6">
      {/* Completed Cases */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Completed Cases</h2>
        <div className="space-y-4">
          {completedCases.map((case_) => (
            <div key={case_.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">{case_.name}</h3>
                  <p className="text-sm text-gray-600">{case_.issue} • {case_.completedDate}</p>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(case_.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  {case_.outcome}
                </span>
              </div>
              <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
                "{case_.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      {/* Profile Info */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Profile Information</h2>
          <button className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            <Edit className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <p className="text-gray-900">{partnerInfo.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
              <p className="text-gray-900">{partnerInfo.organization}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <p className="text-gray-900">{partnerInfo.type}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
              <p className="text-gray-900">{partnerInfo.experience}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <p className="text-gray-900">{partnerInfo.location}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Specialties</label>
              <div className="flex flex-wrap gap-2">
                {partnerInfo.specialties.map((specialty, index) => (
                  <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Languages</label>
              <div className="flex flex-wrap gap-2">
                {partnerInfo.languages.map((language, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {language}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
              <p className="text-gray-900">{new Date(partnerInfo.joinedDate).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{partnerInfo.rating}</div>
            <div className="text-sm text-gray-600">Average Rating</div>
            <div className="flex justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(partnerInfo.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{partnerInfo.reviews}</div>
            <div className="text-sm text-gray-600">Total Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{partnerInfo.casesHandled}</div>
            <div className="text-sm text-gray-600">Cases Handled</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{partnerInfo.successRate}%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'requests', name: 'Requests', icon: MessageSquare },
    { id: 'cases', name: 'Cases', icon: FileText },
    { id: 'profile', name: 'Profile', icon: Users }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl shadow-lg text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">{partnerInfo.name.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{partnerInfo.name}</h1>
              <p className="opacity-90">{partnerInfo.organization}</p>
              <div className="flex items-center space-x-2 mt-1">
                {partnerInfo.verified && (
                  <CheckCircle className="h-4 w-4" />
                )}
                <span className="text-sm">Verified {partnerInfo.type}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{partnerInfo.rating}</div>
            <div className="opacity-90">Rating</div>
            <div className="text-sm opacity-75">{partnerInfo.reviews} reviews</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="flex border-b">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-orange-500 text-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
        <div className="p-6">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'requests' && renderRequests()}
          {activeTab === 'cases' && renderCases()}
          {activeTab === 'profile' && renderProfile()}
        </div>
      </div>

      {/* AI Assistance Placeholder */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <Target className="h-6 w-6 text-green-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-green-900">AI-Powered Case Management</h3>
            <p className="text-green-800 mt-1">
              Space reserved for AI-powered case prioritization, automated responses, and intelligent case matching.
            </p>
            <p className="text-green-700 text-sm mt-2">
              Future features: Smart case routing, outcome prediction, and automated legal research assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;