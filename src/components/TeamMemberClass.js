import React from "react";

class TeamMemberClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { name, location, contact } = this.props;
    return (
      <div className="team-member-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>LinkedIn: @{contact}</h4>
      </div>
    );
  } 
}

export default TeamMemberClass;
