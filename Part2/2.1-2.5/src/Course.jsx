import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const Course = ({course}) => {
    return (
        <div>
        {course.map(course => 
            
            <div key = {course.id}>
            <Header course = {course.name}/>
            <Content course = {course.parts}/>
            <Total course = {course.parts}/>
        </div>
        )}
        </div>
    )
}
export default Course;