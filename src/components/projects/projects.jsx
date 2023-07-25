import React from "react";
import "./projects.css";
import project1 from "../../assets/weatherapp.jpg";

const data = [
  {
    id: 1,
    image: project1,
    title: "weather app",
    github: "github.com",
    demo: "demo_link",
  },
  {
    id: 2,
    image: project1,
    title: "Calculator",
    github: "github.com",
    demo: "demo_link",
  },
  {
    id: 3,
    image: project1,
    title: "App 3",
    github: "github.com",
    demo: "demo_link",
  },
];

const projects = () => {
  return (
    <section id="projects">
      <h5>My Projects</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project_item-btn">
                <a href={github} className="btn">
                  github
                </a>
                <a href={demo} className="btn btn-primary">
                  demo
                </a>
              </div>
            </article>
          );
        })}
        {/* <article className="project_item">
          <div className="project_image">
            <img src={project1} alt="" />
          </div>
          <h3> Title </h3>
          <div className="project_item-btn">
            <a href="github.com" className="btn">
              github_link
            </a>
            <a href="github.com" className="btn btn-primary">
              {" "}
              demo
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_image">
            <img src={project1} alt="" />
          </div>
          <h3> Title </h3>
          <div className="project_item-btn">
            <a href="github.com" className="btn">
              github_link
            </a>
            <a href="github.com" className="btn btn-primary">
              {" "}
              demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default projects;
