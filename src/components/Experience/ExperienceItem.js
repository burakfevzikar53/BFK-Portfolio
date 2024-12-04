import React from "react";
import { useInView } from "react-intersection-observer";

const ExperienceItem = ({ date, title, role, description, image, position }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasyon bir kere çalışır
    threshold: 0.2, // Elemanın %20'si görünür olduğunda tetiklenir
  });

  return (
    <div
      ref={ref}
      className={`timeline-item ${inView ? "visible" : ""} ${
        position === "left" ? "left" : "right"
      }`}
    >
      <div className="timeline-date">{date}</div>
      <div className="timeline-content">
        <img src={image} alt={title} className="timeline-image" />
        <h3>{title}</h3>
        <h4>{role}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
