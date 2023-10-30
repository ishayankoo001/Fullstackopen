import Button from "./Button";
const Feedback = ({good, setGood, bad, setBad, neutral, setNeutral}) => {
    return (
        <div>
            <h1>Give feedback</h1>
            <Button functionToRun={()=>setGood(good+1)} text={"good"}/>
            <Button functionToRun={()=>setNeutral(neutral+1)} text={"neutral"}/>
            <Button functionToRun={()=>setBad(bad+1)} text={"bad"}/>
        </div>
    )
}
export default Feedback;