import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bus, GraduationCap, Truck, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
            <Bus className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            College Bus Tracker
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time bus tracking system for students, drivers, and administrators
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Student Portal */}
          <div className="glass-card p-8 space-y-4 hover:shadow-2xl transition-smooth">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-2">Student</h2>
              <p className="text-muted-foreground">
                Track your college bus in real-time and notify when you're leaving
              </p>
            </div>
            <Button
              onClick={() => navigate("/student/login")}
              className="w-full"
              size="lg"
            >
              Student Portal
            </Button>
          </div>

          {/* Driver Portal */}
          <div className="glass-card p-8 space-y-4 hover:shadow-2xl transition-smooth">
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
              <Truck className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-2">Driver</h2>
              <p className="text-muted-foreground">
                Manage your route, start trips, and receive student notifications
              </p>
            </div>
            <Button
              onClick={() => navigate("/driver/login")}
              variant="accent"
              className="w-full"
              size="lg"
            >
              Driver Portal
            </Button>
          </div>

          {/* Admin Portal */}
          <div className="glass-card p-8 space-y-4 hover:shadow-2xl transition-smooth">
            <div className="w-14 h-14 bg-secondary/30 rounded-full flex items-center justify-center">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-2">Admin</h2>
              <p className="text-muted-foreground">
                Manage routes, buses, drivers, and monitor all operations
              </p>
            </div>
            <Button
              onClick={() => navigate("/admin/login")}
              variant="secondary"
              className="w-full"
              size="lg"
            >
              Admin Portal
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold text-card-foreground mb-4">Key Features</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Real-time GPS tracking
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Student notifications
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              Route management
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              Skip stop alerts
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
