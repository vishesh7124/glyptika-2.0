import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";


interface WorkshopTile {
  id: string;
  day: string;
  title: string;
  description: string;
  imageUrl: string;
  resourceUrl: string;
}

const workshopData: WorkshopTile[] = [
  {
    id: "day1",
    day: "Day 1",
    title: "Foundation & Setup",
    description:
      "Introduction to 3D modeling fundamentals, software setup, and basic navigation. Get started with your creative journey.",
    imageUrl:
      "https://placehold.co/400x200/1e2340/4fd1c7?text=3D+Modeling+Basics",
    resourceUrl: "/day1",
  },
  {
    id: "day2",
    day: "Day 2",
    title: "Advanced Techniques",
    description:
      "Dive deeper into advanced modeling techniques, texturing workflows, and professional tips for creating stunning visuals.",
    imageUrl:
      "https://placehold.co/400x200/1e2340/4fd1c7?text=Advanced+Techniques",
    resourceUrl: "/day2",
  },
  {
    id: "day3",
    day: "Day 3",
    title: "Animation & Rendering",
    description:
      "Master animation principles and rendering techniques to bring your creations to life with professional quality output.",
    imageUrl:
      "https://placehold.co/400x200/1e2340/4fd1c7?text=Animation+%26+Rendering",
    resourceUrl: "/day3",
  },
  {
    id: "files",
    day: "Files",
    title: "Access all 3D files",
    description:
      "Download and access all workshop files, models, textures, and project resources in one convenient location.",
    imageUrl: "https://placehold.co/400x200/1e2340/4fd1c7?text=3D+Files+Access",
    resourceUrl: "/bonus",
  },
];

export function WorkshopHub() {
  const navigate = useNavigate();

  const handleTileClick = (tile: WorkshopTile) => {
    navigate(tile.resourceUrl);
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Header */}
      <div className="relative text-center py-8">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-wider">
          GLYPTIKA
        </h1>
        <p className="text-xl text-muted-foreground font-light">
          Workshop Resource Hub
        </p>
      </div>

      {/* Workshop Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mt-12">
          {/* Left: Workshop grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {workshopData.map((tile) => (
              <div
                key={tile.id}
                onClick={() => handleTileClick(tile)}
                className="group relative bg-card/80 backdrop-blur-glass rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-glow border border-border overflow-hidden"
              >
                {/* Shimmer */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold border border-primary/30">
                  {tile.day}
                </div>

                {/* Image */}
                <div className="w-full h-48 bg-secondary rounded-xl mb-6 overflow-hidden">
                  <img
                    src={tile.imageUrl}
                    alt={`${tile.day} Workshop`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {tile.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Long Tile */}
          <div className="group relative bg-card/80 backdrop-blur-glass rounded-2xl p-6 border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-glow cursor-default">
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

            {/* Optional image or banner */}
            <div className="w-full h-48 bg-secondary rounded-xl mb-6 overflow-hidden">
              <img
                src="/featured-image.jpg" // Replace with your actual image
                alt="Featured"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Featured
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                Explore exclusive content, announcements, or spotlighted
                workshops here.
              </p>
              <Button className="bg-gradient-accent text-accent-foreground font-bold w-full mt-auto hover:opacity-90 hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
