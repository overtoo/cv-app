import React, { Component } from "react";
import uniqid from "uniqid";
import "./styles/WorkExp.css";

class WorkExp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        id: uniqid(),
        company: "Gabajo Enterprises",
        role: "Ass Photographer",
        start: "2018",
        end: "Present",
        description:
          "I was primarily responsible for shooting a lot of ASS to take photos of ASSES if ASS photographer hit of ASS. I am an ASS photographer looking to take photos of ASS.",
      },
    };
  }

  

  componentDidMount() {
    this.props.parentCallback(this.state.info);
  }

  handleChange = (e) => {
    this.setState((prevState) => {
      let info = Object.assign({}, prevState.info);
      info[e.target.id] = e.target.value;
      return { info };
    });

    this.props.parentCallback(this.state.info);
  };

  render() {
    const { info } = this.state;
    return (
      <div className="form-container">
        <form>
          <h3>Work Experience</h3>
          <input
            onChange={this.handleChange}
            value={info.company}
            type="text"
            id="company"
          />
          <input
            onChange={this.handleChange}
            value={info.role}
            type="text"
            id="role"
          />
          <input
            onChange={this.handleChange}
            value={info.start}
            type="text"
            id="start"
          />
          <input
            onChange={this.handleChange}
            value={info.end}
            type="text"
            id="end"
          />
          <textarea
            onChange={this.handleChange}
            value={info.description}
            type="text"
            id="description"
          />
        </form>
      </div>
    );
  }
}

export default WorkExp;
