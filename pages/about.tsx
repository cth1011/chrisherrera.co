import React from "react";
import tw from "twin.macro";

const About: React.FC = () => {
  return (
    <>
      <p>
        Hi, it&apos;s Chris. I am a self-taught programmer, data analyst, and
        data visualization developer from the Philippines, working remotely most
        of the time. First of all, thank you for taking the time to read my
        blog.
      </p>
      <br />
      <h3>About Me</h3>
      <p> Here are a few things about me...</p>
      <br />
      <TraitContainer>
        <Row>
          <Item>
            <b>Weight Lifter</b>
            <p>
              Ever since high school, I&apos;ve always been into exercising. It
              only started in college when I wanted to start bulking up.
              I&apos;m a true believer of the StrongLifts routine, and believe
              you always need to lift heavier on your next session.
            </p>
          </Item>
          <Item>
            <b>Reader</b>
            <p>
              I&apos;m a big fan of reading non-fiction. I love new ideas that
              can change my perspective. I&apos;ll soon create my own personal
              reading list from a wide range of categories including business,
              psychology, and self-help.
            </p>
          </Item>
        </Row>
        <Row>
          <Item>
            <b>Learner</b>
            <p>
              I love learning new things. I&apos;m a firm believer of concept of{" "}
              <a href="https://jamesclear.com/continuous-improvement">
                1% improvement
              </a>{" "}
              each day. I try to seek out a sense of progression in any area of
              my life whether it&apos;s weight lifting, cooking, or programming.
            </p>
          </Item>
          <Item>
            <b>Cooking</b>
            <p>
              There&apos;s something about cooking that feels so meditative. I
              wouldn&apos;t say I&apos;m a great cook, but I fell in love with
              the process. Japanese cuisine is my speciality and favorite, but I
              try to learn new recipes from time-to-time
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
const Item = tw.div` w-1/2`;
