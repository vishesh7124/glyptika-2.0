import { useNavigate } from "react-router-dom";

interface WorkshopTile {
  id: string;
  day: string;
  title: string;
  description: string;
  imageUrl: string;
  resourceUrl: string;
}

const workshopData: WorkshopTile[] = [
  {
    id: "day1",
    day: "Day 1",
    title: "Foundation & Setup",
    description:
      "Introduction to 3D modeling fundamentals, software setup, and basic navigation. Get started with your creative journey.",
    imageUrl:
      "https://placehold.co/400x200/1e2340/4fd1c7?text=3D+Modeling+Basics",
    resourceUrl: "https://drive.google.com/drive/folders/13TjuBb4Os0-g-C56IaKNTONxAN5DGYi8",
  },
  {
    id: "day2",
    day: "Day 2",
    title: "Advanced Techniques",
    description:
      "Dive deeper into advanced modeling techniques, texturing workflows, and professional tips for creating stunning visuals.",
    imageUrl:
      "https://placehold.co/400x200/1e2340/4fd1c7?text=Advanced+Techniques",
    resourceUrl: "/day2",
  },
  {
    id: "day3",
    day: "Day 3",
    title: "Animation & Rendering",
    description:
      "Master animation principles and rendering techniques to bring your creations to life with professional quality output.",
    imageUrl:
      "https://placehold.co/400x200/1e2340/4fd1c7?text=Animation+%26+Rendering",
    resourceUrl: "/day3",
  }
  // {
  //   id: "files",
  //   day: "Files",
  //   title: "Access all 3D files",
  //   description:
  //     "Download and access all workshop files, models, textures, and project resources in one convenient location.",
  //   imageUrl: "https://placehold.co/400x200/1e2340/4fd1c7?text=3D+Files+Access",
  //   resourceUrl: "/bonus",
  // },
];

export function WorkshopHub() {
  const navigate = useNavigate();

  const handleTileClick = (tile: WorkshopTile) => {
  const isExternal = tile.resourceUrl.startsWith("http://") || tile.resourceUrl.startsWith("https://");

  if (isExternal) {
    window.open(tile.resourceUrl, "_blank");
  } else {
    navigate(tile.resourceUrl);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c2b] via-[#232a3d] to-[#1e2340] flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="relative text-center py-14 w-full max-w-4xl mx-auto">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mb-4 tracking-tight drop-shadow-lg">
          GLYPTIKA
        </h1>
        <p className="text-2xl md:text-3xl text-slate-300 font-light backdrop-blur-sm px-4 rounded-xl inline-block shadow-md">
          Workshop Resource Hub
        </p>
      </div>

      {/* Workshop Grid */}
      <div className="w-full max-w-6xl mx-auto pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 mt-10">
          {/* Left: Workshop grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
  {workshopData.map((tile, index) => (
    <div
      key={tile.id}
      onClick={() => handleTileClick(tile)}
      className={`group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20 overflow-hidden shadow-lg
        ${
          workshopData.length === 3 && index === 2
            ? 'sm:col-span-2 sm:mx-auto sm:w-1/2'
            : ''
        }`}
    >
      {/* Glass shimmer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
      </div>

      {/* Badge */}
      <div className="absolute top-5 right-5 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-cyan-300 px-4 py-1 rounded-full text-base font-bold border border-cyan-400/30 shadow-md">
        {tile.day}
      </div>

      {/* Image */}
      <div className="w-full h-48 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-xl mb-7 overflow-hidden border border-white/10 shadow-md">
        <img
          src={tile.imageUrl}
          alt={`${tile.day} Workshop`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <br /><br />
        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">
          {tile.title}
        </h3>
        <br />
        <p className="text-slate-300 text-base leading-relaxed">
          {tile.description}
        </p>
      </div>
    </div>
  ))}
</div>
          {/* Right: Long Tile */}
          <div className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default shadow-lg flex flex-col justify-between w-full max-w-[900px] mx-auto">
              {/* Glass shimmer effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
              </div>

              {/* Optional image or banner */}
              <div className="w-full h-48 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-xl mb-7 overflow-hidden border border-white/10 shadow-md">
                {/* <img
                  src="/images.jpeg"
                  alt="Featured"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                /> */}
              </div>

              {/* Content */}
              <div className="relative z-10 text-center flex flex-col justify-between h-full">
                <h2 className="text-2xl font-bold text-white mb-2 drop-shadow">
                  Blender Compatibility
                </h2>
                <p className="text-slate-300 text-base mb-6">
                  Supported Blender versions by CPU/GPU configuration.
                </p>

                {/* Table */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-white border-collapse">
                    <thead>
                      <tr className="text-left border-b border-white/20">
                        <th className="py-2 px-4 font-semibold">Configuration</th>
                        <th className="py-2 px-4 font-semibold">Blender Version</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4">i3 / Ryzen 3 without any GPU</td>
                        <td className="py-2 px-4">
                          <a href="https://download.blender.org/release/Blender2.80/" target="_blank" className="text-cyan-300 underline">Blender 2.8</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">i3 / Ryzen 3 with integrated GPU</td>
                        <td className="py-2 px-4">
                          <a href="https://download.blender.org/release/Blender3.0/" target="_blank" className="text-cyan-300 underline">Blender 3.0</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">i3 / Ryzen 3 with dedicated GPU</td>
                        <td className="py-2 px-4">
                          <a href="https://download.blender.org/release/Blender3.1/" target="_blank" className="text-cyan-300 underline">Blender 3.1</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">i5 / Ryzen 5 without any GPU</td>
                        <td className="py-2 px-4">
                          <a href="https://download.blender.org/release/Blender3.1/" target="_blank" className="text-cyan-300 underline">Blender 3.1</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">i5 / Ryzen 5 with integrated GPU</td>
                        <td className="py-2 px-4">
                          <a href="https://download.blender.org/release/Blender3.3/" target="_blank" className="text-cyan-300 underline">Blender 3.3</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">i5 / Ryzen 5 with RTX 3050</td>
                        <td className="py-2 px-4">
                          <a href="https://www.blender.org/download/lts/3-6/" target="_blank" className="text-cyan-300 underline">Blender 3.6</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">i7 / Ryzen 7 without any GPU</td>
                        <td className="py-2 px-4">
                          <a href="https://download.blender.org/release/Blender3.3/" target="_blank" className="text-cyan-300 underline">Blender 3.3</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">i7 / Ryzen 7 with integrated GPU</td>
                        <td className="py-2 px-4">
                          <a href="https://download.blender.org/release/Blender3.3/" target="_blank" className="text-cyan-300 underline">Blender 3.3</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">i5 / Ryzen 5 with GPU &gt; RTX 3060</td>
                        <td className="py-2 px-4">
                          <a href="https://download.blender.org/release/Blender4.0/" target="_blank" className="text-cyan-300 underline">Blender 4.0</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">i7 / Ryzen 7 with GPU &gt; RTX 3060</td>
                        <td className="py-2 px-4">
                          <a href="https://download.blender.org/release/Blender4.0/" target="_blank" className="text-cyan-300 underline">Blender 4.0</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">i9 / Ryzen 9 with GPU &gt; RTX 3060</td>
                        <td className="py-2 px-4">
                          <a href="https://download.blender.org/release/Blender4.0/" target="_blank" className="text-cyan-300 underline">Blender 4.0</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">For MAC</td>
                        <td className="py-2 px-4">
                          <a href="https://www.blender.org/download/" target="_blank" className="text-cyan-300 underline">Blender 4.0</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
