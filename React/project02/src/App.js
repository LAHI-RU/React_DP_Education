import "./App.css";

function App() {
  let count = 0;

  return (
    <>
      <span className="title"> My Counter </span>
      <p className="subTitle"> The count is {count} </p>
      <button className="button">-</button>
      <button className="button">+</button>
    </>
  );
}

export default App;
