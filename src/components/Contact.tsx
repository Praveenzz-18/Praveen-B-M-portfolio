import { BatmanLogo } from "@/components/BatmanLogo";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Zap, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Save to Firebase
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: serverTimestamp()
      });

      // 2. Send Email via EmailJS
      await emailjs.send(
        'service_apgx9gl',
        'template_pd8dvtj',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'UlzbnELlWq3JcT2R1'
      );

      toast("Bat-Signal received! Message sent successfully.", {
        description: "I'll respond faster than Batman arrives at a crime scene."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message", {
        description: "Please try again or contact directly via email."
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-gotham-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4">
            BAT <span className="text-primary animate-text-glow">SIGNAL</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When Gotham needs a hero, they light the Bat-Signal. When you need a developer, 
            just send a message. I'll be there faster than you can say "I am vengeance."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-border shadow-batman transition-all duration-500 hover:shadow-neon">
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl text-primary flex items-center gap-3">
                  <Zap className="w-8 h-8 animate-glow-pulse" />
                  Direct Communication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg border border-primary/20 transition-glow hover:bg-secondary/30">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a href="mailto:mkr612005@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      mkr612005@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg border border-primary/20 transition-glow hover:bg-secondary/30">
                  <div className="w-12 h-12 bg-batman-yellow/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-batman-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <a href="tel:+919353059129" className="text-muted-foreground hover:text-batman-yellow transition-colors">
                      +91 93530 59129
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg border border-accent/20 transition-glow hover:bg-secondary/30">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">BCWD2249 bogadi 2nd stage, Karnataka</p>
                    <p className="text-sm text-accent">Mysore Base Operations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bat Signal Visual */}
            <Card className="bg-card border-border shadow-batman overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gotham-dark p-8 text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                    <BatmanLogo className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="font-orbitron text-xl text-primary mb-2">Signal Status</h3>
                  <p className="text-foreground">Always Online • Response Time: &lt; 24hrs</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border shadow-batman transition-all duration-500 hover:shadow-neon">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl text-primary">
                Send Transmission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Your Name
                    </Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-input border-border text-foreground focus:border-primary transition-glow" placeholder="Bruce Wayne" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-input border-border text-foreground focus:border-primary transition-glow" placeholder="bruce@wayneenterprises.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground font-medium">
                    Subject
                  </Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="bg-input border-border text-foreground focus:border-primary transition-glow" placeholder="Gotham needs your skills..." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="bg-input border-border text-foreground focus:border-primary transition-glow resize-none" placeholder="Tell me about your project, opportunity, or how we can save Gotham together..." />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-orbitron font-semibold py-4 text-lg shadow-neon transition-glow group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending Signal...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Activate Bat-Signal
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-secondary/20 rounded-lg border border-primary/20 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-primary">Response Time:</strong> Faster than the Dark Knight's arrival
                  <br />
                  <strong className="text-batman-yellow">Availability:</strong> 24/7 Gotham Protection
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};