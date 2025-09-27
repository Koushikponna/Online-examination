import { Users, FileText, BookOpen, TrendingUp } from 'lucide-react';
import { ManageExams } from '../Instructor/ManageExams';
import { QuestionBank } from '../Instructor/QuestionBank';
import { StudentsManagement } from '../Instructor/StudentsManagement';
import { Analytics } from '../Instructor/Analytics';

interface InstructorDashboardProps {
  activeTab: string;
}

export const InstructorDashboard = ({ activeTab }: InstructorDashboardProps) => {
  const stats = [
    {
      title: 'Total Students',
      value: '156',
      icon: Users,
      color: 'bg-blue-500',
      change: '+12 this month'
    },
    {
      title: 'Active Exams',
      value: '8',
      icon: FileText,
      color: 'bg-green-500',
      change: '+2 this week'
    },
    {
      title: 'Questions Created',
      value: '342',
      icon: BookOpen,
      color: 'bg-purple-500',
      change: '+18 this week'
    },
    {
      title: 'Average Score',
      value: '82%',
      icon: TrendingUp,
      color: 'bg-orange-500',
      change: '+3% this month'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'exams':
        return <ManageExams />;
      case 'questions':
        return <QuestionBank />;
      case 'students':
        return <StudentsManagement />;
      case 'analytics':
        return <Analytics />;
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Exam Results</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Mathematics Final', students: 45, avgScore: '87%', status: 'completed' },
                    { name: 'Physics Quiz', students: 52, avgScore: '82%', status: 'completed' },
                    { name: 'Chemistry Test', students: 38, avgScore: '79%', status: 'active' }
                  ].map((exam, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{exam.name}</p>
                        <p className="text-sm text-gray-600">{exam.students} students</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-blue-600">{exam.avgScore}</p>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          exam.status === 'completed' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {exam.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Students</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Alice Johnson', score: '96%', exams: 12 },
                    { name: 'Bob Smith', score: '94%', exams: 11 },
                    { name: 'Carol Davis', score: '91%', exams: 10 }
                  ].map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-medium text-sm">{student.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.exams} exams taken</p>
                        </div>
                      </div>
                      <p className="font-medium text-blue-600">{student.score}</p>
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
          {activeTab === 'dashboard' ? 'Instructor Dashboard' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h1>
        <p className="text-gray-600">Manage your exams, questions, and track student progress.</p>
      </div>
      
      {renderContent()}
    </div>
  );
};