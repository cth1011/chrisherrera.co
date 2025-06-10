// app/posts/[slug]/page.tsx
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import type { Metadata } from "next";

import { getPost, getAllPosts } from "utils/mdxUtils";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await getPost(params.slug);
  return {
    title: `${data.title} | Chris Herrera`,
    description: data.description,
  };
}

// Custom components passed to MDX will still work
const ResponsiveImage = (props: any) => (
  <Image
    alt={props.alt}
    sizes="100vw"
    style={{
      width: "100%",
      height: "auto",
    }}
    {...props}
  />
);

const components = {
  img: ResponsiveImage,
  // You can add other custom components here
};

// The page component with the fix
export default async function PostPage({ params }: Props) {
  const { slug } = params;
  const { content, data } = getPost(slug);

  return (
    <div>
      <article className="dark:prose-dark prose prose-yellow max-w-full">
        <h1>{data.title}</h1>
        <p className="text-sm text-gray-500">{data.date}</p>
        <MDXRemote source={content} components={components} />
      </article>
    </div>
  );
}
