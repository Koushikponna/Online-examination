import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  BarChart3, 
  BookOpen,
  Clock,
  Award,
  Settings
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const { user } = useAuth();

  const studentMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'available-exams', label: 'Available Exams', icon: FileText },
    { id: 'my-results', label: 'My Results', icon: Award },
    { id: 'upcoming', label: 'Upcoming Exams', icon: Clock },
  ];

  const instructorMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'exams', label: 'Manage Exams', icon: FileText },
    { id: 'questions', label: 'Question Bank', icon: BookOpen },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const menuItems = user?.role === 'instructor' ? instructorMenuItems : studentMenuItems;

  return (
    <div className="w-64 bg-white shadow-lg h-screen border-r">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 capitalize">
          {user?.role} Panel
        </h2>
      </div>
      
      <nav className="px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};