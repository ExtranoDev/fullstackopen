import { useState } from "react";

const Button = ({ func, text }) => <button onClick={func}>{text}</button>;
const Title = ({ text }) => <h2>{text}</h2>;
const Display = ({ text, vote }) => (
  <div>
    <p>{text}</p>
    <p>has {vote} votes</p>
  </div>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [points, setPoint] = useState(new Array(8).fill(0));

  const generateAnecdote = () => {
    setSelected(Math.round(Math.random() * 7));
  };

  const countVote = (key) => () => {
    let newArray = [...points];
    newArray[key] += 1;
    setPoint(newArray);
  };

  const maxDetector = () => points.indexOf(Math.max(...points));

  console.log(points);

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Display text={anecdotes[selected]} vote={points[selected]} />
      <Button func={countVote(selected)} text="vote" />
      <Button func={generateAnecdote} text="next anecdote" />
      <Title text="Anecdote with most votes" />
      <Display text={anecdotes[maxDetector()]} vote={points[maxDetector()]} />
    </div>
  );
};

export default App;
