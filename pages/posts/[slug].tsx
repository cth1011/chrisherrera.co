import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { useMdxComponentsContext } from "context/mdxContext";
import Thumbnail from "components/Thumbnail";
import { IPost } from "types/post";
import { getPost, getAllPosts } from "utils/mdxUtils";
import { ParsedUrlQuery } from "querystring";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
};

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

// components to render
const components = {
  img: ResponsiveImage,
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  // // get setters
  // const { setPrerequisites, setStacks } = useMdxComponentsContext();

  // useEffect(() => {
  //   // set prerequisites
  //   setPrerequisites(frontMatter.prerequisites);
  //   // set stacks
  //   setStacks(frontMatter.stacks);
  // }, [
  //   setPrerequisites,
  //   setStacks,
  //   frontMatter.prerequisites,
  //   frontMatter.stacks,
  // ]);

  return (
    <div>
      <article className="prose max-w-full prose-yellow dark:prose-dark">
        <h1>{frontMatter.title}</h1>
        <MDXRemote components={components} {...source} />
      </article>
    </div>
  );
};

export default PostPage;

interface Iparams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams;
  const { content, data } = getPost(slug);
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts(["slug"]);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
