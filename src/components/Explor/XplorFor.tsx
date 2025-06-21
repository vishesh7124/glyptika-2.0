import { motion } from "framer-motion";

const targets = [
  {
    emoji: "📐",
    title: "Architects",
    line1: "End-to-end 2D to VR in one platform",
    line2: "Faster presentations, fewer delays",
  },
  {
    emoji: "🎨",
    title: "Interior Designers",
    line1: "Instantly visualize and iterate in VR",
    line2: "No technical tools or training needed",
  },
  {
    emoji: "👷",
    title: "Builders & Developers",
    line1: "Pre-sell projects with immersive walkthroughs",
    line2: "Cut cost and time from the design process",
  },
];

export default function XplorFor() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[rgba(17,24,39,0.55)]">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Who Xplor Is For
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Tailored for every professional in the design-to-build journey
        </p>
      </motion.div>
      <br /><br />
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {targets.map((item, index) => (
          <motion.div
            key={index}
            className="m-4 border border-gray-700 rounded-2xl shadow-md p-8 text-center bg-[rgba(17,24,39,0.65)] hover:shadow-2xl hover:bg-[rgba(17,24,39,0.75)] transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
              className="text-5xl mb-6"
            >
              {item.emoji}
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-gray-300 mb-2">{item.line1}</p>
            <p className="text-sm text-gray-400">{item.line2}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
