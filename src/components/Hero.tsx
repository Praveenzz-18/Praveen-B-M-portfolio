import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import batSignalHero from "@/assets/bat-signal-hero.jpg";
import batmanSilhouette from "@/assets/batman-silhouette.jpg";
import { BatmanLogo } from "@/components/BatmanLogo";

const quotes = [
  "With great code comes great responsibility",
  "I am vengeance, I am the night, I am... a developer",
  "It's not who I am underneath, but what I code that defines me",
  "The night is darkest just before the dawn, and I promise you, the dawn is coming"
];

export const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gotham-dark">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${batSignalHero})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-80" />
      
      {/* Batman Silhouette */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="relative">
          <img 
            src={batmanSilhouette} 
            alt="Batman silhouette overlooking Gotham City" 
            className="w-96 h-96 object-cover rounded-full opacity-30 animate-glow-pulse shadow-neon"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent rounded-full"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} lg:mr-48`}>
        {/* Bat Symbol Animation */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-bat-swoop shadow-neon">
            <BatmanLogo className="w-12 h-12 text-background" />
          </div>
        </div>

        {/* Name Reveal */}
        <h1 className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl text-primary mb-4 animate-text-glow">
          PRAVEEN B M
        </h1>
        
        {/* Tagline */}
        <h2 className="font-orbitron text-xl md:text-2xl lg:text-3xl text-foreground mb-8 font-medium">
          COMPUTER SCIENCE ENGINEER
          <span className="block text-lg md:text-xl text-muted-foreground mt-2">
            Gotham's Next Tech Hero
          </span>
        </h2>

        {/* Quote Carousel */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-muted-foreground italic min-h-[3rem] transition-all duration-500">
            "{quotes[currentQuote]}"
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={scrollToAbout}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-orbitron font-semibold px-8 py-4 text-lg shadow-neon transition-glow"
          >
            Enter Gotham
          </Button>
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-orbitron font-semibold px-8 py-4 text-lg transition-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Signal Me
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary mx-auto cursor-pointer" onClick={scrollToAbout} />
        </div>
      </div>
    </section>
  );
};