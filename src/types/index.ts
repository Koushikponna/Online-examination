export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'instructor' | 'admin';
  avatar?: string;
}

export interface Question {
  id: string;
  type: 'mcq' | 'essay' | 'true-false';
  question: string;
  options?: string[];
  correctAnswer?: string | number;
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  questions: Question[];
  totalPoints: number;
  passingScore: number;
  startDate: Date;
  endDate: Date;
  randomizeQuestions: boolean;
  allowReview: boolean;
  instructorId: string;
  status: 'draft' | 'published' | 'completed';
}

export interface ExamAttempt {
  id: string;
  examId: string;
  studentId: string;
  startTime: Date;
  endTime?: Date;
  answers: Record<string, any>;
  score?: number;
  percentage?: number;
  status: 'in-progress' | 'completed' | 'submitted';
  timeRemaining?: number;
}

export interface ExamResult {
  id: string;
  examId: string;
  studentId: string;
  studentName: string;
  score: number;
  percentage: number;
  timeTaken: number;
  submittedAt: Date;
  answers: Record<string, any>;
}