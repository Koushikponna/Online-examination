import { useState } from 'react';
import { Plus, CreditCard as Edit, Trash2, Search, Filter } from 'lucide-react';

export const QuestionBank = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  const questions = [
    {
      id: '1',
      type: 'mcq',
      question: 'What is the derivative of x² + 3x + 2?',
      options: ['2x + 3', '2x + 2', 'x + 3', '2x + 5'],
      correctAnswer: 0,
      difficulty: 'medium',
      points: 2,
      subject: 'Mathematics',
      tags: ['calculus', 'derivatives']
    },
    {
      id: '2',
      type: 'essay',
      question: 'Explain the concept of photosynthesis and its importance in the ecosystem.',
      difficulty: 'hard',
      points: 10,
      subject: 'Biology',
      tags: ['photosynthesis', 'ecosystem', 'plants']
    },
    {
      id: '3',
      type: 'true-false',
      question: 'The speed of light is constant in all mediums.',
      correctAnswer: false,
      difficulty: 'easy',
      points: 1,
      subject: 'Physics',
      tags: ['light', 'optics']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'mcq': return 'bg-blue-100 text-blue-800';
      case 'essay': return 'bg-green-100 text-green-800';
      case 'true-false': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = filterType === 'all' || question.type === filterType;
    const matchesDifficulty = filterDifficulty === 'all' || question.difficulty === filterDifficulty;
    
    return matchesSearch && matchesType && matchesDifficulty;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Question Bank</h2>
          <p className="text-gray-600">Manage your collection of exam questions</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Add Question
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Types</option>
            <option value="mcq">Multiple Choice</option>
            <option value="essay">Essay</option>
            <option value="true-false">True/False</option>
          </select>

          <select
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </button>
        </div>
      </div>

      {/* Question Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <p className="text-2xl font-bold text-blue-600">{questions.length}</p>
          <p className="text-sm text-gray-600">Total Questions</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <p className="text-2xl font-bold text-green-600">
            {questions.filter(q => q.type === 'mcq').length}
          </p>
          <p className="text-sm text-gray-600">Multiple Choice</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <p className="text-2xl font-bold text-purple-600">
            {questions.filter(q => q.type === 'essay').length}
          </p>
          <p className="text-sm text-gray-600">Essay Questions</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <p className="text-2xl font-bold text-orange-600">
            {questions.filter(q => q.difficulty === 'hard').length}
          </p>
          <p className="text-sm text-gray-600">Hard Questions</p>
        </div>
      </div>

      {/* Questions List */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            Questions ({filteredQuestions.length})
          </h3>
        </div>

        <div className="divide-y">
          {filteredQuestions.map((question) => (
            <div key={question.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(question.type)}`}>
                      {question.type.toUpperCase()}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(question.difficulty)}`}>
                      {question.difficulty}
                    </span>
                    <span className="text-xs text-gray-500">{question.points} pts</span>
                  </div>
                  <p className="text-gray-900 font-medium mb-2">{question.question}</p>
                  
                  {question.type === 'mcq' && question.options && (
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {question.options.map((option, index) => (
                        <div key={index} className={`text-sm p-2 rounded ${
                          index === question.correctAnswer 
                            ? 'bg-green-50 text-green-800 border border-green-200' 
                            : 'bg-gray-50 text-gray-700'
                        }`}>
                          {String.fromCharCode(65 + index)}. {option}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center mt-3 space-x-4 text-sm text-gray-600">
                    <span>Subject: {question.subject}</span>
                    <span>Tags: {question.tags.join(', ')}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 ml-4">
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredQuestions.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Questions Found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Your First Question
          </button>
        </div>
      )}
    </div>
  );
};