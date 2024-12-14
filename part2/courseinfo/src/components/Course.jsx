const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = ({ data }) => {
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
        <Part key={x.id} data={x} />
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

export default Course;
