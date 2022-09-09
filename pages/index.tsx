import type { NextPage, GetStaticProps } from "next";
import Bio from "components/Bio";
import { IPost } from "types/post";
import Link from "next/link";
import { getAllPosts } from "utils/mdxUtils";
import tw from "twin.macro";

type Props = {
  posts: [IPost];
};

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div>
      <Bio />

      <Posts>
        {posts.map((post) => (
          <div key={post.slug}>
            <div className="mb-4"></div>
            <h2 className="text-2xl font-bold">
              <Link href={`/posts/${post.slug}`} passHref>
                <a className="post-title">{post.title}</a>
              </Link>
            </h2>
            <Date>{post.date}</Date>
            <p>{post.description}</p>
          </div>
        ))}
      </Posts>

      <Footer>
        © 2020, Built by Chris
        {` `}
      </Footer>
    </div>
  );
};

export default Home;

const Date = tw.small`mb-10`;
const Posts = tw.div`space-y-12`;
const Footer = tw.footer`pt-12`;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["title", "slug", "date", "description"]);

  return { props: { posts } };
};
