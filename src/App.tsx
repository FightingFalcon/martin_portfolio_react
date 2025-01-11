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
      id: 1,
      name: "Capture Race",
      description: (
        <>
          <b>Capture Race</b> is an <b>AI-powered</b>, fast-paced{" "}
          <b>multiplayer puzzle</b> and <b>escape room game</b> for four friends
          to test your collective intelligence under pressure. It’s all about
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
      subtitle: "Go to website",
      subtitle_url: "www.baldseagullbrigade.com",
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
    {
      id: 3,
      name: "Ketonean",
      description: (
        <>
          <b>Ketonean</b> is a health- and meal tracking app, designed for those
          who are on a ketogenic diet. It helps you keep track of your daily
          intake of macronutrients and provides you with a daily meal plan based
          on your goals. It is being built using Next.js.
        </>
      ),
      logoPath: "/ketonean.svg",
      subtitle: "(In Development)",
      logoSize: 160,
      gridItemColor: COLORS.KETONEAN_PURPLE,
      backgroundColor: COLORS.KETONEAN_PURPLE,
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Postgres",
        "Tailwind",
        "AI",
        "OpenAI",
        "NextAuth",
        "Recharts",
        "Zustand",
      ],
      // carouselItems: [
      //   <CarouselItem key="1">Feature 1</CarouselItem>,
      //   <CarouselItem key="2">Feature 2</CarouselItem>,
      //   <CarouselItem key="3">Feature 3</CarouselItem>,
      // ],
    },
    {
      id: 4,
      name: "House of Chili",
      description: (
        <>
          As a favor to a friend who sells chili peppers to friends and family I
          created <b>House of Chili</b> to easily facilitate sales using the
          Swedish payment system Swish. A little experiment in creative coding.
        </>
      ),
      logoPath: "/house_of_chili.svg",
      subtitle: "Go to website",
      subtitle_url: "house-of-chili-vite.vercel.app",
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
      id: 5,
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
          <div className="w-full aspect-w-16 aspect-h-9">
            <iframe src="https://player.vimeo.com/video/1045768463?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"></iframe>
          </div>
        </CarouselItem>,
        <CarouselItem key="2">
          <ExpandableImage
            src="/kidica1.jpg"
            alt="Description of the image"
            thumbnailSize={150} // Optional: specify the thumbnail size
          />
        </CarouselItem>,
        <CarouselItem key="3">
        <ExpandableImage
          src="/kidica2.jpg"
          alt="Description of the image"
          thumbnailSize={150} // Optional: specify the thumbnail size
        />
      </CarouselItem>,
      ],
    },
    {
      id: 6,
      name: "Tipsy Town",
      subtitle: "View on Google Play Store",
      subtitle_url:
        "play.google.com/store/apps/details?id=com.mariel.tipsytown",
      description: (
        <>
          <b>Tipsy Town</b> is a party game designed to bring friends together
          for fun-filled challenges and competitions. It was initially created
          as a board game for a bachelor's party but was made as a mobile app.
        </>
      ),
      logoPath: "/tipsytown.svg",
      logoSize: 200,
      gridItemColor: COLORS.TIPSY_TOWN_GREEN,
      backgroundColor: COLORS.TIPSY_TOWN_GREEN,
      technologies: ["Unity", "C#", "Blender", "UI/UX Design"],
      carouselItems: [
        <CarouselItem key="1">Screenshot 1</CarouselItem>,
        <CarouselItem key="2">
          <div className="w-full aspect-w-16 aspect-h-9">
            <iframe
              src="https://player.vimeo.com/video/1040466568?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Tipsy-Town"
            ></iframe>
          </div>
        </CarouselItem>,
        <CarouselItem key="3">Screenshot 3</CarouselItem>,
      ],
    },
    {
      id: 7,
      name: "Portfolio",
      description: (
        <>
          This sleek, &lt;1mb <b>Portfolio</b> is designed to showcase how
          microinteractions can be used without compromising performance.
          <br />
          <br />
          Why not have a look at the project on{" "}
          <a
            href="https://www.twitch.tv/martinsaturnia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          ?
        </>
      ),
      subtitle: "View on GitHub",
      subtitle_url: "github.com/your-github-portfolio",
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
        <div
          key={project.id}
          className={`flex w-screen h-screen overflow-hidden ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="parent w-1/2 flex">
            <StaggerLogo
              logoPath={project.logoPath}
              gridItemColor={project.gridItemColor}
              logoSize={project.logoSize}
            />
          </div>
          <div
            className="projectInfo w-1/2 flex flex-col items-start"
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
                      href={`https://${project.subtitle_url}`}
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
            <div className="flex-grow flex items-center justify-center text-left pl-32 pr-32 text-white">
              <p>{project.description}</p>
            </div>
            <div className="container mx-auto mt-4 pl-32 pr-32">
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
