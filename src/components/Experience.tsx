import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BatmanLogo } from "@/components/BatmanLogo";
import { Users, Mic, BookOpen, Trophy, Target, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Event Coordinator",
    organization: "Persona+ Mysore",
    period: "2025 - Present",
    status: "Active Mission",
    description: "Leading initiatives to bridge the gap between academic knowledge and industry requirements through strategic event coordination and student development programs.",
    achievements: [
      {
        title: "Workshop Leadership",
        description: "Orchestrated technical workshops covering cutting-edge technologies",
        icon: BookOpen,
        impact: "Enhanced skill development for 200+ students"
      },
      {
        title: "Guest Speaker Coordination",
        description: "Managed industry expert sessions and knowledge transfer programs",
        icon: Mic,
        impact: "Connected students with 15+ industry professionals"
      },
      {
        title: "Group Discussion Facilitation",
        description: "Organized and moderated technical and soft skills group discussions",
        icon: Users,
        impact: "Improved communication skills for participants"
      },
      {
        title: "Mock Interview Sessions",
        description: "Conducted realistic interview simulations with feedback systems",
        icon: Target,
        impact: "90% improvement in candidate confidence levels"
      },
      {
        title: "Placement Drive Initiatives",
        description: "Coordinated campus placement activities and industry partnerships",
        icon: Trophy,
        impact: "Facilitated connections leading to multiple job offers"
      }
    ],
    skills: ["Leadership", "Event Management", "Team Coordination", "Public Speaking", "Strategic Planning", "Industry Relations"],
    stats: [
      { value: "200+", label: "Students Impacted", color: "text-primary" },
      { value: "15+", label: "Industry Connections", color: "text-batman-yellow" },
      { value: "90%", label: "Success Rate", color: "text-accent" }
    ]
  },
  {
    title: "Campus Ambassador & Strategic Scouter",
    organization: "GUESSS INDIA 2025 | IIT MANDI",
    period: "Sept 2025 - Jan 2026",
    status: "Mission Completed",
    description: "Led high-impact strategic outreach for GUESSS India (Global University Entrepreneurial Spirit Students' Survey), mobilizing the next generation of innovators at IIT Mandi.",
    achievements: [
      {
        title: "Tactical Outreach",
        description: "Led campus-wide strategic engagement for national entrepreneurship research",
        icon: Target,
        impact: "Mobilized 100+ elite recruits"
      },
      {
        title: "Command Coordination",
        description: "Synchronized with National Program Teams to drive participation and strategic alliances",
        icon: Users,
        impact: "Strengthened university-wide strategic partnerships"
      },
      {
        title: "Public Intelligence",
        description: "Managed high-impact promotional activities and student engagement across campus networks",
        icon: Mic,
        impact: "Scaled global research contribution from the region"
      }
    ],
    skills: ["Strategic Outreach", "Recruitment", "Public Relations", "Data Intelligence", "National Coordination"],
    stats: [
      { value: "100+", label: "Elite Recruits", color: "text-primary" },
      { value: "IIT Mandi", label: "Strategic Post", color: "text-batman-yellow" },
      { value: "Global", label: "Impact Scope", color: "text-accent" }
    ],
    action: {
      label: "Decrypt Certificate",
      url: "https://drive.google.com/file/d/1RsuPhsSLlRZW-xt0BeSmmkElF5p5chk7/view?usp=drivesdk"
    }
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gotham-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4">
            HERO <span className="text-primary animate-text-glow">FILES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every hero's journey is marked by their service to the community. 
            Here's the archive of my strategic field operations and leadership missions.
          </p>
        </div>

        {/* Mission Dossiers */}
        <div className="max-w-6xl mx-auto space-y-12">
          {experiences.map((exp, expIndex) => (
            <Card key={exp.organization} className="bg-card border-border shadow-batman transition-all duration-500 hover:shadow-neon overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gotham-dark to-card">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="font-orbitron text-3xl text-primary mb-2 flex items-center gap-3">
                      <Calendar className="w-8 h-8" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-xl text-batman-yellow font-semibold mb-2">
                      {exp.organization}
                    </p>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {exp.status}
                      </Badge>
                      <span className="text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>
                  
                  {/* Bat Symbol */}
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-glow-pulse">
                    <BatmanLogo className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Mission Description */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="font-orbitron text-2xl text-primary mb-4">Mission Brief</h3>
                      <p className="text-foreground text-lg leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h3 className="font-orbitron text-2xl text-primary mb-6">Tactical Successes</h3>
                      <div className="space-y-4">
                        {exp.achievements.map((achievement, index) => (
                          <Card 
                            key={achievement.title}
                            className="bg-secondary/20 border-primary/20 transition-all duration-300 hover:bg-secondary/30 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                  <achievement.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-foreground text-lg mb-1">
                                    {achievement.title}
                                  </h4>
                                  <p className="text-muted-foreground mb-2">
                                    {achievement.description}
                                  </p>
                                  <p className="text-sm text-primary font-medium">
                                    Impact: {achievement.impact}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills & Stats */}
                  <div className="space-y-6">
                    <Card className="bg-secondary/20 border-primary/20">
                      <CardHeader>
                        <CardTitle className="font-orbitron text-xl text-primary">
                          Combat Assets (Skills)
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {exp.skills.map((skill) => (
                            <div 
                              key={skill}
                              className="px-3 py-2 bg-card rounded-lg border border-primary/20 text-foreground text-sm font-medium text-center transition-glow hover:bg-primary/10"
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-secondary/20 border-primary/20">
                      <CardHeader>
                        <CardTitle className="font-orbitron text-xl text-primary">
                          Mission Analytics
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {exp.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {exp.action && (
                      <Button 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-orbitron font-semibold shadow-neon transition-glow group"
                        asChild
                      >
                        <a href={exp.action.url} target="_blank" rel="noopener noreferrer">
                          <BookOpen className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          {exp.action.label}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};