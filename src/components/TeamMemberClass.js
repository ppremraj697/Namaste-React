import React from "react";

class TeamMemberClass extends React.Component {
  constructor(props) {
    super(props);
    //Multiple state variables can be created in the same object
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name, "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name, "Child Component Did Mount");

    //API Call
    const data = await fetch("https://api.github.com/users/ppremraj697");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { contact } = this.props;
    console.log(this.props.name, "Child Render");
    return (
      <div className="team-member-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>LinkedIn: @{contact}</h4>
      </div>
    );
  }
}

export default TeamMemberClass;

//Never update state varibles directly
//React re-renders the component whenever the state varible is updated
//If we want to update multiple state variables upon the click of the button, it can be done in the below statement only

/*
------MOUNTING CYCLE---------
Constructor(dummy)
Render(dummy)
    <HTML Dummy>
Component Did Mount
    API Call
    this.setState

------UPDATE CYCLE-----
Render(API data)
    <HTML API data>
Component did Update

----UNMOUNTING CYCLE-----
Component did unmount
*/
