import { useState } from "react";

const Button = (props) => (
  <button onClick={props.setValue}>{props.text}</button>
);

const DisplayHead = ({ text }) => <h2>{text}</h2>;

const RateScore = (props) => (
  <div>
    {props.text} {props.value}
  </div>
);

const FeedBackStats = (props) => {
  if (props.stats.all == 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <>
        <RateScore text="good" value={props.stats.good} />
        <RateScore text="neutral" value={props.stats.neutral} />
        <RateScore text="bad" value={props.stats.bad} />
        <RateScore text="all" value={props.stats.all} />
        <RateScore text="average" value={props.other.average} />
        <RateScore text="positive" value={props.other.positive} />
      </>
    );
  }
};

const App = () => {
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
  });

  const [other, setOther] = useState({
    average: 0,
    positive: 0,
  });

  const handleGoodRate = () => {
    const updatedGood = stats.good + 1;
    const updatedAll = stats.all + 1;
    setOther({
      average: (updatedGood - stats.bad) / updatedAll,
      positive: (updatedGood / updatedAll) * 100,
    });
    setStats({ ...stats, good: updatedGood, all: updatedAll });
  };

  const handleNeutralRate = () => {
    setStats({ ...stats, neutral: stats.neutral + 1, all: stats.all + 1 });
  };

  const handleBadRate = () => {
    const updatedBad = stats.bad + 1;
    const updatedAll = stats.all + 1;
    setOther({
      average: (stats.good - updatedBad) / updatedAll,
      positive: (stats.good / updatedAll) * 100,
    });
    setStats({ ...stats, bad: updatedBad, all: updatedAll });
  };

  return (
    <div>
      <DisplayHead text="give feedback" />

      <Button setValue={handleGoodRate} text="good" />
      <Button setValue={handleNeutralRate} text="neutral" />
      <Button setValue={handleBadRate} text="bad" />

      <DisplayHead text="statistics" />
      <FeedBackStats stats={stats} other={other} />
    </div>
  );
};

export default App;
