import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import resume from "../assets/Deepak_Resume.pdf";
import skura from "../assets/sakura.mp3";
import { arrow, soundoff, soundon } from "../assets/icons";
import { NavLink } from "react-router-dom";

const Home = () => {
  const audioRef = useRef(new Audio(skura));
  audioRef.current.volume = 0.5;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  useEffect(() => {
    if (isPlayingMusic) audioRef.current.play();

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className={`w-full h-screen relative`}>
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      {/* All 3D Objects and lights within */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />

          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            scale={planeScale}
            position={planePosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          className="w-10 h-10 cursor-pointer object-contain"
          alt="sound"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
      <a
        href={resume}
        download={resume}
        className="hover:p-3 transition-all p-2 rounded-lg bg-white items-center absolute bottom-5 right-5 flex justify-center text-3xl sm:text-xl max-sm:text-xl font-bold shadow-md"
      >
        <p className="blue-gradient_text flex items-center gap-2">
          Get CV
          <img
            src={arrow}
            alt=""
            className="rotate-90 w-6 h-6 object-contain"
          />
        </p>
      </a>
    </section>
  );
};

export default Home;
