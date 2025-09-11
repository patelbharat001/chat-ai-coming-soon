import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Globe, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <Card className="p-8 bg-card border-border shadow-card backdrop-blur-sm">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Interested in this domain?</h2>
          <p className="text-muted-foreground">
            chating.ai is available for purchase. Perfect for AI chat platforms, conversational AI services, or chatbot solutions.
          </p>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-muted/50">
            <Globe className="h-8 w-8 text-primary" />
            <div className="text-center">
              <h3 className="font-semibold text-foreground">Premium Domain</h3>
              <p className="text-sm text-muted-foreground">Short, memorable, .ai extension</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-muted/50">
            <MessageCircle className="h-8 w-8 text-secondary" />
            <div className="text-center">
              <h3 className="font-semibold text-foreground">AI-Ready</h3>
              <p className="text-sm text-muted-foreground">Perfect for chat platforms</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-muted/50">
            <Mail className="h-8 w-8 text-accent" />
            <div className="text-center">
              <h3 className="font-semibold text-foreground">Quick Sale</h3>
              <p className="text-sm text-muted-foreground">Serious inquiries only</p>
            </div>
          </div>
        </div>
        
        <Button 
          variant="glow" 
          size="lg"
          onClick={() => window.location.href = 'mailto:inquiries@chating.ai?subject=Domain Purchase Inquiry'}
        >
          Contact for Purchase
        </Button>
      </div>
    </Card>
  );
};