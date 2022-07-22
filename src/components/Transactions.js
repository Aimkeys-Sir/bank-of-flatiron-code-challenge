import TransactionItem from "./TransactionItem"

export default function Transactions({ transactions }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {/* transaction items */}
                {transactions.map(transaction => {
                    return <TransactionItem
                        date={transaction.date}
                        description={transaction.description}
                        amount={transaction.amount}
                        key={transaction.id}
                        category={transaction.category}
                    />
                })}
            </tbody>

        </table>
    )
}