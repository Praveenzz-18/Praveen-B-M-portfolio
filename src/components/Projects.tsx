import { BatmanLogo } from "@/components/BatmanLogo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Truck, MapPin, Route, Bell, BarChart3, Users } from "lucide-react";
import batcomputer from "@/assets/batcomputer.jpg";

const projects = [
  {
    title: "Smart Army Logistics",
    subtitle: "Mission: Army Convoys Pulse",
    description: "Intelligent convoy planning and real-time tracking system for the Indian Army. Optimize fleet efficiency, reduce delays, and improve operational readiness with AI-powered route optimization.",
    features: [
      "AI-powered convoy planning and route optimization",
      "24/7 real-time GPS tracking of all convoy movements",
      "Complete vehicle fleet lifecycle management",
      "Smart alerts for delays and checkpoint notifications",
      "Comprehensive analytics and operational reports",
      "Personnel tracking and assignment monitoring"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "AI/ML", "GPS Integration"],
    status: "Active Mission",
    year: "2025",
    impact: "Optimizing military logistics for the Indian Army",
    liveUrl: "https://army-convoys-pulse.lovable.app",
    githubUrl: "https://github.com/Praveenzz-18/army-convoys-pulse"
  },
  {
    title: "AgriNex",
    subtitle: "Mission: Precision Farming Micro-Forecasting",
    description: "Hyper-local weather forecasting and AI-driven precision farming for Indian micro-climates. Zonal mapping divided into 2/5/10km zones providing precision data for temperature, humidity, and rainfall without requiring GPS.",
    features: [
      "AI-powered crop prediction and growth cycle monitoring",
      "Hyper-local zonal weather micro-forecasting",
      "Soil NPK estimation and fertilization guidance",
      "Smart irrigation guidance for water conservation",
      "Farmer dashboard with real-time zone alerts",
      "Region-based mapping — no GPS dependency"
    ],
    technologies: ["React", "Tailwind CSS", "AI/ML", "Python/FastAPI", "Weather APIs"],
    status: "Top 5 REVA Researchathon",
    year: "2025",
    impact: "Empowering Indian farmers with precision technology and zonal forecasting",
    liveUrl: "https://www.linkedin.com/posts/praveen-b-m-8a2705299_thrilled-to-announce-that-our-team-agrinex-ugcPost-7406381740161908737-z0JR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgviroBpn8FbUeuwr-VHdpIrzZxc1Z9SOk",
    githubUrl: "https://github.com/Praveenzz-18/Agrinex_modified"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4">
            CASE <span className="text-primary animate-text-glow">FILES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every hero's legacy is built on their missions. Here are the digital crusades 
            that showcase my commitment to protecting and serving through technology.
          </p>
        </div>

        {/* Batcomputer Interface */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-2xl shadow-batman">
            <img 
              src={batcomputer} 
              alt="Batcave computer interface showcasing project management system" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 flex items-center">
              <div className="px-8">
                <h3 className="font-orbitron text-3xl font-bold text-primary mb-2">
                  BATCOMPUTER ARCHIVES
                </h3>
                <p className="text-foreground text-lg">
                  Accessing mission database...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card border-border shadow-batman transition-all duration-500 hover:shadow-neon overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="bg-gotham-dark">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="font-orbitron text-2xl md:text-3xl text-primary mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-batman-yellow font-semibold">{project.subtitle}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {project.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Description & Features */}
                  <div className="space-y-6">
                    <p className="text-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div>
                      <h4 className="font-orbitron text-xl text-primary mb-4 flex items-center gap-2">
                        <Truck className="w-5 h-5" />
                        Mission Features
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            {featureIndex === 0 && <Route className="w-5 h-5 text-primary mt-1 flex-shrink-0" />}
                            {featureIndex === 1 && <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />}
                            {featureIndex === 2 && <Truck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />}
                            {featureIndex === 3 && <Bell className="w-5 h-5 text-primary mt-1 flex-shrink-0" />}
                            {featureIndex === 4 && <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />}
                            {featureIndex === 5 && <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />}
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Tech Stack & Impact */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-orbitron text-xl text-primary mb-4">
                        Technology Arsenal
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-glow"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-6 bg-secondary/20 rounded-lg border border-primary/20">
                      <h4 className="font-orbitron text-lg text-primary mb-2">Mission Impact</h4>
                      <p className="text-muted-foreground italic">"{project.impact}"</p>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-glow flex-1"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Mission
                        </a>
                      </Button>
                      {project.githubUrl ? (
                        <Button 
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-glow flex-1"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      ) : (
                        <Button 
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-glow flex-1"
                          disabled
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects Coming */}
        <div className="mt-16 text-center">
          <Card className="bg-card border-border shadow-batman max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-orbitron text-2xl text-primary mb-4">
                More Missions Classified
              </h3>
              <p className="text-muted-foreground mb-6">
                Additional projects are currently under development in the Batcave. 
                Check back soon for more digital adventures.
              </p>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto animate-glow-pulse">
                <BatmanLogo className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};