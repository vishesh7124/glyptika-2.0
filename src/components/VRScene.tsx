import XplorIntroSection from "./Explor/XplorIntroSection";
import UserJourney from "./Explor/UserJourney";
import XplorFor from "./Explor/XplorFor";
import Pricing from "./Explor/Pricing";
import "./Style/VRScene.css";

export default function VRScene() {
  return (
    <div
      className="bg-black text-gray-50 font-sans w-full -mt-1.5 overflow-y-scroll custom-scroll-hide"
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
    >
      <style>
        {`
          .custom-scroll-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {/* Content Section */}
      <section
        // --- CHANGE IS HERE ---
        className="relative min-h-screen px-6 md:px-12 lg:px-24 py-32 space-y-32 text-white bg-gradient-to-b from-cyan-900 via-blue-950 to-black"
        style={{
          paddingTop: '5rem',
          minHeight: '100vh'
        }}
      >
        <div className="relative z-10">
          <XplorIntroSection />
          <UserJourney />
          <XplorFor />
          <Pricing />
        </div>
      </section>
    </div>
  );
}