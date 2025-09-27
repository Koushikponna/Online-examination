import { useState } from 'react';
import { Clock, Users, Award, Play } from 'lucide-react';
import { ExamInterface } from './ExamInterface';

export const AvailableExams = () => {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  const exams = [
    {
      id: '1',
      title: 'Mathematics Final Exam',
      description: 'Comprehensive test covering algebra, geometry, and calculus',
      duration: 120,
      questions: 50,
      totalPoints: 100,
      difficulty: 'Hard',
      startDate: '2024-01-15',
      endDate: '2024-01-20',
      instructor: 'Dr. Smith',
      students: 45,
      status: 'active'
    },
    {
      id: '2',
      title: 'Physics Quiz',
      description: 'Quick assessment on mechanics and thermodynamics',
      duration: 45,
      questions: 20,
      totalPoints: 50,
      difficulty: 'Medium',
      startDate: '2024-01-12',
      endDate: '2024-01-18',
      instructor: 'Prof. Johnson',
      students: 32,
      status: 'active'
    },
    {
      id: '3',
      title: 'Chemistry Lab Test',
      description: 'Practical knowledge test on organic chemistry',
      duration: 90,
      questions: 30,
      totalPoints: 75,
      difficulty: 'Medium',
      startDate: '2024-01-10',
      endDate: '2024-01-25',
      instructor: 'Dr. Brown',
      students: 28,
      status: 'active'
    }
  ];

  if (selectedExam) {
    const exam = exams.find(e => e.id === selectedExam);
    return <ExamInterface exam={exam} onBack={() => setSelectedExam(null)} />;
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Available Exams</h2>
        <p className="text-gray-600">Click on any exam to start taking it</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {exams.map((exam) => (
          <div key={exam.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{exam.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{exam.description}</p>
                  <p className="text-sm text-gray-500">Instructor: {exam.instructor}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  exam.difficulty === 'Hard' ? 'bg-red-100 text-red-800' :
                  exam.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {exam.difficulty}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{exam.duration} minutes</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm">{exam.students} students</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-4 w-4 mr-2" />
                  <span className="text-sm">{exam.questions} questions</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-4 w-4 mr-2" />
                  <span className="text-sm">{exam.totalPoints} points</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-2">Available until: {exam.endDate}</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">5 days remaining</div>
              </div>

              <button
                onClick={() => setSelectedExam(exam.id)}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center font-medium"
              >
                <Play className="h-4 w-4 mr-2" />
                Start Exam
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};