import React from 'react';
import { Card } from 'react-bootstrap';


function TransactionCard({ transactions}){
    return (
        <Card bg="light" text="dark" className="my-3" border="info" rounded>
            <Card.Header> Transaction History</Card.Header>
            <Card.Body>
                {transactions.map((transaction => (<Card.Text key={transaction.id}>
                    {transaction.date}: {transaction.amount}
                </Card.Text>)))}
            </Card.Body>
        </Card>
    )
}

export default TransactionCard;