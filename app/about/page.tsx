"use client";

import React from "react";

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
      <p>
        Here&apos;s a bit about my journey and what you&apos;ll find here...
      </p>
      <br />
      <div className="flex flex-col">
        <div className="flex flex-row justify-between gap-5 py-3">
          <div className="w-1/2">
            <b>Professional Experience</b>
            <p>
              I&apos;m currently a Senior Software Engineer at PeopleConnect,
              where I design and optimize modern web applications to enhance
              user experiences. With over six years of experience, I&apos;ve
              built AI-integrated applications, geospatial tools, and secure
              authentication systems.
            </p>
          </div>
          <div className="w-1/2">
            <b>Haven Project</b>
            <p>
              One of my key projects is <b>Haven</b>, an AI-powered chat app I
              developed using Next.js and Vercel. It&apos;s used by over 200
              subscribers and showcases my ability to deliver innovative
              solutions ahead of schedule in competitive markets.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-5 py-3">
          <div className="w-1/2">
            <b>What I Share</b>
            <p>
              On this blog, I post about my technical projects, learnings in web
              development and AI integration, and reflections on navigating a
              fast-paced tech career. It&apos;s a space for growth and sharing
              ideas.
            </p>
          </div>
          <div className="w-1/2">
            <b>Life Beyond Code</b>
            <p>
              Outside work, I&apos;m a lifelong learner who loves exploring new
              ideas, cooking Japanese cuisine, and staying active through
              weightlifting. I find joy in continuous improvement and personal
              growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
