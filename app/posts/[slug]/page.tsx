// app/posts/[slug]/page.tsx

import Image from "next/image";
import { MDXRemote } from "next-mdx-remote-client/rsc";
// 1. Import Metadata and ResolvingMetadata
import type { Metadata, ResolvingMetadata } from "next";
import { getPost, getAllPosts } from "utils/mdxUtils";

// 2. Define the Props type as before. This is correct for the page itself.
type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // Get the post data
  const { data } = getPost(params.slug);
  return {
    title: `${data.title} | Chris Herrera`,
    description: data.description,
  };
}

const ResponsiveImage = (props: any) => (
  <Image
    alt={props.alt || ""}
    sizes="100vw"
    style={{ width: "100%", height: "auto" }}
    {...props}
  />
);

const components = {
  img: ResponsiveImage,
};

export default async function PostPage({ params }: Props) {
  const { slug } = params;
  const { content, data } = getPost(slug);

  return (
    <div>
      <article className="dark:prose-dark prose prose-yellow max-w-full">
        <h1>{data.title}</h1>
        <MDXRemote source={content} components={components} />
      </article>
    </div>
  );
}
