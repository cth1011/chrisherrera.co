import React from "react";
import Image from "next/image";
import tw from "twin.macro";
import profilePic from "styles/assets/profile-pic.jpg";

const Bio: React.FC = () => (
  <Container>
    <Avatar src={profilePic} alt="profile picture" height={70} width={70} />
    <Description>
        Hi, I&apos;m Christopher Herrera! I&apos;m a senior software engineer 
        passionate about designing and delivering innovative digital solutions 
        that make an impact. Thanks for visiting my blog!
    </Description>
  </Container>
);
export default Bio;

const Container = tw.div`flex flex-col mb-10 items-center`;
const Avatar = tw(Image)`rounded-[50%] overflow-hidden align-middle`;
const Description = tw.p`pt-5`;
