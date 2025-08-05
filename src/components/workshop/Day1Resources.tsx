import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  FileText,
  Video,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Day1Resources() {
  const resources = [
    {
      type: "Software Setup",
      icon: <Wrench className="w-5 h-5" />,
      items: [
        {
          name: "Blender 4.0 Download",
          url: "#",
          description: "Latest version with all features",
        },
        {
          name: "Installation Guide",
          url: "#",
          description: "Step-by-step setup instructions",
        },
        {
          name: "Plugin Pack",
          url: "#",
          description: "Essential add-ons for beginners",
        },
      ],
    },
    {
      type: "Video Tutorials",
      icon: <Video className="w-5 h-5" />,
      items: [
        {
          name: "Interface Overview",
          url: "#",
          description: "Get familiar with Blender's interface",
        },
        {
          name: "Basic Navigation",
          url: "#",
          description: "Learn to navigate 3D space efficiently",
        },
        {
          name: "First Model",
          url: "#",
          description: "Create your first simple 3D model",
        },
      ],
    },
    {
      type: "Documentation",
      icon: <FileText className="w-5 h-5" />,
      items: [
        {
          name: "Beginner's Manual",
          url: "#",
          description: "Comprehensive starter guide",
        },
        {
          name: "Hotkey Reference",
          url: "#",
          description: "Essential keyboard shortcuts",
        },
        {
          name: "Troubleshooting Guide",
          url: "#",
          description: "Common issues and solutions",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c2b] via-[#232a3d] to-[#1e2340] flex flex-col items-center px-2 md:px-6 lg:px-8">
      {/* Header */}
      <div className="relative text-center py-12 md:py-16 w-full max-w-4xl mx-auto">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <Link
          to="/workshop"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 font-semibold text-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back to Workshop Hub
        </Link>
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mb-4 md:mb-6 drop-shadow-xl">
          Day 1 Resources
        </h1>
        <br />
        <p className="text-xl md:text-2xl text-slate-300 font-light backdrop-blur-sm px-4 md:px-6 py-2 rounded-xl inline-block shadow-lg border border-white/10">
          Foundation & Setup
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full max-w-5xl mx-auto mb-10 md:mb-16">
        <div className="w-full h-56 md:h-72 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=400&fit=crop"
            alt="Day 1 Workshop"
            className="w-full h-full object-cover rounded-3xl scale-105"
          />
        </div>
      </div>
      <br />
      {/* Resources */}
      <div className="w-full max-w-6xl mx-auto pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {resources.map((category) => (
            <div key={category.type} className="flex flex-col h-full">
              <Card
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-cyan-400/30 transition-shadow duration-300 flex flex-col h-full"
                style={{ minHeight: "420px", height: "100%" }}
              >
                <CardHeader className="pb-2 md:pb-4">
                  <CardTitle className="flex items-center gap-3 md:gap-4 text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                    <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-400/30 to-purple-500/30 shadow-md">
                      {category.icon}
                    </span>
                    {category.type}
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-sm md:text-base mt-1 md:mt-2">
                    Essential resources for getting started
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4 md:gap-6 items-start">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex-1 flex flex-col items-start gap-2 group"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1 text-base md:text-lg">
                          {item.name}
                        </h4>
                        <p className="text-xs md:text-sm text-slate-300">
                          {item.description}
                        </p>
                      </div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                        style={{ opacity: item.url === "#" ? 0.5 : 1, pointerEvents: item.url === "#" ? "none" : "auto" }}
                      >
                        <Button
                          size="sm"
                          variant="ghost"
                          className="transition-opacity text-cyan-400"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      </a>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
          <br /><br />
        {/* Download All Button */}
        <div className="flex justify-center mt-10 md:mt-16">
          <a
            href="https://drive.google.com/drive/folders/13TjuBb4Os0-g-C56IaKNTONxAN5DGYi8"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 hover:opacity-90 text-white font-bold px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl text-lg md:text-xl shadow-xl flex items-center justify-center gap-2 md:gap-3">
            <Download className="w-6 md:w-7 h-6 md:h-7" />
            Download All Day 1 Resources
          </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
