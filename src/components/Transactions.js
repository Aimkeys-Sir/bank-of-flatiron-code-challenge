import TransactionItem from "./TransactionItem"

export default function Transactions({transactions}){
    return(
        <table>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
            {/* transaction items */}
            {transactions.map(transaction=>{
                return <TransactionItem 
                date={transaction.date}
                description={transaction.description}
                amount={transaction.amount}
                key={transaction.id}
                category={transaction.category}
                />
            })}
        </table>
    )
}