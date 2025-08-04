import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


interface SelectionTile {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  targetRoute: string;
}

const selectionData: SelectionTile[] = [
  {
    id: "mlsc",
    title: "MLSC × GLYPTIKA",
    description:
      "Access MLSC workshop resources, 3D modeling tutorials, and exclusive content for collaborative learning.",
    imageUrl: "https://placehold.co/500x300/1e2340/4fd1c7?text=MLSC+×+GLYPTIKA",
    targetRoute: "/landing",
  },
  {
    id: "frosh",
    title: "FROSH × GLYPTIKA",
    description:
      "Explore FROSH workshop materials, beginner-friendly 3D modeling guides, and orientation resources.",
    imageUrl:
      "https://placehold.co/500x300/1e2340/4fd1c7?text=FROSH+×+GLYPTIKA",
    targetRoute: "/workshop",
  },
];

export function MainSelection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [currentTile, setCurrentTile] = useState<SelectionTile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctPassword = "glyptika";

  const handleTileClick = (tile: SelectionTile) => {
    if (tile.id === "frosh") {
      setCurrentTile(tile);
      setIsModalOpen(true);
      setPassword("");
      setError("");
    } else {
      navigate(tile.targetRoute);
    }
  };

  const handlePasswordSubmit = async () => {
    if (password.trim() === correctPassword) {
      setIsLoading(true);
      setError("");

      // Simulate loading
      setTimeout(() => {
        setIsLoading(false);
        setIsModalOpen(false);
        navigate(currentTile?.targetRoute || "/");
      }, 1000);
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handlePasswordSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Header */}
      <div className="relative text-center py-12">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-wider">
          GLYPTIKA
        </h1>
        <p className="text-2xl text-muted-foreground font-light">
          Choose Your Workshop Experience
        </p>
      </div>

      {/* Selection Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {selectionData.map((tile) => (
            <div
              key={tile.id}
              onClick={() => handleTileClick(tile)}
              className="group relative bg-card/80 backdrop-blur-glass rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-glow border border-border overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

              {/* Image */}
              <div className="w-full h-64 bg-secondary rounded-2xl mb-8 overflow-hidden">
                <img
                  src={tile.imageUrl}
                  alt={tile.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {tile.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {tile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Password Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gradient-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="text-foreground text-xl">
              Enter Access Code
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Please enter the password to access workshop resources:
            </p>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyPress={handleKeyPress}
              className="bg-secondary/50 border-input text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
              autoFocus
            />
            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button
              onClick={handlePasswordSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner mr-2" />
                  Accessing...
                </>
              ) : (
                "Access Workshop"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
