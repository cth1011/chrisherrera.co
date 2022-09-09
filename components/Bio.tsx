import React from "react";
import Image from "next/image";
import tw from "twin.macro";
import profilePic from "styles/assets/profile-pic.jpg";

const Bio: React.FC = () => (
  <Container>
    <Avatar src={profilePic} alt="profile picture" height={70} width={70} />
    <Description>
      Hi! I'm <strong>Christopher Herrera</strong>, and I'm happy to welcome you
      to my blog. I'm currently pursuing a Master's degree in Information
      Management at the University of Washington. I formerly worked as a
      Software Engineer for Thinking Machines Data Science Inc, a data science
      startup in the Philippines. I post stuff about my learnings, side
      projects, and my life in general.
    </Description>
  </Container>
);
export default Bio;

const Container = tw.div`flex flex-col mb-10 items-center`;
const Avatar = tw(Image)`rounded-[50%] overflow-hidden align-middle`;
const Description = tw.p`pt-5`;
