export default function TransactionItem({category,date,description,amount}){
    return (
        <tr>
            <td>{date}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td>{amount}</td>
        </tr>
    )
}