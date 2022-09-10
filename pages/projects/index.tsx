import React from "react";
import tw from "twin.macro";

import Card from "components/Card";

import HIV from "styles/assets/hiv/HIV.png";

const Projects: React.FC = () => {
  return (
    <div>
      <h3> Projects</h3>
      <Container>
        <Item>
          <Card
            title="HIV Blog Post"
            description="Worked on HIV blogpost"
            src={HIV}
            from="Sept 2018"
            to="Dec 2018"
            href="projects/hiv"
          />
        </Item>
        <Item>
          <Card
            title="HIV Blog Post"
            description="Worked on HIV blogpost"
            src={HIV}
            from="Sept 2018"
            to="Dec 2018"
          />
        </Item>
      </Container>
    </div>
  );
};

export default Projects;

const Container = tw.div`
    flex flex-row flex-wrap items-center justify-center
    py-4
`;

const Item = tw.div`
    sm:w-1/2
`;
