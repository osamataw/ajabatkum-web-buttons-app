
import { useNavigate } from "react-router-dom";
import ClassButton from "@/components/ClassButton";
import { GraduationCap, Globe } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const classes = [
    { name: "الصف الأول الابتدائي", grade: "الابتدائي", url: "https://www.ajabatkum.com/grade-1" },
    { name: "الصف الثاني الابتدائي", grade: "الابتدائي", url: "https://www.ajabatkum.com/grade-2" },
    { name: "الصف الثالث الابتدائي", grade: "الابتدائي", url: "https://www.ajabatkum.com/grade-3" },
    { name: "الصف الرابع الابتدائي", grade: "الابتدائي", url: "https://www.ajabatkum.com/grade-4" },
    { name: "الصف الخامس الابتدائي", grade: "الابتدائي", url: "https://www.ajabatkum.com/grade-5" },
    { name: "الصف السادس الابتدائي", grade: "الابتدائي", url: "https://www.ajabatkum.com/grade-6" },
    { name: "الصف الأول المتوسط", grade: "المتوسط", url: "https://www.ajabatkum.com/grade-7" },
    { name: "الصف الثاني المتوسط", grade: "المتوسط", url: "https://www.ajabatkum.com/grade-8" },
    { name: "الصف الثالث المتوسط", grade: "المتوسط", url: "https://www.ajabatkum.com/grade-9" },
    { name: "الصف الأول الثانوي", grade: "الثانوي", url: "https://www.ajabatkum.com/grade-10" },
    { name: "الصف الثاني الثانوي", grade: "الثانوي", url: "https://www.ajabatkum.com/grade-11" },
    { name: "الصف الثالث الثانوي", grade: "الثانوي", url: "https://www.ajabatkum.com/grade-12" },
  ];

  const handleClassClick = (className: string, url: string) => {
    navigate(`/webview?url=${encodeURIComponent(url)}&title=${encodeURIComponent(className)}`);
  };

  const handleVisitWebsite = () => {
    navigate(`/webview?url=${encodeURIComponent('https://www.ajabatkum.com')}&title=${encodeURIComponent('موقع إجاباتكم')}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="gradient-bg text-white pt-12 pb-8 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-12 h-12 ml-3" />
            <h1 className="text-4xl font-bold font-cairo">إجاباتكم</h1>
          </div>
          <p className="text-xl opacity-90 font-cairo">
            منصة تعليمية شاملة لجميع المراحل الدراسية
          </p>
          <div className="mt-6">
            <button
              onClick={handleVisitWebsite}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-200 flex items-center gap-2 mx-auto"
            >
              <Globe className="w-5 h-5" />
              زيارة الموقع الرئيسي
            </button>
          </div>
        </div>
      </div>

      {/* Classes Grid */}
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 font-cairo">
          اختر الصف الدراسي
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ClassButton
                className={classItem.name}
                grade={classItem.grade}
                onClick={() => handleClassClick(classItem.name, classItem.url)}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 font-cairo">
            تطبيق إجاباتكم - منصة تعليمية متكاملة
          </p>
          <p className="text-sm text-gray-500 mt-2 font-cairo">
            جميع الحقوق محفوظة © 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
