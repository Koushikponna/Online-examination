import { useState } from 'react';
import { Plus, Eye, CreditCard as Edit, Trash2, Users, Clock } from 'lucide-react';
import { CreateExamModal } from './CreateExamModal';

export const ManageExams = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [exams, setExams] = useState([
    {
      id: '1',
      title: 'Mathematics Final Exam',
      description: 'Comprehensive test covering algebra, geometry, and calculus',
      duration: 120,
      questions: 50,
      totalPoints: 100,
      startDate: '2024-01-15',
      endDate: '2024-01-20',
      students: 45,
      status: 'published'
    },
    {
      id: '2',
      title: 'Physics Quiz',
      description: 'Quick assessment on mechanics and thermodynamics',
      duration: 45,
      questions: 20,
      totalPoints: 50,
      startDate: '2024-01-12',
      endDate: '2024-01-18',
      students: 32,
      status: 'published'
    },
    {
      id: '3',
      title: 'Chemistry Lab Test',
      description: 'Practical knowledge test on organic chemistry',
      duration: 90,
      questions: 30,
      totalPoints: 75,
      startDate: '2024-01-10',
      endDate: '2024-01-25',
      students: 28,
      status: 'draft'
    }
  ]);

  const handleCreateExam = (examData: any) => {
    const newExam = {
      id: Math.random().toString(36).substr(2, 9),
      students: 0,
      status: 'draft',
      ...examData
    };
    setExams([newExam, ...exams]);
    setShowCreateModal(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Manage Exams</h2>
          <p className="text-gray-600">Create, edit, and monitor your examinations</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Exam
        </button>
      </div>

      {/* Exam Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{exams.length}</p>
            <p className="text-sm text-gray-600">Total Exams</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">
              {exams.filter(e => e.status === 'published').length}
            </p>
            <p className="text-sm text-gray-600">Published</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">
              {exams.filter(e => e.status === 'draft').length}
            </p>
            <p className="text-sm text-gray-600">Drafts</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">
              {exams.reduce((acc, e) => acc + e.students, 0)}
            </p>
            <p className="text-sm text-gray-600">Total Students</p>
          </div>
        </div>
      </div>

      {/* Exams List */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">All Exams</h3>
        </div>

        <div className="divide-y">
          {exams.map((exam) => (
            <div key={exam.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 mr-3">
                      {exam.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(exam.status)}`}>
                      {exam.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{exam.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{exam.duration} minutes</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{exam.students} students</span>
                </div>
                <div>
                  <span className="text-gray-500">Questions:</span> {exam.questions}
                </div>
                <div>
                  <span className="text-gray-500">Points:</span> {exam.totalPoints}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Available: {exam.startDate} to {exam.endDate}
                </div>
                {exam.status === 'draft' && (
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                    Publish Exam
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Exam Modal */}
      <CreateExamModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSubmit={handleCreateExam}
      />
    </div>
  );
};