import { Calendar, Clock, Users, AlertCircle } from 'lucide-react';

export const UpcomingExams = () => {
  const upcomingExams = [
    {
      id: '4',
      title: 'Biology Midterm',
      description: 'Comprehensive exam covering cell biology and genetics',
      startDate: '2024-01-25',
      endDate: '2024-01-30',
      duration: 150,
      questions: 60,
      instructor: 'Dr. Williams',
      students: 42,
      daysUntil: 3,
      timeSlot: '09:00 AM - 11:30 AM',
      status: 'scheduled'
    },
    {
      id: '5',
      title: 'History Essay Exam',
      description: 'Written examination on World War II and its aftermath',
      startDate: '2024-01-28',
      endDate: '2024-02-02',
      duration: 120,
      questions: 3,
      instructor: 'Prof. Davis',
      students: 35,
      daysUntil: 6,
      timeSlot: '02:00 PM - 04:00 PM',
      status: 'scheduled'
    },
    {
      id: '6',
      title: 'Computer Science Quiz',
      description: 'Data structures and algorithms assessment',
      startDate: '2024-02-01',
      endDate: '2024-02-05',
      duration: 90,
      questions: 40,
      instructor: 'Dr. Thompson',
      students: 28,
      daysUntil: 10,
      timeSlot: '10:00 AM - 11:30 AM',
      status: 'scheduled'
    }
  ];

  const getUrgencyColor = (days: number) => {
    if (days <= 2) return 'border-red-200 bg-red-50';
    if (days <= 7) return 'border-yellow-200 bg-yellow-50';
    return 'border-green-200 bg-green-50';
  };

  const getUrgencyText = (days: number) => {
    if (days === 0) return 'Today';
    if (days === 1) return 'Tomorrow';
    return `In ${days} days`;
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Upcoming Exams</h2>
        <p className="text-gray-600">Stay prepared for your scheduled examinations</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">This Week</p>
              <p className="text-2xl font-bold text-gray-900">
                {upcomingExams.filter(e => e.daysUntil <= 7).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Next Exam</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.min(...upcomingExams.map(e => e.daysUntil))} days
              </p>
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
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(upcomingExams.reduce((acc, e) => acc + e.duration, 0) / 60)}h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exam List */}
      <div className="space-y-6">
        {upcomingExams.map((exam) => (
          <div key={exam.id} className={`border-l-4 rounded-lg shadow-sm ${getUrgencyColor(exam.daysUntil)}`}>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {exam.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{exam.description}</p>
                  <p className="text-sm text-gray-500">Instructor: {exam.instructor}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    exam.daysUntil <= 2 ? 'bg-red-100 text-red-800' :
                    exam.daysUntil <= 7 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {getUrgencyText(exam.daysUntil)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{exam.startDate}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{exam.timeSlot}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{exam.duration} minutes</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm">{exam.students} students</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Available: {exam.startDate} to {exam.endDate}
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Set Reminder
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {upcomingExams.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Upcoming Exams</h3>
          <p className="text-gray-600">You're all caught up! Check back later for new exams.</p>
        </div>
      )}
    </div>
  );
};