
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ClassButtonProps {
  className: string;
  grade: string;
  onClick: () => void;
}

const ClassButton = ({ className, grade, onClick }: ClassButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="w-full h-20 text-lg font-semibold bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-xl border-0 animate-scale-in"
      style={{ fontFamily: 'Cairo, sans-serif' }}
    >
      <div className="flex items-center gap-3">
        <BookOpen className="w-6 h-6" />
        <div className="text-right">
          <div className="text-lg font-bold">{className}</div>
          <div className="text-sm opacity-90">{grade}</div>
        </div>
      </div>
    </Button>
  );
};

export default ClassButton;
