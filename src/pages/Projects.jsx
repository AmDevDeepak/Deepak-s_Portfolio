import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My&nbsp;
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Throughout my journey as a Full Stack Developer, I have successfully
          developed and deployed a range of web applications that demonstrate my
          ability to manage both frontend and backend tasks. From creating
          dynamic and responsive user interfaces using React and Tailwind CSS to
          building robust backend systems with Node.js, Express.js, and MongoDB,
          my projects reflect a commitment to delivering high-quality, scalable
          solutions. I have tackled diverse challenges, from implementing
          real-time features and secure authentication systems to optimizing
          performance and ensuring cross-platform compatibility. Each project
          has been an opportunity to learn, grow, and refine my skills,
          contributing to a well-rounded portfolio that showcases my technical
          expertise and creative problem-solving abilities.
        </p>
      </div>
      <div className="flex flex-wrap my-10 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12 ">
              <div className={`btn-black rounded-xl ${project.theme}`} />
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                {project.liveLink !== "" && (
                  <div className="flex items-center gap-2">
                    <Link
                      to={project.liveLink}
                      target="_blank"
                      className="font-semibold text-blue-600"
                    >
                      Live Link
                    </Link>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Link
                    to={project.githubLink}
                    target="_blank"
                    className="font-semibold text-blue-600"
                  >
                    Github
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <div className="mt-3" />
      <CTA />
    </section>
  );
};

export default Projects;
