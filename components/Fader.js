import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Home.module.css";

const Fader = ({ text }) => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-out",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-out") {
        setFadeProp({
          fade: "fade-in",
        });
      }
      // use if you want to fade in/out on repeat
      //   else {
      //     setFadeProp({
      //       fade: "fade-out",
      //     });
      //   }
    }, 200);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  return <h2 className={`${styles.title} ${fadeProp.fade}`}>{text}</h2>;
};

Fader.defaultProps = {
  text: "Join us during the New Moon: December 4, 2021",
};

Fader.propTypes = {
  text: PropTypes.string,
};

export default Fader;
