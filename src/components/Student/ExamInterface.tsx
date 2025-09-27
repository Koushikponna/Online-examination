import { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight, Flag } from 'lucide-react';

interface ExamInterfaceProps {
  exam: any;
  onBack: () => void;
}

export const ExamInterface = ({ exam, onBack }: ExamInterfaceProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [timeRemaining, setTimeRemaining] = useState(exam.duration * 60); // Convert to seconds
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());

  const questions = [
    {
      id: 1,
      type: 'mcq',
      question: 'What is the derivative of x² + 3x + 2?',
      options: ['2x + 3', '2x + 2', 'x + 3', '2x + 5'],
      correctAnswer: 0
    },
    {
      id: 2,
      type: 'mcq',
      question: 'Which of the following is a prime number?',
      options: ['15', '21', '17', '25'],
      correctAnswer: 2
    },
    {
      id: 3,
      type: 'essay',
      question: 'Explain the concept of limits in calculus and provide an example.',
      correctAnswer: ''
    },
    {
      id: 4,
      type: 'true-false',
      question: 'The integral of a constant is always zero.',
      correctAnswer: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionIndex: number, answer: any) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const toggleFlag = (questionIndex: number) => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(questionIndex)) {
      newFlagged.delete(questionIndex);
    } else {
      newFlagged.add(questionIndex);
    }
    setFlaggedQuestions(newFlagged);
  };

  const handleSubmit = () => {
    alert('Exam submitted successfully!');
    onBack();
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900 mb-2"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Exams
            </button>
            <h1 className="text-2xl font-bold text-gray-900">{exam.title}</h1>
          </div>
          <div className="text-right">
            <div className="flex items-center text-red-600 mb-2">
              <Clock className="h-5 w-5 mr-2" />
              <span className="text-xl font-mono font-bold">
                {formatTime(timeRemaining)}
              </span>
            </div>
            <p className="text-sm text-gray-600">Time Remaining</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Question Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Questions</h3>
            <div className="grid grid-cols-5 lg:grid-cols-4 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium relative ${
                    currentQuestion === index
                      ? 'bg-blue-600 text-white'
                      : answers[index] !== undefined
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {index + 1}
                  {flaggedQuestions.has(index) && (
                    <Flag className="h-3 w-3 text-red-500 absolute -top-1 -right-1" />
                  )}
                </button>
              ))}
            </div>
            
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded mr-2"></div>
                <span>Current</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-100 border border-green-200 rounded mr-2"></div>
                <span>Answered</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-100 border border-gray-200 rounded mr-2"></div>
                <span>Not Answered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Question {currentQuestion + 1}
              </h2>
              <button
                onClick={() => toggleFlag(currentQuestion)}
                className={`flex items-center px-3 py-1 rounded-lg text-sm ${
                  flaggedQuestions.has(currentQuestion)
                    ? 'bg-red-100 text-red-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Flag className="h-4 w-4 mr-1" />
                {flaggedQuestions.has(currentQuestion) ? 'Flagged' : 'Flag'}
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-900 text-lg leading-relaxed">{currentQ.question}</p>
            </div>

            {/* Answer Options */}
            <div className="mb-8">
              {currentQ.type === 'mcq' && (
                <div className="space-y-3">
                  {currentQ.options?.map((option, index) => (
                    <label key={index} className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${currentQuestion}`}
                        value={index}
                        checked={answers[currentQuestion] === index}
                        onChange={() => handleAnswerChange(currentQuestion, index)}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-900">{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {currentQ.type === 'essay' && (
                <textarea
                  value={answers[currentQuestion] || ''}
                  onChange={(e) => handleAnswerChange(currentQuestion, e.target.value)}
                  placeholder="Type your answer here..."
                  className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              )}

              {currentQ.type === 'true-false' && (
                <div className="space-y-3">
                  <label className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value="true"
                      checked={answers[currentQuestion] === true}
                      onChange={() => handleAnswerChange(currentQuestion, true)}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-900">True</span>
                  </label>
                  <label className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value="false"
                      checked={answers[currentQuestion] === false}
                      onChange={() => handleAnswerChange(currentQuestion, false)}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-900">False</span>
                  </label>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </button>

              <div className="space-x-3">
                {currentQuestion < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                    className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Submit Exam
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};