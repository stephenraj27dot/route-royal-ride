import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bus, Truck } from "lucide-react";

const DriverLogin = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/driver/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
            <Truck className="w-8 h-8 text-accent-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Driver Login</h1>
          <p className="text-muted-foreground">Manage your bus route</p>
        </div>

        <form onSubmit={handleLogin} className="glass-card p-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-card-foreground">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-background/50 border-border text-foreground"
              required
            />
          </div>

          <Button type="submit" variant="accent" className="w-full" size="lg">
            Login
          </Button>
        </form>

        <button
          onClick={() => navigate("/")}
          className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-smooth w-full text-center"
        >
          ← Back to role selection
        </button>
      </div>
    </div>
  );
};

export default DriverLogin;
