import Link from "next/link";

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1>here is the {posts.length} post</h1>
      {posts.map((post) => {
        return (
          <>
            <div className="w-[80%] mx-auto">
              <h1 className="text-4xl">
                {post.id} {post.title}
              </h1>
              <Link
                href={`posts/${post.id}`}
                className="text-yellow-500 text-3xl"
              >
                Details..
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default PostList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data.slice(0, 20),
    },
  };
}
