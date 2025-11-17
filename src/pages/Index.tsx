import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showScreamer, setShowScreamer] = useState(false);

  const handleButtonClick = () => {
    setShowScreamer(true);
    
    const audio = new Audio();
    audio.volume = 1.0;
    audio.loop = true;
    
    audio.src = 'https://www.youtube.com/watch?v=uchyWCdA5Nc';
    
    audio.play().catch(() => {
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.top = '-9999px';
      iframe.style.left = '-9999px';
      iframe.src = 'https://www.youtube.com/embed/uchyWCdA5Nc?autoplay=1&loop=1&playlist=uchyWCdA5Nc';
      iframe.allow = 'autoplay';
      document.body.appendChild(iframe);
    });
  };

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
          
          <a 
            href="https://semerkargaviy789.ru" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-primary transition-colors"
          >
            semerkargaviy789
          </a>
        </div>
      </header>

      <main className="pt-20 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        {!showScreamer ? (
          <div className="flex flex-col items-center gap-12 animate-[slide-in_0.6s_ease-out]">
            <div className="flex items-center gap-6 md:gap-12">
              <Icon 
                name="ChevronRight" 
                size={80} 
                className="text-primary animate-pulse hidden md:block" 
                strokeWidth={3}
              />
              
              <Button
                onClick={handleButtonClick}
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
          <div className="fixed inset-0 z-[100] bg-black animate-[slide-in_0.1s_ease-out]">
            <img 
              src="https://media1.tenor.com/m/HMtY33kDWFwAAAAC/donk.gif" 
              alt="Screamer"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
