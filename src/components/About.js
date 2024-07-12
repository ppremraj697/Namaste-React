import TeamMember from "./TeamMember";
import TeamMemberClass from "./TeamMemberClass";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <h2>Our Team</h2>
//       {/* <TeamMember
//         name="Premraj Patil(functional component)"
//         location="Pune"
//         contact="premraj-patil-a7785b207"
//       /> */}
//       <TeamMemberClass
//         name="Aniket Tarale(class component)"
//         location="Pune"
//         contact="aniket-tarale"
//       />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>This is About Page</h1>
        <h2>This is Namaste React Web Series</h2>
        <h2>Our Team</h2>
        <h3>Member 1</h3>
        <TeamMemberClass
          name="Premraj"
          location="Pune"
          contact="premraj-patil-a7785b207"
        />
        <h3>Member 2</h3>
        <TeamMemberClass
          name="Aniket"
          location="Pune"
          contact="aniket-tarale"
        />
      </div>
    );
  }
}

export default About;

/*
Mounting happens in 2 phases: Render Phase(Constructor, Render) and Commit Phase(Actual DOM updation and ComponentDidMount)
To optimize performance, React patches the Render Phase of childrens and Commit Phase of Childrens together

Parent Constructor
Parent Render

First Child Constructor
First Child Render

Second Child Constructor
Second Child Render

<DOM updated - In single batch>
First Child ComponentDidMount
Second Child ComponentDidMount

Parent ComponentDidMount
*/
