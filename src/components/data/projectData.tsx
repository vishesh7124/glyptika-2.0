
type ProjectItem = {
  id:number;
  name:string;
  title: string;
  details?:string;
  mediaType: "image" | "video";
  public_id?: string;
  src: string;
  galleryItems?: string[];
  renderItems:string[];
  className?: string;
};

const baseUrlVid="https://res.cloudinary.com/duifdyecp/video/upload"
const baseUrlImg="https://res.cloudinary.com/duifdyecp/image/upload"

export const projectItems: ProjectItem[] = [
  {
    id:1,
    name:"Alpha Tread",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"AlphaTreadShoes_kwksls",
    src:`${baseUrlVid}/AlphaTreadShoes_kwksls.mp4`,
    galleryItems: [
      `${baseUrlImg}/forest_usuleo.png`,
      `${baseUrlImg}/cycles_render_qsvx7z.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/cycles_render_qsvx7z.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/forest_usuleo.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/forest_usuleo.png`,

    ],
    renderItems:[
      `${baseUrlImg}/1.jpg`,
      `${baseUrlImg}/3.jpg`,
    ],
    className:"md:col-span-2"
  },
  {
    id:2,
    name:"Airpods",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"airpods_animation_y8vdda",
    src:`${baseUrlVid}/airpods_animation_y8vdda.mp4`,
    galleryItems: [
      `${baseUrlImg}/forest_usuleo.png`,
      `${baseUrlImg}/cycles_render_qsvx7z.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/cycles_render_qsvx7z.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/forest_usuleo.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/forest_usuleo.png`,
    ],
    renderItems:[
      `${baseUrlImg}/1.jpg`,
      `${baseUrlImg}/3.jpg`,
    ],
    className:"md:col-span-1"
  },
  {
    id:3,
    name:"Call Of Duty",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"codm_ym77g7",
    src:`${baseUrlVid}/codm_ym77g7.mp4`,
    galleryItems: [
      `${baseUrlImg}/1.jpg`,
      `${baseUrlImg}/2.jpg`,
      `${baseUrlImg}/3.jpg`,
      `${baseUrlImg}/4.jpg`,
      `${baseUrlImg}/5.jpg`,
      `${baseUrlImg}/6.jpg`,

    ],
    renderItems:[
      `${baseUrlImg}/1.jpg`,
      `${baseUrlImg}/3.jpg`,
    ],
    className:"md:col-span-1"
  },

  {
    id:4,
    name:"Samsung",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"Samsung",
    src:`${baseUrlVid}/Samsung.mp4`,
    galleryItems: [
      `${baseUrlImg}/1.jpg`,
      `${baseUrlImg}/2.jpg`,
      `${baseUrlImg}/3.jpg`,
      `${baseUrlImg}/4.jpg`,
      `${baseUrlImg}/5.jpg`,
      `${baseUrlImg}/6.jpg`,
    ],
    renderItems:[
      `${baseUrlImg}/1.jpg`,
      `${baseUrlImg}/3.jpg`,
    ],
    className:"md:col-span-2"
  },
  {
    id:5,
    name:"Mercedes",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"Mercedes_car_Animation_vmj1nz",
    src:`${baseUrlVid}/Mercedes_car_Animation_vmj1nz.mp4`,
    galleryItems: [
      `${baseUrlImg}/forest_usuleo.png`,
      `${baseUrlImg}/cycles_render_qsvx7z.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/cycles_render_qsvx7z.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/forest_usuleo.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/forest_usuleo.png`,
    ],
    renderItems:[
      `${baseUrlImg}/1.jpg`,
      `${baseUrlImg}/3.jpg`,
    ],
    className:"md:col-span-3"
  },
  {
    id:6,
    name:"BGMI",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"bgmi_aq8uwc",
    src:`${baseUrlVid}/bgmi_aq8uwc.mp4`,
    galleryItems: [
      `${baseUrlImg}/forest_usuleo.png`,
      `${baseUrlImg}/cycles_render_qsvx7z.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/cycles_render_qsvx7z.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/forest_usuleo.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/forest_usuleo.png`,
    ],
    renderItems:[
      `${baseUrlImg}/1.jpg`,
      `${baseUrlImg}/3.jpg`,
    ],
    className:"md:col-span-2"
  },
  {
    id:7,
    name:"ESports",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"esports_t0tsts",
    src:`${baseUrlVid}/esports_t0tsts.mp4`,
    galleryItems: [
      `${baseUrlImg}/forest_usuleo.png`,
      `${baseUrlImg}/cycles_render_qsvx7z.png`,
    ],
    renderItems:[
      `${baseUrlImg}/1.jpg`,
      `${baseUrlImg}/3.jpg`,
    ],
    className:"md:col-span-1"
  },
  {
    id:8,
    name:"Orientation",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"stumble_guys_mpfq0i",
    src:`${baseUrlVid}/stumble_guys_mpfq0i.mp4`,
    galleryItems: [
      `${baseUrlImg}/forest_usuleo.png`,
      `${baseUrlImg}/cycles_render_qsvx7z.png`,
    ],
    renderItems:[
      `${baseUrlImg}/1.jpg`,
      `${baseUrlImg}/3.jpg`,
    ],
    className:"md:col-span-1"
  },
  {
    id:9,
    name:"Orientation",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"Orientation_qfkqlx",
    src:`${baseUrlVid}/Orientation_qfkqlx.mp4`,
    galleryItems: [
      `${baseUrlImg}/forest_usuleo.png`,
      `${baseUrlImg}/cycles_render_qsvx7z.png`,
    ],
    renderItems:[
      `${baseUrlImg}/1.jpg`,
      `${baseUrlImg}/3.jpg`,
    ],
    className:"md:col-span-2"
  },
  
];

