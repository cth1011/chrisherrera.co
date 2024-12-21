import React from "react";
import tw from "twin.macro";

import Card from "components/Card";

const projects = [
  {
    title: "Haven: AI Chat",
    description: `Developed “Haven,” a web app using Next.js and Vercel, integrating a custom AI model hosted on GCP. 
    The app is designed as a modern chat companion.`,
    img: tw`bg-blog`, // Replace with your actual styling class or image
    from: "May 2023",
    to: "Present",
    href: "https://haven-chat.com",
    label: "Visit Website",
    tags: ["Next.js", "tRPC", "GCP", "React"],
  },
  {
    title: "Covid-19 Japan Tracker",
    description: `
    For the mapbox certification, I created a Japan COVID-19 Dashboard that allows users to view the active, testing, death, and recovery cases.
    `,
    img: tw`bg-covid`,
    href: "https://github.com/cth1011/covid-japan",
    from: "Sept 2020",
    to: "Oct 2020",
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
    from: "June 2020",
    to: "July 2020",
    label: "Visit Website",
    tags: ["Shopify", "Liquid"],
  },
  {
    title: "Inaccessible HIV Centers",
    description: `Developed a geospatial web application that can identify
    inaccesible HIV centers based on your area in the Philippines.`,
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
