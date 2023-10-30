const Button = ({functionToRun, text})=>{
    return(
        <>
            <button onClick={functionToRun}>{text}</button>
        </>
    )
}
export default Button;