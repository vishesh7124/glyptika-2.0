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
    imageUrl: "https://placehold.co/300x200/0f111a/3de0ce?text=MLSC+×+GLYPTIKA",
    targetRoute: "/landing",
  },
  {
    id: "frosh",
    title: "FROSH × GLYPTIKA",
    description:
      "Explore FROSH workshop materials, beginner-friendly 3D modeling guides, and orientation resources.",
    imageUrl: "https://placehold.co/300x200/0f111a/3de0ce?text=FROSH+×+GLYPTIKA",
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
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e17] via-[#101624] to-[#0a0f1f] flex flex-col items-center px-4 md:px-6">
      {/* Header */}
      <div className="relative text-center py-12 md:py-16 w-full max-w-4xl mx-auto">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-600 mb-5 tracking-tight drop-shadow-md">
          GLYPTIKA
        </h1>
        <p className="text-lg md:text-xl text-slate-400 font-light backdrop-blur-sm px-4 rounded-xl inline-block">
          Choose Your Workshop Experience
        </p>
      </div>

      {/* Selection Tiles */}
      <div className="w-full max-w-5xl pb-14 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {selectionData.map((tile) => (
            <div
              key={tile.id}
              onClick={() => handleTileClick(tile)}
              className="group relative bg-[#121a2b]/70 border border-cyan-400/10 hover:border-cyan-300/30 rounded-2xl p-6 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-400/20 hover:shadow-lg cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent pointer-events-none" />
              <div className="w-full h-48 md:h-64 overflow-hidden mb-6 border border-white/10 rounded-xl">
                <img
                  src={tile.imageUrl}
                  alt={tile.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                
              </div>
              <div className="relative z-10 text-center">
                <br />
                <h3 className="text-2xl font-semibold text-white mb-2 drop-shadow">
                  {tile.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base">
                  {tile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gradient-to-br from-[#121a2b] via-[#101624] to-[#0a0f1f] border border-cyan-500/10 text-white rounded-xl max-w-md shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-bold">
              Enter Access Code
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-5 pt-2">
            <p className="text-slate-400 text-sm md:text-base">
              Please enter the password to access workshop resources:
            </p>
            <br />
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyPress={handleKeyPress}
              className="bg-[#0f1624]/70 border border-cyan-400/20 text-white placeholder:text-slate-400 rounded-lg focus:ring-cyan-400 focus:border-cyan-400"
              placeholder="Enter password"
              autoFocus
            />
            <br />
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}
            <br />
            <Button
              onClick={handlePasswordSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:brightness-110 text-white py-2 rounded-lg transition duration-300"
            >
              {isLoading ? "Accessing..." : "Access Workshop"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
