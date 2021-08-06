import React, { Component } from "react";
import uniqid from "uniqid";
import "./styles/Styles.css";

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        firstName: "Grab",
        id: uniqid(),
        lastName: "Grsuff",
        role: "Ass Photographer",
        number: "048 89123 1243",
        address: "3/12 Clusteu Blvd",
        email: "graiul.Grsuff@grmail.com",
        intro:
          "I am an ASS photographer looking to take photos of ASSES if yall need an ASS photographer hit me up. I am an ASS photographer looking to take photos of ASS. I am an ASS photographer looking to take photos of ASS.",
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
          <h3>Personal Details</h3>
          <input
            onChange={this.handleChange}
            value={info.firstName}
            type="text"
            id="firstName"
          />
          <input
            onChange={this.handleChange}
            value={info.lastName}
            type="text"
            id="lastName"
          />
          <input
            onChange={this.handleChange}
            value={info.role}
            type="text"
            id="role"
          />
          <input
            onChange={this.handleChange}
            value={info.number}
            type="text"
            id="number"
          />
          <input
            onChange={this.handleChange}
            value={info.email}
            type="text"
            id="email"
          />
          <input
            onChange={this.handleChange}
            value={info.address}
            type="text"
            id="address"
          />
          <textarea
            onChange={this.handleChange}
            rows="5"
            value={info.intro}
            type="text"
            id="intro"
          />
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
