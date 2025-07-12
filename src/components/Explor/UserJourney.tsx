import { motion, Variants } from "framer-motion";
import Plan from "@/assets/images/Xplore/plan.jpg"
import VR from "@/assets/images/Xplore/VR.jpg"
import Custimize from "@/assets/images/Xplore/Custimized.jpg"
import Layout from "@/assets/images/Xplore/3DLayout.jpg"

type Step = {
  title: string;
  description: string;
  image: string;
};

const steps: Step[] = [
  {
    title: "Upload Your Floor Plan",
    description:
      "Start by uploading a CAD, PDF, or JPEG of your 2D floor plan.",
    image: Plan,
  },
  {
    title: "AI Generates 3D Layout",
    description:
      "Our AI detects and converts all architectural elements—walls, doors, windows—into a clean 3D model.",
    image: Layout,
  },
  {
    title: "Customize & Furnish",
    description:
      "Easily drag and drop furniture, fixtures, and materials to match your style and purpose.",
    image: Custimize,
  },
  {
    title: "Enter VR Mode",
    description:
      "With one click, experience your design in immersive VR and share it with your team or clients.",
    image: VR,
  },
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.8, 0.25, 1],
    },
  }),
};

export default function UserJourney() {
  return (
    <section className="py-7 px-20 md:px-12 lg:px-45 bg-[rgba(17,24,39,0.55)]">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white"> User Journey</h2>
        <p className="text-lg text-white mb-10">
          Build Your Dream Project in 4 Simple Steps
        </p>
        <br /><br />
      </div>

      <div className="">
        {steps.map(({ title, description, image }, index) => (
          <motion.div
            key={title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
            className={`flex flex-col items-center gap-10 lg:gap-16 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <img
              src={image}
              alt={title}
              className="w-full lg:w-1/3 h-64 object-cover rounded-lg shadow-md"
            />
            <div className="lg:w-1/2 text-center lg:text-left px-2">
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-white text-base">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
