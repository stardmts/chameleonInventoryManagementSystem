interface transaction {
    transactionId: string;
    transactionBody: string;
    transactionDate: string;
    user: string;
}

export default function TransactionCard({transactionId, transactionBody, transactionDate, user} : transaction) {

    return (
        <main className = "flex flex-row border-b-2 border-white rounded-[15] bg-[#484848] w-full justify-between px-2 py-2 text-wrap shadow-2xl">
            <p className = "text-white text-2xl">
                Transaction {transactionId}: {user} {transactionBody} 
            </p>
            <p className = "text-white text-2xl">
                {transactionDate}
            </p>
        </main>
    );
}