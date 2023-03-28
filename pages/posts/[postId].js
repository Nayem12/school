import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export function getAllPostIds({ context }) {
  const { params } = context;
  const fileNames = params;
  // console.log(post);

  return fileNames.map((fileName) => {
    return {
      params: {
        postId: fileName.replace(`${params.postId}`),
      },
    };
  });
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },
    //   {
    //     params: { postId: "2" },
    //   },
    //   {
    //     params: { postId: "3" },
    //   },
    //   // {
    //   //   params: { postId: "4" },
    //   // },
    // ],
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}
