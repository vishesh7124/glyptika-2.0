import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, ExternalLink, FileText, Video, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function Day5Resources() {
  const resources = [
    {
      type: "Project Briefs",
      icon: <Target className="w-5 h-5" />,
      items: [
        { name: "Final Challenge", url: "#", description: "Comprehensive project requirements" },
        { name: "Project Rubric", url: "#", description: "Evaluation criteria and guidelines" },
        { name: "Time Management", url: "#", description: "Project planning and scheduling" }
      ]
    },
    {
      type: "Support Materials",
      icon: <Video className="w-5 h-5" />,
      items: [
        { name: "Troubleshooting Guide", url: "#", description: "Common issues and solutions" },
        { name: "Feedback Sessions", url: "#", description: "Live review and critique videos" },
        { name: "Optimization Tips", url: "#", description: "Performance and quality improvements" }
      ]
    },
    {
      type: "Project Assets",
      icon: <FileText className="w-5 h-5" />,
      items: [
        { name: "Starter Files", url: "#", description: "Base scenes and reference materials" },
        { name: "Asset Libraries", url: "#", description: "Textures, models, and materials" },
        { name: "Submission Templates", url: "#", description: "Project delivery formats" }
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
          Day 5 Resources
        </h1>
        <p className="text-xl text-muted-foreground font-light">
          Final Projects
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="w-full h-64 bg-secondary rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=1200&h=400&fit=crop"
            alt="Day 5 Workshop"
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
                  Complete your learning journey
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
            Download All Day 5 Resources
          </Button>
        </div>
      </div>
    </div>
  );
}