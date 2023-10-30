const Total = ({ course }) =>{
    const total = course.reduce((sum, part) => sum + part.exercises, 0)
    return(
        <p><b>Number of exercises {total}</b></p>
    )
}
export default Total;