export default function TransactionItem({index,date,description,category,amount}){
    return (
        <tr className={index%2===0?"even":""}>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
        </tr>
    )
}