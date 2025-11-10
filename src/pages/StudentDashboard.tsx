import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Bell, LogOut, Navigation } from "lucide-react";
import { toast } from "sonner";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [busETA, setBusETA] = useState("3 min");

  const handleLeavingNow = () => {
    toast.success("Driver notified", {
      description: "The driver has been notified that you're on your way!",
    });
  };

  const handleLogout = () => {
    navigate("/student/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="glass-card m-4 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-card-foreground">Student Dashboard</h1>
            <p className="text-sm text-muted-foreground">Live bus tracking</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={handleLogout}>
          <LogOut className="w-5 h-5" />
        </Button>
      </header>

      {/* Map Container */}
      <div className="flex-1 m-4 mt-0 glass-card p-4 relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-muted/20 rounded-lg flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full">
              <Navigation className="w-10 h-10 text-primary animate-pulse" />
            </div>
            <div>
              <p className="text-foreground font-medium">Live Map View</p>
              <p className="text-sm text-muted-foreground">Bus location will appear here</p>
            </div>
          </div>
        </div>

        {/* Floating notification button */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 right-4 rounded-full w-12 h-12"
        >
          <Bell className="w-5 h-5" />
        </Button>
      </div>

      {/* Bottom Info Card */}
      <div className="m-4 mt-0 glass-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Bus ETA</p>
            <p className="text-2xl font-bold text-card-foreground">{busETA}</p>
          </div>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
        </div>

        <Button
          onClick={handleLeavingNow}
          size="lg"
          className="w-full"
        >
          <Navigation className="mr-2" />
          I'm Leaving Now
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Tap to notify the driver you're on your way to the bus stop
        </p>
      </div>
    </div>
  );
};

export default StudentDashboard;
