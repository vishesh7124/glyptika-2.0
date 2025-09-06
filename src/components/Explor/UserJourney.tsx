import { ArrowRight, Upload, Cpu, Sliders, Share2, Headset } from "lucide-react";

type Step = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const userJourneySteps: Step[] = [
  {
    title: "Upload Your 2D Plan",
    description: "Simply upload your 2D floor plan in any common format (JPG, PNG, PDF).",
    icon: Upload,
  },
  {
    title: "AI Processing",
    description: "Our AI analyzes your floor plan and converts it into a 3D model automatically.",
    icon: Cpu,
  },
  {
    title: "Customize & Edit",
    description: "Easily customize materials, furniture, and lighting with our intuitive tools.",
    icon: Sliders,
  },
  {
    title: "Generate VR Walkthrough",
    description: "With one click, generate an immersive VR experience from your 3D model.",
    icon: Headset, // Changed from Vr to Headset
  },
  {
    title: "Share & Collaborate",
    description: "Share your VR experience with clients or team members via link or embed.",
    icon: Share2,
  },
];


export default function UserJourney() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How XPLOR Works
          </h2>
          <br />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your 2D plans into immersive experiences in just 5 simple steps
          </p>
          <br />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {userJourneySteps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
              
              {index < userJourneySteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-teal-400 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}