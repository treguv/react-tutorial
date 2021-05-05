import react from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  //hooks start with the word state
  // use state allows us to make a variable reactive
  const [name, setName] = useState("mario"); // this variable is  reactive
  const [age, setAge] = useState(33);
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
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
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id != id);
    setBlogs(newBlogs);
  };
  //use effect runs on ever page change
  useEffect(() => {
    console.log("use effect Ran");
    //can also access states in here
    // do not change states in here as that causes an infinite loop
    //use state causes a rerender which fires use effect
    // the empty array makes it only run on intial render
    // we can also add state values that should trigger the effect

    //using this use effect hook to load data into the site on load
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resoure"); // incase something wrong with data
        }
        return res.json(); //parse json into js obj
      })
      .then((data) => {
        //here we actually have the data we need
        console.log(data);
        setBlogs(data);
        setIsPending(false); // only show the loading message while getting data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // watch for changes in the name function
  return (
    <div className="home">
      {isPending && <div> Loading... </div>}
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
      {blogs && ( // this is a logical check to only output this when there is data to show in
        //remember the check happens LTR so if the first second is not run
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
