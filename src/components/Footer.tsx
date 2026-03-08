import { BatmanLogo } from "@/components/BatmanLogo";
import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import gothamSkyline from "@/assets/gotham-skyline.jpg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Praveenzz-18/army-convoys-pulse",
      label: "Explore code repositories"
    },
    {
      name: "LinkedIn",
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/praveen-b-m-8a2705299",
      label: "Professional network"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:mkr612005@gmail.com",
      label: "Direct contact"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gotham-dark overflow-hidden">
      {/* Gotham Skyline Background */}
      <div className="absolute inset-0">
        <img 
          src={gothamSkyline} 
          alt="Gotham City skyline silhouette" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gotham-dark via-gotham-dark/80 to-gotham-dark/40" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Batman Branding */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-glow-pulse">
                  <BatmanLogo className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-orbitron text-2xl font-bold text-primary">Praveen B M</h3>
                  <p className="text-muted-foreground">Computer Science Engineer</p>
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed max-w-md">
                Protecting Gotham's digital landscape with cutting-edge technology and unwavering dedication. 
                Every line of code is a step towards a safer, more connected future.
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>Emergency Hotline:</span>
                <a href="tel:+919353059129" className="text-primary hover:text-batman-yellow transition-colors">
                  +91 93530 59129
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-orbitron text-lg font-semibold text-foreground">Navigation</h4>
              <nav className="flex flex-col space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 group flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-300 mr-3"></span>
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social & Contact */}
            <div className="space-y-6">
              <h4 className="font-orbitron text-lg font-semibold text-foreground">Connect</h4>
              <div className="flex flex-col space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                    title={social.label}
                  >
                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <social.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{social.name}</span>
                  </a>
                ))}
              </div>

              {/* Easter Egg */}
              <div className="mt-8 p-4 bg-card/20 rounded-lg border border-primary/20">
                <p className="text-xs text-primary text-center">
                  "It's not who I am underneath, but what I do that defines me."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Batmobile Section */}
        <div className="border-t border-border/20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <span>© {currentYear} Praveen B M.</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> in Gotham
                </span>
              </div>

              {/* Batmobile ASCII Art */}
              <div className="font-mono text-xs text-primary/60 hidden md:block">
                <pre>{`    ___    ___
   /   \\__/   \\
  |  o        o  |
   \\____vvvv____/
        ^^^^`}</pre>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Status: Online & Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Easter Egg */}
        <div className="absolute bottom-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-1000">
          <div className="w-8 h-8 bg-batman-yellow/20 rounded-full flex items-center justify-center cursor-pointer group">
            <span className="text-xs text-batman-yellow group-hover:animate-spin">🦇</span>
          </div>
        </div>
      </div>
    </footer>
  );
};