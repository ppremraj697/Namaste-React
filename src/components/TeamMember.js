const TeamMember = (props) => {
  const { name, location, contact } = props;
  return (
    <div className="team-member-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>LinkedIn: @{contact}</h4>
    </div>
  );
};

export default TeamMember;
