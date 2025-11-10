import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, LogOut, Plus, Bus, MapPin, Users, Clock } from "lucide-react";
import { toast } from "sonner";

interface Route {
  id: number;
  name: string;
  driver: string;
  students: number;
  status: "active" | "completed" | "scheduled";
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [routes] = useState<Route[]>([
    { id: 1, name: "Route A - North Campus", driver: "John Smith", students: 24, status: "active" },
    { id: 2, name: "Route B - South Campus", driver: "Sarah Johnson", students: 18, status: "completed" },
    { id: 3, name: "Route C - East Campus", driver: "Mike Wilson", students: 31, status: "scheduled" },
  ]);

  const handleAddRoute = () => {
    toast.success("Feature coming soon", {
      description: "Route creation interface will be available shortly.",
    });
  };

  const handleLogout = () => {
    navigate("/admin/login");
  };

  const getStatusColor = (status: Route["status"]) => {
    switch (status) {
      case "active":
        return "bg-primary/20 text-primary border-primary/30";
      case "completed":
        return "bg-muted/20 text-muted-foreground border-muted/30";
      case "scheduled":
        return "bg-accent/20 text-accent border-accent/30";
    }
  };

  return (
    <div className="min-h-screen p-4 space-y-4">
      {/* Header */}
      <header className="glass-card p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-2xl text-card-foreground">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Route & Fleet Management</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={handleLogout}>
          <LogOut className="w-5 h-5" />
        </Button>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Routes</p>
              <p className="text-3xl font-bold text-card-foreground">1</p>
            </div>
            <Bus className="w-10 h-10 text-primary" />
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Students</p>
              <p className="text-3xl font-bold text-card-foreground">73</p>
            </div>
            <Users className="w-10 h-10 text-accent" />
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Scheduled</p>
              <p className="text-3xl font-bold text-card-foreground">1</p>
            </div>
            <Clock className="w-10 h-10 text-secondary" />
          </div>
        </div>
      </div>

      {/* Routes List */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-card-foreground">All Routes</h2>
          <Button onClick={handleAddRoute} className="gap-2">
            <Plus className="w-4 h-4" />
            Add Route
          </Button>
        </div>

        <div className="space-y-3">
          {routes.map((route) => (
            <div
              key={route.id}
              className="glass-card p-5 hover:shadow-xl transition-smooth border border-border/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-card-foreground">{route.name}</h3>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      Driver: <span className="text-card-foreground font-medium">{route.driver}</span>
                    </p>
                    <p className="text-muted-foreground">
                      Students: <span className="text-card-foreground font-medium">{route.students}</span>
                    </p>
                  </div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium border-2 ${getStatusColor(
                    route.status
                  )}`}
                >
                  {route.status.charAt(0).toUpperCase() + route.status.slice(1)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
