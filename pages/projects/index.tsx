import React from "react";
import Card from "components/Card";

const projects = [
  {
    title: "Haven: AI Chat",
    description: `Developed "Haven," a web app using Next.js and Vercel, integrating a custom AI model hosted on GCP. 
    The app is designed as a modern chat companion.`,
    img: "bg-haven",
    from: "May 2023",
    to: "Present",
    label: "Visit Website",
    tags: ["Next.js", "tRPC", "GCP", "React"],
  },
  {
    title: "Covid-19 Japan Tracker",
    description: `
    For the mapbox certification, I created a Japan COVID-19 Dashboard that allows users to view the active, testing, death, and recovery cases.
    `,
    img: "bg-covid",
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
    img: "bg-hermosa",
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
    img: "bg-hiv",
    from: "Sept 2018",
    to: "Dec 2018",
    tags: ["Mapbox JS", "Javascript"],
    href: "https://stories.thinkingmachin.es/doh-hiv-centers-access/",
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <h2 className="text-center md:text-left">Projects</h2>
      <div className="flex flex-row flex-wrap items-center justify-center py-4">
        {projects.map((project, i) => (
          <div key={i} className="mb-2 md:w-1/2">
            <Card {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
