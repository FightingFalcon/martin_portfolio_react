import "./App.css";
import LogoAnimation from "./components/LogoAnimation";
import StaggerLogo from "./components/StaggerLogo";
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
          className="w-1/2 flex flex-col items-center justify-center"
          style={{ backgroundColor: COLORS.CAPTURE_RACE_PINK }}
        >
          <h1 className="text-white text-4xl">CAPTURE RACE</h1>
        </div>
      </div>

      {/* KETONEAN */}
      <div className="flex w-screen h-screen overflow-hidden">
        <div className="parent w-1/2 flex">
          <StaggerLogo
            logoPath="/ketonean.svg"
            gridItemColor={COLORS.KETONEAN_BEIGE}
            logoSize={175}
          />
        </div>
        <div
          className="w-1/2 flex flex-col items-center justify-center"
          style={{ backgroundColor: COLORS.KETONEAN_BEIGE}}
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
            logoSize={175}
          />
        </div>
        <div
          className="w-1/2 flex flex-col items-center justify-center"
          style={{ backgroundColor: COLORS.HOUSE_OF_CHILI_BROWN}}
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
          <p>You want this -1mb portfolio yourself. Get it on Github.</p>
          <p>Yarn install + yarn run dev</p>
          <p>npm install + npm run dev</p>
        </div>
      </div>
    </>
  );
}

export default App;
