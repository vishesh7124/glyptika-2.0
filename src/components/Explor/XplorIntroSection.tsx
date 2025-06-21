import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function XplorIntroSection() {
  return (
    <section className="relative w-full bg-[rgba(17,24,39,0.55)] py-24 px-6 md:px-12 lg:px-24 overflow-hidden flex items-center justify-center">
      {/* Background glow effects */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-100 rounded-full blur-2xl opacity-20 z-0" />

      <div className="relative z-10 max-w-6xl w-full mx-auto text-center flex flex-col items-center justify-center">
        <motion.p
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{}}
          className="text-xs md:text-sm uppercase tracking-widest text-white font-semibold"
        >
          Design Smarter. Build Faster.
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{}}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4 leading-tight"
        >
          <span className="text-white bg-clip-text text-transparent text-shadow-neutral-950">
            Visualize in VR Instantly
          </span>
        </motion.h1>
        <br />
        <motion.p
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{}}
          className="mt-6 text-lg md:text-xl text-white max-w-3xl"
        >
          Xplor is an AI-powered, no-code platform that transforms your 2D floor plans into immersive,
          high-quality VR walkthroughs—within minutes.
        </motion.p>
        <br />
        <motion.p
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{}}
          className="mt-4 text-base text-white max-w-2xl"
        >
          Built for interior designers, architects, and builders, Xplor replaces complex tools and
          multiple vendors with one seamless, user-controlled experience.
        </motion.p>
        <br />
        <motion.div
          custom={4}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false}}
          className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-medium"
        >
          <span className="bg-[rgba(17,24,39,0.65)] text-white px-4 py-2 rounded-full border border-indigo-100">
            All-in-one platform
          </span>
          <span className="bg-[rgba(17,24,39,0.65)] text-white px-4 py-2 rounded-full border border-indigo-100">
            No coding needed
          </span>
          <span className="bg-[rgba(17,24,39,0.65)] text-white px-4 py-2 rounded-full border border-indigo-100">
            From 2D to VR in minutes
          </span>
        </motion.div>

        {/* CTA Button - Optional */}
        {/*
        <motion.div
          custom={5}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{}}
          className="mt-10"
        >
          <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-8 py-3 rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl">
            Try Xplor Free
          </button>
        </motion.div>
        */}
      </div>
    </section>
  );
}
