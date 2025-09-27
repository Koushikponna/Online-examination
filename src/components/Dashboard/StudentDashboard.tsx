import { useState } from 'react';
import { Clock, Award, BookOpen, TrendingUp } from 'lucide-react';
import { AvailableExams } from '../Student/AvailableExams';
import { MyResults } from '../Student/MyResults';
import { UpcomingExams } from '../Student/UpcomingExams';

interface StudentDashboardProps {
  activeTab: string;
}

export const StudentDashboard = ({ activeTab }: StudentDashboardProps) => {
  const stats = [
    {
      title: 'Exams Completed',
      value: '12',
      icon: Award,
      color: 'bg-green-500',
      change: '+2 this week'
    },
    {
      title: 'Average Score',
      value: '87%',
      icon: TrendingUp,
      color: 'bg-blue-500',
      change: '+5% from last month'
    },
    {
      title: 'Hours Studied',
      value: '24h',
      icon: Clock,
      color: 'bg-purple-500',
      change: '+3h this week'
    },
    {
      title: 'Available Exams',
      value: '8',
      icon: BookOpen,
      color: 'bg-orange-500',
      change: '3 new this week'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'available-exams':
        return <AvailableExams />;
      case 'my-results':
        return <MyResults />;
      case 'upcoming':
        return <UpcomingExams />;
      default:
        return (
          <div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                      </div>
                      <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Exams</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Mathematics Final', score: '92%', date: '2 days ago', status: 'completed' },
                    { name: 'Physics Quiz', score: '85%', date: '5 days ago', status: 'completed' },
                    { name: 'Chemistry Lab Test', score: '78%', date: '1 week ago', status: 'completed' }
                  ].map((exam, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{exam.name}</p>
                        <p className="text-sm text-gray-600">{exam.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">{exam.score}</p>
                        <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                          {exam.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Biology Assignment', due: 'Tomorrow', type: 'assignment' },
                    { name: 'History Quiz', due: '3 days', type: 'quiz' },
                    { name: 'Literature Essay', due: '1 week', type: 'essay' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-orange-600">Due in {item.due}</p>
                      </div>
                      <span className="inline-block px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full capitalize">
                        {item.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {activeTab === 'dashboard' ? 'Student Dashboard' : activeTab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </h1>
        <p className="text-gray-600">Welcome back! Here's your learning progress.</p>
      </div>
      
      {renderContent()}
    </div>
  );
};