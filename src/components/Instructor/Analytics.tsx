import { TrendingUp, Users, Award, Clock } from 'lucide-react';

export const Analytics = () => {
  const analyticsData = {
    totalExams: 24,
    totalStudents: 156,
    totalQuestions: 342,
    avgCompletionRate: 87,
    examPerformance: [
      { name: 'Mathematics Final', students: 45, avgScore: 87, completion: 95 },
      { name: 'Physics Quiz', students: 52, avgScore: 82, completion: 89 },
      { name: 'Chemistry Test', students: 38, avgScore: 79, completion: 92 },
      { name: 'Biology Midterm', students: 41, avgScore: 85, completion: 88 }
    ],
    difficultyDistribution: {
      easy: 45,
      medium: 38,
      hard: 17
    },
    monthlyStats: [
      { month: 'Jan', exams: 8, students: 145 },
      { month: 'Feb', exams: 12, students: 156 },
      { month: 'Mar', exams: 10, students: 162 },
      { month: 'Apr', exams: 15, students: 171 }
    ]
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Analytics Dashboard</h2>
        <p className="text-gray-600">Comprehensive insights into your examination system</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Exams</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.totalExams}</p>
              <p className="text-xs text-green-600">+3 this month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Active Students</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.totalStudents}</p>
              <p className="text-xs text-green-600">+12 this month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Avg Score</p>
              <p className="text-2xl font-bold text-gray-900">84%</p>
              <p className="text-xs text-green-600">+2% this month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Completion Rate</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.avgCompletionRate}%</p>
              <p className="text-xs text-green-600">+5% this month</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Exam Performance */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Exam Performance</h3>
          <div className="space-y-4">
            {analyticsData.examPerformance.map((exam, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{exam.name}</h4>
                  <span className="text-sm text-green-600 font-medium">{exam.avgScore}%</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>{exam.students} students</span>
                  <span className="mx-2">•</span>
                  <span>{exam.completion}% completion rate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${exam.avgScore}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Question Difficulty Distribution */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Question Difficulty</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Easy</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-900 font-medium mr-2">{analyticsData.difficultyDistribution.easy}%</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${analyticsData.difficultyDistribution.easy}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Medium</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-900 font-medium mr-2">{analyticsData.difficultyDistribution.medium}%</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full" 
                    style={{ width: `${analyticsData.difficultyDistribution.medium}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Hard</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-900 font-medium mr-2">{analyticsData.difficultyDistribution.hard}%</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full" 
                    style={{ width: `${analyticsData.difficultyDistribution.hard}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Trends</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 text-sm font-medium text-gray-600">Month</th>
                <th className="text-right py-3 text-sm font-medium text-gray-600">Exams Created</th>
                <th className="text-right py-3 text-sm font-medium text-gray-600">Active Students</th>
                <th className="text-right py-3 text-sm font-medium text-gray-600">Growth</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.monthlyStats.map((stat, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 text-gray-900">{stat.month}</td>
                  <td className="py-3 text-right text-gray-900">{stat.exams}</td>
                  <td className="py-3 text-right text-gray-900">{stat.students}</td>
                  <td className="py-3 text-right">
                    <span className="text-green-600 text-sm font-medium">
                      +{index === 0 ? 0 : stat.students - analyticsData.monthlyStats[index-1]?.students || 0}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};