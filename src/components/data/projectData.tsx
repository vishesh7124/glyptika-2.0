
type ProjectItem = {
  id:number;
  name:string;
  title: string;
  details?:string;
  mediaType: "image" | "video";
  public_id?: string; //filename - should be unique
  route: string;
  galleryItems?: string[];
  renderItems?:string[];
  className?: string;
};



export const projectItems: ProjectItem[] = [
  {
    id:1,
    name:"Alpha Tread",
    title: "Bold Design, Built to Impress. From textures to treads, our 3D models are engineered for realism and aesthetic impact. Perfect for prototypes, product demos, or your next big idea.",
    details:"This animation blends 2D motion dynamics with procedural movement design using Adobe After Effects, Spline 3D, and Lottie for web optimization.Smooth path-following, dynamic obstacles, and layered object interactions bring the concept of real-time surface adaptation to life — inspired by modern gaming physics and vector-based motion curves. ",
    mediaType: "video",
    public_id:"AlphaTreadShoes.mp4", 
    route:`Alpha/AlphaTreadShoes.mp4`,
    className:"md:col-span-2"
  },  
  {
    id:2,
    name:"Airpods",
    title: "Tech That Speaks Style. Minimalist, modern, and meticulously modeled — our 3D assets bring technology to life with detail that stands out in every frame. ",
    details: "A minimalist yet bold showcase, this section encapsulates futuristic clarity with a dark gradient matrix background, placing the product at the center of attention. The embedded animation or video uses seamless transitions, cinematic lighting, and product-focused staging to reflect Apple’s precision and premium tone. ",
    mediaType: "video",
    public_id:"airpods%20animation.mp4",
    route:`Airpods/airpods%20animation.mp4`,
    className:"md:col-span-1"
  },
  {
    id:3,
    name:"Call Of Duty",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"codm_opm.webm",
    route:`Experiential/codm/codm_opm.webm`,
    className:"md:col-span-1"
  },

  {
    id:4,
    name:"Samsung",
    title: "Precision. Power. Pixel-Perfect Presentation.A bold fusion of aesthetics and innovation, this section highlights Samsung’s edge-to-edge display with a dynamic, slow-pan animation that brings the 10MP front camera spec to the forefront. The background subtly complements the skin tone of the product, giving it a real-world realism, while the deep blue gradient behind the content adds immersive depth.",
    details: "The animation was created using Blender 🧊 where bevel and subsurface modeling were applied to sculpt the Samsung device with sharp, industrial-style edges. Cycles Renderer was used for producing glassy reflections and a clean metallic finish ✨. A rotating HDRI light rig added dynamic bounce and depth to the materials, especially around the camera cut-out. In After Effects 🎞️, video masking was done to integrate the footage with animated UI highlights. The 10MP label pops out through kinetic typography animation 🔠, synced with a zoom-in motion driven by bezier keyframes for smooth cinematic focus. The overall animation follows a minimalist aesthetic 🖤, letting the sleek design of the product speak for itself while every motion and fade-in supports the premium, polished vibe of the brand.",
    mediaType: "video",
    public_id:"Samsung.mp4",
    route:`Samsung/Samsung.mp4`,
    galleryItems: [
      `Samsung/Shots/1.jpg`,
      `Samsung/Shots/2.jpg`,
      `Samsung/Shots/3.jpg`,
      `Samsung/Shots/4.jpg`,
      `Samsung/Shots/5.jpg`,
      `Samsung/Shots/6.jpg`,
    ],
    renderItems:[
      `Samsung/Shots/1.jpg`,
      `Samsung/Shots/3.jpg`,
    ],
    className:"md:col-span-2"
  },
  {
    id:9,
    name:"Orientation",
    title: "🔥 Welcome to the World of Dynamic Design. From vibrant simulations to immersive particle effects, Glyptika brings your boldest concepts to life. This orientation sequence is just a spark from our blazing creative arsenal.",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"Orientation_comp.mp4",
    route:`Experiential/Orientation/Orientation_comp.mp4`,
    className:"md:col-span-3"
  },
  {
    id:5,
    name:"Mercedes",
    title: "🚀 Powering Vision Through Precision. At Glyptika, we bring ideas to life with striking realism and fluid motion. Our 3D experiences elevate brands, captivate audiences, and leave lasting impressions. ",
    details: "🖤 Mercedes AMG – Elegance in Motion.This cinematic render showcases the Mercedes AMG gliding through a tunnel, brought to life in Blender (Cycles) with high-fidelity reflections, HDRI lighting, and custom shaders for ultra-realistic paintwork and motion blur.",
    mediaType: "video",
    public_id:"Mercedes%20car%20Animation.mp4",
    route:`Mercedes/Mercedes%20car%20Animation.mp4`,
    galleryItems: [

      `Mercedes/Shots/1.png`,
      `Mercedes/Shots/2.png`,
      `Mercedes/Shots/3.png`,
      `Mercedes/Shots/4.png`,
      `Mercedes/Shots/5.png`,
      `Mercedes/Shots/6.png`,

    ],
    renderItems:[
      `Mercedes/Shots/5.png`,
      `Mercedes/Shots/6.png`,
    ],
    className:"md:col-span-3"
  },
  {
    id:7,
    name:"ESports",
    title: "🚀 Powering Vision Through Precision. At Glyptika, we bring ideas to life with striking realism and fluid motion. Our 3D experiences elevate brands, captivate audiences, and leave lasting impressions.",
    details: "Crafted with precision in Blender and rendered using Cycles, this animation features a bold metallic text extrusion surrounded by volumetric fog and lens streaks, simulating stadium floodlights cutting through the dark 🕶️. The reflective shader combined with real-world HDRI lighting enhances every bevel, giving the letters a cold, polished steel finish ✨. 🔊 With deep blacks, piercing whites, and dynamic lighting passes, the visual immerses you into a high-stakes arena before a single word is spoken. It’s more than just an intro—it’s a brand identity in motion.",
    mediaType: "video",
    public_id:"esports.mp4",
    route:`Experiential/Esports/esports.mp4`,

    className:"md:col-span-2"
  },
  {
    id:8,
    name:"Stumble Guys",
    title: "The Stumble Guys animation was crafted in Blender 🕹️ using playful 3D text modeling with bold extrusions and vibrant color gradients. Real-time lighting with Eevee brings out the smooth curvature and bouncy feel of each letter 💥. ",
    details: "The title STUMBLE tumbles in with exaggerated ease-in keyframes, while GUYS lands with a squishy bounce and metallic shading ✨. In After Effects, soft shadows and subtle glows were layered in to boost contrast and visual punch. The motion is synced with elastic interpolation, giving it that cartoon-style chaotic fun 🤸. The overall aesthetic captures the quirky and energetic vibe of the game perfectly 🎮. ",
    mediaType: "video",
    public_id:"stumble%20guys.mp4",
    route:`Experiential/Stumble/stumble%20guys.mp4`,

    className:"md:col-span-1"
  },
  {
    id:6,
    name:"BGMI",
    title: "Hyper-Real Motion. Game-Grade Visuals. An immersive 3D sequence inspired by game-engine aesthetics, this animation leverages real-time ray-traced lighting and dynamic reflections. The glowing text and particle systems give it a high-fidelity reveal sequence — ideal for showcasing mobile gaming culture with a cinematic edge. ",
    details: "An immersive 3D sequence inspired by game-engine aesthetics, this animation leverages real-time ray-traced lighting and dynamic reflections. The glowing text and particle systems give it a high-fidelity reveal sequence — ideal for showcasing mobile gaming culture with a cinematic edge.",
    mediaType: "video",
    public_id:"bgmi.mp4",
    route:`Experiential/bgmi/bgmi.mp4`,
    className:"md:col-span-3"
  },
  
];

