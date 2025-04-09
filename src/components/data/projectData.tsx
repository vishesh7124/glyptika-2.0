
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
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"AlphaTreadShoes.mp4", 
    route:`Alpha/AlphaTreadShoes.mp4`,
    className:"md:col-span-2"
  },
  {
    id:2,
    name:"Airpods",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
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
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
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
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"Orientation_comp.mp4",
    route:`Experiential/Orientation/Orientation_comp.mp4`,
    className:"md:col-span-3"
  },
  {
    id:5,
    name:"Mercedes",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
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
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"esports.mp4",
    route:`Experiential/Esports/esports.mp4`,

    className:"md:col-span-2"
  },
  {
    id:8,
    name:"Stumble Guys",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"stumble%20guys.mp4",
    route:`Experiential/Stumble/stumble%20guys.mp4`,

    className:"md:col-span-1"
  },
  {
    id:6,
    name:"BGMI",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam excepturi odio tempora repellat voluptas voluptatem, nulla reprehenderit! Dolores, odit? Tempora maiores nulla sint possimus, aperiam perspiciatis eius mollitia quia iusto veritatis deserunt veniam assumenda commodi, maxime dolor laudantium ratione pariatur! Doloribus maxime dolorum non quaerat ullam amet totam eligendi accusamus ex cumque quasi voluptates, dolore voluptatum, commodi quod ipsum saepe. Tempore minus aliquid ipsum maxime nisi fugit cum et?",
    mediaType: "video",
    public_id:"bgmi.mp4",
    route:`Experiential/bgmi/bgmi.mp4`,
    className:"md:col-span-3"
  },
  
];

