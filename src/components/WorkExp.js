import React, { Component } from "react";
import uniqid from "uniqid";
import "./styles/Styles.css";

class WorkExp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      works: [
        {
          id: uniqid(),
          company: "Gabajo Enterprises",
          role: " Photographer",
          start: "2018",
          end: "Present",
          description: "I was primarily responsible for ....",
        },
        {
          id: uniqid(),
          company: "Clustards Incorporated",
          role: " Photographer",
          start: "2018",
          end: "Present",
          description: "I was primarily responsible for ....",
        },
      ],
    };
  }

  componentDidMount() {
    this.props.parentCallback(this.state.works);
  }

  handleChange = (e, id) => {
    this.setState((prevState) => {
      let infoOld = prevState.works.find(function (obj) {
        console.log(obj.id);
        return obj.id == id;
      });
      let info = Object.assign({}, infoOld);
      info[e.target.id] = e.target.value;
      let works = this.state.works;
      works[this.state.works.indexOf(infoOld)] = info;
      return { works };
    });

    this.props.parentCallback(this.state.works);
  };

  delete = (id) => {
    let myArray = this.state.works.filter(function (obj) {
      return obj.id !== id;
    });

    this.setState({
      works: myArray,
    });
  };

  add = () => {
    let addThis = {
      id: uniqid(),
      company: "",
      role: "",
      description: " ",
      start: "",
      end: "",
    };
    // console.log(newWorks);

    // this.setState({
    //   works: newWorks,
    // });

    this.setState({ works: [...this.state.works, addThis] });

    console.log(this.state.works);
  };

  render() {
    const { works } = this.state;
    return (
      <div className="form-container">
        <h3>Work Experience</h3>
        {works.map((info) => {
          return (
            <form key={info.id}>
              <input
                onChange={(e) => this.handleChange(e, info.id)}
                value={info.company}
                type="text"
                id="company"
              />
              <input
                onChange={(e) => this.handleChange(e, info.id)}
                value={info.role}
                type="text"
                id="role"
              />
              <input
                onChange={(e) => this.handleChange(e, info.id)}
                value={info.start}
                type="text"
                id="start"
              />
              <input
                onChange={(e) => this.handleChange(e, info.id)}
                value={info.end}
                type="text"
                id="end"
              />
              <textarea
                onChange={(e) => this.handleChange(e, info.id)}
                value={info.description}
                type="text"
                id="description"
              />
              <br></br>
              <button
                onClick={() => {
                  this.delete(info.id);
                }}
              >
                delete
              </button>
            </form>
          );
        })}
        <button
          onClick={() => {
            this.add();
          }}
        >
          add
        </button>
      </div>
    );
  }
}

export default WorkExp;
