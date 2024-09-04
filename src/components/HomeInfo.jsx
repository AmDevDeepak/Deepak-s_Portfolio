import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center ">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const randerContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Namaste! I'm <span className="font-bold">Deepak Kumar</span> 👋
      <br />A Passionate Full Stack Developer from Hisar, Haryana
    </h1>
  ),
  2: (
    <InfoBox
      text="Gained diverse skills through hands-on experience with cutting-edge technologies."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Successfully developed and led impactful projects across multiple domains. Curious to see more?"
      link="/projects"
      btnText="Explore Projects"
    />
  ),
  4: (
    <InfoBox
      text="Have an idea or need a developer? Let's create something amazing together."
      link="/contact"
      btnText="Get in Touch"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return randerContent[currentStage] || null;
};

export default HomeInfo;
