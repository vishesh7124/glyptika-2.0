
type ProjectItem = {
  id:number;
  name:string;
  title: string;
  details?:string;
  mediaType: "image" | "video";
  public_id?: string;
  src: string;
  galleryItems?: string[];
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
    className:"md:col-span-2"
  },
  {
    id:2,
    name:"Samsung",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"Samsung",
    src:`${baseUrlVid}/Samsung.mp4`,
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
    className:"md:col-span-1"
  },
  {
    id:3,
    name:"Samsung",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"Samsung",
    src:`${baseUrlVid}/Samsung.mp4`,
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
      `${baseUrlImg}/forest_usuleo.png`,
      `${baseUrlImg}/cycles_render_qsvx7z.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/cycles_render_qsvx7z.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/forest_usuleo.png`,
      `${baseUrlImg}/a_jvvqci.png`,
      `${baseUrlImg}/forest_usuleo.png`,
    ],
    className:"md:col-span-2"
  },
  {
    id:5,
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
    className:"md:col-span-3"
  },
  
];

