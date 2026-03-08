import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Users, GraduationCap, Zap } from "lucide-react";

const awards = [
  {
    title: "Foundation For Excellence Scholarship",
    organization: "Foundation For Excellence",
    year: "2024",
    category: "Academic Excellence",
    description: "Prestigious merit-based scholarship recognizing outstanding academic performance and leadership potential among Computer Science students across Karnataka. This elite program identifies and nurtures future tech leaders through comprehensive support and mentorship.",
    icon: GraduationCap,
    rarity: "Legendary"
  },
  {
    title: "Pragathi Texas USA Mentorship Scholar",
    organization: "Pragathi Texas USA",
    year: "2024",
    category: "International Mentorship", 
    description: "Selected for exclusive mentorship program bridging students from rural Karnataka with industry experts in Texas, USA. This prestigious initiative focuses on academic achievement, leadership development, and global career opportunities for students demonstrating exceptional merit and financial need.",
    icon: Users,
    rarity: "Legendary"
  },
  {
    title: "Aspire Leadership Program Scholar",
    organization: "Harvard Business School",
    year: "2025",
    category: "Global Leadership",
    description: "Elite scholar of the Harvard Business School-driven Aspire Leadership Program - a transformative 9-week leadership development initiative featuring Harvard faculty-led curriculum. Selected among top global talent for demonstrating exceptional leadership potential, academic excellence, and commitment to positive impact.",
    icon: Trophy,
    rarity: "Mythic"
  },
  {
    title: "KCET State Ranker",
    organization: "Karnataka CET",
    year: "2023",
    category: "Competitive Excellence",
    description: "Achieved top ranking in Karnataka Common Entrance Test (KCET) among thousands of engineering aspirants, demonstrating exceptional analytical and problem-solving capabilities in Mathematics, Physics, and Chemistry.",
    icon: Trophy,
    rarity: "Legendary"
  },
  {
    title: "PCMB Academic Achievement",
    organization: "SBNS PU College",
    year: "2023", 
    category: "Academic Excellence",
    description: "Secured outstanding 97.83% in Physics, Chemistry, Mathematics, and Biology, establishing a strong foundation for advanced engineering studies and research.",
    icon: Star,
    rarity: "Epic"
  }
];

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "Mythic": return "text-batman-yellow";
    case "Legendary": return "text-primary";
    case "Epic": return "text-accent";
    default: return "text-muted-foreground";
  }
};

const getRarityBorder = (rarity: string) => {
  switch (rarity) {
    case "Mythic": return "border-batman-yellow/50 bg-batman-yellow/10 shadow-glow-intense";
    case "Legendary": return "border-primary/40 bg-primary/8 shadow-neon";
    case "Epic": return "border-accent/30 bg-accent/5";
    default: return "border-border bg-card";
  }
};

export const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4">
            HALL OF <span className="text-primary animate-text-glow">TROPHIES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In the depths of the Batcave lies a collection of achievements that mark 
            the milestones of this digital crusade. Each trophy tells a story of dedication and excellence.
          </p>
        </div>

        {/* Batcave Shelf Visual */}
        <div className="relative mb-16">
          <div className="bg-gotham-dark rounded-2xl p-8 shadow-batman relative overflow-hidden">
            {/* Cave Background Effect */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-batman-yellow rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative text-center">
              <h3 className="font-orbitron text-3xl text-primary mb-4 flex items-center justify-center gap-3">
                <Trophy className="w-8 h-8 animate-glow-pulse" />
                BATCAVE TROPHY COLLECTION
                <Award className="w-8 h-8 animate-glow-pulse" />
              </h3>
              <p className="text-foreground text-lg">
                "Success is where preparation and opportunity meet justice."
              </p>
            </div>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <Card 
              key={award.title}
              className={`${getRarityBorder(award.rarity)} shadow-batman transition-all duration-500 hover:shadow-neon hover:scale-105 group animate-fade-in-up overflow-hidden`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="bg-gotham-dark/50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="font-orbitron text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {award.title}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium mb-2">
                      {award.organization}
                    </p>
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant="outline" 
                        className={`${getRarityColor(award.rarity)} border-current`}
                      >
                        {award.rarity}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{award.year}</span>
                    </div>
                  </div>
                  
                  <div className={`w-14 h-14 ${getRarityBorder(award.rarity)} rounded-full flex items-center justify-center group-hover:animate-glow-pulse`}>
                    <award.icon className={`w-7 h-7 ${getRarityColor(award.rarity)}`} />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{award.category}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                  
                  {/* Achievement Glow Effect */}
                  <div className="mt-4 p-3 bg-secondary/20 rounded-lg border-l-4 border-primary/50">
                    <p className="text-xs text-primary font-medium">
                      Achievement unlocked in {award.year} • Category: {award.category}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-card border-border shadow-batman max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-orbitron text-2xl text-primary mb-6">
                Achievement Statistics
              </h3>
              
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-batman-yellow/20 rounded-full flex items-center justify-center mx-auto mb-3 animate-glow-pulse">
                    <Trophy className="w-8 h-8 text-batman-yellow" />
                  </div>
                  <div className="text-3xl font-bold text-batman-yellow mb-1">1</div>
                  <div className="text-sm text-muted-foreground">Mythic Achievement</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 animate-glow-pulse">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Legendary Awards</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3 animate-glow-pulse">
                    <Star className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-1">1</div>
                  <div className="text-sm text-muted-foreground">Epic Achievement</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3 animate-glow-pulse">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-1">97.83%</div>
                  <div className="text-sm text-muted-foreground">Best Academic Score</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-foreground/20 rounded-full flex items-center justify-center mx-auto mb-3 animate-glow-pulse">
                    <Trophy className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">5</div>
                  <div className="text-sm text-muted-foreground">Total Honors</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};