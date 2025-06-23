
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowRight, Home, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const WebView = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const url = searchParams.get('url');
  const title = searchParams.get('title');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  const handleRefresh = () => {
    setIsLoading(true);
    // Force reload the iframe
    const iframe = document.getElementById('webview-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
    setTimeout(() => setIsLoading(false), 2000);
  };

  if (!url) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">رابط غير صحيح</h1>
          <Button onClick={handleGoBack} className="bg-blue-600 hover:bg-blue-700">
            <Home className="w-4 h-4 ml-2" />
            العودة للرئيسية
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              onClick={handleGoBack}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-2"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-bold font-cairo">{title || 'إجاباتكم'}</h1>
          </div>
          <Button
            onClick={handleRefresh}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 p-2"
          >
            <RotateCcw className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="absolute inset-0 bg-white/90 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-lg font-semibold text-gray-700 font-cairo">جاري التحميل...</p>
          </div>
        </div>
      )}

      {/* WebView */}
      <div className="h-[calc(100vh-80px)]">
        <iframe
          id="webview-iframe"
          src={url}
          className="w-full h-full border-0"
          title={title || 'موقع إجاباتكم'}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default WebView;
