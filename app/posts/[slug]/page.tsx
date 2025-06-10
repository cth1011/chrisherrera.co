import Image from "next/image";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import type { Metadata, ResolvingMetadata } from "next";
import { getPost, getAllPosts } from "utils/mdxUtils";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
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
  const { slug } = await params;
  const { data } = getPost(slug);

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
  const { slug } = await params;
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
