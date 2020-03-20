import React from 'react';
import "./Button.css"
const Button = (props) => (
  <button className={props.type}>
    {props.label}
  </button>
)
export default Button;