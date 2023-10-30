import Part from './Part';
const Content = (props) => {
    const part1 = props.parts[0].name
    const exercises1 = props.parts[0].exercises
    const part2 = props.parts[1].name
    const exercises2 = props.parts[1].exercises
    const part3 = props.parts[2].name
    const exercises3 = props.parts[2].exercises
    return (
        <>
        <p>
            <Part part={part1} exercise={exercises1}/>
      </p>
      <p>
        <Part part={part2} exercise={exercises2}/>
      </p>
      <p>
        <Part part={part3} exercise={exercises3}/>
      </p>
      </>
    );
}
export default Content;