const BlogList = ({ blogs, title, handleDelete }) => {
  // this function is passed in as a prop
  //automatically destructure the props from the argument
  //this props is what we pass into this from the parent
  //   const blogs = props.blogs; // pull blogs from propsrt
  //   const title = props.title
  // we can use the props function to edit the data to delete the blog
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        //every blog item needs a key or id so that react can track it
        <div className="blog-preview" key={blog.id}>
          <h2> {blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>delete block</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
