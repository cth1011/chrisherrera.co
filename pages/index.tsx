import orderBy from "lodash/orderBy";
import moment from "moment";
import Link from "next/link";
import { getAllPosts } from "utils/mdxUtils";

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
      <div className="space-y-2">
        <h1>Recent Activity</h1>
        {sortedPosts.map((post) => (
          <div key={post.slug}>
            <div className="mb-4"></div>
            <small>{moment(post.date).format("MMM DD, YYYY")}</small>
            <h2 className="mb-2 text-2xl font-bold">
              <Link href={`/posts/${post.slug}`} className="post-title">
                {post.title}
              </Link>
            </h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["title", "slug", "date", "description"]);

  return { props: { posts } };
};
