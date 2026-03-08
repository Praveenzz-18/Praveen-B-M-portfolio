import { BatmanLogo } from "@/components/BatmanLogo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Trophy } from "lucide-react";
import supermanSilhouette from "@/assets/superman-silhouette.jpg";
export const About = () => {
  const downloadResume = () => {
    // In a real implementation, this would trigger a file download
    console.log("Resume download triggered");
  };
  return <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Superman floating in the background */}
      <div className="absolute top-8 right-8 hidden lg:block opacity-20 hover:opacity-40 transition-opacity duration-500">
        <img src={supermanSilhouette} alt="Superman flying over Metropolis" className="w-32 h-32 object-cover rounded-full animate-glow-pulse" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4">
            SECRET <span className="text-primary animate-text-glow">IDENTITY</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Behind every great hero lies an origin story. Mine began with curiosity, 
            evolved through dedication, and continues with every line of code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Origin Story */}
          <div className="space-y-6">
            <Card className="bg-card border-border shadow-batman transition-glow hover:shadow-neon">
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl text-primary flex items-center gap-3">
                  <BatmanLogo className="w-8 h-8" />
                  The Origins
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">Currently pursuing Computer Science Engineering at SJCE, Mysore (2023-2027). My journey began in Bellur, where I achieved 97.83% in PCMB, setting the foundation for my technological crusade.</p>
                <p className="text-muted-foreground leading-relaxed">
                  From the ancient halls of academia to the digital battlegrounds of code, 
                  I've honed my skills to protect the innocent through technology and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-batman transition-glow hover:shadow-neon">
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl text-primary flex items-center gap-3">
                  <Trophy className="w-8 h-8" />
                  Mission Statement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">To leverage cutting-edge technology in creating solutions that make a real difference. Specializing in Army conevy logistics applications, web development, and mobile innovation, I strive to be the hero Gotham's tech community needs.</p>
              </CardContent>
            </Card>
          </div>

          {/* Timeline & Quick Facts */}
          <div className="space-y-6">
            <Card className="bg-card border-border shadow-batman transition-glow hover:shadow-neon">
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl text-primary">
                  Hero Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border-l-4 border-primary">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">2023 - Present</h4>
                      <p className="text-sm text-muted-foreground">Computer Science Engineering, SJCE Mysore</p>
                      <p className="text-xs text-primary">Current CGPA: 8.13</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border-l-4 border-batman-yellow transition-all duration-300 hover:bg-secondary/70">
                    <Trophy className="w-5 h-5 text-batman-yellow mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Sept 2025 – Dec 2025 (Concluded Jan 2026)</h4>
                      <p className="text-sm text-muted-foreground font-bold">Campus Ambassador, GUESSS India • IIT Mandi</p>
                      <ul className="mt-2 space-y-2 text-xs text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-batman-yellow">•</span>
                          <span>Led campus-wide strategic outreach for national entrepreneurship research, engaging 100+ elite recruits.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-batman-yellow">•</span>
                          <span>Coordinated with National Command Teams to drive Participation & Strategic Partnerships.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-batman-yellow">•</span>
                          <span>Managed high-impact promotional intelligence and student engagement across campus networks.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border-l-4 border-accent">
                    <MapPin className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">2021 - 2023</h4>
                      <p className="text-sm text-muted-foreground">SBNS PU College, PCMB</p>
                      <p className="text-xs text-accent">97.83% Achievement</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button onClick={downloadResume} className="bg-primary text-primary-foreground hover:bg-primary/90 font-orbitron font-semibold px-8 py-4 text-lg shadow-neon transition-glow group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Bat-Files
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};