import "./App.css";
import LogoAnimation from "./components/LogoAnimation";
import StaggerLogo from "./components/StaggerLogo";
import { FaTwitch } from "react-icons/fa";
import { COLORS } from "./constants/colors";
import Carousel from "./components/carousel/Carousel";
import CarouselItem from "./components/carousel/CarouselItem";
import Tag from "./components/Tag";
import Footer from "./components/Footer";
import ExpandableImage from "./components/ExpandableImage";

function App() {
  const projects = [
    {
      id: 0,
      name: "Cellar Door",
      description: (
        <>
          <b>Cellar Door</b> is a consultancy firm based in Borås, Sweden, 
          seeking to enhance their website. I was entrusted with designing 
          a more dynamic and engaging website while ensuring ease of maintenance and updates. 
          Following rules for accessibility and SEO was a must.
        </>
      ),
      subtitle: "Visit website",
      subtitle_url: "https://cellar-door-un67.vercel.app",
      logoPath: "/cellar-door.svg",
      logoSize: 125,
      gridItemColor: "#000000",
      backgroundColor: "#1a1a1a",
      technologies: [
        "Three.JS",
        "NextJS",
        "Shaders",
        "Gsap",
        "TailwindCSS",
        "TypeScript",
      ],
    },
    {
      id: 1,
      name: "Capture Race",
      description: (
        <>
          <b>Capture Race</b> is an <b>AI-powered</b>, fast-paced{" "}
          <b>multiplayer puzzle</b> and <b>escape room game</b> for four friends
          to test your collective intelligence under pressure. It's all about
          teamwork, logic, and speed. <br />
          <br />
          Join me over on{" "}
          <a
            href="https://www.twitch.tv/martinsaturnia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitch style={{ display: "inline", verticalAlign: "middle" }} />
          </a>{" "}
          to <b>see me</b> make the game come to life!
        </>
      ),
      subtitle: "(In Development)",
      logoPath: "/capture_race.svg",
      logoSize: 250,
      gridItemColor: COLORS.CAPTURE_RACE_PINK,
      backgroundColor: COLORS.CAPTURE_RACE_PINK,
      technologies: [
        "Unity",
        " C#",
        "Blender",
        "Netcode for GameObjects",
        "Adobe Suite",
      ],
      // carouselItems: [
      //   <CarouselItem key="1">Screenshot 1</CarouselItem>,
      //   <CarouselItem key="2">Screenshot 2</CarouselItem>,
      //   <CarouselItem key="3">
      //     <div className="w-full aspect-w-16 aspect-h-9">
      //       <iframe
      //         src="https://player.vimeo.com/video/76979871?autoplay=0&title=0&byline=0&portrait=0"
      //         title="Vimeo Video"
      //         className="w-full h-full"
      //         allow="autoplay; fullscreen; picture-in-picture"
      //         allowFullScreen
      //       ></iframe>
      //     </div>
      //   </CarouselItem>,
      // ],
    },
    {
      id: 2,
      name: "Bald Seagull Brigade",
      description: (
        <>
          <b>Bald Seagull Brigade</b> is an e-commerce site built with{" "}
          <b>Three.js</b> + React for product customization. I wanted to explore
          if it was possible to tell a visual story using 3D graphics and
          animations.
          <br />
        </>
      ),
      subtitle: "Visit website",
      subtitle_url: "https://www.baldseagullbrigade.com",
      logoPath: "/bsb.svg",
      logoSize: 160,
      gridItemColor: "#1a1a1a",
      backgroundColor: "#1a1a1a",
      technologies: [
        "Three.js",
        "React",
        "TypeScript",
        "React Three Fiber",
        "Shaders",
        "Vite",
        "Woocommerce",
      ],
      carouselItems: [
        <CarouselItem key="1">
          <div className="w-full aspect-w-16 aspect-h-9">
            <iframe
              src="https://player.vimeo.com/video/1040819892?autoplay=0&title=0&byline=0&portrait=0"
              title="Vimeo Video"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </CarouselItem>,
      ],
    },
    // {
    //   id: 3,
    //   name: "Ketonean",
    //   description: (
    //     <>
    //       <b>Ketonean</b> is a health- and meal tracking app, designed for those
    //       who are on a ketogenic diet. It helps you keep track of your daily
    //       intake of macronutrients and provides you with a daily meal plan based
    //       on your goals. It is being built using Next.js.
    //     </>
    //   ),
    //   logoPath: "/ketonean.svg",
    //   subtitle: "(In Development)",
    //   logoSize: 160,
    //   gridItemColor: COLORS.KETONEAN_PURPLE,
    //   backgroundColor: COLORS.KETONEAN_PURPLE,
    //   technologies: [
    //     "Next.js",
    //     "React",
    //     "TypeScript",
    //     "Postgres",
    //     "Tailwind",
    //     "AI",
    //     "OpenAI",
    //     "NextAuth",
    //     "Recharts",
    //     "Zustand",
    //   ],
    //   // carouselItems: [
    //   //   <CarouselItem key="1">Feature 1</CarouselItem>,
    //   //   <CarouselItem key="2">Feature 2</CarouselItem>,
    //   //   <CarouselItem key="3">Feature 3</CarouselItem>,
    //   // ],
    // },
    {
      id: 4,
      name: "Cryptobase",
      description: (
        <>
        I had previously helped them design their app in Figma but as they move into the next phase of their business I also created a landing page for them to sell their domain and created an AI agent to handle their social media automatically.
        </>
      ),
      subtitle: "Visit website",
      subtitle_url: "https://cryptobase.com/",
      logoPath: "/cryptobase.svg",
      logoSize: 175,
      gridItemColor: "#4550ab",
      backgroundColor: "#4550ab",
      technologies: [
        "Three.JS",
        "Gsap",
        "TypeScript",
      ],
    },
    {
      id: 5,
      name: "House of Chili",
      description: (
        <>
          As a favor to a friend who sells chili peppers to friends and family I
          created <b>House of Chili</b> to easily facilitate sales using the
          Swedish payment system Swish. A little experiment in creative coding.
        </>
      ),
      logoPath: "/house_of_chili.svg",
      subtitle: "Visit website",
      subtitle_url: "https://www.houseofchili.com",
      logoSize: 190,
      gridItemColor: COLORS.HOUSE_OF_CHILI_BROWN,
      backgroundColor: COLORS.HOUSE_OF_CHILI_BROWN,
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "QR",
      ],
    },
    {
      id: 6,
      name: "KidIca",
      description: (
        <>
          Before AI was cool I developed <b>KidIca</b> after having worked as a
          consultant for ICA reklam. The game was a photography style game where
          children received questions and they were supposed to photograph the
          correct answer when they were out shopping with their parents. The
          game was developed in Unity.
        </>
      ),
      logoPath: "/kidica.svg",
      logoSize: 200,
      gridItemColor: COLORS.KIDICA_RED,
      backgroundColor: COLORS.KIDICA_RED,
      technologies: ["Unity", " C#", "Blender", "Adobe Suite"],
      carouselItems: [
        <CarouselItem key="1">
          
            <iframe
              src="https://player.vimeo.com/video/1045768463?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
        </CarouselItem>,
        <CarouselItem key="2">
          <ExpandableImage
            src="https://ladgb4x03qcbnupz.public.blob.vercel-storage.com/kidica1-AiMWJ6RBHyoWQSr6QiBqOegh0NbQJm.jpg"
            alt="Description of the image"
            thumbnailSize={150} // Optional: specify the thumbnail size
          />
        </CarouselItem>,
        <CarouselItem key="3">
          <ExpandableImage
            src="https://ladgb4x03qcbnupz.public.blob.vercel-storage.com/kidica2-Lx0yac6wRq5Cv6Ls7pZh9PuRHTxtP1.jpg"
            alt="Description of the image"
            thumbnailSize={150} // Optional: specify the thumbnail size
          />
        </CarouselItem>,
        <CarouselItem key="4">
          <ExpandableImage
            src="https://ladgb4x03qcbnupz.public.blob.vercel-storage.com/Ida_2_Profil-1kXnuA98z1WsVM19zI8zxbrmWk8Lk2.jpg"
            alt="Description of the image"
            thumbnailSize={150} // Optional: specify the thumbnail size
          />
        </CarouselItem>,
      ],
    },
    {
      id: 7,
      name: "Tipsy Town",
      subtitle: "View on Google Play Store",
      subtitle_url:
        "https://play.google.com/store/apps/details?id=com.mariel.tipsytown",
      description: (
        <>
          <b>Tipsy Town</b> wasa party game designed for mobile. It was initially created
          as a board game for a bachelor's party but was made as a mobile app. It is no longer available on the Play Store.
        </>
      ),
      logoPath: "/tipsytown.svg",
      logoSize: 200,
      gridItemColor: COLORS.TIPSY_TOWN_GREEN,
      backgroundColor: COLORS.TIPSY_TOWN_GREEN,
      technologies: ["Unity", "C#", "Blender", "UI/UX Design"],
      carouselItems: [
        // <CarouselItem key="1">Screenshot 1</CarouselItem>,
        <CarouselItem key="1">
          <div className="w-full aspect-w-16 aspect-h-9">
            <iframe
              src="https://player.vimeo.com/video/1040466568?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Tipsy-Town"
            ></iframe>
          </div>
        </CarouselItem>,
        // <CarouselItem key="3">Screenshot 3</CarouselItem>,
      ],
    },
    {
      id: 8,
      name: "Portfolio",
      description: (
        <>
          This sleek, &lt;0.5mb <b>Portfolio</b> is designed to showcase how
          microinteractions can be used without compromising performance.
          <br />
          <br />
          Why not have a look at the project on{" "}
          <a
            href="https://github.com/FightingFalcon/martin_portfolio_react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          ?
        </>
      ),
      subtitle: "View on GitHub",
      subtitle_url: "https://github.com/FightingFalcon/martin_portfolio_react",
      logoPath: "/favicon.svg",
      logoSize: 150,
      gridItemColor: COLORS.PORTFOILIO_GREEN,
      backgroundColor: COLORS.PORTFOILIO_GREEN,
      technologies: ["React", "TypeScript", "Vite", "Anime.js", "Tailwind"],
    },

    // Add more projects as needed
  ];

  return (
    <>
      <LogoAnimation />
      {projects.map((project, index) => (
        // <div
        //   key={project.id}
        //   className={`flex w-screen h-screen overflow-hidden ${
        //     index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        //   }`}
        <div
          key={project.id}
          className={`flex flex-col w-screen min-h-screen md:h-screen md:flex-row overflow-hidden ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="w-full bg-white md:w-1/2 flex">
            <StaggerLogo
              logoPath={project.logoPath}
              gridItemColor={project.gridItemColor}
              logoSize={project.logoSize}
            />
          </div>
          <div
            className="projectInfo w-full md:w-1/2 flex flex-col items-start"
            style={{ backgroundColor: project.backgroundColor }}
          >
            <div className="w-full">
              <div className="portfolio-item-title pt-10 pb-10 border-b-4 border-white p-4">
                <h2 className="uppercase tracking-widest text-white text-8xl text-center">
                  {project.name}
                </h2>
                {project.subtitle_url ? (
                  <h6 className="text-xl">
                    <a
                      href={project.subtitle_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline"
                    >
                      {project.subtitle}
                    </a>
                  </h6>
                ) : (
                  <h6 className="text-xl">{project.subtitle}</h6>
                )}
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center text-left p-16 md:px-24 text-white">
              <p>{project.description}</p>
            </div>
            <div className="container mx-auto mt-4 px-4 md:px-32">
              <div className="flex flex-wrap">
                {project.technologies.map((tech) => (
                  <Tag key={tech} label={tech} />
                ))}
              </div>
            </div>
            <div className="container mx-auto mt-6 border-t-4 border-white">
              <Carousel>{project.carouselItems}</Carousel>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
}

export default App;
