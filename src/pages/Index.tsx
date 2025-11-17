import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0f0f] dark">
      <header className="fixed top-0 left-0 right-0 bg-[#0f0f0f] border-b border-[#303030] z-50">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Play" size={20} className="text-white fill-white" />
            </div>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              Ржавый.com
            </h1>
          </div>
        </div>
      </header>

      <main className="pt-20 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        {!showVideo ? (
          <div className="flex flex-col items-center gap-12 animate-[slide-in_0.6s_ease-out]">
            <div className="flex items-center gap-6 md:gap-12">
              <Icon 
                name="ChevronRight" 
                size={80} 
                className="text-primary animate-pulse hidden md:block" 
                strokeWidth={3}
              />
              
              <Button
                onClick={() => setShowVideo(true)}
                size="lg"
                className="px-12 py-8 text-2xl md:text-3xl font-bold bg-primary hover:bg-primary/90 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
                style={{
                  animation: 'pulse-glow 2s ease-in-out infinite'
                }}
              >
                Рыжий, нажми сюда
              </Button>

              <Icon 
                name="ChevronLeft" 
                size={80} 
                className="text-primary animate-pulse hidden md:block" 
                strokeWidth={3}
              />
            </div>

            <div className="flex gap-4 md:hidden">
              <Icon 
                name="ChevronDown" 
                size={40} 
                className="text-primary animate-bounce" 
                strokeWidth={3}
              />
              <Icon 
                name="ChevronDown" 
                size={40} 
                className="text-primary animate-bounce" 
                strokeWidth={3}
              />
            </div>
          </div>
        ) : (
          <div className="w-full max-w-6xl animate-[slide-in_0.6s_ease-out]">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            
            <Button
              onClick={() => setShowVideo(false)}
              variant="outline"
              className="mt-8 mx-auto flex items-center gap-2 bg-[#272727] hover:bg-[#3f3f3f] text-white border-[#3f3f3f]"
            >
              <Icon name="X" size={16} />
              Закрыть видео
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
