import StatistcLine from "./StatisticLine";
const Statistics = ({good, neutral, bad})=>{
    if(good===0 && neutral===0 && bad===0){
        return(
        <div>
            <h1>Statistics</h1>
            <p>No feedback given</p>
        </div>
        )
    }
    return(
       
        <>
            <h1>Statistics</h1>
            <table>
            <StatistcLine name={"Good"} value={good}/>
            <StatistcLine name={"Neutral"} value={neutral}/>
            <StatistcLine name={"Bad"} value={bad}/>
            <StatistcLine name={"Average score"} value={(good-bad)/(good+bad+neutral)}/>
            <StatistcLine name={"Positive"} value={(good/(good+bad+neutral))*100}/>
            
            </table>
        </>
    )
}
export default Statistics;