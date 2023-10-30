import Part from "./Part";
const Content = ({ course }) => {
return(
    course.map(course => {
        return(
            <Part
                key = {course.id}
                part={course} 
            />
        )
    
    })
)
}
  export default Content;