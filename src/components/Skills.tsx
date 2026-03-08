import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import utilityBelt from "@/assets/utility-belt.jpg";
const skills = [{
  name: "Python",
  level: 85,
  icon: "🐍",
  description: "Core language for ML, APIs, and data science applications"
}, {
  name: "C Programming",
  level: 90,
  icon: "🔧",
  description: "System-level programming and algorithm implementation"
}, {
  name: "Java",
  level: 80,
  icon: "☕",
  description: "Object-oriented programming and enterprise applications"
}, {
  name: "HTML/CSS",
  level: 90,
  icon: "🎨",
  description: "Modern web design and responsive layouts"
}, {
  name: "FastAPI",
  level: 75,
  icon: "⚡",
  description: "High-performance Python web framework for building APIs"
}, {
  name: "Flask",
  level: 80,
  icon: "🌶️",
  description: "Lightweight Python web framework for rapid development"
}, {
  name: "Machine Learning",
  level: 70,
  icon: "🤖",
  description: "Data analysis, model training and predictive algorithms"
}];
export const Skills = () => {
  return <section id="skills" className="py-20 bg-gotham-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4">
            UTILITY <span className="text-primary animate-text-glow">BELT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every hero needs their tools. These are mine - forged through countless hours 
            of training and battle-tested in the digital realm.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Utility Belt Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-batman">
              <img src={utilityBelt} alt="Batman's high-tech utility belt representing technical skills" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-orbitron text-2xl font-bold text-primary mb-2">
                Tech Arsenal
              </h3>
              <p className="text-foreground">
                Carefully curated tools for every mission
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => <Card key={skill.name} className="bg-card border-border shadow-batman transition-all duration-300 hover:shadow-neon hover:scale-105 group animate-fade-in-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardHeader className="pb-3">
                  <CardTitle className="font-orbitron text-lg text-primary flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                  
                  {/* Skill Level Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-foreground">Mastery Level</span>
                      <span className="text-xs text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                      <div className="h-full gradient-neon rounded-full transition-all duration-1000 group-hover:animate-glow-pulse" style={{
                    width: `${skill.level}%`
                  }} />
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>;
};