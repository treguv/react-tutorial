import react from "react";
const Home = () => {
  const handleClick = (e) => {
    //when we do this we automatically get accss to an event object
    // handles the click on the buttongv
    console.log("hello ninjas");
  };
  const handleClickAgain = (name) => {
    //here we do not get access to the event obj bc the anon func is what gets it
    //however we can pass it into this function as a parameter
    console.log("hello" + name);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
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
    </div>
  );
};

export default Home;
