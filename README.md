# Glyptika Studios Official Website

Welcome to the official repository for [Glyptika Studios](https://glyptika.com) – a creative agency specializing in **graphic design** , **animation** & **3D Modelling** . This project represents our studio's digital presence, showcasing our portfolio, services, team, and contact capabilities through a visually rich and interactive web experience.

---

## 🌐 Live Site

👉 [https://glyptika.com](https://glyptika.com)

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