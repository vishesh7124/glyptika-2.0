import { Link } from "react-router-dom"; // Assuming you are using react-router-dom
import { ArrowRight, CheckCircle, Building2, HardHat, Sofa } from "lucide-react";

// Define the type for a single use case
type UseCase = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
};

// Create the data structure to populate the cards
const useCases: UseCase[] = [
  {
    title: "Architecture & Design",
    description:
      "Streamline your design workflow from initial concept to final presentation. Instantly convert 2D plans into immersive VR environments to get client feedback faster than ever.",
    icon: Building2,
    features: [
      "Instant 2D to 3D model conversion",
      "Immersive VR walkthroughs for client presentations",
      "Real-time material and lighting adjustments",
    ],
  },
  {
    title: "Construction & Development",
    description:
      "Mitigate risks and improve project coordination by visualizing the entire construction process. Share interactive models with stakeholders to ensure everyone is on the same page.",
    icon: HardHat,
    features: [
      "Visualize project phases before breaking ground",
      "Enhance stakeholder communication and collaboration",
      "Reduce costly on-site errors and rework",
    ],
  },
  {
    title: "Furniture Retail",
    description:
      "Revolutionize the shopping experience by letting customers visualize furniture directly in virtual environments. Enable them to preview styles, sizes, and layouts before purchase.",
    icon: Sofa,
    features: [
      "Virtual product showrooms",
      "Try-before-you-buy in VR",
      "Seamless integration with e-commerce platforms",
    ],
  },
];

export default function UseCasesSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perfect for Every Industry
          </h2>
          <br />
          <p className="text-xl text-gray-300">
            XPLOR empowers businesses across industries to create immersive
            experiences
          </p>
          <br />
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.slice(0, 2).map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-teal-400/30 hover:shadow-xl hover:shadow-teal-500/10"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 relative">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {useCase.title}
                    <br />
                  </h3>
                </div>

                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {useCase.description}
                </p>
<br />
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                    >
                      <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <br />
              </div>
            );
          })}
        </div>
<br />
        {/* Centered third tile */}
        <div className="flex justify-center mt-8">
          {(() => {
            const FurnitureCase = useCases[2];
            const FurnitureIcon = FurnitureCase.icon;
            return (
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-xl hover:bg-white/10 transition-all duration-300 hover:border-teal-400/30 hover:shadow-xl hover:shadow-teal-500/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 relative">
                    <FurnitureIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {FurnitureCase.title}
                  </h3>
                  <br />
                </div>

                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {FurnitureCase.description}
                </p>
                <br />
                <ul className="space-y-3">
                  {FurnitureCase.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                    >
                      <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })()}
        </div>
<br />
        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-400 mb-4">
            Coming Soon: Real Estate, Interior Design, Education & More
          </p>
          <br />
          <Link
            to="/pricing"
            className="group inline-flex items-center px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 hover:shadow-lg"
          >
            Explore All Plans
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
