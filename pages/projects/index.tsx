import React from "react";
import tw from "twin.macro";

import Card from "components/Card";

import Japan from "public/assets/mapbox-exam/covid-japan.jpg";
import HIV from "styles/assets/projects/HIV.png";
import Hermosa from "styles/assets/projects/hermosa.png";

const projects = [
  {
    title: "Personal Blog",
    description: `Created a personal blog using NextJS, 
    TailwindCSS, and TypeScript. It started out with GatsbyJS, but I
    I decided to migrate the entire platform to NextJS.`,
    src: HIV,
    from: "Feb 2020",
    to: "Present",
    href: "projects/hiv",
    tags: ["ReactJS", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Covid-19 Japan Tracker",
    description: `
    I helped a few friends setup their 
    shopify store in the Philippines. They
    sell over 200 products with over 20 brands.
    `,
    src: Japan,
    href: "/posts/mapbox-exam",
    from: "Jan 2020",
    to: "Mar 2020",
    tags: ["Shopify", "Liquid"],
  },
  {
    title: "Hermosa Beauty Store",
    description: `
    I helped a few friends setup their 
    shopify store in the Philippines. They
    sell over 200 products with over 20 brands.
    `,
    src: Hermosa,
    href: "https://hermosabeautystore.com/",
    from: "Jan 2020",
    to: "Mar 2020",
    label: "Visit Website",
    tags: ["Shopify", "Liquid"],
  },
  {
    title: "Inaccessible HIV Centers in the Philippines",
    description: `Developed a geospatial web application that can identify
    inaccesible HIV centers based on the your area in the Philippines.`,
    src: HIV,
    from: "Sept 2018",
    to: "Dec 2018",
    tags: ["Mapbox JS", "Javascript"],
    href: "https://stories.thinkingmachin.es/doh-hiv-centers-access/",
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <Title> Projects</Title>
      <Container>
        {projects.map((project, i) => (
          <Item key={i}>
            <Card {...project} />
          </Item>
        ))}
      </Container>
    </div>
  );
};

export default Projects;

const Title = tw.h2`
text-center md:text-left
`;

const Container = tw.div`
    flex flex-row flex-wrap items-center justify-center
    py-4
`;

const Item = tw.div`
    md:w-1/2 mb-2
`;
