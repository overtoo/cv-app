import React, { Component } from "react";
import "./styles/Display.css";

const Display = (props) => {
  // const { tasks } = props;

  return (
    <div className="container">
      <div className="section section-one">
        <div className="name-role-wrapper">
          <div className="name">{`${props.data.personal.firstName} ${props.data.personal.lastName}`}</div>
          <div className="role">{props.data.personal.role}</div>
        </div>
        <div className="contact-info-wrapper">
          <div className="contact-info"> {props.data.personal.email}</div>
          <div className="contact-info"> {props.data.personal.number}</div>
          <div className="contact-info"> {props.data.personal.address}</div>
        </div>
      </div>
      <div className="section section-two">
        <div className="intro"> {props.data.personal.intro}</div>
      </div>
      <div className="section section-three">
        <div className="title">Work Experience</div>
        <p>{props.data2.workExp.company}</p>
        <p>{props.data2.workExp.role}</p>
        <p>
          {props.data2.workExp.start} - {props.data2.workExp.end}
        </p>
        <p>{props.data2.workExp.description}</p>
      </div>

      <div className="section section-four">
        <div className="title">Education</div>
      </div>
    </div>
  );
};

export default Display;
