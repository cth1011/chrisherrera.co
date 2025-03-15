import React from "react";
import Image from "next/image";
import profilePic from "styles/assets/profile-pic.jpg";

const Bio: React.FC = () => (
  <div className="flex flex-col mb-10 items-center">
    <Image 
      src={profilePic} 
      alt="profile picture" 
      height={70} 
      width={70} 
      className="rounded-full overflow-hidden align-middle"
    />
    <p className="pt-5">
      Hi, I&apos;m Christopher Herrera! I&apos;m a senior software engineer 
      passionate about designing and delivering innovative digital solutions 
      that make an impact. Thanks for visiting my blog!
    </p>
  </div>
);

export default Bio;