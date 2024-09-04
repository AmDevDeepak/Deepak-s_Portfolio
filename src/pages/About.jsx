import { skills, experiences } from "../constants";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import SocialLinks from "../components/SocialLinks";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Namastey, I'm&nbsp;
        <span className="blue-gradient_text font-semibold drop-shadow">
          Deepak
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Coding/Development Enthusiast | <br /> Mastering the Art of Full Stack
          Development with Precision and Passion | <br /> Seeking a Full Stack
          Engineer position at a reputable organization that offers career
          advancement.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Profile Summary</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
            illo quo velit harum dignissimos?
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.title}
                date={experience.date}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                iconStyle={{
                  background: experience.iconBg,
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {experience.company_name}
                  </h4>
                  <p>{experience.description}</p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      className="text-zinc-800 font-normal pl-1 text-sm"
                      key={`point-${index}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <SocialLinks />
      <CTA />
    </section>
  );
};

export default About;
