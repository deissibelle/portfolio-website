import React, { Component } from "react";
import "./hero.css";
import hero from "../../assets/hero.jpeg";
export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <img src={hero} alt="" className="hero-img"/>
        <h1><span>I'm Sibelle Djumeghe,</span> frontend developper based in Cameroon.</h1>
        <p>
          I am a frontend developper from Yaoundé, Cameroon with 2years of
          experience in frontend developpement
        </p>
        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
    );
  }
}
