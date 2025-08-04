import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, ExternalLink, FileText, Video, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Day3Resources() {
  const resources = [
    {
      type: "Animation Fundamentals",
      icon: <Play className="w-5 h-5" />,
      items: [
        { name: "Keyframe Animation", url: "#", description: "Master timeline and keyframe techniques" },
        { name: "Character Rigging", url: "#", description: "Build armatures for character animation" },
        { name: "Physics Simulation", url: "#", description: "Cloth, fluid, and particle systems" }
      ]
    },
    {
      type: "Rendering Mastery",
      icon: <Video className="w-5 h-5" />,
      items: [
        { name: "Cycles Rendering", url: "#", description: "Photorealistic rendering techniques" },
        { name: "Lighting Setup", url: "#", description: "Professional lighting workflows" },
        { name: "Post-Processing", url: "#", description: "Compositing and final touches" }
      ]
    },
    {
      type: "Scene Files",
      icon: <FileText className="w-5 h-5" />,
      items: [
        { name: "Animation Rigs", url: "#", description: "Ready-to-use character rigs" },
        { name: "Lighting Presets", url: "#", description: "Professional lighting setups" },
        { name: "Render Templates", url: "#", description: "Optimized render settings" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="relative text-center py-8">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Workshop Hub
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-wider">
          Day 3 Resources
        </h1>
        <p className="text-xl text-muted-foreground font-light">
          Animation & Rendering
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="w-full h-64 bg-secondary rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=400&fit=crop"
            alt="Day 3 Workshop"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resources.map((category, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-glass border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  {category.icon}
                  {category.type}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Bring your creations to life
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-accent hover:opacity-90 text-accent-foreground font-bold px-8 py-3">
            <Download className="w-5 h-5 mr-2" />
            Download All Day 3 Resources
          </Button>
        </div>
      </div>
    </div>
  );
}