import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You'll be notified when we launch.",
      });
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground"
          required
        />
        <Button 
          type="submit" 
          variant="hero" 
          size="lg"
          disabled={loading}
          className="min-w-[120px]"
        >
          {loading ? "Joining..." : "Get Notified"}
        </Button>
      </form>
    </div>
  );
};