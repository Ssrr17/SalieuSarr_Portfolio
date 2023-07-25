import React from "react";
import "./ref.css";
import avatar1 from '../../assets/avatar1.jpeg'

const ref = () => {
  return (
    <section id="references">
      <h5> Client Reviews</h5>
      <h2> What do clients have said</h2>

      <div className="container ref_container">
        <article className="reference">
          <div className="ref_image">
            <img src={avatar1} alt="" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default ref;
