import { useEffect, useState } from "react";
import { BatmanLogo } from "@/components/BatmanLogo";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing Batcomputer...");

  const loadingStages = [
    "Initializing Batcomputer...",
    "Accessing Wayne Enterprises Database...",
    "Scanning Gotham Network...",
    "Loading Hero Protocols...",
    "Welcome to Gotham"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Update loading text based on progress
        if (newProgress >= 20 && newProgress < 40) {
          setLoadingText(loadingStages[1]);
        } else if (newProgress >= 40 && newProgress < 60) {
          setLoadingText(loadingStages[2]);
        } else if (newProgress >= 60 && newProgress < 80) {
          setLoadingText(loadingStages[3]);
        } else if (newProgress >= 80 && newProgress < 100) {
          setLoadingText(loadingStages[4]);
        }
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 1000);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gotham-dark flex items-center justify-center z-50">
      <div className="text-center">
        {/* Bat Signal Animation */}
        <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-glow-pulse">
          <BatmanLogo className="w-16 h-16 w-[4rem] h-[4rem] text-primary animate-bat-swoop" />
        </div>

        {/* Loading Text */}
        <h2 className="font-orbitron text-2xl text-primary mb-8 animate-text-glow">
          {loadingText}
        </h2>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-4">
          <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full gradient-neon rounded-full transition-all duration-100 animate-glow-pulse"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Progress Percentage */}
        <div className="text-primary font-orbitron font-bold text-lg">
          {progress}%
        </div>
      </div>
    </div>
  );
};