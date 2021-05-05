import react from "react";
import { useState } from "react";
const Home = () => {
  //hooks start with the word state
  // use state allows us to make a variable reactive
  const [name, setName] = useState("mario"); // this variable is  reactive
  const [age, setAge] = useState(33);
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },

    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },

    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  const handleClick = (e) => {
    //when we do this we automatically get accss to an event object
    // handles the click on the buttongv
    setName("james"); // reactiverly update the name
    setAge(age + 1);
  };
  const handleClickAgain = (name) => {
    //here we do not get access to the event obj bc the anon func is what gets it
    //however we can pass it into this function as a parameter
    console.log("hello" + name);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
      {/* this name wont change by default we need to do it using states */}
      <p>
        {name} is {age} years old
      </p>
      {/* when we do on click we can give it an callback to a function */}
      <button onClick={handleClick}>Click me</button>
      {/* to pass arguments in  */}
      <button
        // here we make an anon function inside the on click so that it doesnt instantly fire
        onClick={() => {
          handleClickAgain("john");
        }}
      >
        Click me
      </button>
      {/* cycle through our lists and make template bit for our blog */}
      {blogs.map((blog) => (
        //every blog item needs a key or id so that react can track it
        <div className="blog-preview" key={blog.id}>
          <h2> {blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
