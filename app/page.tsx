// app/page.tsx
import orderBy from "lodash/orderBy";
import moment from "moment";
import Link from "next/link";
import { getAllPosts } from "utils/mdxUtils";

import Bio from "components/Bio";
import Divider from "components/Divider";

import { IPost } from "types/post";

export default async function Home() {
  const posts = getAllPosts([
    "title",
    "slug",
    "date",
    "description",
    "thumbnail",
    "tags",
  ]);
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
}
