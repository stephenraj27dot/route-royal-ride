import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, LogOut, Navigation, PlayCircle, SkipForward, Users } from "lucide-react";
import { toast } from "sonner";

const DriverDashboard = () => {
  const navigate = useNavigate();
  const [tripActive, setTripActive] = useState(false);

  const handleStartTrip = () => {
    setTripActive(true);
    toast.success("Trip started", {
      description: "GPS tracking is now active. Students can see your location.",
    });
  };

  const handleSkipStop = () => {
    toast.info("Stop skipped", {
      description: "Students at this stop have been notified.",
    });
  };

  const handleLogout = () => {
    navigate("/driver/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="glass-card m-4 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-card-foreground">Driver Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              {tripActive ? "Trip in progress" : "Ready to start"}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={handleLogout}>
          <LogOut className="w-5 h-5" />
        </Button>
      </header>

      {/* Map Container */}
      <div className="flex-1 m-4 mt-0 glass-card p-4 relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full">
              <Navigation className={`w-10 h-10 text-accent ${tripActive ? 'animate-pulse' : ''}`} />
            </div>
            <div>
              <p className="text-foreground font-medium">Route Map View</p>
              <p className="text-sm text-muted-foreground">
                {tripActive ? "Broadcasting location" : "Start trip to begin tracking"}
              </p>
            </div>
          </div>
        </div>

        {/* Floating students count */}
        <div className="absolute top-4 right-4 glass-card p-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          <span className="font-bold text-card-foreground">24</span>
        </div>
      </div>

      {/* Control Panel */}
      <div className="m-4 mt-0 glass-card p-6 space-y-4">
        {!tripActive ? (
          <Button
            onClick={handleStartTrip}
            variant="accent"
            size="lg"
            className="w-full"
          >
            <PlayCircle className="mr-2" />
            Start Trip
          </Button>
        ) : (
          <div className="space-y-3">
            <div className="glass-card p-4 bg-primary/10 border-2 border-primary/30">
              <p className="text-sm text-muted-foreground">Next Stop</p>
              <p className="font-bold text-card-foreground">Main Gate - Building A</p>
              <p className="text-xs text-muted-foreground mt-1">3 students waiting</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleSkipStop}
                variant="outline"
                size="lg"
              >
                <SkipForward className="mr-2" />
                Skip Stop
              </Button>
              <Button
                onClick={() => setTripActive(false)}
                variant="destructive"
                size="lg"
              >
                End Trip
              </Button>
            </div>
          </div>
        )}

        <p className="text-xs text-center text-muted-foreground">
          {tripActive 
            ? "Students can see your real-time location" 
            : "Start trip to enable GPS tracking"}
        </p>
      </div>
    </div>
  );
};

export default DriverDashboard;
