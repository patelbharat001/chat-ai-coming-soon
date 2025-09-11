import { EmailSignup } from "@/components/EmailSignup";
import { ContactSection } from "@/components/ContactSection";
import aiHeroBg from "@/assets/ai-hero-bg.jpg";
import { Sparkles, Brain, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${aiHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <Brain className="h-8 w-8 text-primary animate-float" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              chating.ai
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="h-5 w-5 text-secondary" />
            <span className="text-lg text-muted-foreground">AI-Powered Conversations</span>
            <Sparkles className="h-5 w-5 text-secondary" />
          </div>
        </header>

        {/* Coming Soon Section */}
        <section className="text-center mb-16 space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Coming Soon
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The future of AI conversations is being built. Get ready for intelligent, natural, 
              and meaningful interactions powered by cutting-edge artificial intelligence.
            </p>
          </div>
          
          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="text-center space-y-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:shadow-card transition-all duration-300">
              <Zap className="h-10 w-10 text-primary mx-auto" />
              <h3 className="text-xl font-semibold text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground">Instant responses with advanced AI processing</p>
            </div>
            <div className="text-center space-y-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:shadow-card transition-all duration-300">
              <Brain className="h-10 w-10 text-secondary mx-auto" />
              <h3 className="text-xl font-semibold text-foreground">Smart & Intuitive</h3>
              <p className="text-muted-foreground">Understands context and learns from conversations</p>
            </div>
            <div className="text-center space-y-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:shadow-card transition-all duration-300">
              <Sparkles className="h-10 w-10 text-accent mx-auto" />
              <h3 className="text-xl font-semibold text-foreground">Next-Gen AI</h3>
              <p className="text-muted-foreground">Powered by the latest in conversational AI technology</p>
            </div>
          </div>
        </section>

        {/* Email Signup */}
        <section className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Be the first to know</h3>
            <p className="text-muted-foreground">Join our waitlist to get early access and exclusive updates</p>
            <EmailSignup />
          </div>
        </section>

        {/* Domain Sale Section */}
        <section className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <ContactSection />
        </section>
      </div>
    </div>
  );
};

export default Index;
