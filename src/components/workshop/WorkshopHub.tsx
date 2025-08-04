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
    <div className="min-h-screen bg-gradient-to-br from-[#181c2b] via-[#232a3d] to-[#1e2340] flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="relative text-center py-14 w-full max-w-4xl mx-auto">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mb-4 tracking-tight drop-shadow-lg">
          GLYPTIKA
        </h1>
        <p className="text-2xl md:text-3xl text-slate-300 font-light backdrop-blur-sm px-4 rounded-xl inline-block shadow-md">
          Workshop Resource Hub
        </p>
      </div>

      {/* Workshop Grid */}
      <div className="w-full max-w-6xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 mt-10">
          {/* Left: Workshop grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {workshopData.map((tile) => (
              <div
                key={tile.id}
                onClick={() => handleTileClick(tile)}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20 overflow-hidden shadow-lg"
              >
                {/* Glass shimmer */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
                </div>

                {/* Badge */}
                <div className="absolute top-5 right-5 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-cyan-300 px-4 py-1 rounded-full text-base font-bold border border-cyan-400/30 shadow-md">
                  {tile.day}
                </div>

                {/* Image */}
                <div className="w-full h-48 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-xl mb-7 overflow-hidden border border-white/10 shadow-md">
                  <img
                    src={tile.imageUrl}
                    alt={`${tile.day} Workshop`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">
                    {tile.title}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {tile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Long Tile */}
          <div className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default shadow-lg flex flex-col justify-between">
            {/* Glass shimmer effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
            </div>

            {/* Optional image or banner */}
            <div className="w-full h-48 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-xl mb-7 overflow-hidden border border-white/10 shadow-md">
              <img
                src="/featured-image.jpg"
                alt="Featured"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center flex flex-col justify-between h-full">
              <h2 className="text-2xl font-bold text-white mb-2 drop-shadow">
                Featured
              </h2>
              <p className="text-slate-300 text-base mb-6">
                Explore exclusive content, announcements, or spotlighted
                workshops here.
              </p>
              <Button className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-white font-bold w-full mt-auto hover:opacity-90 hover:-translate-y-1 shadow-lg transition-all duration-300 py-3 rounded-xl text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
