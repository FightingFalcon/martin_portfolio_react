import "./App.css";
import LogoAnimation from "./components/LogoAnimation";
import StaggerLogo from "./components/StaggerLogo";

function App() {
  return (
    <>
      <LogoAnimation />
      <div className="flex w-screen h-screen overflow-hidden">
        <div className="parent w-1/2 flex bg-gray-800">
          <StaggerLogo />
        </div>
        <div
          className="w-1/2 flex flex-col items-center justify-center"
          style={{ backgroundColor: "#4550ab" }} // Corrected syntax
        >
          <h1 className="text-white text-4xl">Welcome to the Animation</h1>
        </div>
      </div>


      <div className="flex w-screen h-screen overflow-hidden">
        <div className="w-1/2 flex bg-gray-800">
          <h1 className="text-white text-4xl">Another Section</h1>
          <img
        src="/cryptobase.svg"
        alt="Logo"
        width="150px"
        height="150px"
      />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center bg-gray-900">
          <h1 className="text-white text-4xl">Another Section</h1>
        </div>
      </div>

      <div className="flex w-screen h-screen overflow-hidden">
        <div className="parent w-1/2 flex bg-gray-800">
          <StaggerLogo />
        </div>
        <div
          className="w-1/2 flex flex-col items-center justify-center"
          style={{ backgroundColor: "#4550ab" }} // Corrected syntax
        >
          <h1 className="text-white text-4xl">Welcome to the Animation</h1>
        </div>
      </div>
    </>
  );
}

export default App;
