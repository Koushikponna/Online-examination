import { useState } from 'react';
import { Search, Filter, Mail, UserCheck, UserX } from 'lucide-react';

export const StudentsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const students = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice.johnson@email.com',
      enrollmentDate: '2024-01-10',
      examsCompleted: 12,
      averageScore: 94,
      status: 'active',
      lastActivity: '2024-01-20'
    },
    {
      id: '2',
      name: 'Bob Smith',
      email: 'bob.smith@email.com',
      enrollmentDate: '2024-01-08',
      examsCompleted: 10,
      averageScore: 87,
      status: 'active',
      lastActivity: '2024-01-19'
    },
    {
      id: '3',
      name: 'Carol Davis',
      email: 'carol.davis@email.com',
      enrollmentDate: '2024-01-15',
      examsCompleted: 8,
      averageScore: 91,
      status: 'active',
      lastActivity: '2024-01-18'
    },
    {
      id: '4',
      name: 'David Wilson',
      email: 'david.wilson@email.com',
      enrollmentDate: '2024-01-05',
      examsCompleted: 5,
      averageScore: 73,
      status: 'inactive',
      lastActivity: '2024-01-12'
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'suspended': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Students Management</h2>
          <p className="text-gray-600">Monitor and manage your student enrollment</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
          </select>

          <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Export Data
          </button>
        </div>
      </div>

      {/* Student Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <p className="text-2xl font-bold text-blue-600">{students.length}</p>
          <p className="text-sm text-gray-600">Total Students</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <p className="text-2xl font-bold text-green-600">
            {students.filter(s => s.status === 'active').length}
          </p>
          <p className="text-sm text-gray-600">Active</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <p className="text-2xl font-bold text-red-600">
            {students.filter(s => s.status === 'inactive').length}
          </p>
          <p className="text-sm text-gray-600">Inactive</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <p className="text-2xl font-bold text-purple-600">
            {Math.round(students.reduce((acc, s) => acc + s.averageScore, 0) / students.length)}%
          </p>
          <p className="text-sm text-gray-600">Avg Score</p>
        </div>
      </div>

      {/* Students List */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            Students ({filteredStudents.length})
          </h3>
        </div>

        <div className="divide-y">
          {filteredStudents.map((student) => (
            <div key={student.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-700 font-medium text-lg">
                      {student.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{student.name}</h3>
                    <p className="text-gray-600">{student.email}</p>
                    <div className="flex items-center mt-1 space-x-4 text-sm text-gray-500">
                      <span>Enrolled: {student.enrollmentDate}</span>
                      <span>Last active: {student.lastActivity}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Exams</p>
                    <p className="text-lg font-semibold text-gray-900">{student.examsCompleted}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Avg Score</p>
                    <p className={`text-lg font-semibold ${getScoreColor(student.averageScore)}`}>
                      {student.averageScore}%
                    </p>
                  </div>
                  <div className="text-center">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(student.status)}`}>
                      {student.status}
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      title="Send Email"
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Mail className="h-4 w-4" />
                    </button>
                    {student.status === 'active' ? (
                      <button
                        title="Suspend Student"
                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <UserX className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        title="Activate Student"
                        className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                      >
                        <UserCheck className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredStudents.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Students Found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};