import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Login</h1>
          <p className="text-muted-foreground">Manage routes and fleet operations</p>
        </div>

        <form onSubmit={handleLogin} className="glass-card p-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-card-foreground">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

export default AdminLogin;
