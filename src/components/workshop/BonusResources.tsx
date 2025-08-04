import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, ExternalLink, FileText, Video, Gift } from "lucide-react";
import { Link } from "react-router-dom";

export default function BonusResources() {
  const resources = [
    {
      type: "Exclusive Content",
      icon: <Gift className="w-5 h-5" />,
      items: [
        { name: "Advanced Workflows", url: "#", description: "Industry-secret techniques and shortcuts" },
        { name: "Master Classes", url: "#", description: "Extended tutorials from experts" },
        { name: "Behind the Scenes", url: "#", description: "Real studio production insights" }
      ]
    },
    {
      type: "Premium Assets",
      icon: <Video className="w-5 h-5" />,
      items: [
        { name: "HDR Environment Pack", url: "#", description: "Professional lighting environments" },
        { name: "Material Library Pro", url: "#", description: "High-end PBR materials collection" },
        { name: "Model Repository", url: "#", description: "Exclusive 3D model assets" }
      ]
    },
    {
      type: "Community & Support",
      icon: <FileText className="w-5 h-5" />,
      items: [
        { name: "Private Discord Access", url: "#", description: "Exclusive community and mentorship" },
        { name: "Monthly Q&A Sessions", url: "#", description: "Live sessions with industry pros" },
        { name: "Job Board Access", url: "#", description: "Exclusive industry opportunities" }
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
          Bonus Resources
        </h1>
        <p className="text-xl text-muted-foreground font-light">
          Exclusive Premium Content
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="w-full h-64 bg-secondary rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=1200&h=400&fit=crop"
            alt="Bonus Resources"
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
                  Premium resources for continued growth
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
            Download All Bonus Resources
          </Button>
        </div>
      </div>
    </div>
  );
}