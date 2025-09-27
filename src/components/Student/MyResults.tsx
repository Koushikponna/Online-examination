import { Award, Calendar, Clock, TrendingUp } from 'lucide-react';

export const MyResults = () => {
  const results = [
    {
      id: '1',
      examTitle: 'Mathematics Final Exam',
      score: 92,
      totalPoints: 100,
      percentage: 92,
      grade: 'A',
      timeTaken: 98,
      totalTime: 120,
      date: '2024-01-15',
      status: 'passed',
      feedback: 'Excellent work! Strong understanding of calculus concepts.'
    },
    {
      id: '2',
      examTitle: 'Physics Quiz',
      score: 42,
      totalPoints: 50,
      percentage: 84,
      grade: 'B+',
      timeTaken: 38,
      totalTime: 45,
      date: '2024-01-12',
      status: 'passed',
      feedback: 'Good grasp of mechanics. Review thermodynamics concepts.'
    },
    {
      id: '3',
      examTitle: 'Chemistry Lab Test',
      score: 58,
      totalPoints: 75,
      percentage: 77,
      grade: 'B-',
      timeTaken: 85,
      totalTime: 90,
      date: '2024-01-10',
      status: 'passed',
      feedback: 'Solid performance. Focus more on organic chemistry reactions.'
    }
  ];

  const getGradeColor = (grade: string) => {
    switch (grade.charAt(0)) {
      case 'A': return 'text-green-700 bg-green-100';
      case 'B': return 'text-blue-700 bg-blue-100';
      case 'C': return 'text-yellow-700 bg-yellow-100';
      case 'D': return 'text-orange-700 bg-orange-100';
      case 'F': return 'text-red-700 bg-red-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const overallStats = {
    totalExams: results.length,
    averageScore: Math.round(results.reduce((acc, r) => acc + r.percentage, 0) / results.length),
    totalHours: Math.round(results.reduce((acc, r) => acc + r.timeTaken, 0) / 60),
    passingRate: Math.round((results.filter(r => r.status === 'passed').length / results.length) * 100)
  };

  return (
    <div>
      {/* Overall Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Exams</p>
              <p className="text-2xl font-bold text-gray-900">{overallStats.totalExams}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Average Score</p>
              <p className="text-2xl font-bold text-gray-900">{overallStats.averageScore}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Hours</p>
              <p className="text-2xl font-bold text-gray-900">{overallStats.totalHours}h</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Pass Rate</p>
              <p className="text-2xl font-bold text-gray-900">{overallStats.passingRate}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Results List */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Exam Results</h2>
          <p className="text-gray-600">Detailed breakdown of your exam performance</p>
        </div>

        <div className="divide-y">
          {results.map((result) => (
            <div key={result.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {result.examTitle}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {result.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {result.timeTaken}min / {result.totalTime}min
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(result.grade)}`}>
                  {result.grade}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Score</span>
                    <span className="text-lg font-bold text-gray-900">
                      {result.score}/{result.totalPoints}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Percentage</span>
                    <span className="text-lg font-bold text-gray-900">{result.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        result.percentage >= 90 ? 'bg-green-500' :
                        result.percentage >= 80 ? 'bg-blue-500' :
                        result.percentage >= 70 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Time Usage</span>
                    <span className="text-lg font-bold text-gray-900">
                      {Math.round((result.timeTaken / result.totalTime) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full" 
                      style={{ width: `${(result.timeTaken / result.totalTime) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {result.feedback && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-blue-900 mb-2">Instructor Feedback</h4>
                  <p className="text-blue-800">{result.feedback}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};