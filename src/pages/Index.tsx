import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload images
    const images = [
      '/src/assets/bat-signal-hero.jpg',
      '/src/assets/gotham-skyline.jpg', 
      '/src/assets/utility-belt.jpg',
      '/src/assets/batcomputer.jpg'
    ];

    const preloadImages = images.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve; // Still resolve on error to continue loading
        img.src = src;
      });
    });

    Promise.all(preloadImages).then(() => {
      // Ensure minimum loading time for dramatic effect
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    });
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
