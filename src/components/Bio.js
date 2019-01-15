import React from "react";
import styles from "./Bio.module.css";
import bioPic from "./develician_logo.png";

function Bio(props) {
  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <img src={bioPic} alt="develician logo" />
      <p>
        GITHUB <a href="https://github.com/develician">develician's github</a>.
        <br />
        React & Node.JS Developer
      </p>
    </div>
  );
}

export default Bio;
