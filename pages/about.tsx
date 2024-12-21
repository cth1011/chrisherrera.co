import React from "react";
import tw from "twin.macro";

const About: React.FC = () => {
  return (
    <>
      <p>
        Hi, I&apos;m Christopher Herrera! I&apos;m a senior software engineer 
        passionate about designing and delivering innovative digital solutions 
        that make an impact. Thanks for visiting my blog!
      </p>
      <br />
      <h3>About Me</h3>
      <p>Here&apos;s a bit about my journey and what you&apos;ll find here...</p>
      <br />
      <TraitContainer>
        <Row>
          <Item>
            <b>Professional Experience</b>
            <p>
              I&apos;m currently a Senior Software Engineer at PeopleConnect, 
              where I design and optimize modern web applications to enhance 
              user experiences. With over six years of experience, I&apos;ve 
              built AI-integrated applications, geospatial tools, and secure 
              authentication systems.
            </p>
          </Item>
          <Item>
            <b>Haven Project</b>
            <p>
              One of my key projects is <b>Haven</b>, an AI-powered chat app I 
              developed using Next.js and Vercel. It&apos;s used by over 200 
              subscribers and showcases my ability to deliver innovative 
              solutions ahead of schedule in competitive markets.
            </p>
          </Item>
        </Row>
        <Row>
          <Item>
            <b>What I Share</b>
            <p>
              On this blog, I post about my technical projects, learnings in web 
              development and AI integration, and reflections on navigating a 
              fast-paced tech career. It&apos;s a space for growth and sharing ideas.
            </p>
          </Item>
          <Item>
            <b>Life Beyond Code</b>
            <p>
              Outside work, I&apos;m a lifelong learner who loves exploring new 
              ideas, cooking Japanese cuisine, and staying active through 
              weightlifting. I find joy in continuous improvement and personal growth.
            </p>
          </Item>
        </Row>
      </TraitContainer>
    </>
  );
};

export default About;

const TraitContainer = tw.div`flex flex-col`;
const Row = tw.div`flex flex-row gap-5 py-3 justify-between`;
const Item = tw.div`w-1/2`;