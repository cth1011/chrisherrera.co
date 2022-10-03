import orderBy from "lodash/orderBy";
import moment from "moment";
import Link from "next/link";
import { getAllPosts } from "utils/mdxUtils";
import tw from "twin.macro";

import Bio from "components/Bio";
import Divider from "components/Divider";

import type { NextPage, GetStaticProps } from "next";
import { IPost } from "types/post";

type Props = {
  posts: [IPost];
};

const Home: NextPage<Props> = ({ posts }: Props) => {
  const sortedPosts = orderBy(posts, "date", "desc");
  return (
    <div>
      <Bio />
      <Divider />
      <Posts>
        <h1> Recent Activity</h1>
        {sortedPosts.map((post) => (
          <div key={post.slug}>
            <div className="mb-4"></div>
            <small>{moment(post.date).format("MMM DD, YYYY")}</small>
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/posts/${post.slug}`} passHref>
                <a className="post-title">{post.title}</a>
              </Link>
            </h2>

            <p>{post.description}</p>
          </div>
        ))}
      </Posts>
    </div>
  );
};

export default Home;

const Posts = tw.div`space-y-2`;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["title", "slug", "date", "description"]);

  return { props: { posts } };
};
