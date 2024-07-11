import React from "react";

class TeamMemberClass extends React.Component {
  constructor(props) {
    super(props);
    //Multiple state variables can be created in the same object
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location, contact } = this.props;
    return (
      <div className="team-member-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            //Never update state varibles directly
            //React re-renders the component whenever the state varible is updated
            //If we want to update multiple state variables upon the click of the button, it can be done in the below statement only
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>LinkedIn: @{contact}</h4>
      </div>
    );
  }
}

export default TeamMemberClass;
