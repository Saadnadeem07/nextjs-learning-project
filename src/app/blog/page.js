export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Click to go to article 1",
    },
    {
      id: 2,
      title: "Click to go to article 2",
    },
  ];
  return (
    <>
      <h1>Exploring the easy routing of nextjs.</h1>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <a href={`blog/${post.id}`}>{post.title}</a>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}
