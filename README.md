# Glyptika Studios Official Website

Welcome to the official repository for [Glyptika Studios](https://glyptika.com) – a creative agency specializing in **graphic design** , **animation** & **3D Modelling** . This project represents our studio's digital presence, showcasing our portfolio, services, team, and contact capabilities through a visually rich and interactive web experience.

---

## 🌐 Live Site

👉 [https://glyptika.vishesh.site](https://glyptika.vishesh.site)

---

## 📁 Project Structure

### 🔹 Navbar (Persistent across all pages)
- Contains links to Home, Services, Team, and Contact Us.
- Features a dropdown menu under "Portfolio" to navigate to Animations and 3D Models.

### 🔹 Landing Page
- **Hero Section** with animated video carousel (lazy-loaded for performance).
- **Vertical Image Gallery** with marquee-like effect for continuous project image scroll.

### 🔹 Projects Page
- Wobble-effect project cards with preview videos.
- Lazy loading of previews using `react-lazy-load-image-component`.
- On click, routes to a detailed project page.

### 🔹 Project Details Page
- Video player (hosted via ImageKit).
- Textual descriptions and project context.
- Behind-the-render slider (preview images from Blender).
- Infinite animation preview slider and image gallery.

#### PROJECT_ITEM Data Structure

Each project item is defined by the [ProjectItem](vscode-file://vscode-app/c:/Users/vishe/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) type and contains details about a project's animation. Below is a description of each property:

-   **id** (number)\
    A unique numeric identifier for the project.

-   **name** (string)\
    The name of the project.

-   **title** (string)\
    A brief title or description for the project, usually used as a headline on the UI.

-   **details** (optional string)\
    Additional descriptive text that provides more context about the project. It can contain multiple sentences or paragraphs.

-   **mediaType** ("image" | "video")\
    Indicates the type of media associated with the project. The accepted values are `"image"` or `"video"`.

-   **public_id** (optional string)\
    A unique string used as the filename identifier. This property should be unique for each project and is used to build URLs or perform look-ups.

-   **route** (string)\
    A route or relative path to the media resource. This path is appended to a base URL when loading the media.

-   **galleryItems** (optional string array)\
    An array of strings representing paths to additional gallery images for the project. These images are used to create an image grid or gallery view.

-   **renderItems** (optional string array)\
    An array of strings representing paths to rendered images. These images are used to display behind animations or as alternative views.

-   **className** (optional string)\
    A string representing additional CSS classes. This is typically used to adjust layout-specific styling (e.g., grid spans).

#### Example ProjectItem

``` jsx
{

    id: 1,

    name: "Alpha Tread",

    title: "Bold Design, Built to Impress. From textures to treads, our 3D models are engineered for realism and aesthetic impact. Perfect for prototypes, product demos, or your next big idea.",

    details: "This animation blends 2D motion dynamics with procedural movement design using Adobe After Effects, Spline 3D, and Lottie for web optimization. Smooth path-following, dynamic obstacles, and layered object interactions bring the concept of real-time surface adaptation to life.",

    mediaType: "video",

    public_id: "AlphaTreadShoes.mp4",

    route: "Alpha/AlphaTreadShoes.mp4",

    className: "md:col-span-2"

}
```

This structure enables the application to dynamically generate project cards, detail pages, galleries, and other UI elements based on the project data. Each property is used to organize and present the project information consistently across the site.

* * * * *

#### BASE URL

The application defines a constant called `baseUrl` which is used to build the complete URL for the media associated with each project. Here are some key details:

``` jsx
const baseUrl: string = "https://ik.imagekit.io/glyptikaweb/cdn/Animations/"
```

Using the above structure, the complete URL for the media would be built by concatenating `baseUrl` and `route`, resulting in:\
`https://ik.imagekit.io/glyptikaweb/cdn/Animations/Alpha/AlphaTreadShoes.mp4`



### 🔹 Services Page
- Piano-key-style service selector (responsive for mobile).
- Detailed service view with animation/image, highlights, and software stack.
- Integrated "Talk to Us" button with motion animations.

### 🔹 3D Models Page
- 3D model viewer with auto-rotating models (Z-axis).
- Carousel for switching models with smooth transitions.
- Titles animate behind the selected model.

### 🔹 Team Page
- Profile cards with hover animations and blurry backgrounds.
- Animates name and position using `motion.dev`.

### 🔹 Contact Us Page
- Validated form using `react-hook-form` + `Zod`.
- Consistent aurora background.
- Name, email, and message input fields.

---

## 🧩 Technologies Used

### 🖼️ Frontend Framework & Libraries
- **React** – Core frontend framework.
- **React Router** – Client-side routing.
- **Tailwind CSS** – Utility-first CSS framework.
- **Motion.dev / Framer Motion** – Smooth animations & transitions.
- **react-lazy-load-image-component** – Lazy loads media for performance.
- **sonner** – Toast notifications for user feedback.

### 🎨 3D & Graphics
- **@react-three/fiber** – React renderer for Three.js.
- **three.js** – 3D rendering & custom shader effects.
- **@react-three/drei** – Helpers for React Three Fiber (e.g., OrbitControls).

### ✨ UI Enhancements & Custom Components
- **MagicUI** – Custom animation components (e.g., BlurFade, TextAnimate).
- **Aceternity UI** – Advanced hover card interactivity.
- **Shadcn UI** – Utility helpers (e.g., `cn()` class merger).
- **Lucide & @tabler/icons-react** – Icon sets for navigation and UI elements.
- **TypewriterEffectSmooth** – Custom component for animated text transitions.

### 🧾 Forms & Validation
- **react-hook-form** – Form state management.
- **Zod** – Schema-based validation for form data.

### 🖼️ Media Handling
- **LazyMedia** – Combines loaders and blur-fade transitions.
- **ImageKit** – CDN integration for optimized media delivery.

---

## 📦 Custom Components & Utilities

| Component | Purpose |
|----------|---------|
| `WobbleCard` | Project cards with animated hover effects |
| `HoverCard` | Team profiles with blur effects |
| `BlurFade` | Animated blur-fade transition for images |
| `cn()` | Utility function for class name concatenation |
| `TypewriterEffectSmooth` | Animated typewriter-like heading transitions |

---

## 🛠️ Installation

```bash
git clone https://github.com/glyptika/glyptika.com.git
cd glyptika.com
npm install
npm run dev


```
## Directory Overview

```
vishesh7124-glyptika-2.0/
    ├── README.md
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vercel.json
    ├── vite.config.ts
    ├── public/
    │   ├── boeing.glb
    │   ├── car.glb
    │   ├── demon.glb
    │   ├── guitar.glb
    │   ├── gun.glb
    │   ├── iphone_12_pro.glb
    │   ├── jordan.glb
    │   └── sauvage_perfume.glb
    └── src/
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── TEMP.HTML
        ├── vite-env.d.ts
        ├── assets/
        │   ├── Aileron-Regular.otf
        │   ├── AnekLatin.ttf
        │   ├── guttery.otf
        │   ├── HvDTrial_SupriaSans-Black-BF64868e7739592.otf
        │   ├── ibrand.otf
        │   ├── KdamThmorPro-Regular.ttf
        │   ├── oblong.ttf
        │   ├── Oswald-Regular.ttf
        │   ├── Pulsar-Original.otf
        │   ├── Tropiline-Regular.otf
        │   ├── TropilineSans-Regular.otf
        │   ├── VastinePersonalUse-jE4ZG.otf
        │   ├── whitneybook.otf
        │   ├── images/
        │   │   ├── cycles_render.webp
        │   │   ├── nav-image1.webp
        │   │   ├── nav-image2.webp
        │   │   └── rig.webp
        │   ├── logo/
        │   └── videos/
        ├── components/
        │   ├── AnimatedGallery.tsx
        │   ├── aurora-background.tsx
        │   ├── BehindRender.tsx
        │   ├── ContactForm.tsx
        │   ├── Footer.tsx
        │   ├── ImageGrid.tsx
        │   ├── LandingVid.tsx
        │   ├── LazyMedia.tsx
        │   ├── Loader.tsx
        │   ├── ModelCarousel.tsx
        │   ├── Navbar.tsx
        │   ├── NavMenu.tsx
        │   ├── ProfileCard.tsx
        │   ├── ProjectCard.tsx
        │   ├── Scene.tsx
        │   ├── data/
        │   │   └── projectData.tsx
        │   ├── magicui/
        │   │   ├── blur-fade.tsx
        │   │   ├── box-reveal.tsx
        │   │   ├── marquee.tsx
        │   │   └── text-animate.tsx
        │   ├── models/
        │   │   ├── Bmw.tsx
        │   │   ├── Boeing.tsx
        │   │   ├── Car.tsx
        │   │   ├── Demon.tsx
        │   │   ├── Guitar.tsx
        │   │   ├── Gun.tsx
        │   │   ├── Iphone_12_pro.tsx
        │   │   ├── Jordan.tsx
        │   │   ├── Kitkat.tsx
        │   │   ├── Mercedes.tsx
        │   │   ├── Retro__bike.tsx
        │   │   ├── Sauvage_perfume.tsx
        │   │   └── Ship.tsx
        │   └── ui/
        │       ├── bento-grid.tsx
        │       ├── button.tsx
        │       ├── card.tsx
        │       ├── carousel.tsx
        │       ├── compare.tsx
        │       ├── form.tsx
        │       ├── hover-card.tsx
        │       ├── input.tsx
        │       ├── label.tsx
        │       ├── separator.tsx
        │       ├── sonner.tsx
        │       ├── sparkles.tsx
        │       ├── typewriter-effect.tsx
        │       └── wobble-card.tsx
        ├── lib/
        │   └── utils.ts
        └── pages/
            ├── 3D.tsx
            ├── Contact.tsx
            ├── Landings.tsx
            ├── ProjectDetails.tsx
            ├── Projects.tsx
            ├── Services.tsx
            └── Team.tsx

```


## 🤝 Contributing  
We welcome contributions! Please fork the repo and submit a pull request with detailed information on your changes.

---

## 📬 Contact  
For project inquiries, feedback, or to collaborate with Glyptika Studios:  

📧 [marketing@glyptika.com](mailto:marketing@glyptika.com)  
🌐 [glyptika.com](https://glyptika.com)

---

## 📜 License  
This project is licensed under the **MIT License**.

---

## 💡 Credits  
Made with ❤️ by the **[Vishesh Gupta](https://github.com/vishesh7124)**
