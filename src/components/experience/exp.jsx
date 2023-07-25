import React from "react";
import "./exp.css";
import { BsPatchCheck } from "react-icons/bs";

const exp = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>Experience</h2>

      <div className="container exp_container">
        <div className="exp_front">
          <h3> Frontend </h3>

          <div className="exp_content">
            <article className="exp">
              <BsPatchCheck className="exp_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp" >
              <BsPatchCheck className="exp_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp">
              <BsPatchCheck className="exp_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="exp">
              <BsPatchCheck className="exp_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp">
              <BsPatchCheck className="exp_icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="exp_back">
          <h3> Backend </h3>

          <div className="exp_content">
            <article className="exp">
              <BsPatchCheck className="exp_icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="exp">
              <BsPatchCheck className="exp_icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="exp">
              <BsPatchCheck className="exp_icon" />
              <div>
                <h4>NoSQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="exp">
              <BsPatchCheck className="exp_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default exp;
