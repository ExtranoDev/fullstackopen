import { useState } from "react";

const Button = (props) => (
  <button onClick={props.setValue}>{props.text}</button>
);

const DisplayHead = ({ text }) => <h2>{text}</h2>;

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
);

const Statistics = (props) => {
  if (props.stats.all == 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.stats.good} />
            <StatisticLine text="neutral" value={props.stats.neutral} />
            <StatisticLine text="bad" value={props.stats.bad} />
            <StatisticLine text="all" value={props.stats.all} />
            <StatisticLine text="average" value={props.other.average} />
            <StatisticLine text="positive" value={props.other.positive} />
          </tbody>
        </table>
      </div>
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
      average: ((updatedGood - stats.bad) / updatedAll).toFixed(1),
      positive: ((updatedGood / updatedAll) * 100).toFixed(1) + " %",
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
      average: ((stats.good - updatedBad) / updatedAll).toFixed(1),
      positive: ((stats.good / updatedAll) * 100).toFixed(1) + " %",
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
      <Statistics stats={stats} other={other} />
    </div>
  );
};

export default App;
