import "./App.css";
import LogoAnimation from "./components/LogoAnimation";
import StaggerLogo from "./components/StaggerLogo";
import { FaTwitch } from "react-icons/fa";
import { COLORS } from "./constants/colors";

function App() {
  return (
    <>
      <LogoAnimation />

      {/* CAPTURE RACE */}
      <div className="flex w-screen h-screen overflow-hidden">
        <div className="parent w-1/2 flex">
          <StaggerLogo
            logoPath="/capture_race.svg"
            gridItemColor={COLORS.CAPTURE_RACE_PINK}
            logoSize={250}
          />
        </div>
        <div
          className="projectInfo w-1/2 flex flex-col items-start"
          style={{ backgroundColor: COLORS.CAPTURE_RACE_PINK }}
        >
          <div className="w-full">
            <div className="portfolio-item-title pt-10 pb-10 border-b-4 border-white p-4">
              <h2 className="uppercase tracking-widest text-white text-8xl text-center">
                CAPTURE RACE
              </h2>
              <h6 className="text-xl">(In Development)</h6>
            </div>
          </div>
          <div className="flex-grow p-32 text-left text-white">
            <p>
              <b>Capture Race</b> is an <b>AI-powered</b>, fast-paced <b>multiplayer puzzle</b> and <b>escape room game</b> for four 
              friends to test your collective intelligence under pressure. 
              It’s all about teamwork, logic, and speed. 
              <br />
              <br />
              Join me over on <a href="https://www.twitch.tv/martinsaturnia" target="_blank" rel="noopener noreferrer"><FaTwitch style={{ display: 'inline', verticalAlign: 'middle' }} /></a> to <a href="https://www.twitch.tv/martinsaturnia" target="_blank" rel="noopener noreferrer"></a><b>see me</b> make the game come to life!
            </p>
          </div>
        </div>
      </div>

      {/* KETONEAN */}
      <div className="flex w-screen h-screen overflow-hidden">
        <div className="parent w-1/2 flex">
          <StaggerLogo
            logoPath="/ketonean.svg"
            gridItemColor={COLORS.KETONEAN_BEIGE}
            logoSize={160}
          />
        </div>
        <div
          className="w-1/2 flex flex-col items-center justify-center"
          style={{ backgroundColor: COLORS.KETONEAN_BEIGE }}
        >
          <h1 className="text-white text-4xl">KETONEAN</h1>
        </div>
      </div>

      {/* HOUSE OF CHILI */}
      <div className="flex w-screen h-screen overflow-hidden">
        <div className="parent w-1/2 flex">
          <StaggerLogo
            logoPath="/house_of_chili.svg"
            gridItemColor={COLORS.HOUSE_OF_CHILI_BROWN}
            logoSize={190}
          />
        </div>
        <div
          className="w-1/2 flex flex-col items-center justify-center"
          style={{ backgroundColor: COLORS.HOUSE_OF_CHILI_BROWN }}
        >
          <h1 className="text-white text-4xl">HOUSE OF CHILI</h1>
        </div>
      </div>

      {/* BALD SEAGULL BRIGADE */}
      <div className="flex w-screen h-screen overflow-hidden">
        <div
          className="w-1/2 flex flex-col items-center justify-center"
          style={{ backgroundColor: "bg-gray-800" }}
        >
          <h1 className="text-white text-4xl">THE BALD SEAGULL BRIGADE</h1>
        </div>
        <div className="parent w-1/2 flex">
          <StaggerLogo gridItemColor="#1a1a1a" logoPath="/bsb.svg" />
        </div>
      </div>

      {/* KIDICA */}
      <div className="flex w-screen h-screen overflow-hidden">
        <div className="parent w-1/2 flex">
          <StaggerLogo
            gridItemColor={COLORS.KIDICA_RED}
            logoPath="/kidica.svg"
            logoSize={200}
          />
        </div>
        <div
          className="w-1/2 flex flex-col items-center justify-center"
          style={{ backgroundColor: COLORS.KIDICA_RED }} // Corrected syntax
        >
          <h1 className="text-white text-4xl">Before AI was cool</h1>
        </div>
      </div>

      {/* TIPSY TOWN */}
      <div className="flex w-screen h-screen overflow-hidden">
        <div className="parent w-1/2 flex">
          <StaggerLogo
            gridItemColor={COLORS.TIPSY_TOWN_GREEN}
            logoPath="/tipsytown.svg"
            logoSize={200}
          />
        </div>
        <div
          className="w-1/2 flex flex-col items-center justify-center"
          style={{ backgroundColor: COLORS.TIPSY_TOWN_GREEN }} // Corrected syntax
        >
          <h1 className="text-white text-4xl">The Partygame</h1>
        </div>
      </div>

      {/* PORTFOLIO */}
      <div className="flex w-screen h-screen overflow-hidden">
        <div className="parent w-1/2 flex">
          <StaggerLogo
            gridItemColor={COLORS.PORTFOILIO_GREEN}
            logoPath="/favicon.svg"
            logoSize={150}
          />
        </div>
        <div
          className="w-1/2 flex flex-col items-center justify-center"
          style={{ backgroundColor: COLORS.PORTFOILIO_GREEN }} // Corrected syntax
        >
          <h2 className="text-white text-4xl">PORTFOLIO GITHUB</h2>
          <p>
            You want to try this sexy -1mb portfolio yourself. Get it on Github.
          </p>
          <p>Yarn install + yarn run dev</p>
          <p>npm install + npm run dev</p>
        </div>
      </div>
    </>
  );
}

export default App;
