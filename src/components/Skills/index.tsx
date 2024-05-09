import "./style.css";
import { useEffect } from "react";
import gsap from "gsap";
import data from "./data";

export default function Skills() {
  useEffect(() => {
    gsap.fromTo(
      "#skills-title",
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".skills",
          start: "top bottom",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".skills-container",
      {
        translateY: 500,
        opacity: 0,
      },
      {
        translateY: 20,
        opacity: 1,
        scrollTrigger: {
          trigger: ".skills",
          start: "top bottom",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <div className="section skills">
      <div id="skills-title">
        <div className="text-shadows">Skills</div>
      </div>
      <div className="skills-container">
        {data.map((item, index) => (
          <div
            className="skills-card"
            key={index}
          >
            <div className="name">{item.title}</div>
            <ul>
              {item.items.map((skill) => (
                <li
                  className="description"
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
