import React from "react";
import styles from "./Bio.module.css";
import bioPic from "./biopic.png";

function Bio(props) {
  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <img src={bioPic} alt="yungblud logo" />
      <p>
        GITHUB <a href="https://github.com/yungblud">yungblud's github</a>.
        <br />
        React & Node.JS Developer
      </p>
    </div>
  );
}

export default Bio;
