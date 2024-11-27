const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = ({data}) => {
  return (
    <p>
      {data.name} {data.exercises}
    </p>
  );
};

const Content = ({ data }) => {
  return (
    <div>
      {data.map((x) => (
        <Part data={x} />
      ))}
    </div>
  );
};

const Total = ({ data }) => {
  const total = data.map((x) => x.exercises).reduce((exer, i) => exer + i, 0);
  return <strong>total of {total} exercises</strong>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content data={course.parts} />
      <Total data={course.parts} />
    </div>
  );
};

const App = () => {
  const course = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        { name: "Fundamentals of React", exercises: 10, id: 1 },
        { name: "Using props to pass data", exercises: 7, id: 2 },
        { name: "State of a component", exercises: 14, id: 3 },
        { name: "Redux", exercises: 11, id: 4 },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        { name: "Routing", exercises: 3, id: 1 },
        { name: "Middlewares", exercises: 7, id: 2 },
      ],
    },
  ];

  return (
    <div>
      <Course course={course[0]} />
      <Course course={course[1]} />
    </div>
  );
};

export default App;
