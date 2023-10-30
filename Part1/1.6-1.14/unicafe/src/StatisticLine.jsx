const StatistcLine = ({name, value})=> {
  return (
        <tr>
            <td>{name}</td>
            <td> {"-->"} </td>
            <td>{value}</td>
        </tr>
  )
}
export default StatistcLine;