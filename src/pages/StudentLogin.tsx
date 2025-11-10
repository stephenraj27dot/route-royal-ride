import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bus } from "lucide-react";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to student dashboard
    navigate("/student/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <Bus className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Student Login</h1>
          <p className="text-muted-foreground">Track your college bus in real-time</p>
        </div>

        <form onSubmit={handleLogin} className="glass-card p-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-card-foreground">Email or Register ID</Label>
            <Input
              id="email"
              type="text"
              placeholder="student@college.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/50 border-border text-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-card-foreground">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-background/50 border-border text-foreground"
              required
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Login
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("/student/register")}
              className="text-sm text-foreground hover:text-primary transition-smooth"
            >
              New user? Register
            </button>
          </div>
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

export default StudentLogin;
