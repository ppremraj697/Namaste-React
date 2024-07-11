import TeamMember from "./TeamMember";
import TeamMemberClass from "./TeamMemberClass";

const About = () => {
  return (
    <div>
      <h1>This is About Page</h1>
      <h2>This is Namaste React Web Series</h2>
      <h2>Our Team</h2>
      {/* <TeamMember
        name="Premraj Patil(functional component)"
        location="Pune"
        contact="premraj-patil-a7785b207"
      /> */}
      <TeamMemberClass
        name="Aniket Tarale(class component)"
        location="Pune"
        contact="aniket-tarale"
      />
    </div>
  );
};

export default About;
