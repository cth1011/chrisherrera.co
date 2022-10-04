import React from "react";
import tw from "twin.macro";

import Card from "components/Card";

const projects = [
  {
    title: "Personal Blog",
    description: `Created a personal blog using NextJS, 
    TailwindCSS, and TypeScript. It started out with GatsbyJS, but I
    I decided to migrate the entire platform to NextJS.`,
    img: tw`bg-blog`,
    from: "Feb 2020",
    to: "Present",
    href: "projects/hiv",
    label: "Visit Github Repo",
    tags: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Covid-19 Japan Tracker",
    description: `
    For the mapbox certification, I created a Japan COVID-19 Dashboard that allows users to view the active, testing, death, and recovery cases.
    `,
    img: tw`bg-covid`,
    href: "https://github.com/cth1011/covid-japan",
    from: "Jan 2020",
    to: "Mar 2020",
    label: "Visit Github Repo",
    tags: ["React", "Mapbox JS", "d3.js"],
  },
  {
    title: "Hermosa Beauty Store",
    description: `
    I helped a few friends setup their 
    shopify store in the Philippines. They
    sell over 200 products with over 20 brands.
    `,
    img: tw`bg-hermosa`,
    href: "https://hermosabeautystore.com/",
    from: "Jan 2020",
    to: "Mar 2020",
    label: "Visit Website",
    tags: ["Shopify", "Liquid"],
  },
  {
    title: "Inaccessible HIV Centers",
    description: `Developed a geospatial web application that can identify
    inaccesible HIV centers based on the your area in the Philippines.`,
    img: tw`bg-hiv`,
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
