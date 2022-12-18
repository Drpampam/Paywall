import React from "react";
import "./animated-card.styles.css";
import Text from "app/components/atoms/typography";



const AnimatedCard = ({ content, handleClick }) => {
  return (
    <div class="wrap">
      {content &&
        content.map((el, i) => {
          const {title, text, icon} = el
          return (
            <div class="card preShow" onClick={() => handleClick(i)} key={i} >
              <div class="card__top">
                {icon}
                <h2>{title}</h2>
              </div>
              <div class="card__bottom">
                <Text>{title}</Text>
                <p>{text}</p>
              </div>
              <span></span>
            </div>
          );
        })}
    </div>
  );
};

export default AnimatedCard;
